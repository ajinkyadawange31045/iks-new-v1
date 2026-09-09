'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Camera, Video, Image as ImageIcon, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

const sampleGalleryImages = [
  { raw: '/images/IMG_5898.jpg', thumbnail: '/images/thumbnails/IMG_5898.jpg', preview: '/images/previews/IMG_5898.jpg', title: 'Traditional Shipbuilding' },
  { raw: '/images/IMG_5927.jpg', thumbnail: '/images/thumbnails/IMG_5927.jpg', preview: '/images/previews/IMG_5927.jpg', title: 'Shipyard Craftsmanship' },
  { raw: '/images/IMG_5942.jpg', thumbnail: '/images/thumbnails/IMG_5942.jpg', preview: '/images/previews/IMG_5942.jpg', title: 'Wooden Vessel Construction' },
  { raw: '/images/IMG_5963.jpg', thumbnail: '/images/thumbnails/IMG_5963.jpg', preview: '/images/previews/IMG_5963.jpg', title: 'Seafaring Heritage Craft' },
  { raw: '/images/IMG_5999.jpg', thumbnail: '/images/thumbnails/IMG_5999.jpg', preview: '/images/previews/IMG_5999.jpg', title: 'Traditional Boatbuilders' },
  { raw: '/images/IMG_6026.jpg', thumbnail: '/images/thumbnails/IMG_6026.jpg', preview: '/images/previews/IMG_6026.jpg', title: 'Fieldwork & Ethnography' },
  { raw: '/images/IMG_6217.jpg', thumbnail: '/images/thumbnails/IMG_6217.jpg', preview: '/images/previews/IMG_6217.jpg', title: 'Archival Documentation' },
  { raw: '/images/IMG_6235.jpg', thumbnail: '/images/thumbnails/IMG_6235.jpg', preview: '/images/previews/IMG_6235.jpg', title: 'Indigenous Maritime Joinery' },
  { raw: '/images/IMG_6292.jpg', thumbnail: '/images/thumbnails/IMG_6292.jpg', preview: '/images/previews/IMG_6292.jpg', title: 'Coastal Heritage Towns' },
  { raw: '/images/IMG_6382.jpg', thumbnail: '/images/thumbnails/IMG_6382.jpg', preview: '/images/previews/IMG_6382.jpg', title: 'Maritime Community Research' },
];

export default function HomeGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? sampleGalleryImages.length - 1 : prev - 1));
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === sampleGalleryImages.length - 1 ? 0 : prev + 1));
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <section className="pb-20 bg-[#f7ead8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2d7d7d] via-[#4a9d9d] to-[#2d7d7d] rounded-full flex items-center justify-center shadow-md">
                <Camera className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-[#8b4a3c] via-[#a65a4a] to-[#8b4a3c] rounded-full flex items-center justify-center shadow-md">
                <Video className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-[#2d7d7d] via-[#4a9d9d] to-[#2d7d7d] rounded-full flex items-center justify-center shadow-md">
                <ImageIcon className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-elegant font-bold text-[#5c3a2a] tracking-wider mb-4">
            Our Visual Journey
          </h2>
          <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
          <p className="text-base sm:text-lg text-[#8b6f5e] max-w-2xl mx-auto font-serif-body">
            Glimpses into our on-field research, shipyard expeditions, oral histories, and archival discoveries
          </p>
        </motion.div>

        {/* 10-Image Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 mb-12">
          {sampleGalleryImages.map((item, index) => (
            <motion.div
              key={item.raw}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-[#8b6f5e]/30 bg-[#faf5ed] hover:-translate-y-1"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-xs sm:text-sm font-serif-body font-semibold text-white line-clamp-2 drop-shadow">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Complete Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/gallery">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#2d7d7d] to-[#8b4a3c] hover:from-[#4a9d9d] hover:to-[#a65a4a] text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-serif-body cursor-pointer"
            >
              <span className="flex items-center space-x-2">
                <span className="text-base sm:text-lg font-semibold">View Complete Gallery</span>
                <ArrowRight className="h-5 w-5" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="max-w-5xl max-h-[92vh] overflow-hidden bg-transparent border-0 shadow-none p-0 flex items-center justify-center">
          <DialogTitle className="sr-only">Visual Journey Preview</DialogTitle>
          {selectedIndex !== null && (
            <div className="relative w-full flex items-center justify-center">
              {/* Main Image */}
              <img
                src={sampleGalleryImages[selectedIndex].preview}
                alt={sampleGalleryImages[selectedIndex].title}
                className="w-auto h-auto max-h-[85vh] max-w-[90vw] md:max-w-4xl object-contain rounded-2xl shadow-2xl select-none"
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-md transition-all z-30 shadow-lg"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-xl hover:scale-110 z-30 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:-translate-x-0.5" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-xl hover:scale-110 z-30 group"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Caption & Counter Pill */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs sm:text-sm font-serif-body border border-white/10 shadow-lg pointer-events-none text-center">
                <span className="font-semibold">{sampleGalleryImages[selectedIndex].title}</span> • {selectedIndex + 1} / {sampleGalleryImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

