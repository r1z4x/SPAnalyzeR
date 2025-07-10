#!/usr/bin/env python3
"""
Setup script for SPAnalyzeR

Installs dependencies and sets up Playwright browsers.
"""

import subprocess
import sys
import os


def run_command(command, description):
    """Run a command and handle errors."""
    print(f"Running: {description}")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✓ {description} completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print(f"✗ {description} failed:")
        print(f"  Error: {e.stderr}")
        return False


def main():
    """Main setup function."""
    print("Setting up SPAnalyzeR...")
    
    # Check if pip is available
    try:
        subprocess.run([sys.executable, "-m", "pip", "--version"], check=True, capture_output=True)
    except subprocess.CalledProcessError:
        print("Error: pip is not available. Please install pip first.")
        sys.exit(1)
    
    # Install Python dependencies
    if not run_command(f"{sys.executable} -m pip install -r requirements.txt", "Installing Python dependencies"):
        print("Failed to install dependencies. Please check your Python environment.")
        sys.exit(1)
    
    # Install Playwright browsers
    if not run_command(f"{sys.executable} -m playwright install chromium", "Installing Playwright Chromium browser"):
        print("Failed to install Playwright browsers. Please check your internet connection.")
        sys.exit(1)
    
    print("\n✓ SPAnalyzeR setup completed successfully!")
    print("\nYou can now use the following commands:")
    print("  python spa_project_setup.py <url>")
    print("  python spa_asset_collector.py <project_path> <url>")


if __name__ == "__main__":
    main() 