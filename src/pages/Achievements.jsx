import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    id: 1,
    title: 'Content Writer Intern @ Riya\'s Blogs',
    category: 'Internship',
    date: 'Aug 2025',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&h=500&q=80',
    desc: 'Successfully completed a 3-month writing internship focusing on AI, Social Awareness, and SEO.'
  },
  {
    id: 2,
    title: 'Successful Options Trader',
    category: 'Finance',
    date: 'Jan 2024 - Present',
    img: 'https://images.unsplash.com/photo-1611974714014-4b52adac244f?auto=format&fit=crop&w=800&h=500&q=80',
    desc: 'Achieved consistent growth in personal trading portfolio across F&O, Equity, and Mutual Funds.'
  },
  {
    id: 3,
    title: 'AI/ML Project Excellence',
    category: 'Engineering',
    date: '2024',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500&q=80',
    desc: 'Developed high-accuracy index price prediction models using LSTM and Deep Learning.'
  },
  {
    id: 4,
    title: 'Modern UI/UX Designer',
    category: 'Design',
    date: '2025',
    img: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&h=500&q=80',
    desc: 'Recognized for creating immersive digital experiences with glassmorphism and brutalist aesthetics.'
  }
];

const Achievements = () => {
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
              Core <span className="text-accent">Achievements.</span>
            </h1>
            <div className="w-full h-px bg-[#1f1f1f]" />
          </div>
          <p className="text-[#888] font-semibold tracking-widest uppercase text-sm max-w-xs md:text-right">
            Milestones, recognitions, and professional breakthroughs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] rounded-sm cursor-pointer aspect-video"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-accent text-black font-black uppercase text-[10px] tracking-widest">
                    {item.category}
                  </span>
                  <span className="text-white font-bold text-xs bg-black/50 backdrop-blur-sm px-3 py-1 border border-white/10">
                    {item.date}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-accent transition-colors duration-300 uppercase tracking-tighter mb-2">
                    {item.title}
                  </h2>
                  <p className="text-[#888] text-sm font-medium line-clamp-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
