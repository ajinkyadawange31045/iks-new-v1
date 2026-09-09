'use client';

import { useRef } from 'react';
import Hero from '@/components/home/Hero';
import TimelineSection from '@/components/home/TimelineSection';
import DocumentarySection from '@/components/home/DocumentarySection';
import TriumphOfPerseverance from '@/components/home/TriumphOfPerseverance';
import StrategicInitiatives from '@/components/home/StrategicInitiatives';
import HomeGallery from '@/components/home/HomeGallery';

export default function Home() {
  const timelineRef = useRef(null);
  const maritimeRef = useRef(null);
  const artisticRef = useRef(null);

  const handleExploreClick = (target) => {
    const offset = 150; // Offset to prevent title from being cut off
    
    if (target === 'timeline') {
      const element = timelineRef.current;
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (target === 'maritime') {
      const element = maritimeRef.current;
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (target === 'artistic') {
      const element = artisticRef.current;
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="w-full">
      <Hero onExploreClick={handleExploreClick} />
      
      {/* Timeline Section - always visible */}
      <div ref={timelineRef} className="relative w-full">
        <TimelineSection />
      </div>

      {/* Documentary Video Section */}
      <div className="bg-[#f7ead8] pt-6 sm:pt-12 pb-6 sm:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DocumentarySection />
        </div>
      </div>

      {/* Triumph of Perseverance Section - Full Width Band */}
      <TriumphOfPerseverance />
      
      {/* Strategic Initiatives Section */}
      <div className="bg-[#f7ead8] py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StrategicInitiatives maritimeRef={maritimeRef} artisticRef={artisticRef} />
        </div>
      </div>

      <HomeGallery />
    </div>
  );
}
