'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

const demoPapers = [
  {
    type: 'Research Paper',
    title: 'Connecting the Unconnected: Circularities of East African Ivory and Indian Capital in the Western Indian Ocean',
    author: 'Dr. Chhaya Goswami',
    publication: 'Georgetown University Press (In edited volume by Rogaia Abusharaf, Udaychandra et al.)',
    tags: ['Maritime Traditions', 'Indian Ocean', 'Trade', 'Economic Circulation'],
    date: '2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    type: 'Conference Paper',
    title: 'Tales of Loss, Valour, Betrayal and Glories: The Visual and Performative in Chitrakathi Paintings',
    author: 'Dr. Monalisa Behera',
    publication: '32nd Session of the Indian Art History Congress, National Museum, New Delhi',
    tags: ['Artistic Traditions', 'Chitrakathi', 'Folk Art', 'Storytelling', 'Performance'],
    date: '2025',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    type: 'Book (Monograph)',
    title: 'Shipbuilding and Seafaring Traditions',
    author: 'Dr. Chhaya Goswami',
    publication: 'Primus Publications (Proposal accepted)',
    tags: ['Maritime History', 'Indian Seafaring', 'Shipbuilding', 'Knowledge Systems'],
    date: '2025 (expected)',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
  },
];

export default function KnowledgeCentre() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredDemo = demoPapers.filter((item) => {
    if (selectedType && selectedType !== 'All' && item.type !== selectedType) return false;
    const search = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(search) ||
      item.author.toLowerCase().includes(search) ||
      item.publication.toLowerCase().includes(search) ||
      item.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  return (
    <>
      <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#f7ead8] pt-16 hero-responsive">
        <div className="container relative z-10 mx-auto px-4 py-2 sm:px-6 sm:py-4 md:py-6 lg:flex lg:items-center lg:px-8 hero-container">
          <div className="lg:w-full text-center pb-8 sm:pb-12 md:pb-16 hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-text"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl hero-h1 font-serif-elegant font-bold tracking-tight text-[#5c3a2a] mb-4 sm:mb-6">
                Knowledge Centre
              </h1>
              <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl hero-subtitle text-[#8b6f5e] mb-4 sm:mb-6 md:mb-8 font-serif-body max-w-3xl mx-auto leading-relaxed">
                Our Knowledge Centre provides access to all scholarly outputs, bringing together research, cutting edge field research and digital archives in one space. We are committed to document the wisdom of shipbuilders and seafarers along the western coast, and epic centric storytelling legacies embedded in Chitrakathi and folk visual arts.     
              </p>
            </motion.div>
          </div>
        </div>

        {/* Wave decoration at bottom - matching home page hero */}
        <div className="absolute bottom-0 left-0 right-0 w-full hero-wave" style={{ zIndex: 1 }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 300" 
            width="100%" 
            height="200"
            className="block"
            preserveAspectRatio="none"
          >
            {/* Main big wave with smooth, continuous curves */}
            <path
              d="M0,160 C180,100 360,200 540,120 S900,80 1080,160 S1320,100 1440,140 L1440,300 L0,300 Z"
              fill="#e5bc83"
              fillOpacity="1"
            />
            {/* First inner wave */}
            <path
              d="M0,180 C240,130 480,190 720,140 S1200,100 1320,160 S1410,150 1440,160 L1440,300 L0,300 Z"
              fill="#e5bc83"
              fillOpacity="0.65"
            />
            {/* Second inner wave */}
            <path
              d="M0,200 C300,150 600,200 900,160 S1350,120 1410,170 S1435,175 1440,180 L1440,300 L0,300 Z"
              fill="#e5bc83"
              fillOpacity="0.45"
            />
          </svg>
        </div>
      </div>
      <div className="bg-[#f7ead8] py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 w-full max-w-lg px-2 sm:px-0"
        >
          <div className="relative w-full">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#2d7d7d] via-[#4a9d9d] to-[#2d7d7d] shadow-md absolute left-2 top-1/2 -translate-y-1/2 z-10">
              <Search className="h-5 w-5 text-white z-10" />
            </span>
            <input
              type="text"
              placeholder="Search for articles, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-4 py-4 rounded-2xl research-card border border-[#8b6f5e]/30 shadow-lg text-base sm:text-lg text-[#5c3a2a] placeholder:text-[#8b6f5e]/60 focus:outline-none focus:ring-2 focus:ring-[#2d7d7d] focus:border-[#2d7d7d] transition-all duration-200 font-serif-body"
            />
          </div>
        </motion.div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-8">
          <Select
            value={selectedType}
            onValueChange={(value) => setSelectedType(value)}
          >
            <SelectTrigger className="w-72 research-card border-[#8b6f5e]/30 text-[#5c3a2a] font-serif-body font-semibold shadow-md rounded-xl focus:ring-2 focus:ring-[#2d7d7d] focus:border-[#2d7d7d] text-base sm:text-lg h-14 px-6">
              <SelectValue placeholder="Select type..." />
            </SelectTrigger>
            <SelectContent className="research-card border-[#8b6f5e]/30 text-[#5c3a2a] font-serif-body font-semibold rounded-xl shadow-lg">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Research Paper">Research Papers</SelectItem>
              <SelectItem value="Conference Paper">Conference Papers</SelectItem>
              <SelectItem value="Book (Monograph)">Book (Monograph)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-8 mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredDemo.length > 0 ? (
            filteredDemo.slice(0, visibleCount).map((item, idx) => (
              <div key={idx} className="h-full flex flex-col overflow-hidden transition-all hover:shadow-2xl research-card rounded-3xl border border-[#8b6f5e]/30">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-52 w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-6">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-block bg-gradient-to-r from-[#2d7d7d] to-[#8b4a3c] text-white px-3 py-1 rounded-full text-xs font-serif-body font-bold uppercase tracking-wider shadow">{item.type}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-serif-elegant font-semibold tracking-tight text-[#5c3a2a] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8b6f5e] mb-2 font-serif-body">{item.date}</p>
                    <p className="text-sm text-[#8b6f5e] mb-3 font-serif-body">
                      {item.publication}
                    </p>
                  </div>
                  <div>
                    <div className="mb-3 text-sm text-[#5c3a2a] font-serif-body"><span className="font-semibold text-[#8b4a3c]">Author:</span> {item.author}</div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="inline-block bg-[#8b6f5e]/10 text-[#5c3a2a] px-2 py-0.5 rounded text-xs font-serif-body font-semibold">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-end p-6 pt-0">
                  <button className="text-sm font-serif-body font-medium text-white bg-gradient-to-r from-[#2d7d7d] to-[#8b4a3c] px-4 py-2 rounded-lg shadow hover:from-[#4a9d9d] hover:to-[#a65a4a] transition-all">Read more →</button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <h3 className="text-xl font-serif-elegant font-semibold text-[#5c3a2a] mb-2">No results found</h3>
              <p className="mb-4 text-[#8b6f5e] font-serif-body">Try adjusting your search terms or view all articles.</p>
              <Button
                variant="outline"
                className="text-white bg-[#2d7d7d] hover:text-white hover:bg-[#4a9d9d] transition-all duration-300 font-serif-body"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('All');
                }}
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
        {filteredDemo.length > visibleCount && (
          <div className="flex justify-center mb-12">
            <button
              className="px-6 py-3 rounded-xl font-serif-body font-semibold shadow-md transition-all duration-200 border-2 text-base sm:text-lg bg-gradient-to-r from-[#2d7d7d] to-[#8b4a3c] text-white border-[#2d7d7d] hover:from-[#4a9d9d] hover:to-[#a65a4a]"
              onClick={() => setVisibleCount((c) => c + 6)}
            >
              View more...
            </button>
          </div>
        )}
        </div>
      </div>
    </>
  );
}

