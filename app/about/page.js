import AboutHero from '@/components/about/AboutHero';
import IdeasSection from '@/components/about/IdeasSection';
import ProjectLeads from '@/components/about/ProjectLeads';
import Associations from '@/components/about/Associations';
import CoreObjectives from '@/components/about/CoreObjectives';

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutHero />
      <div className="bg-[#f7ead8] py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          <IdeasSection />
          <CoreObjectives />
          <ProjectLeads />
          <Associations />
        </div>
      </div>
    </div>
  );
}
