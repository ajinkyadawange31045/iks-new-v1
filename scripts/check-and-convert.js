const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const baseDir = path.join(__dirname, '..', 'public', 'images', 'maritime-research');

function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

async function inspectAndFix() {
  const files = getFilesRecursively(baseDir);
  console.log(`Found ${files.length} files in maritime-research...`);

  for (const file of files) {
    const buffer = fs.readFileSync(file);
    const header = buffer.slice(0, 16).toString('hex');
    const headerAscii = buffer.slice(0, 16).toString('ascii').replace(/[^\x20-\x7E]/g, '.');
    console.log(`\nFile: ${path.relative(baseDir, file)}`);
    console.log(`Size: ${buffer.length} bytes`);
    console.log(`Header (Hex): ${header}`);
    console.log(`Header (Ascii): ${headerAscii}`);

    try {
      const metadata = await sharp(file).metadata();
      console.log(`Sharp detected format: ${metadata.format}, width: ${metadata.width}, height: ${metadata.height}`);
      
      // If it's heif or heic or if format doesn't match extension, convert to proper web-ready JPEG/PNG
      if (metadata.format === 'heif' || metadata.format === 'heic') {
        console.log(`Converting HEIF/HEIC ${file} to genuine JPEG/PNG...`);
        const outBuffer = await sharp(file).jpeg({ quality: 90 }).toBuffer();
        fs.writeFileSync(file.replace(/\.png$/i, '.jpg'), outBuffer);
        console.log(`Successfully converted to JPEG!`);
      } else {
        // Also test re-encoding to guarantee clean standard PNG/JPEG
        const cleanBuffer = await sharp(file).jpeg({ quality: 90 }).toBuffer();
        const jpgPath = file.replace(/\.png$/i, '.jpg');
        fs.writeFileSync(jpgPath, cleanBuffer);
        console.log(`Created clean web JPEG: ${jpgPath}`);
      }
    } catch (err) {
      console.error(`Sharp error on ${file}:`, err.message);
    }
  }
}

inspectAndFix();
