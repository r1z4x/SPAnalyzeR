#!/usr/bin/env python3
"""
main.py - SPA Analyzer Entry Point

Usage:
    python main.py <target_url>

- Accepts a single SPA URL as argument (for use with curl or CLI)
- Creates a unique project directory
- Orchestrates asset downloading (asyncio/aiohttp), JS processing (Thread/ProcessPoolExecutor),
  logging, progress, and framework detection
- All core logic is in libs/
"""

import sys
import argparse
import logging
from pathlib import Path
from datetime import datetime
from typing import Optional
import asyncio
from concurrent.futures import ThreadPoolExecutor
from libs.downloader import download_assets
from libs.processor import process_js_assets
from libs.framework import detect_frameworks
from libs.reporter import generate_report
from libs.sourcemap import extract_sourcemaps
from libs.utils import setup_project_dir, setup_logging, print_banner
from tqdm import tqdm
import os
import time


def find_existing_project(url: str) -> Optional[Path]:
    """Find existing project directory for the same URL."""
    projects_dir = Path("projects")
    if not projects_dir.exists():
        return None
    
    # Extract domain from URL
    from urllib.parse import urlparse
    parsed = urlparse(url)
    domain = parsed.netloc
    
    # Look for existing projects with same domain
    for project_dir in projects_dir.iterdir():
        if project_dir.is_dir() and domain in project_dir.name:
            return project_dir
    
    return None

def was_recently_downloaded(asset_dir: Path, hours: int = 24) -> bool:
    """Check if any file in asset_dir was modified in the last X hours."""
    if not asset_dir.exists():
        return False
    
    now = time.time()
    threshold = now - (hours * 3600)  # Convert hours to seconds
    
    for root, dirs, files in os.walk(asset_dir):
        for fname in files:
            fpath = os.path.join(root, fname)
            if os.path.getmtime(fpath) > threshold:
                return True
    return False


def main():
    parser = argparse.ArgumentParser(description="Analyze a Single Page Application (SPA) by URL.")
    parser.add_argument("url", help="Target SPA URL to analyze")
    parser.add_argument("--force-download", action="store_true", help="Force download even if assets exist")
    args = parser.parse_args()

    # Print banner
    print_banner()

    # Check for existing project
    existing_project = find_existing_project(args.url)
    if existing_project and not args.force_download:
        print(f"[!] Found existing project: {existing_project}")
        print(f"[!] Using existing assets from: {existing_project / 'assets'}")
        project_dir = existing_project
    else:
        # Setup new project directory
        project_dir = setup_project_dir(args.url)

    # Setup logging
    log_file = project_dir / "project.log"
    setup_logging(log_file)
    logger = logging.getLogger("spa-analyzer")
    logger.info(f"Analysis started for URL: {args.url}")
    logger.info(f"Project directory: {project_dir}")
    start_time = datetime.now()

    # Async asset download (skip if recent)
    asset_dir = project_dir / "assets"
    asset_dir.mkdir(exist_ok=True)
    
    if was_recently_downloaded(asset_dir, 24):  # 24 hours instead of 30 minutes
        logger.info("Assets were downloaded recently (within 24 hours). Skipping download step.")
        print("[!] Assets were downloaded in the last 24 hours. Skipping download step.")
        print("[!] Use --force-download to override this behavior.")
        download_summary = {"downloaded": len(list(asset_dir.rglob("*.js"))) + len(list(asset_dir.rglob("*.ts")))}
    else:
        logger.info("Starting asset download...")
        download_summary = asyncio.run(download_assets(args.url, asset_dir, logger))
        logger.info(f"Asset download complete. {download_summary['downloaded']} files downloaded.")

    # JS/TS processing (deobfuscate/unminify)
    logger.info("Processing JS/TS assets...")
    processed_dir = project_dir / "processed"
    processed_dir.mkdir(exist_ok=True)
    js_files = list(asset_dir.rglob("*.js")) + list(asset_dir.rglob("*.ts"))
    with ThreadPoolExecutor() as executor:
        results = list(tqdm(executor.map(lambda f: process_js_assets(f, processed_dir, logger), js_files),
                            total=len(js_files), desc="JS Processing"))
    num_deob = sum(1 for r in results if r and r.get('deobfuscated'))
    logger.info(f"JS/TS processing complete. {num_deob} files deobfuscated/beautified.")

    # Source map extraction
    logger.info("Extracting source maps...")
    sourcemap_summary = asyncio.run(extract_sourcemaps(project_dir, logger))
    logger.info(f"Source map extraction complete. {sourcemap_summary['total_sources']} sources extracted.")

    # Framework detection
    logger.info("Detecting frameworks...")
    frameworks = detect_frameworks(asset_dir)
    logger.info(f"Framework detection: {frameworks}")

    # Secrets detection using secrets-patterns-db
    logger.info("Starting secrets detection using secrets-patterns-db...")
    from libs.secrets_detector import detect_secrets_with_patterns_db
    secrets_summary = detect_secrets_with_patterns_db(project_dir, logger)
    logger.info(f"Secrets detection completed. Found {secrets_summary.get('total_detections', 0)} secrets.")

    # Generate report
    logger.info("Generating report...")
    end_time = datetime.now()
    generate_report(
        project_dir=project_dir,
        input_url=args.url,
        total_assets=download_summary['downloaded'],
        num_deobfuscated=num_deob,
        num_sourcemaps=sourcemap_summary['total_sourcemaps'],
        num_sources=sourcemap_summary['total_sources'],
        frameworks=frameworks,
        start_time=start_time,
        end_time=end_time,
        logger=logger,
        detection_summary=secrets_summary
    )
    logger.info("Analysis complete.")
    print(f"\nAnalysis complete. See report in: {project_dir / 'report'}")


if __name__ == "__main__":
    main() 