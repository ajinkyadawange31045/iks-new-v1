'use client';

import { motion } from 'framer-motion';

export default function EventsHero() {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#f7ead8] pt-16 hero-responsive">
      <div className="container relative z-10 mx-auto px-4 py-2 sm:px-6 sm:py-4 md:py-6 lg:flex lg:items-center lg:px-8 hero-container">
        <div className="lg:w-full text-center pb-8 sm:pb-12 md:pb-16 hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-text"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl hero-h1 font-serif-elegant font-bold tracking-tight text-[#5c3a2a] mb-4 sm:mb-6">
              Our Events
            </h1>
            <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl hero-subtitle text-[#8b6f5e] mb-4 sm:mb-6 md:mb-8 font-serif-body max-w-3xl mx-auto leading-relaxed">
              Stay updated with our upcoming events and workshops.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Wave decoration at bottom - matching home page hero */}
      <div className="absolute bottom-0 left-0 right-0 w-full hero-wave" style={{ zIndex: 1 }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 300" 
          width="100%" 
          height="200"
          className="block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C180,100 360,200 540,120 S900,80 1080,160 S1320,100 1440,140 L1440,300 L0,300 Z"
            fill="#e5bc83"
            fillOpacity="1"
          />
          <path
            d="M0,180 C240,130 480,190 720,140 S1200,100 1320,160 S1410,150 1440,160 L1440,300 L0,300 Z"
            fill="#e5bc83"
            fillOpacity="0.65"
          />
          <path
            d="M0,200 C300,150 600,200 900,160 S1350,120 1410,170 S1435,175 1440,180 L1440,300 L0,300 Z"
            fill="#e5bc83"
            fillOpacity="0.45"
          />
        </svg>
      </div>
    </div>
  );
}
