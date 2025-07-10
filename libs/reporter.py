from pathlib import Path
from datetime import datetime

def generate_report(project_dir: Path, input_url: str, total_assets: int, num_deobfuscated: int, 
                   num_sourcemaps: int, num_sources: int, frameworks: dict, start_time, end_time, logger):
    report_dir = project_dir / 'report'
    report_dir.mkdir(exist_ok=True)
    report_file = report_dir / 'report.md'
    duration = (end_time - start_time).total_seconds()
    with open(report_file, 'w') as f:
        f.write(f"# SPA Analysis Report\n\n")
        f.write(f"**Input URL:** {input_url}\n\n")
        f.write(f"**Total Assets Collected:** {total_assets}\n")
        f.write(f"**Number of Deobfuscated Files:** {num_deobfuscated}\n")
        f.write(f"**Source Maps Found:** {num_sourcemaps}\n")
        f.write(f"**Source Files Extracted:** {num_sources}\n")
        f.write(f"**Framework Detection:**\n")
        for fw, detected in frameworks.items():
            f.write(f"- {fw}: {'Yes' if detected else 'No'}\n")
        f.write(f"\n**Processing Start:** {start_time}\n")
        f.write(f"**Processing End:** {end_time}\n")
        f.write(f"**Duration:** {duration:.2f} seconds\n")
    logger.info(f"Report written to {report_file}") 