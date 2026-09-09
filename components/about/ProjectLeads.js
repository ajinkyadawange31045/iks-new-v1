'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Dr. Chhaya Goswami',
    role: 'Principal Investigator (PI)',
    bio: "Maritime historian and researcher with expertise in Indian Ocean trade networks, seafaring cultures, and archival studies. Leads the Maritime Traditions Department.",
    profile: 'Centre for Indian Ocean and Transoceanic Studies, Somaiya School of Civilisation Studies, Somaiya Vidhyavihar University',
    image: '/cg.jpeg',
  },
  {
    name: 'Dr. Monalisa Behera',
    role: 'Co-Principal Investigator (Artistic Traditions)',
    bio: "Art historian focusing on visual storytelling, Chitrakathi paintings, and performative folk cultures of the Deccan.",
    profile: 'Somaiya School of Civilisation Studies, Somaiya Vidhyavihar University',
    image: 'https://ui-avatars.com/api/?name=Monalisa+Behera&background=8b4a3c&color=fff&size=256',
  },
  {
    name: 'Dr. Pallavi Nalawde-Jambhale',
    role: 'Co-Principal Investigator',
    bio: "Scholar in Indian cultural studies, contributing to the ethnographic and pedagogical framework of the Centre.",
    profile: 'KJSIDS, Somaiya Vidyavihar University',
    image: '/pnj.jpeg',
  },
  {
    name: 'Dr. Bhagyashree Bavare',
    role: 'Co-Principal Investigator',
    bio: "Researcher in folk traditions and oral narratives, specializing in fieldwork and community engagement.",
    profile: 'KJSIDS, Somaiya Vidyavihar University',
    image: 'https://ui-avatars.com/api/?name=Bhagyashree+Bavare&background=8b4a3c&color=fff&size=256',
  },
];

export default function ProjectLeads() {
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
          Team Members
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
        <p className="mt-4 text-lg text-[#8b6f5e] font-serif-body">
          Meet the experts leading our research initiatives
        </p>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-full flex flex-col items-center research-card rounded-3xl shadow-xl transition-transform duration-300 hover:scale-[1.03] overflow-hidden px-6 py-8">
              <div className="flex flex-col items-center w-full">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 research-card rounded-full shadow-lg border-2 border-[#8b6f5e]/30 flex items-center justify-center mb-6 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center text-center px-2 pt-0 pb-2">
                  <h3 className="text-lg md:text-xl font-serif-elegant font-semibold text-[#5c3a2a] mb-2 tracking-wider">{member.name}</h3>
                  <p className="text-xs md:text-sm font-serif-body font-semibold text-[#8b4a3c] mb-3">{member.role}</p>
                </div>
                <div className="flex-1 flex flex-col items-center text-center px-2 pb-2">
                  <p className="text-[#8b6f5e] text-sm md:text-base mb-4 leading-relaxed font-serif-body">{member.bio}</p>
                  <p className="text-xs text-[#8b6f5e] font-serif-body">{member.profile}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

