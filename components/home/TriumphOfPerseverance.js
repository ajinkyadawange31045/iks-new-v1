'use client';

import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Chhaya Goswami',
    role: 'Principal Investigator',
    profile: 'Centre for Indian Ocean and Transoceanic Studies, Somaiya School of Civilisation Studies, Somaiya Vidhyavihar University',
    image: '/cg.jpeg',
  },
  {
    name: 'Dr. Monalisa Behera',
    role: 'Assistant professor',
    profile: 'Somaiya School of Civilisation Studies, Somaiya Vidhyavihar University',
    image: 'https://ui-avatars.com/api/?name=Monalisa+Behera&background=8b4a3c&color=fff&size=256',
  },
  {
    name: 'Dr. Pallavi Nalawde-Jambhale',
    role: '',
    profile: 'KJSIDS, Somaiya Vidyavihar University',
    image: '/pnj.jpeg',
  },
  {
    name: 'Dr. Bhagyashree Bavare',
    role: '',
    profile: 'KJSIDS, Somaiya Vidyavihar University',
    image: 'https://ui-avatars.com/api/?name=Bhagyashree+Bavare&background=8b4a3c&color=fff&size=256',
  },
];

export default function TriumphOfPerseverance() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#e8d4c0] overflow-hidden">
      {/* <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(139, 111, 94, 0.05) 2px,
            rgba(139, 111, 94, 0.05) 4px
          )`
        }}></div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-elegant font-bold text-[#5c3a2a] leading-tight">
              TRIUMPH OF PERSEVERANCE
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-serif-body text-[#5c3a2a] leading-relaxed">
              Against the nation's finest proposals and the most rigorous scrutiny, our faculty's vision prevailed—culminating in the award of the IKS Maritime & Artistic Knowledge Centre in August 2023.
            </p>

            <p className="text-sm sm:text-base md:text-xl font-serif-body text-[#5c3a2a] leading-relaxed">
              The journey to establish the Centre was far from easy. Our faculty came together, uniting decades of scholarship to articulate a vision aimed at bridging critical gaps in maritime and artistic research within the Indian Knowledge Systems framework.           
            </p>

            <p className="text-sm sm:text-base md:text-xl font-serif-body text-[#5c3a2a] leading-relaxed">
              Yet, through resolute determination, intellectual depth, and a powerful collective spirit, the vision endured. The Centre, which formally began its journey in September 2023, now stands as a living testament to that perseverance—an institutional embodiment of scholarly commitment, national alignment, and academic excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col w-full overflow-hidden"
          >
            <div className="relative w-full overflow-hidden">
              <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="flex">
                  {teamMembers.map((member) => (
                    <div key={member.name} className="flex-[0_0_100%] min-w-0 px-2">
                      <div className="py-4 sm:p-6 md:p-8 flex flex-col items-center">
                        <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-[#8b6f5e]/30 mb-3 sm:mb-5 flex-shrink-0">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-serif-elegant font-bold text-[#5c3a2a] text-center mb-1 leading-tight px-2">
                          {member.name}
                        </h3>
                        {member.role && (
                          <p className="text-[11px] sm:text-xs md:text-sm font-serif-body font-medium text-[#8b4a3c] text-center leading-snug px-2">
                            {member.role}
                          </p>
                        )}
                        <p className="text-[10px] sm:text-xs font-serif-body text-[#8b6f5e] text-center leading-snug mt-1 px-4">
                          {member.profile}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollPrev}
                className="absolute left-1 top-16 sm:top-20 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all z-10"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#5c3a2a]" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-1 top-16 sm:top-20 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all z-10"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#5c3a2a]" />
              </button>
            </div>

            <p className="text-xs sm:text-sm font-serif-body text-[#5c3a2a] mt-3 text-center leading-relaxed">
              The founding team whose dedication made this Centre possible
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

