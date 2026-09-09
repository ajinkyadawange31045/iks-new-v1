import os
import sys
import traceback
from PIL import Image

try:
    import pillow_heif
    pillow_heif.register_heif_opener()
    print("pillow_heif registered successfully!", flush=True)
except Exception as e:
    print(f"Error registering pillow_heif: {e}", flush=True)

test_file = os.path.abspath(r"c:\Users\Ajinkya\Documents\GitHub\iks-new-main\iks-new-main\public\images\maritime-research\oral-histories\1.png")
print(f"Testing file: {test_file}", flush=True)

try:
    heif_file = pillow_heif.open_heif(test_file)
    print(f"HEIF open succeeded! Mode: {heif_file.mode}, Size: {heif_file.size}", flush=True)
    image = Image.frombytes(heif_file.mode, heif_file.size, heif_file.data, "raw")
    out_png = test_file.replace(".png", "_clean.png")
    image.save(out_png, "PNG")
    print(f"Successfully saved clean PNG to {out_png}!", flush=True)
except Exception as e:
    print(f"Direct heif error: {e}", flush=True)
    traceback.print_exc()
