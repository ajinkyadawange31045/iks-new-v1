'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function EducationPointModal({ 
  point, 
  isOpen, 
  onClose,
  parentPillarTitle 
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent background scrolling while lightbox is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen || !point) return null;

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

      {/* Lightbox Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-stone-950 flex flex-col z-10 my-auto focus:outline-none"
      >
        {/* Main High-Res Visual */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          {point.image && (
            <img
              src={point.image}
              alt={point.title}
              className="w-full h-full object-contain sm:object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Clean Caption Bar at the Bottom */}
        <div className="p-4 sm:p-6 bg-stone-900/95 border-t border-white/10 text-white flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            {parentPillarTitle && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs uppercase tracking-wider font-serif-elegant font-bold bg-[#8b4a3c] text-white">
                {parentPillarTitle}
              </span>
            )}
            <h3 className="text-base sm:text-lg font-serif-elegant font-bold text-white tracking-wide">
              {point.title}
            </h3>
          </div>

          {point.description && (
            <p className="text-xs sm:text-sm text-stone-300 font-serif-body leading-relaxed pt-1">
              {point.description}
            </p>
          )}
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
