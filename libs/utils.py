import logging
from pathlib import Path
from datetime import datetime
import re

def print_banner():
    print("""
====================================
   SPAnalyzeR - SPA Analyzer v1.0
====================================
""")

def setup_project_dir(url: str) -> Path:
    # Extract domain
    domain = re.sub(r'^https?://', '', url).split('/')[0]
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    project_dir = Path(f"projects/{domain}-{timestamp}")
    project_dir.mkdir(parents=True, exist_ok=True)
    (project_dir / "assets").mkdir(exist_ok=True)
    (project_dir / "processed").mkdir(exist_ok=True)
    (project_dir / "sourcemaps").mkdir(exist_ok=True)
    (project_dir / "report").mkdir(exist_ok=True)
    (project_dir / "zip").mkdir(exist_ok=True)
    return project_dir

def setup_logging(log_file: Path):
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler(log_file),
            logging.StreamHandler()
        ]
    ) 