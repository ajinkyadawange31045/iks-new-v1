'use client';

import { motion } from 'framer-motion';

export default function IdeasSection() {
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
          Vision & Mission
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
        <p className="mt-4 text-lg text-[#8b6f5e] font-serif-body">
          Preserving, exploring, and advancing India's rich knowledge heritage
        </p>
      </motion.div>

      <div className="research-card rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
        <p className="text-lg md:text-xl lg:text-2xl text-[#5c3a2a] font-serif-body leading-relaxed text-center">
          Our vision is to become a leading academic centre that not only preserves and studies India's rich maritime and artistic knowledge traditions, but also brings them into meaningful dialogue with contemporary scholarship—honouring their cultural depth while making them accessible, relevant, and inspiring for future generations.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
        {[
          {
            title: "Research & Departments",
            description: "To nurture in-depth research into India's maritime and artistic traditions through two dedicated departments."
          },
          {
            title: "Documentation & Preservation",
            description: "To thoughtfully document and preserve oral histories, visual cultures, and indigenous knowledge systems."
          },
          {
            title: "Digital Repositories",
            description: "To build open-access digital repositories that invite exploration, learning, and collaboration."
          },
          {
            title: "Learning Experiences",
            description: "To offer meaningful learning experiences through student projects, fieldwork, and engaging academic courses."
          },
          {
            title: "Community Engagement",
            description: "To connect with wider communities through publications, exhibitions, and conversations that bring traditional knowledge to life."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc((100%-5rem)/3)] flex flex-col"
          >
            <div className="flex flex-col items-center justify-center min-h-[200px] h-full research-card rounded-3xl shadow-xl p-8 text-center w-full hover:shadow-2xl transition-shadow relative z-0">
              <h3 className="text-lg md:text-xl font-serif-elegant font-semibold text-[#5c3a2a] tracking-wider mb-3 relative z-10">{item.title}</h3>
              <p className="text-[#8b6f5e] text-sm md:text-base leading-relaxed font-serif-body relative z-10">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

