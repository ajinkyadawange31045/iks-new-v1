const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
const thumbsDir = path.join(imagesDir, 'thumbnails');
const previewsDir = path.join(imagesDir, 'previews');

if (!fs.existsSync(thumbsDir)) fs.mkdirSync(thumbsDir, { recursive: true });
if (!fs.existsSync(previewsDir)) fs.mkdirSync(previewsDir, { recursive: true });

const RENDERABLE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir).filter((file) => {
    const stat = fs.statSync(path.join(imagesDir, file));
    return stat.isFile() && RENDERABLE_EXTENSIONS.has(path.extname(file).toLowerCase());
  });

  console.log(`Found ${files.length} images to optimize...`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const srcPath = path.join(imagesDir, file);
    const thumbPath = path.join(thumbsDir, file);
    const previewPath = path.join(previewsDir, file);

    try {
      if (!fs.existsSync(thumbPath)) {
        await sharp(srcPath)
          .resize(500, null, { withoutEnlargement: true })
          .jpeg({ quality: 80, progressive: true })
          .toFile(thumbPath);
      }

      if (!fs.existsSync(previewPath)) {
        await sharp(srcPath)
          .resize(1600, null, { withoutEnlargement: true })
          .jpeg({ quality: 85, progressive: true })
          .toFile(previewPath);
      }

      console.log(`[${i + 1}/${files.length}] Optimized: ${file}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages();
