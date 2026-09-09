'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Film } from 'lucide-react';

const documentaryConfig = {
  badge: 'DOCUMENTARY • MARITIME HERITAGE',
  title: 'Explore Our Documentary on Shipbuilding',
  subtitle: 'A glimpse into the people, precision, and perseverance behind indigenous seafaring craft.',
  driveUrl: 'https://drive.google.com/file/d/1gl4emS5af2VtU-ds5vkSGqPpPKe3RLjl/view?ts=6a957c5d',
  poster: '/images/IMG_5898.jpg',
  aspectRatio: '16/9',
};

function getDriveEmbedUrl(url) {
  if (!url) return '';
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview?autoplay=1`;
  }
  return url;
}

export default function DocumentarySection({ config = documentaryConfig }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = getDriveEmbedUrl(config.driveUrl);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsPlaying(true);
      }
    },
    []
  );

  return (
    <section className="relative w-full" aria-labelledby="documentary-heading">
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b6f5e]/10 border border-[#8b6f5e]/20 mb-4">
          <Film className="w-3.5 h-3.5 text-[#2d7d7d]" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-serif-body font-semibold tracking-wider text-[#5c3a2a] uppercase">
            {config.badge}
          </span>
        </div>

        <h2
          id="documentary-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-elegant font-bold text-[#5c3a2a] tracking-tight leading-tight px-4"
        >
          {config.title}
        </h2>

        <div className="mx-auto mt-3 mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80" />

        <p className="text-base sm:text-lg md:text-xl font-serif-body text-[#8b6f5e] max-w-2xl mx-auto leading-relaxed px-4">
          {config.subtitle}
        </p>
      </motion.div>

      {/* Video / Poster Showcase Container */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative mx-auto w-full max-w-5xl"
      >
        <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#8b6f5e]/30 bg-[#2d221b] group">
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.button
                key="poster"
                type="button"
                onClick={handlePlay}
                onKeyDown={handleKeyDown}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                aria-label={`Play ${config.title}`}
                className="relative w-full h-full block text-left cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2d7d7d] focus-visible:ring-offset-2"
              >
                {/* Poster Image */}
                <img
                  src={config.poster}
                  alt="Documentary on traditional shipbuilding craftsmanship"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Cinematic Vignette / Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30 transition-opacity duration-300 group-hover:from-black/80 group-hover:via-black/35" />

                {/* Film grain / parchment overlay texture */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      rgba(139, 111, 94, 0.08) 2px,
                      rgba(139, 111, 94, 0.08) 4px
                    )`,
                  }}
                />

                {/* Centered Play Trigger Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Outer ambient glow ring */}
                    <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#2d7d7d]/30 blur-md group-hover:bg-[#2d7d7d]/50 group-hover:scale-110 transition-all duration-500" />

                    {/* Main play circle */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#2d7d7d] to-[#1e5959] text-white flex items-center justify-center shadow-2xl border-2 border-white/30 transform group-hover:scale-105 transition-all duration-300">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 ml-1 text-white fill-white drop-shadow-md" />
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 flex items-end justify-between pointer-events-none">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded text-[11px] sm:text-xs font-serif-body font-semibold tracking-wider bg-black/50 text-[#f7ead8] backdrop-blur-sm border border-white/10 mb-2">
                      EXCLUSIVE FEATURE
                    </span>
                    <p className="text-sm sm:text-base md:text-lg font-serif-elegant font-bold text-white drop-shadow-sm line-clamp-1">
                      Traditional Wooden Shipbuilding & Maritime Knowledge
                    </p>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs md:text-sm font-serif-body text-[#f7ead8]/90 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Click to Watch
                  </span>
                </div>
              </motion.button>
            ) : (
              <motion.div
                key="player"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full absolute inset-0 bg-black"
              >
                <iframe
                  src={embedUrl}
                  title={config.title}
                  className="w-full h-full absolute inset-0 border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
