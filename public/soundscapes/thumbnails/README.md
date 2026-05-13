# Soundscape Thumbnails

Since GitHub Pages has a 1GB limit and loading heavy video assets initially severely impacts performance and bandwidth, it is strongly recommended to use optimized static thumbnails for grids and carousels instead of loading the full videos right away.

## Sizing & Optimization Requirements
- **Format:** WebP or optimized JPEG.
- **Resolution:** 1920x1080px (16:9 ratio) is recommended. The carousels use a 16:9 aspect ratio natively.
- **File Size:** Under 200KB per image.

You can use `ffmpeg` to easily extract and compress a frame from your video. Run this in your terminal:
```bash
ffmpeg -i ../your_video.webm -vframes 1 -q:v 2 your_video_thumb.jpg
```
*(`-vframes 1` extracts the first frame, `-q:v 2` sets a high-quality JPEG output).*
