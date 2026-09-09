'use client';

import { motion } from 'framer-motion';
import { Camera, Video, Image, Grid3X3 } from 'lucide-react';

export default function GalleryHero({ count = 0 }) {
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
            <div className="flex items-center justify-center mb-6">
              <motion.div
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex items-center space-x-3"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#2d7d7d] via-[#4a9d9d] to-[#2d7d7d] rounded-full flex items-center justify-center shadow-lg">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#8b4a3c] via-[#a65a4a] to-[#8b4a3c] rounded-full flex items-center justify-center shadow-lg">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#2d7d7d] via-[#4a9d9d] to-[#2d7d7d] rounded-full flex items-center justify-center shadow-lg">
                  <Image className="h-6 w-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#8b4a3c] via-[#a65a4a] to-[#8b4a3c] rounded-full flex items-center justify-center shadow-lg">
                  <Grid3X3 className="h-6 w-6 text-white" />
                </div>
              </motion.div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl hero-h1 font-serif-elegant font-bold tracking-tight text-[#5c3a2a] mb-4 sm:mb-6">
              Visual Gallery
            </h1>
            <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl hero-subtitle text-[#8b6f5e] mb-6 sm:mb-8 font-serif-body max-w-3xl mx-auto leading-relaxed">
              Explore the rich visual diversity of India's knowledge systems through our selected collection of images and videos.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mt-6"
            >
              <div className="text-3xl font-serif-elegant font-bold text-[#5c3a2a] mb-2">{count}</div>
              <div className="text-sm text-[#8b6f5e] font-serif-body">Images</div>
            </motion.div>
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
