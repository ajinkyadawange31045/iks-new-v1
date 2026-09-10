const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.resolve(__dirname, '..');
const srcBase = path.join(rootDir, 'public', 'images');
const backupBase = path.join(rootDir, 'backup_images');

const foldersToProcess = [
  'artistic-research',
  'maritime-research',
  'education',
  'temp artistic'
];

// Helper to recursively copy directory
function copyFolderRecursive(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const entries = fs.readdirSync(source, { withFileTypes: true });
  let count = 0;
  let totalBytes = 0;

  for (const entry of entries) {
    const srcPath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      const res = copyFolderRecursive(srcPath, targetPath);
      count += res.count;
      totalBytes += res.totalBytes;
    } else {
      if (!fs.existsSync(targetPath)) {
        fs.copyFileSync(srcPath, targetPath);
        count++;
        totalBytes += fs.statSync(srcPath).size;
      }
    }
  }
  return { count, totalBytes };
}

// 1. BACKUP PHASE
function performBackup() {
  console.log('========================================');
  console.log('STEP 1: BACKING UP ORIGINAL IMAGES');
  console.log('Destination:', backupBase);
  console.log('========================================');

  let totalFiles = 0;
  let totalSize = 0;

  for (const folder of foldersToProcess) {
    const src = path.join(srcBase, folder);
    const dest = path.join(backupBase, folder);
    if (fs.existsSync(src)) {
      const res = copyFolderRecursive(src, dest);
      console.log(`[Backup] ${folder.padEnd(20)}: ${res.count.toString().padStart(4)} files | ${(res.totalBytes / (1024 * 1024)).toFixed(2).padStart(8)} MB`);
      totalFiles += res.count;
      totalSize += res.totalBytes;
    } else {
      console.warn(`[Backup] Skipping missing folder: ${src}`);
    }
  }

  console.log('----------------------------------------');
  console.log(`Total Backed Up: ${totalFiles} files | ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log('Backup verified successfully!\n');
}

// 2. COMPRESSION PHASE
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

async function compressImageFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.has(ext)) return null;

  const originalSize = fs.statSync(filePath).size;
  const maxDimension = 1920;

  try {
    // Read input into memory buffer to avoid Windows file locks on filePath
    const inputBuffer = fs.readFileSync(filePath);
    const meta = await sharp(inputBuffer).metadata();

    let pipeline = sharp(inputBuffer);
    if (meta.width > maxDimension || meta.height > maxDimension) {
      pipeline = pipeline.resize(maxDimension, maxDimension, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    let compressedBuffer;
    if (ext === '.png') {
      compressedBuffer = await pipeline
        .png({ quality: 82, compressionLevel: 9 })
        .toBuffer();
    } else if (ext === '.jpg' || ext === '.jpeg') {
      compressedBuffer = await pipeline
        .jpeg({ quality: 82, progressive: true, mozjpeg: true })
        .toBuffer();
    }

    // Overwrite original file if compressed is smaller
    if (compressedBuffer && compressedBuffer.length < originalSize) {
      fs.writeFileSync(filePath, compressedBuffer);
    }

    // Also write a matching .webp version alongside
    const webpPath = filePath.substring(0, filePath.lastIndexOf('.')) + '.webp';
    const webpBuffer = await sharp(inputBuffer)
      .resize(maxDimension, maxDimension, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82 })
      .toBuffer();
    fs.writeFileSync(webpPath, webpBuffer);

    const finalSize = fs.statSync(filePath).size;

    return {
      filePath,
      originalSize,
      finalSize,
      webpSize: webpBuffer.length,
      savingsPct: (((originalSize - finalSize) / originalSize) * 100).toFixed(1)
    };
  } catch (err) {
    console.error(`Error compressing ${filePath}:`, err.message);
    return null;
  }
}

async function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let stats = { count: 0, originalBytes: 0, finalBytes: 0 };

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      const subStats = await processDirectory(fullPath);
      stats.count += subStats.count;
      stats.originalBytes += subStats.originalBytes;
      stats.finalBytes += subStats.finalBytes;
    } else if (!entry.name.endsWith('.webp')) {
      const res = await compressImageFile(fullPath);
      if (res) {
        stats.count++;
        stats.originalBytes += res.originalSize;
        stats.finalBytes += res.finalSize;
      }
    }
  }

  return stats;
}

async function run() {
  // Step 1: Backup
  performBackup();

  // Step 2: Compress active website research directories
  const targetDirs = [
    'maritime-research',
    'artistic-research',
    'education'
  ];

  console.log('========================================');
  console.log('STEP 2: COMPRESSING WEBSITE IMAGES');
  console.log('========================================');

  let grandOriginal = 0;
  let grandFinal = 0;
  let grandCount = 0;

  for (const folder of targetDirs) {
    const targetPath = path.join(srcBase, folder);
    if (!fs.existsSync(targetPath)) continue;

    console.log(`\nCompressing: ${folder}...`);
    const s = await processDirectory(targetPath);
    const origMB = (s.originalBytes / (1024 * 1024)).toFixed(2);
    const finalMB = (s.finalBytes / (1024 * 1024)).toFixed(2);
    const savedMB = ((s.originalBytes - s.finalBytes) / (1024 * 1024)).toFixed(2);
    const pct = s.originalBytes > 0 ? (((s.originalBytes - s.finalBytes) / s.originalBytes) * 100).toFixed(1) : 0;

    console.log(`-> ${folder}: ${s.count} images | ${origMB} MB -> ${finalMB} MB (Saved ${savedMB} MB, ${pct}% reduction)`);

    grandOriginal += s.originalBytes;
    grandFinal += s.finalBytes;
    grandCount += s.count;
  }

  console.log('\n========================================');
  console.log('COMPRESSION SUMMARY:');
  console.log(`Total images processed: ${grandCount}`);
  console.log(`Total size: ${(grandOriginal / (1024 * 1024)).toFixed(2)} MB -> ${(grandFinal / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total space saved: ${((grandOriginal - grandFinal) / (1024 * 1024)).toFixed(2)} MB (${grandOriginal > 0 ? (((grandOriginal - grandFinal) / grandOriginal) * 100).toFixed(1) : 0}% reduction)`);
  console.log('========================================\n');
}

run().catch(console.error);
