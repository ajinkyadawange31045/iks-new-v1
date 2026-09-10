'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Pause, 
  Play, 
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export default function ArtisticResearchModal({ 
  area, 
  isOpen, 
  onClose, 
  onSelectArea, 
  allAreas = [] 
}) {
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoPlayDuration = 3800; // 3.8 seconds per slide
  const progressIntervalRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const images = area?.images || [];
  const totalImages = images.length;

  // Reset image index when opened or area changes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setProgress(0);
    }
  }, [isOpen, area?.id]);

  const handleNextImage = useCallback(() => {
    if (totalImages <= 1) return;
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    setProgress(0);
  }, [totalImages]);

  const handlePrevImage = useCallback(() => {
    if (totalImages <= 1) return;
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    setProgress(0);
  }, [totalImages]);

  // Auto-scroll timer logic
  useEffect(() => {
    if (!isOpen || isPaused || totalImages <= 1) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    const progressIncrement = (stepMs / autoPlayDuration) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNextImage();
          return 0;
        }
        return prev + progressIncrement;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isOpen, isPaused, totalImages, handleNextImage]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevImage();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleNextImage, handlePrevImage, onClose]);

  if (!mounted || !isOpen || !area) return null;

  const currentAreaIndex = allAreas.findIndex((item) => item.id === area.id);
  const prevArea = currentAreaIndex > 0 ? allAreas[currentAreaIndex - 1] : allAreas[allAreas.length - 1];
  const nextArea = currentAreaIndex < allAreas.length - 1 ? allAreas[currentAreaIndex + 1] : allAreas[0];

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity cursor-pointer"
      />

      {/* Modal Dialog Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-3xl lg:max-w-4xl max-h-[92vh] research-card bg-[#faf5ed] border border-[#8b6f5e]/30 shadow-2xl rounded-3xl overflow-hidden flex flex-col z-10 my-auto focus:outline-none"
      >
        {/* Modal Header */}
        <div className="relative z-20 px-6 sm:px-8 py-4 bg-[#f5ecdf] border-b border-[#8b6f5e]/20 flex items-center justify-between flex-shrink-0">
          <h2 className="text-xl sm:text-2xl font-serif-elegant font-bold text-[#5c3a2a] tracking-wide pr-4">
            {area.title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-[#5c3a2a]/10 hover:bg-[#8b4a3c] text-[#5c3a2a] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 px-6 sm:px-8 py-6 space-y-6">
          
          {/* 16:9 Auto-scrolling Image Carousel */}
          {totalImages > 0 && (
            <div 
              className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-[#8b6f5e]/25 bg-stone-900 group select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Image Transition View */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="w-full h-full relative"
                >
                  <img
                    src={images[currentImageIndex]?.src}
                    alt={images[currentImageIndex]?.caption || area.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Gradient for Caption Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Auto-scroll Progress Indicator */}
              {totalImages > 1 && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-20 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#8b4a3c] to-[#a65a4a] transition-all ease-linear"
                    style={{ width: `${progress}%`, transitionDuration: '50ms' }}
                  />
                </div>
              )}

              {/* Caption and Counter */}
              <div className="absolute bottom-3.5 left-4 right-4 z-20 flex items-end justify-between gap-2 pointer-events-none">
                <div className="max-w-md bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white">
                  <p className="text-xs sm:text-sm font-serif-body font-medium leading-snug">
                    {images[currentImageIndex]?.caption || area.title}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-white/90 text-xs font-serif-body">
                    {currentImageIndex + 1} / {totalImages}
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsPaused((prev) => !prev)}
                    className="pointer-events-auto w-6 h-6 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
                  >
                    {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
                  </button>
                </div>
              </div>

              {/* Previous Slide Button */}
              {totalImages > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-all shadow-md hover:scale-105 z-20 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* Next Slide Button */}
              {totalImages > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-all shadow-md hover:scale-105 z-20 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}

              {/* Dot Indicators */}
              {totalImages > 1 && (
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5">
                  {images.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => {
                        setCurrentImageIndex(dotIdx);
                        setProgress(0);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === currentImageIndex 
                          ? 'w-5 bg-[#a65a4a]' 
                          : 'w-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Jump to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Documentary Narrative Caption */}
          <div className="pt-1">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#f7ead8]/80 border border-[#8b6f5e]/25 shadow-sm hover:border-[#8b4a3c]/35 transition-colors">
              <p className="text-sm sm:text-base md:text-[15.5px] text-[#5c3a2a] font-serif-body leading-relaxed">
                {area.summary || (Array.isArray(area.points) ? area.points.join(' ') : area.points)}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Bottom Switcher */}
        {allAreas.length > 1 && (
          <div className="px-6 sm:px-8 py-3 bg-[#f5ecdf] border-t border-[#8b6f5e]/20 flex items-center justify-between flex-shrink-0">
            <button
              type="button"
              onClick={() => onSelectArea(prevArea)}
              className="flex items-center space-x-1.5 text-xs sm:text-sm font-serif-body font-semibold text-[#5c3a2a] hover:text-[#8b4a3c] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous: {prevArea.title}</span>
              <span className="sm:hidden">Previous</span>
            </button>

            <span className="text-xs text-[#8b6f5e] font-serif-body">
              {currentAreaIndex + 1} of {allAreas.length}
            </span>

            <button
              type="button"
              onClick={() => onSelectArea(nextArea)}
              className="flex items-center space-x-1.5 text-xs sm:text-sm font-serif-body font-semibold text-[#5c3a2a] hover:text-[#8b4a3c] transition-colors cursor-pointer"
            >
              <span className="hidden sm:inline">Next: {nextArea.title}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </motion.div>
    </div>,
    document.body
  );
}
