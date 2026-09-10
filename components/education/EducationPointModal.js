'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, FileText } from 'lucide-react';

export function getEmbedUrl(url) {
  if (!url) return null;
  if (url.includes('drive.google.com')) {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
  }
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let videoId = null;
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split(/[?#]/)[0];
    } else if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1]?.split(/[&#]/)[0];
    } else if (url.includes('/embed/')) {
      videoId = url.split('/embed/')[1]?.split(/[?#]/)[0];
    }
    if (videoId) {
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`;
    }
  }
  if (url.includes('facebook.com')) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=0`;
  }
  return url;
}

export default function EducationPointModal({ 
  point, 
  isOpen, 
  onClose,
  parentPillarTitle 
}) {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slideList = point?.images && point.images.length > 0 
    ? point.images.map(img => typeof img === 'string' ? img : img.src)
    : point?.image 
      ? [point.image] 
      : [];
  const totalSlides = slideList.length;

  // Reset slide index when modal opens or point changes
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
    }
  }, [isOpen, point?.id]);

  // Auto-slide every 2 seconds if multiple images exist
  useEffect(() => {
    if (!isOpen || totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2000);

    return () => clearInterval(interval);
  }, [isOpen, totalSlides]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && totalSlides > 1) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }
      if (e.key === 'ArrowLeft' && totalSlides > 1) {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent background scrolling while lightbox is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, totalSlides]);

  if (!mounted || !isOpen || !point) return null;

  const embedUrl = getEmbedUrl(point.videoUrl);

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop Blur Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity cursor-pointer"
      />

      {/* Close Button Top-Right */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white/90 hover:text-white border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:scale-110"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Lightbox Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-stone-950 flex flex-col z-10 my-auto focus:outline-none"
      >
        {/* Main High-Res Visual, Video Embed, or Sliding Image Carousel */}
        <div className={`relative w-full overflow-hidden bg-black select-none group ${embedUrl ? 'aspect-video' : 'h-[60vh] sm:h-[68vh] flex items-center justify-center'}`}>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={point.title}
              className="w-full h-full border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : totalSlides > 0 ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full h-full relative flex items-center justify-center"
                >
                  <img
                    src={slideList[currentSlide]}
                    alt={`${point.title} ${totalSlides > 1 ? `- Slide ${currentSlide + 1}` : ''}`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls when multiple sliding images exist */}
              {totalSlides > 1 && (
                <>
                  {/* Previous Slide Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
                    }}
                    aria-label="Previous slide"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md hover:scale-110 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Next Slide Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide((prev) => (prev + 1) % totalSlides);
                    }}
                    aria-label="Next slide"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md hover:scale-110 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Slide Counter Badge */}
                  <div className="absolute bottom-3 right-4 z-20 flex items-center space-x-2">
                    <div className="bg-black/65 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15 text-white/90 text-xs font-serif-body">
                      {currentSlide + 1} / {totalSlides}
                    </div>
                  </div>

                  {/* Bottom Center Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-1.5">
                    {slideList.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(dotIdx);
                        }}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          dotIdx === currentSlide 
                            ? 'w-6 bg-[#8b4a3c]' 
                            : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : null}
        </div>

        {/* Clean Caption Bar at the Bottom */}
        <div className="p-4 sm:p-5 bg-stone-900/95 border-t border-white/10 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-col space-y-1">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {parentPillarTitle && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs uppercase tracking-wider font-serif-elegant font-bold bg-[#8b4a3c] text-white shadow-sm">
                  {parentPillarTitle}
                </span>
              )}
              <h3 className="text-base sm:text-lg font-serif-elegant font-bold text-white tracking-wide">
                {point.title}
              </h3>
            </div>
            {point.modalSubtitle && (
              <p className="text-xs sm:text-sm font-serif-body text-stone-300 leading-relaxed">
                {point.modalSubtitle}
              </p>
            )}
          </div>
          {point.videoUrl ? (
            <a
              href={point.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-serif-body font-medium transition-all duration-200 border border-white/15 self-start sm:self-auto flex-shrink-0"
            >
              <span>{point.videoUrl.includes('facebook.com') ? 'Watch on Facebook' : 'Open Link'}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          ) : point.pdfUrl ? (
            <a
              href={point.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-[#8b4a3c] hover:bg-[#a65a4a] text-white text-xs sm:text-sm font-serif-body font-semibold transition-all duration-200 border border-white/20 shadow-md hover:shadow-lg self-start sm:self-auto flex-shrink-0 hover:scale-[1.02]"
            >
              <FileText className="w-3.5 h-3.5 mr-1" />
              <span>View Full PDF</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          ) : point.linkUrl ? (
            <a
              href={point.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-[#8b4a3c] hover:bg-[#a65a4a] text-white text-xs sm:text-sm font-serif-body font-semibold transition-all duration-200 border border-white/20 shadow-md hover:shadow-lg self-start sm:self-auto flex-shrink-0 hover:scale-[1.02]"
            >
              <span>{point.linkText || 'Register Now'}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          ) : null}
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
