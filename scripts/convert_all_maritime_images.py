import os
import sys
from PIL import Image
import pillow_heif

base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'maritime-research'))

def process_file(file_path):
    print(f"\nProcessing file: {file_path}", flush=True)
    img = None
    
    # Try opening as HEIF first
    try:
        if pillow_heif.is_supported(file_path):
            heif_file = pillow_heif.open_heif(file_path)
            img = Image.frombytes(heif_file.mode, heif_file.size, heif_file.data, "raw")
            print(f"  -> Decoded from HEIF/HEIC! Original size: {img.size}", flush=True)
    except Exception as e:
        print(f"  Not a direct HEIF or failed: {e}", flush=True)

    # If not HEIF, try standard PIL
    if img is None:
        try:
            with Image.open(file_path) as raw_img:
                img = raw_img.copy()
                print(f"  -> Decoded from standard {img.format}! Original size: {img.size}", flush=True)
        except Exception as e:
            # Maybe it is HEIF with wrong header offset, let's force open_heif
            try:
                heif_file = pillow_heif.open_heif(file_path)
                img = Image.frombytes(heif_file.mode, heif_file.size, heif_file.data, "raw")
                print(f"  -> Force HEIF decoded! Size: {img.size}", flush=True)
            except Exception as e2:
                print(f"  Failed to decode {file_path}: {e2}", flush=True)
                return

    if img:
        rgb_img = img.convert('RGB')
        
        # Resize to max 1920px width/height for fast web loading and sharp crisp display
        max_dim = 1920
        if rgb_img.width > max_dim or rgb_img.height > max_dim:
            rgb_img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
            print(f"  -> Resized for web: {rgb_img.size}", flush=True)

        base_name, ext = os.path.splitext(file_path)
        
        # Save as standard genuine PNG
        png_path = f"{base_name}.png"
        rgb_img.save(png_path, "PNG", optimize=True)
        print(f"  -> Saved PNG: {png_path} ({os.path.getsize(png_path)} bytes)", flush=True)

        # Save as standard genuine JPG
        jpg_path = f"{base_name}.jpg"
        rgb_img.save(jpg_path, "JPEG", quality=88, optimize=True)
        print(f"  -> Saved JPG: {jpg_path} ({os.path.getsize(jpg_path)} bytes)", flush=True)

def convert_all():
    print(f"Starting conversion across: {base_dir}", flush=True)
    for root, dirs, files in os.walk(base_dir):
        for file in list(files):
            # Process all image files or files named .png, .HEIC, .jpg, .jpeg
            file_path = os.path.join(root, file)
            # Skip temp files
            if file.endswith('_clean.png'):
                os.remove(file_path)
                continue
            process_file(file_path)

if __name__ == '__main__':
    convert_all()
    print("\nAll maritime research images successfully converted to genuine web-ready PNG and JPEG formats!", flush=True)
