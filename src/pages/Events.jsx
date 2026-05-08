import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: 'Global Tech Summit 2025',
    type: 'Conference',
    date: 'Oct 12, 2025',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?fit=crop&w=800&h=500'
  },
  {
    id: 2,
    title: 'React Advanced Workshop',
    type: 'Workshop',
    date: 'Aug 04, 2025',
    img: 'https://images.unsplash.com/photo-1475721025870-2440edfab4e0?fit=crop&w=800&h=500'
  },
  {
    id: 3,
    title: 'AI Dev Hackathon',
    type: 'Hackathon',
    date: 'May 20, 2025',
    img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?fit=crop&w=800&h=500'
  },
  {
    id: 4,
    title: 'Design Systems Meetup',
    type: 'Meetup',
    date: 'Mar 15, 2025',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?fit=crop&w=800&h=500'
  }
];

const Events = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 page-transition">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Industry <span className="text-accent">Events.</span>
            </h1>
            <div className="w-full h-px bg-[#1f1f1f]" />
          </div>
          <p className="text-[#888] font-semibold tracking-widest uppercase text-sm max-w-xs md:text-right">
            Speaking engagements, workshops, and community involvement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] rounded-sm cursor-pointer aspect-video"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-[#38bdf8] text-[#020617] font-bold uppercase text-xs tracking-widest">
                    {event.type}
                  </span>
                  <span className="text-white font-semibold text-sm bg-black/50 backdrop-blur-sm px-3 py-1 border border-white/10">
                    {event.date}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {event.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
