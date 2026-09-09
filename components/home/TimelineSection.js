'use client';

import { motion } from 'framer-motion';
import { Waves, BookOpen, Ship } from 'lucide-react';

const timelineData = [
  {
    year: '2022',
    title: 'The Need',
    description: 'For too long, critical aspects of the Indian maritime seafaring knowledge system remained fragmented and they were documented in isolation, remained disintegrated or silent in academic discourse, or lost within scattered archives.',
    icon: Waves,
  },
  {
    year: '2023',
    title: 'The Seed',
    description: 'This gap was identified and proposed to the Ministry of Education’s Indian Knowledge Systems (IKS) initiative. The application process in July 2023 to establish a Centre dedicated to India’s maritime and artistic traditions.',
    icon: BookOpen,
  },
  {
    year: '2024',
    title: 'The Spirit',
    description: 'The competition was intense - we were up against 84 academic proposals in the country, and were scrutinized and grilled through every possible perspective!',
    icon: Ship,
  },
];

export default function TimelineSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#c9a281]">
      {/* Top Golden Wave Strip (#e5bc83) - Framing Top of Journey */}
      <div className="relative w-full leading-none overflow-hidden select-none bg-[#f7ead8]">
        <svg
          viewBox="0 0 1440 160"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 md:h-28 block fill-[#e5bc83]"
        >
          {/* Layer 3 - Light gold ambient wave */}
          <path
            d="M0,0 C320,60 640,10 960,50 C1200,90 1360,30 1440,40 L1440,160 L0,160 Z"
            fill="#e5bc83"
            fillOpacity="0.45"
          />
          {/* Layer 2 - Medium gold flowing wave */}
          <path
            d="M0,20 C280,80 560,30 840,70 C1120,110 1320,50 1440,65 L1440,160 L0,160 Z"
            fill="#e5bc83"
            fillOpacity="0.65"
          />
          {/* Layer 1 - Solid gold base transitioning into timeline */}
          <path
            d="M0,50 C240,110 480,50 720,95 C1000,140 1240,75 1440,90 L1440,160 L0,160 Z"
            fill="#e5bc83"
            fillOpacity="1"
          />
        </svg>
      </div>

      {/* Main Timeline Content Area */}
      <div className="relative px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-14 sm:pb-20">
        {/* Background parchment texture */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(139, 111, 94, 0.05) 2px,
                rgba(139, 111, 94, 0.05) 4px
              )`,
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-14 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-elegant font-bold leading-tight text-[#5c3a2a] tracking-wider mb-4">
              Our Journey
            </h2>
            <div className="mx-auto mt-3 mb-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
            <p className="text-base sm:text-lg md:text-xl text-[#5c3a2a]/90 font-serif-body max-w-2xl mx-auto">
              From an identified vision to a nationally recognized Centre of excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative h-full flex flex-col"
                >
                  <div className="research-card rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#8b6f5e]/30 hover:-translate-y-1 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif-elegant font-bold text-[#5c3a2a] mb-3 sm:mb-4">
                        {item.title}
                      </h3>
                      <p className="text-[#8b6f5e] text-sm sm:text-base leading-relaxed mb-6 font-serif-body">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="relative pt-4 flex justify-end opacity-40">
                      <Icon
                        className={`w-9 h-9 sm:w-10 sm:h-10 ${
                          item.year === '2022'
                            ? 'text-[#2d7d7d]'
                            : item.year === '2023'
                            ? 'text-[#8b4a3c]'
                            : 'text-[#5c3a2a]'
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Golden Wave Strip (#e5bc83) - Framing Bottom of Journey */}
      <div className="relative w-full leading-none overflow-hidden select-none bg-[#f7ead8]">
        <svg
          viewBox="0 0 1440 200"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          className="w-full h-20 sm:h-28 md:h-36 block fill-[#e5bc83]"
        >
          {/* Main solid gold wave */}
          <path
            d="M0,160 C180,100 360,200 540,120 S900,80 1080,160 S1320,100 1440,140 L1440,0 L0,0 Z"
            fill="#c9a281"
          />
          {/* Bottom golden wave layers */}
          <path
            d="M0,160 C180,100 360,200 540,120 S900,80 1080,160 S1320,100 1440,140 L1440,200 L0,200 Z"
            fill="#e5bc83"
            fillOpacity="1"
          />
          <path
            d="M0,180 C240,130 480,190 720,140 S1200,100 1320,160 S1410,150 1440,160 L1440,200 L0,200 Z"
            fill="#e5bc83"
            fillOpacity="0.65"
          />
          <path
            d="M0,200 C300,150 600,200 900,160 S1350,120 1410,170 S1435,175 1440,180 L1440,200 L0,200 Z"
            fill="#e5bc83"
            fillOpacity="0.45"
          />
        </svg>
      </div>
    </section>
  );
}
