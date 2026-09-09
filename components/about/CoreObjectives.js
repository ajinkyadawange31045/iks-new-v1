'use client';

import { motion } from 'framer-motion';
import { Anchor, Archive, Database, GraduationCap, Share } from 'lucide-react';

const objectives = [
  {
    title: 'Maritime & Artistic Traditions',
    description: 'Advance in-depth research in India\'s maritime and artistic traditions through dedicated teams and departments.',
    icon: Anchor,
  },
  {
    title: 'Traditional Knowledge Documentation',
    description: 'Document and preserve traditional knowledge systems, including oral narratives, visual cultures, and archival materials.',
    icon: Archive,
  },
  {
    title: 'Open-Access Digital Repositories',
    description: 'Build open-access digital repositories to support learning, research, and cultural engagement.',
    icon: Database,
  },
  {
    title: 'Academic Learning & Training',
    description: 'Foster academic learning and training through courses, workshops, internships, and field-based experiences.',
    icon: GraduationCap,
  },
  {
    title: 'Knowledge-Sharing & Collaboration',
    description: 'Promote knowledge-sharing through publications, conferences, exhibitions, and collaborations.',
    icon: Share,
  },
];

export default function CoreObjectives() {
  return (
    <section className="pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-elegant font-bold leading-tight text-[#5c3a2a] tracking-wider mb-4">
          Key Objectives
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
        <p className="mt-4 text-lg text-[#8b6f5e] font-serif-body">The fundamental goals that guide our work</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
        {objectives.map((objective, index) => {
          const Icon = objective.icon;
          return (
            <motion.div
              key={objective.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc((100%-5rem)/3)] flex flex-col"
            >
              <div className="flex flex-col items-center justify-center min-h-[260px] h-full research-card rounded-3xl shadow-xl p-8 text-center w-full hover:shadow-2xl transition-shadow relative z-0">
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2d7d7d] via-[#4a9d9d] to-[#2d7d7d] shadow-lg mx-auto relative z-10">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-serif-elegant font-semibold text-[#5c3a2a] tracking-wider mb-2 relative z-10">{objective.title}</h3>
                <p className="text-[#8b6f5e] text-sm md:text-base leading-relaxed font-serif-body relative z-10">{objective.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

