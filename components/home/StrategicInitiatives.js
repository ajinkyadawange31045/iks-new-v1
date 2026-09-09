'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { maritimeResearchAreas } from '@/data/maritimeResearch';
import MaritimeResearchModal from '@/components/home/MaritimeResearchModal';

const artisticAreas = [
  {
    title: 'Chitrakathi and Visual Storytelling',
    description: 'Studying traditional narrative art from Pinguli, Paithan, and other regions.',
  },
  {
    title: 'Performative and Oral Folk Cultures',
    description: 'Connecting painting traditions with shadow puppetry, folk theatre, and regional literature.',
  },
  {
    title: 'Provenance and Materiality Studies',
    description: 'Tracing the history, ownership, and movement of paintings across institutions.',
  },
  {
    title: 'Regional Art Styles and Iconography',
    description: 'Mapping stylistic developments and aesthetic influences.',
  },
  {
    title: 'Visual Culture and Community Engagement',
    description: 'Understanding how local art forms shape identity, memory, and heritage.',
  },
];

const projects = [
  {
    category: 'Maritime Projects',
    items: [
      {
        title: 'Digital Repository of Seafaring Knowledge',
        description: 'A platform documenting archival records, oral testimonies, and traditional maritime techniques.',
      },
      {
        title: 'Glossary of Maritime Lexicons',
        description: 'A curated, multilingual glossary of seafaring terms used along the western Indian coast.',
      },
      {
        title: 'Field Documentation of Port Architecture',
        description: 'Visual and architectural mapping of key maritime towns like Mandvi, Veraval, and Sikka.',
      },
      {
        title: 'Naval Itihaas App (In Development)',
        description: 'A digital application for researchers to explore, contribute to, and engage with maritime history.',
      },
    ],
  },
  {
    category: 'Artistic Projects',
    items: [
      {
        title: 'Chitrakathi Digital Archive',
        description: 'A visual database indexing artworks with provenance, location, and stylistic details.',
      },
      {
        title: 'Comparative Study of Painting Traditions',
        description: 'Field-based and museum research across Maharashtra, Karnataka, and Andhra Pradesh.',
      },
      {
        title: 'Student Engagement through Art Workshops',
        description: 'Practical and immersive learning opportunities exploring symbolism, materiality, and regional styles.',
      },
      {
        title: 'Course on Visual and Material Folk Culture (Proposed)',
        description: 'A curriculum module awaiting academic board approval.',
      },
    ],
  },
];

