'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Hammer, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Globe,
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { educationPillars } from '@/data/educationData';
import EducationPointModal, { getEmbedUrl } from '@/components/education/EducationPointModal';

// Icon Map helper
const iconComponents = {
  Hammer,
  Users,
  BookOpen,
  GraduationCap,
  Briefcase,
  Globe,
};

// Collect video URLs to lazy load once page loads
const embeddedVideoUrls = educationPillars
  .flatMap((pillar) => pillar.points || [])
  .filter((point) => point.videoUrl)
  .map((point) => getEmbedUrl(point.videoUrl))
  .filter(Boolean);

export default function EducationShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [selectedPillarTitle, setSelectedPillarTitle] = useState('');
  const [isPointModalOpen, setIsPointModalOpen] = useState(false);
  const [shouldLazyLoadVideos, setShouldLazyLoadVideos] = useState(false);
  
  const cardRefs = useRef([]);

  // Start background lazy loading of embedded video(s) once page finishes loading
  useEffect(() => {
    const startLazyLoading = () => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(() => setShouldLazyLoadVideos(true));
      } else {
        setShouldLazyLoadVideos(true);
      }
    };

    if (typeof document !== 'undefined') {
      if (document.readyState === 'complete') {
        const timer = setTimeout(startLazyLoading, 800);
        return () => clearTimeout(timer);
      } else {
        window.addEventListener('load', startLazyLoading, { once: true });
        const fallbackTimer = setTimeout(startLazyLoading, 2500);
        return () => {
          window.removeEventListener('load', startLazyLoading);
          clearTimeout(fallbackTimer);
        };
      }
    }
  }, []);

  const handleOpenPointModal = (point, parentTitle) => {
    setSelectedPoint(point);
    setSelectedPillarTitle(parentTitle);
    setIsPointModalOpen(true);
  };

  const handleClosePointModal = () => {
    setIsPointModalOpen(false);
  };

  const scrollToCard = (index) => {
    setActiveIdx(index);
    if (cardRefs.current[index]) {
      const el = cardRefs.current[index];
      const navOffset = 130;
      const elRect = el.getBoundingClientRect();
      const targetScroll = window.pageYOffset + elRect.top - navOffset;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Accurate scroll spy using getBoundingClientRect relative to viewport reading line
  useEffect(() => {
    const handleScroll = () => {
      const readingLine = window.innerHeight * 0.4;
      let currentActive = 0;

      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= readingLine) {
          currentActive = index;
        }
      });

      setActiveIdx(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-[#f7ead8] py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#8b4a3c]/10 border border-[#8b4a3c]/25 text-[#8b4a3c] text-xs sm:text-sm font-serif-elegant font-semibold tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>ACADEMIC PILLARS • PEDAGOGY • OUTREACH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-elegant font-bold text-[#5c3a2a] tracking-wider mb-3">
            Educational Initiatives & Research Spotlight
          </h2>
          <div className="mx-auto mt-2 mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#8b4a3c] via-[#a65a4a] to-[#8b4a3c] opacity-80" />
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#8b6f5e] font-serif-body leading-relaxed">
            Bridging traditional wisdom with contemporary academic rigor through fieldwork, digitization, and interdisciplinary learning.
          </p>
        </div>

        {/* Dual-Column Layout: Left Sticky Navigation Sidebar + Right Stacked Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Sticky Navigation Sidebar (Text/Pill items only, no image) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-3">
            {educationPillars.map((pillar, idx) => {
              const IconComp = iconComponents[pillar.iconName] || Hammer;
              const isActive = activeIdx === idx;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#8b4a3c] to-[#a65a4a] text-white shadow-xl scale-[1.02] border-[#8b4a3c]'
                      : 'research-card bg-[#faf5ed] text-[#5c3a2a] border-[#8b6f5e]/25 hover:border-[#8b4a3c]/40 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#8b4a3c]/10 text-[#8b4a3c]'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className={`font-serif-elegant font-bold text-base sm:text-lg leading-snug ${
                        isActive ? 'text-white' : 'text-[#5c3a2a]'
                      }`}>
                        {pillar.title}
                      </h4>
                      <p className={`text-xs sm:text-sm font-serif-body ${
                        isActive ? 'text-white/80' : 'text-[#8b6f5e]'
                      }`}>
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    isActive ? 'text-white translate-x-1' : 'text-[#8b6f5e]/50'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Stacked Cards One Below the Other */}
          <div className="lg:col-span-7 space-y-10 sm:space-y-12">
            {educationPillars.map((pillar, index) => {
              const IconComp = iconComponents[pillar.iconName] || Hammer;

              return (
                <motion.div
                  key={pillar.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  id={`pillar-${pillar.id}`}
                  className="research-card bg-[#faf5ed] rounded-3xl shadow-xl p-6 sm:p-8 border border-[#8b6f5e]/30 relative overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#8b4a3c]/15 to-[#8b4a3c]/5 text-[#8b4a3c] flex items-center justify-center flex-shrink-0 shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif-elegant font-bold text-[#5c3a2a] leading-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-serif-body text-[#8b6f5e]">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-serif-elegant font-bold text-white bg-gradient-to-r from-[#2d7d7d] to-[#4a9d9d] shadow-sm">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Card Description */}
                  <p className="text-[#8b6f5e] text-sm sm:text-base font-serif-body leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  {/* Light, Clean List of Points */}
                  <ul className="space-y-1.5 pt-2 border-t border-[#8b6f5e]/15">
                    {pillar.points?.map((point) => {
                      const hasModalContent = !point.unclickable && !!(
                        point.image || 
                        (point.images && point.images.length > 0) || 
                        point.videoUrl || 
                        point.pdfUrl
                      );

                      if (!hasModalContent) {
                        return (
                          <li key={point.id} className="py-2.5 px-3 rounded-xl border-b border-[#8b6f5e]/10 last:border-b-0 select-text">
                            <div className="text-sm sm:text-base font-serif-body text-[#5c3a2a] flex items-baseline space-x-2.5 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#8b4a3c]/70 flex-shrink-0 self-center" />
                              <span>
                                {point.description ? (
                                  <>
                                    <strong className="font-semibold text-[#5c3a2a]">{point.title}:</strong>{' '}
                                    <span className="text-[#8b6f5e]">{point.description}</span>
                                  </>
                                ) : (
                                  <span className="text-[#5c3a2a]">{point.title}</span>
                                )}
                              </span>
                            </div>
                          </li>
                        );
                      }

                      return (
                        <li key={point.id}>
                          <button
                            type="button"
                            onClick={() => handleOpenPointModal(point, pillar.title)}
                            className="w-full py-2.5 px-3 rounded-xl text-left transition-all duration-200 flex items-center justify-between group hover:bg-[#8b4a3c]/8 cursor-pointer border-b border-[#8b6f5e]/10 last:border-b-0"
                          >
                            <span className="text-sm sm:text-base font-serif-body text-[#5c3a2a] group-hover:text-[#8b4a3c] transition-colors flex items-center space-x-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#8b4a3c]/70 group-hover:scale-125 transition-transform flex-shrink-0" />
                              <span>{point.title}</span>
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#8b6f5e]/40 group-hover:text-[#8b4a3c] transform group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Point Lightbox Modal */}
      <EducationPointModal
        point={selectedPoint}
        isOpen={isPointModalOpen}
        onClose={handleClosePointModal}
        parentPillarTitle={selectedPillarTitle}
      />

      {/* Background lazy loading for embedded video(s) after page loads */}
      {shouldLazyLoadVideos && embeddedVideoUrls.length > 0 && (
        <div
          aria-hidden="true"
          className="fixed -bottom-10 left-0 w-1 h-1 opacity-0 pointer-events-none overflow-hidden -z-50"
        >
          {embeddedVideoUrls.map((url, idx) => (
            <iframe
              key={idx}
              src={url}
              loading="lazy"
              tabIndex={-1}
              title="Background video lazy loader"
              className="w-1 h-1 border-0"
            />
          ))}
        </div>
      )}
    </section>
  );
}
