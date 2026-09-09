'use client';

import { motion } from 'framer-motion';

export default function Hero({ onExploreClick }) {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center bg-[#f7ead8] pt-16 sm:pt-20 pb-12 hero-responsive">
      <div className="container relative z-10 mx-auto px-4 py-1 sm:px-6 sm:py-2 md:py-4 lg:flex lg:items-center lg:px-8 hero-container">
        <div className="lg:w-full text-center pb-6 sm:pb-8 md:pb-12 hero-content">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-1 sm:mb-2 flex justify-center hero-logo"
          >
            <div className="relative inline-flex items-center justify-center">
              <img
                src="/home-logo1.png"
                alt="IKS Center Logo"
                width={200}
                height={200}
                className="object-contain w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 hero-logo-img"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-text"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#5c3a2a] mb-1 font-serif-body tracking-wide">
              Maritime and Artistic Traditions
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5c3a2a] mb-2 font-serif-body">
              IKS Research Center
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-elegant font-bold tracking-tight text-[#5c3a2a] mb-6 sm:mb-8">
              Somaiya Vidyavihar University
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            <p className="text-sm sm:text-base md:text-lg text-[#8b6f5e] mb-2 font-serif-body">
              Awarded by
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif-elegant font-bold text-[#5c3a2a] mb-1">
              Indian Knowledge Systems (IKS)
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif-elegant font-bold text-[#5c3a2a]">
              Division of Ministry of Education
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => onExploreClick && onExploreClick('timeline')}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl hero-cta text-[#8b4a3c] italic mb-6 sm:mb-8 font-serif-elegant font-semibold tracking-wide cursor-pointer hover:opacity-80 transition-opacity drop-shadow-sm"
          >
            Explore our fascinating journey!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => onExploreClick && onExploreClick('maritime')}
              className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-lg font-serif-body font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 transform hover:scale-105 bg-[#2d7d7d] text-white shadow-lg hover:bg-[#3a8f8f] hover:shadow-xl min-w-[180px] sm:min-w-[200px]"
            >
              Explore Maritime
            </button>
            <button
              onClick={() => onExploreClick && onExploreClick('artistic')}
              className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-lg font-serif-body font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 transform hover:scale-105 bg-[#c24a3a] text-white shadow-lg hover:bg-[#d45a4a] hover:shadow-xl min-w-[180px] sm:min-w-[200px]"
            >
              Explore Artistic
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
