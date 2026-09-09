'use client';

import EducationHero from '@/components/education/EducationHero';
import EducationShowcase from '@/components/education/EducationShowcase';

export default function EducationPage() {
  return (
    <div className="w-full">
      <EducationHero />
      <EducationShowcase />
    </div>
  );
}
