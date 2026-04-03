#!/usr/bin/env python3
"""Convert the agentic-vs-chat MDX blog post to PDF using PyMuPDF + markdown-it-py."""

import re
import tempfile
import fitz
from markdown_it import MarkdownIt
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).parent.parent
MDX_PATH = ROOT / "app/(main)/blog/posts/agentic-vs-chat.mdx"
IMG_DIR = ROOT / "public/images/blog/agentic-vs-chat"
OUTPUT = ROOT / "public/papers/agentic-vs-chat.pdf"
# Re-save images at 72 DPI so PyMuPDF maps pixels to points correctly,
# but keep full resolution for quality
tmpdir = Path(tempfile.mkdtemp())
for png in IMG_DIR.glob("*.png"):
    img = Image.open(png)
    img.save(tmpdir / png.name, dpi=(72, 72))
    print(f"Prepared {png.name}: {img.size}")

# 1. Read MDX and extract title from frontmatter
raw = MDX_PATH.read_text()
title_match = re.search(r"title:\s*['\"](.+?)['\"]", raw)
title = title_match.group(1) if title_match else "Untitled"
raw = re.sub(r"^---.*?---\s*", "", raw, count=1, flags=re.DOTALL)

# 2. Convert <Figure> JSX to HTML img + caption
figure_index = 0
def figure_to_html(m):
    global figure_index
    figure_index += 1
    src = re.search(r'src="([^"]+)"', m.group(0))
    alt = re.search(r'alt="([^"]+)"', m.group(0))
    caption = re.search(r'caption="([^"]+)"', m.group(0))
    img_name = Path(src.group(1)).name if src else ""
    alt = alt.group(1) if alt else ""
    cap = caption.group(1) if caption else ""
    cls = "figure figure-small" if figure_index == 2 else "figure figure-break"
    width = 380 if figure_index == 2 else 504
    result = f'<div class="{cls}"><img src="{img_name}" alt="{alt}" width="{width}">'
    if cap:
        result += f'\n<p class="caption">{cap}</p>'
    result += '</div>'
    return result

raw = re.sub(r"<Figure\s.*?/>", figure_to_html, raw, flags=re.DOTALL)

# 3. Render markdown to HTML
md = MarkdownIt("commonmark", {"html": True})
body_html = md.render(raw)

# 4. Build full HTML with styling
html = f"""
<html>
<head>
<style>
body {{
    font-family: Helvetica, Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.6;
    color: #1a1a1a;
}}
h1 {{
    font-size: 20pt;
    margin-bottom: 4pt;
}}
h2 {{
    font-size: 15pt;
    margin-top: 18pt;
    margin-bottom: 6pt;
}}
code {{
    font-family: monospace;
    font-size: 10pt;
    background-color: #f0f0f0;
    padding: 1pt 3pt;
}}
div.figure {{
    page-break-inside: avoid;
    margin: 10pt 0;
}}
div.figure-break {{
    page-break-before: always;
}}
div.figure-small {{
    text-align: center;
}}
p.caption {{
    font-size: 9.5pt;
    color: #555;
    font-style: italic;
    margin-top: 2pt;
}}
ol, ul {{
    margin-left: 14pt;
}}
li {{
    margin-bottom: 6pt;
}}
a {{
    color: #1a5fb4;
}}
</style>
</head>
<body>
<h1>{title}</h1>
{body_html}
</body>
</html>
"""

# 5. Render to PDF via PyMuPDF Story
MEDIABOX = fitz.paper_rect("letter")
WHERE = MEDIABOX + (54, 54, -54, -54)  # 0.75in margins

arch = fitz.Archive(str(tmpdir))
story = fitz.Story(html, archive=arch)
writer = fitz.DocumentWriter(str(OUTPUT))

more = True
while more:
    dev = writer.begin_page(MEDIABOX)
    more, _ = story.place(WHERE)
    story.draw(dev)
    writer.end_page()

writer.close()
print(f"PDF saved to {OUTPUT}")
