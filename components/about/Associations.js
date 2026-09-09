'use client';

import { motion } from 'framer-motion';

const associations = [
  {
    name: 'IKS Division, Ministry of Education (Govt. of India)',
    description: 'The central funding and visioning body supporting research on indigenous knowledge systems across India. Provides policy direction and financial support for the Centre.',
    logo: '/svu-logo.png',
  },
  {
    name: 'Somaiya Vidyavihar University',
    description: 'Host institution offering academic infrastructure, faculty, student engagement, and interdisciplinary support for research, teaching, and dissemination.',
    logo: '/svu-logo.png',
  },
];

export default function Associations() {
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
          Our Associations
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
        <p className="mt-4 text-lg text-[#8b6f5e] font-serif-body">
          Working with leading institutions to advance our mission
        </p>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2">
        {associations.map((association, index) => (
          <motion.div
            key={association.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center research-card rounded-3xl shadow-xl overflow-hidden px-6 py-8 h-full">
              <div className="flex flex-col items-center w-full">
                <div className="w-24 h-24 research-card rounded-2xl shadow-lg border border-[#8b6f5e]/30 flex items-center justify-center mb-6 overflow-hidden">
                  <img
                    src={association.logo}
                    alt={association.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex flex-col items-center text-center px-2 pt-0 pb-2">
                  <h3 className="text-lg md:text-xl font-serif-elegant font-semibold text-[#5c3a2a] mb-2 tracking-wider">{association.name}</h3>
                </div>
                <div className="flex-1 flex flex-col items-center text-center px-2 pb-2">
                  <p className="text-[#8b6f5e] text-sm md:text-base leading-relaxed font-serif-body">{association.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

