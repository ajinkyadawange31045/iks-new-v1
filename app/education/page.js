'use client';

import EducationHero from '@/components/education/EducationHero';
import EducationShowcase from '@/components/education/EducationShowcase';

export default function EducationPage() {
  return (
    <div className="w-full">
      <link rel="preconnect" href="https://drive.google.com" />
      <link rel="dns-prefetch" href="https://drive.google.com" />
      <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
      <EducationHero />
      <EducationShowcase />
    </div>
  );
}
