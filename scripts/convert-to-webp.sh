#!/bin/bash
set -e

ROOT="/Users/slimy/Desktop/Programming/zelva-portfolio/public"

# Function to convert image to WebP with resize
convert_image() {
    local input="$1"
    local max_width="$2"
    local quality="$3"
    local output="${input%.*}.webp"
    
    echo "Converting: $input -> $output (max_width=${max_width}, quality=${quality})"
    
    # Get image dimensions
    local width=$(identify -format "%w" "$input" 2>/dev/null || echo "0")
    
    if [ "$width" -gt "$max_width" ]; then
        cwebp -q "$quality" -resize "$max_width" 0 "$input" -o "$output"
    else
        cwebp -q "$quality" "$input" -o "$output"
    fi
}

echo "=== Converting Photography Images ==="
find "$ROOT/photography" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
    convert_image "$img" 1920 85
done

echo "=== Converting Design Images ==="
find "$ROOT/designs" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
    convert_image "$img" 1920 90
done

echo "=== Converting Artwork Images ==="
find "$ROOT/artworks" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
    convert_image "$img" 1200 90
done

echo "=== Converting Soundscape Thumbnails ==="
find "$ROOT/soundscapes" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
    convert_image "$img" 800 85
done

echo "=== Converting Software Icons ==="
find "$ROOT/SoftwareIcons" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
    convert_image "$img" 64 90
done

echo "=== Converting Signature ==="
if [ -f "$ROOT/Signature.png" ]; then
    convert_image "$ROOT/Signature.png" 400 90
fi

echo "=== Done! ==="
echo ""
echo "Original sizes:"
find "$ROOT" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -exec ls -lh {} \; | awk '{print $5, $9}'
echo ""
echo "WebP sizes:"
find "$ROOT" -type f -iname "*.webp" -exec ls -lh {} \; | awk '{print $5, $9}'
