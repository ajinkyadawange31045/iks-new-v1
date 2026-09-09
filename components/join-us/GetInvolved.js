'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { School, Search, Building } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const involvementOptions = [
  {
    title: 'Students & Interns',
    description: 'Apply for internships and assist in fieldwork, archiving, or visual documentation. Gain hands-on experience in research that blends tradition with innovation.',
    icon: School,
    link: '#contact-form',
  },
  {
    title: 'Researchers & Faculty',
    description: 'Collaborate on publications, workshops, or course design. Propose joint studies, or bring your expertise into ongoing projects.',
    icon: Search,
    link: '#contact-form',
  },
  {
    title: 'Institutions & Cultural Organizations',
    description: 'Partner with us for events, exhibitions, field visits, and interdisciplinary projects aligned with the vision of Indian Knowledge Systems.',
    icon: Building,
    link: '#contact-form',
  },
];

export default function GetInvolved() {
  return (
    <section className="pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif-elegant font-bold leading-tight text-[#5c3a2a] tracking-wider mb-4">
          Get Involved
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
        <p className="mt-4 text-lg text-[#8b6f5e] font-serif-body">Be Part of the IKS Knowledge Movement</p>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {involvementOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col items-center research-card rounded-3xl shadow-xl overflow-hidden px-6 py-8">
                <div className="flex flex-col items-center w-full">
                  <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2d7d7d] via-[#4a9d9d] to-[#2d7d7d] shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardHeader className="flex flex-col items-center text-center px-2 pt-0 pb-2">
                    <CardTitle className="text-lg md:text-xl font-serif-elegant font-semibold text-[#5c3a2a] mb-2 tracking-wider">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col items-center text-center px-2 pb-2">
                    <p className="text-[#8b6f5e] text-sm md:text-base mb-6 leading-relaxed font-serif-body">{option.description}</p>
                    <Link href={option.link}>
                      <Button className="w-full text-white bg-gradient-to-r from-[#2d7d7d] to-[#8b4a3c] hover:from-[#4a9d9d] hover:to-[#a65a4a] transition-all duration-300 font-serif-body font-semibold shadow-md">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


