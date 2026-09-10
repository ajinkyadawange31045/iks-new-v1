const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const tempDir = path.join(__dirname, '..', 'public', 'images', 'temp artistic');
const outBaseDir = path.join(__dirname, '..', 'public', 'images', 'artistic-research');

const categories = {
  'chitrakathi-visual-storytelling': [
    {
      relPath: 'Chitrakathi and Visual Storytelling/20250805_110423amByGPSMapCamera.jpg',
      outName: '1.png'
    },
    {
      relPath: 'Chitrakathi and Visual Storytelling/drive-download-20260909T141719Z-1-001/IMG-20241220-WA0122.jpg',
      outName: '2.png'
    },
    {
      relPath: 'Chitrakathi and Visual Storytelling/Rasik Priya/20240217_112132amByGPSMapCamera.jpg',
      outName: '3.png'
    },
    {
      relPath: 'Chitrakathi and Visual Storytelling/drive-download-20260909T141719Z-1-001/WhatsApp Image 2024-12-18 at 14.30.37_563e837b.jpg',
      outName: '4.png'
    }
  ],
  'performative-oral-folk': [
    {
      relPath: 'Performative and Oral Folk Cultures/drive-download-20260909T134003Z-1-001/IMG_7086.JPG',
      outName: '1.png'
    },
    {
      relPath: 'Performative and Oral Folk Cultures/drive-download-20260909T134003Z-1-001/PXL_20260121_101142533.jpg',
      outName: '2.png'
    },
    {
      relPath: 'Performative and Oral Folk Cultures/drive-download-20260909T142040Z-1-001/IMG_0500~2.JPG',
      outName: '3.png'
    },
    {
      relPath: 'Performative and Oral Folk Cultures/drive-download-20260909T142040Z-1-001/IMG_0597~2.JPG',
      outName: '4.png'
    }
  ],
  'provenance-materiality': [
    {
      relPath: 'Education/CHitrakathi Research Dying/drive-download-20260909T135325Z-1-001/GMC05082025_114019.jpg',
      outName: '1.png'
    },
    {
      relPath: 'Education/CHitrakathi Research Dying/drive-download-20260909T135325Z-1-001/GMC05082025_121751.jpg',
      outName: '2.png'
    },
    {
      relPath: 'Education/CHitrakathi Research Dying/drive-download-20260909T135325Z-1-001/GMC05082025_124640.jpg',
      outName: '3.png'
    },
    {
      relPath: 'Education/CHitrakathi Research Dying/drive-download-20260909T135325Z-1-001/GMC05082025_132756.jpg',
      outName: '4.png'
    }
  ],
  'regional-art-iconography': [
    {
      relPath: 'Regional Art Styles and Iconography/Sculpture Exhibition Inauguration (20th January 2026)/drive-download-20260909T152341Z-1-001/IMG_0215~2 (1).JPG',
      outName: '1.png'
    },
    {
      relPath: 'Regional Art Styles and Iconography/Sculpture Exhibition Inauguration (20th January 2026)/drive-download-20260909T152341Z-1-001/IMG_0229~2.JPG',
      outName: '2.png'
    },
    {
      relPath: 'Regional Art Styles and Iconography/Game workshop/drive-download-20260909T151917Z-1-001/IMG_0045~2.JPG',
      outName: '3.png'
    },
    {
      relPath: 'Regional Art Styles and Iconography/Game workshop/drive-download-20260909T151917Z-1-001/IMG_0061.JPG',
      outName: '4.png'
    }
  ],
  'visual-culture-community': [
    {
      relPath: 'Visual Culture and Community Engagement/drive-download-20260909T134338Z-1-001/IMG_6999.JPG',
      outName: '1.png'
    },
    {
      relPath: 'Visual Culture and Community Engagement/drive-download-20260909T134338Z-1-001/IMG_7012.JPG',
      outName: '2.png'
    },
    {
      relPath: 'Education/Painting workshop/drive-download-20260909T134620Z-1-001/IMG_0246~2.JPG',
      outName: '3.png'
    },
    {
      relPath: 'Education/Painting workshop/drive-download-20260909T134620Z-1-001/IMG_0255~2.JPG',
      outName: '4.png'
    }
  ]
};

async function convertImage(srcPath, destPath) {
  const destDir = path.dirname(destPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  await sharp(srcPath)
    .resize(1800, null, { withoutEnlargement: true })
    .png({ quality: 85, compressionLevel: 8 })
    .toFile(destPath);
  
  console.log(`Converted: ${path.basename(srcPath)} -> ${destPath}`);
}

async function run() {
  for (const [category, items] of Object.entries(categories)) {
    const catDir = path.join(outBaseDir, category);
    if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });

    for (const item of items) {
      const src = path.join(tempDir, item.relPath);
      const dest = path.join(catDir, item.outName);
      if (fs.existsSync(src)) {
        try {
          await convertImage(src, dest);
        } catch (err) {
          console.error(`Failed ${src}:`, err.message);
        }
      } else {
        console.warn(`File missing: ${src}`);
      }
    }
  }

  console.log('Finished processing curated artistic research images!');
}

run();
