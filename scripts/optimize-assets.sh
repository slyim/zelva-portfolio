#!/bin/bash

echo "🚀 Zelva Portfolio Asset Optimizer"
echo "This script compresses large videos and images to save space for GitHub Pages."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ Error: ffmpeg is not installed. Please install it with 'brew install ffmpeg' first."
    exit 1
fi

PUBLIC_DIR="./public"
# Size limit for compression in KB (e.g., skip files smaller than 1000KB/1MB)
MIN_SIZE_KB=1000

echo "Optimizing heavy videos (.webm, .mp4) over 1MB..."
find "$PUBLIC_DIR" -type f \( -iname \*.webm -o -iname \*.mp4 \) -size +${MIN_SIZE_KB}k | while read file; do
    echo "🎬 Compressing $file..."
    
    # Create a temporary file path
    temp_file="${file%.*}_opt.${file##*.}"
    
    # Compress the video with sensible defaults (CRF 30, VP9 for webm or H264 for mp4)
    if [[ "$file" == *.webm ]]; then
        ffmpeg -i "$file" -c:v libvpx-vp9 -crf 32 -b:v 0 -c:a libopus -b:a 96k "$temp_file" -y -loglevel warning
    else
        ffmpeg -i "$file" -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 128k "$temp_file" -y -loglevel warning
    fi

    # Check if compression was successful and file is actually smaller
    if [ $? -eq 0 ] && [ -f "$temp_file" ]; then
        orig_size=$(stat -f %z "$file")
        new_size=$(stat -f %z "$temp_file")
        
        if [ "$new_size" -lt "$orig_size" ]; then
            mv "$temp_file" "$file"
            echo "✅ Compressed successfully (saved $(( (orig_size - new_size) / 1024 )) KB)"
        else
            rm "$temp_file"
            echo "⚠️  Compression didn't save space. Kept original."
        fi
    else
        echo "❌ Failed to compress $file"
        [ -f "$temp_file" ] && rm "$temp_file"
    fi
done

echo "🎉 Optimization complete!"
echo "Run 'npm run build' before deploying to GitHub Pages."
