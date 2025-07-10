import re
from pathlib import Path

def detect_frameworks(asset_dir: Path) -> dict:
    patterns = {
        'React': [r'React', r'from ["\']react["\']', r'useState', r'useEffect'],
        'Angular': [r'@NgModule', r'angular\.module', r'ng-app'],
        'Vue': [r'Vue', r'from ["\']vue["\']', r'v-if', r'v-for'],
    }
    found = {fw: False for fw in patterns}
    js_files = list(asset_dir.rglob('*.js')) + list(asset_dir.rglob('*.ts'))
    for js_file in js_files:
        try:
            code = js_file.read_text(encoding='utf-8', errors='ignore')
            for fw, pats in patterns.items():
                if any(re.search(p, code) for p in pats):
                    found[fw] = True
        except Exception:
            continue
    return found 