import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import riyaOfferLetter from '../assets/riyablog offer letter.png';

const experiences = [
  {
    id: '01',
    role: 'Content Writer Intern',
    company: "Riya's Blogs",
    location: 'Nagpur, Maharashtra, India (Hybrid)',
    date: 'Aug 2025 - Oct 2025',
    desc: 'Explored and wrote articles on diverse themes including domestic violence, AI, education, and social awareness. Strengthened research, SEO, and content development skills. Published on riyabhorkar.com and Medium.',
    certificate: riyaOfferLetter
  },
  {
    id: '02',
    role: 'Freelancer & Trader/Investor',
    company: 'Self-Employed',
    location: 'Nagpur, India',
    date: 'Jan 2024 - Present',
    desc: 'Managing a diversified portfolio across F&O, Equity, and Mutual Funds with a focus on technical analysis and risk management. Simultaneously providing freelance services in AIML and modern web development.'
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 page-transition">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Work <span className="text-accent">History.</span>
          </h1>
          <p className="text-xs font-bold tracking-[0.2em] text-[#444] uppercase mb-8">
            ( Click entries to preview documents )
          </p>
          <div className="w-full h-px bg-[#1f1f1f]" />
        </motion.div>

        <div className="flex flex-col">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedExp(exp)}
              className="group border-b border-[#1f1f1f] py-12 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#0a0a0a] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 ease-[0.22,1,0.36,1] -z-10" />

              <div className="grid md:grid-cols-12 gap-8 items-start relative z-10">
                <div className="md:col-span-3">
                  <span className="text-[#333] font-black text-6xl leading-none group-hover:text-[#ccff00] transition-colors duration-500">
                    {exp.id}
                  </span>
                </div>

                <div className="md:col-span-5">
                  <h3 className="text-3xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-xl text-[#888] font-medium">{exp.company}</p>
                  <p className="text-sm text-[#555] font-semibold uppercase tracking-widest mt-1">{exp.location}</p>
                </div>

                <div className="md:col-span-4 flex flex-col justify-between h-full">
                  <p className="text-[#ccff00] font-bold tracking-widest uppercase text-sm mb-4">
                    {exp.date}
                  </p>
                  <p className="text-[#a0a0a0] leading-relaxed font-medium">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedExp && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedExp(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-[#0a0a0a] border border-[#1f1f1f] max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-sm relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors"
                >
                  <X size={32} />
                </button>

                <div className="p-8 md:p-12 overflow-y-auto max-h-[90vh]">
                  <div className="mb-8">
                    <p className="text-accent font-bold tracking-widest uppercase text-sm mb-2">{selectedExp.company}</p>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">{selectedExp.role}</h2>
                  </div>

                  <div className="aspect-[1.414/1] bg-[#111] border border-[#1f1f1f] rounded-sm overflow-hidden flex items-center justify-center">
                    {selectedExp.certificate ? (
                      <img
                        src={selectedExp.certificate}
                        alt="Certificate"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <p className="text-[#333] font-bold uppercase tracking-widest">Certificate Image Pending</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
