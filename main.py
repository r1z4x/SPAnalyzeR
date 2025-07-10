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
import asyncio
from concurrent.futures import ThreadPoolExecutor
from libs.downloader import download_assets
from libs.processor import process_js_assets
from libs.framework import detect_frameworks
from libs.reporter import generate_report
from libs.sourcemap import extract_sourcemaps
from libs.utils import setup_project_dir, setup_logging, print_banner
from tqdm import tqdm


def main():
    parser = argparse.ArgumentParser(description="Analyze a Single Page Application (SPA) by URL.")
    parser.add_argument("url", help="Target SPA URL to analyze")
    args = parser.parse_args()

    # Print banner
    print_banner()

    # Setup project directory
    project_dir = setup_project_dir(args.url)

    # Setup logging
    log_file = project_dir / "project.log"
    setup_logging(log_file)
    logger = logging.getLogger("spa-analyzer")
    logger.info(f"Analysis started for URL: {args.url}")
    logger.info(f"Project directory: {project_dir}")
    start_time = datetime.now()

    # Async asset download
    logger.info("Starting asset download...")
    asset_dir = project_dir / "assets"
    asset_dir.mkdir(exist_ok=True)
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
        logger=logger
    )
    logger.info("Analysis complete.")
    print(f"\nAnalysis complete. See report in: {project_dir / 'report'}")


if __name__ == "__main__":
    main() 