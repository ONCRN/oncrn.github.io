"""Render the original, non-clinical ONCRN website motif (optional tooling)."""
from pathlib import Path
from PIL import Image, ImageDraw

canvas = Image.new("RGBA", (384, 384), (255, 255, 255, 0))
draw = ImageDraw.Draw(canvas)
green = "#215b4f"
accent = "#824958"
draw.arc((42, 60, 342, 324), 195, 345, fill=green, width=17)
draw.arc((42, 60, 342, 324), 15, 165, fill=green, width=17)
draw.ellipse((140, 140, 244, 244), outline=green, width=16)
draw.line([(192, 244), (192, 309)], fill=accent, width=15)
draw.line([(192, 277), (151, 309)], fill=accent, width=13)
draw.line([(192, 277), (233, 309)], fill=accent, width=13)
target = Path(__file__).resolve().parents[1] / "assets" / "network-mark.png"
canvas.resize((128, 128), Image.Resampling.LANCZOS).save(target)
