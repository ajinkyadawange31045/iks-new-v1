import os
import sys
from PIL import Image
try:
    import pillow_heif
    pillow_heif.register_heif_opener()
    print("pillow_heif registered successfully!")
except ImportError:
    print("pillow_heif not available yet")

base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'maritime-research'))

def convert_folder():
    print(f"Scanning base directory: {base_dir}")
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            file_path = os.path.join(root, file)
            print(f"\nProcessing: {file_path}")
            try:
                # Open image with PIL / pillow_heif
                with Image.open(file_path) as img:
                    print(f"  Format: {img.format}, Mode: {img.mode}, Size: {img.size}")
                    rgb_img = img.convert('RGB')
                    
                    # Target PNG file path (replace extension or keep name as .png)
                    base_name, _ = os.path.splitext(file_path)
                    png_path = f"{base_name}.png"
                    jpg_path = f"{base_name}.jpg"
                    
                    # Save as standard PNG
                    rgb_img.save(png_path, "PNG", optimize=True)
                    print(f"  Saved genuine PNG -> {png_path} ({os.path.getsize(png_path)} bytes)")
                    
                    # Save as standard JPEG
                    rgb_img.save(jpg_path, "JPEG", quality=90, optimize=True)
                    print(f"  Saved genuine JPEG -> {jpg_path} ({os.path.getsize(jpg_path)} bytes)")
            except Exception as e:
                print(f"  Error opening/converting {file}: {e}")

if __name__ == '__main__':
    convert_folder()
