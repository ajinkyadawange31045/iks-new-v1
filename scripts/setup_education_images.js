const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public', 'images', 'education');

const categories = {
  'research-projects': {
    'cover.jpg': 'IMG_6026.jpg',
    'art-forms.jpg': 'IMG_6217.jpg',
    'traditional-knowledge.jpg': 'IMG_5898.jpg',
    'traditional-practices.jpg': 'IMG_5942.jpg',
    'traditional-beliefs.jpg': 'IMG_6235.jpg',
  },
  'research-centre': {
    'cover.jpg': 'IMG_6382.jpg',
    'fieldwork-communities.jpg': 'IMG_6382.jpg',
    'rare-archives.jpg': 'IMG_6217.jpg',
    'interdisciplinary-teams.jpg': 'IMG_6026.jpg',
    'living-heritage.jpg': 'IMG_6292.jpg',
  },
  'study-centre': {
    'cover.jpg': 'IMG_5927.jpg',
    'maritime-history.jpg': 'IMG_5898.jpg',
    'navigation-shipbuilding.jpg': 'IMG_5927.jpg',
    'ancient-iconography.jpg': 'IMG_6235.jpg',
    'open-resources.jpg': 'IMG_6217.jpg',
  },
  'workshops': {
    'cover.jpg': 'IMG_6026.jpg',
    'art-storytelling-workshops.jpg': 'IMG_6217.jpg',
    'guest-lectures.jpg': 'IMG_6026.jpg',
    'field-visits.jpg': 'IMG_6292.jpg',
    'indian-aesthetics.jpg': 'IMG_6235.jpg',
  },
  'internships': {
    'cover.jpg': 'IMG_6292.jpg',
    'internship-interviews.jpg': 'IMG_6382.jpg',
    'digital-tagging.jpg': 'IMG_6217.jpg',
    'site-documentation.jpg': 'IMG_6292.jpg',
    'faculty-mentorship.jpg': 'IMG_6026.jpg',
  },
};

const srcImagesDir = path.join(__dirname, '..', 'public', 'images');

for (const [cat, files] of Object.entries(categories)) {
  const catDir = path.join(baseDir, cat);
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }

  for (const [destName, srcName] of Object.entries(files)) {
    const srcPath = path.join(srcImagesDir, srcName);
    const destPath = path.join(catDir, destName);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcName} -> education/${cat}/${destName}`);
    } else {
      console.warn(`Source not found: ${srcPath}`);
    }
  }
}

console.log('Education folder structure initialized successfully!');
