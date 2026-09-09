'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Images, X } from 'lucide-react';

const eventPath = (folder, file) => `/Events/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

export default function EventsList({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
          Past Events
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
        <p className="mt-4 text-lg text-[#8b6f5e] font-serif-body">
          Talks, conferences, and workshops we have hosted
        </p>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2">
        {events.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="research-card rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-[#8b6f5e]/30"
          >
            <button
              type="button"
              onClick={() => setSelectedEvent(event)}
              className="block w-full text-left"
            >
              {event.images?.[0] && (
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={eventPath(event.folder, event.images[0])}
                    alt={event.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-serif-elegant font-semibold tracking-tight text-[#5c3a2a]">
                  {event.title}
                </h3>
                {event.subtitle && (
                  <p className="mt-1 text-sm text-[#8b4a3c] font-serif-body font-medium">{event.subtitle}</p>
                )}
                <p className="mt-4 text-[#8b6f5e] font-serif-body leading-relaxed line-clamp-3">
                  {event.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-[#2d7d7d] font-serif-body">
                  <Images className="mr-2 h-4 w-4" />
                  {event.images?.length || 0} photos
                </span>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {selectedEvent && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="research-card relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-[#8b6f5e]/20 shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              className="absolute right-6 top-6 text-[#8b6f5e] hover:text-[#5c3a2a]"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>

            <h3 className="text-2xl font-serif-elegant font-bold text-[#5c3a2a] pr-8">
              {selectedEvent.title}
            </h3>
            {selectedEvent.subtitle && (
              <p className="mt-1 text-sm text-[#8b4a3c] font-serif-body font-medium">{selectedEvent.subtitle}</p>
            )}

            <p className="mt-6 text-[#8b6f5e] leading-relaxed font-serif-body">{selectedEvent.description}</p>

            {selectedEvent.flyer && (
              <a
                href={eventPath(selectedEvent.folder, selectedEvent.flyer)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-sm font-serif-body font-semibold text-[#2d7d7d] hover:text-[#4a9d9d]"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Flyer
              </a>
            )}

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {selectedEvent.images?.map((image) => (
                <div key={image} className="rounded-xl overflow-hidden border border-[#8b6f5e]/20">
                  <img
                    src={eventPath(selectedEvent.folder, image)}
                    alt={selectedEvent.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
