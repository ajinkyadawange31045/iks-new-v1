import fs from 'fs';
import path from 'path';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';

const RENDERABLE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function getGalleryImages() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  return fs
    .readdirSync(imagesDir)
    .filter((file) => {
      const fullPath = path.join(imagesDir, file);
      return fs.statSync(fullPath).isFile() && RENDERABLE_EXTENSIONS.has(path.extname(file).toLowerCase());
    })
    .sort()
    .map((file) => ({
      raw: `/images/${encodeURIComponent(file)}`,
      thumbnail: `/images/thumbnails/${encodeURIComponent(file)}`,
      preview: `/images/previews/${encodeURIComponent(file)}`,
    }));
}

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <div className="w-full">
      <GalleryHero count={images.length} />
      <div className="bg-[#f7ead8] py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={images} />
        </div>
      </div>
    </div>
  );
}