export default function StrategicInitiatives({ maritimeRef, artisticRef }) {
  const [selectedMaritimeArea, setSelectedMaritimeArea] = useState(null);
  const [isMaritimeModalOpen, setIsMaritimeModalOpen] = useState(false);

  const handleOpenMaritimeModal = (area) => {
    setSelectedMaritimeArea(area);
    setIsMaritimeModalOpen(true);
  };

  const handleCloseMaritimeModal = () => {
    setIsMaritimeModalOpen(false);
  };

  return (
    <section className="pb-16 bg-[#f7ead8]">
      {/* Maritime Traditions Research Areas Header */}
      <motion.div
        ref={maritimeRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-elegant font-bold leading-tight text-[#5c3a2a] tracking-wider mb-4">
          Maritime Traditions – Research Areas
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#4a9d9d] to-[#2d7d7d] opacity-80"></div>
        <p className="mt-4 text-lg text-[#8b6f5e] font-serif-body">
          Exploring India&apos;s rich maritime heritage and traditions
        </p>
      </motion.div>

      {/* 5-Part Interactive Visual Cards (3 in Top Row, 2 Centered in Bottom Row) */}
      <div className="flex flex-wrap justify-center gap-8 lg:gap-10 mb-16">
        {maritimeResearchAreas.map((area, index) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleOpenMaritimeModal(area)}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc((100%-5rem)/3)] flex flex-col group cursor-pointer"
          >
            <div className="flex flex-col h-full research-card rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-5 sm:p-6 text-center border border-[#8b6f5e]/30 group-hover:border-[#2d7d7d]/50 group-hover:-translate-y-1.5 relative overflow-hidden">
              
              {/* Strong 16:9 Visual Image */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-4 bg-stone-900 shadow-md border border-[#8b6f5e]/20">
                <img
                  src={area.coverImage}
                  alt={area.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-serif-elegant font-semibold text-[#5c3a2a] tracking-wider mb-2 group-hover:text-[#2d7d7d] transition-colors relative z-10 leading-snug">
                {area.title}
              </h3>

              {/* Short Supporting Description */}
              <p className="text-[#8b6f5e] text-sm md:text-base leading-relaxed font-serif-body relative z-10 mb-2 flex-1">
                {area.cardDescription}
              </p>

              {/* Bottom-Right Arrow Indicator without excess space */}
              <div className="flex justify-end pt-1 mt-auto">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2d7d7d]/10 group-hover:bg-[#2d7d7d] text-[#2d7d7d] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Artistic Traditions Research Areas */}
      <motion.div
        ref={artisticRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-elegant font-bold leading-tight text-[#5c3a2a] tracking-wider mb-4">
          Artistic Traditions – Research Areas
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#8b4a3c] via-[#a65a4a] to-[#8b4a3c] opacity-80"></div>
        <p className="mt-4 text-lg text-[#8b6f5e] font-serif-body">
          Documenting and preserving India&apos;s artistic heritage
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 lg:gap-10 mb-16">
        {artisticAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc((100%-5rem)/3)] flex flex-col"
          >
            <div className="flex flex-col items-center justify-center min-h-[260px] h-full research-card rounded-3xl shadow-xl p-8 text-center w-full hover:shadow-2xl transition-shadow relative z-0">
              <h3 className="text-lg md:text-xl font-serif-elegant font-semibold text-[#5c3a2a] tracking-wider mb-2 relative z-10">{area.title}</h3>
              <p className="text-[#8b6f5e] text-sm md:text-base leading-relaxed font-serif-body relative z-10">{area.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Development Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-elegant font-bold leading-tight text-[#5c3a2a] tracking-wider mb-4">
          Project Development
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
        <p className="mt-4 text-lg text-[#8b6f5e] font-serif-body">
          Current and planned projects advancing our research initiatives
        </p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Maritime Projects Column */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-elegant font-bold leading-tight text-[#2d7d7d] tracking-wider mb-4 text-center">
            Maritime Projects
          </h3>
          <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#4a9d9d] to-[#2d7d7d] opacity-80"></div>
          <div className="grid gap-8">
            {projects[0].items.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center research-card rounded-3xl shadow-xl p-8 text-center w-full h-full hover:shadow-2xl transition-shadow relative z-0">
                  <h4 className="text-lg md:text-xl font-serif-elegant font-semibold text-[#2d7d7d] tracking-wider mb-2 relative z-10">
                    {project.title}
                  </h4>
                  <p className="text-[#8b6f5e] text-sm md:text-base leading-relaxed font-serif-body relative z-10">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Artistic Projects Column */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-elegant font-bold leading-tight text-[#8b4a3c] tracking-wider mb-4 text-center">
            Artistic Projects
          </h3>
          <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#8b4a3c] via-[#a65a4a] to-[#8b4a3c] opacity-80"></div>
          <div className="grid gap-8">
            {projects[1].items.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center research-card rounded-3xl shadow-xl p-8 text-center w-full h-full hover:shadow-2xl transition-shadow relative z-0">
                  <h4 className="text-lg md:text-xl font-serif-elegant font-semibold text-[#8b4a3c] tracking-wider mb-2 relative z-10">
                    {project.title}
                  </h4>
                  <p className="text-[#8b6f5e] text-sm md:text-base leading-relaxed font-serif-body relative z-10">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Maritime Research Detail Modal */}
      <MaritimeResearchModal
        area={selectedMaritimeArea}
        isOpen={isMaritimeModalOpen}
        onClose={handleCloseMaritimeModal}
        onSelectArea={(newArea) => setSelectedMaritimeArea(newArea)}
        allAreas={maritimeResearchAreas}
      />
    </section>
  );
}
