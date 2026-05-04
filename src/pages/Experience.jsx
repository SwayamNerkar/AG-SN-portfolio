import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: '01',
    role: 'Senior Frontend Architect',
    company: 'TechCorp Solutions',
    date: '2023 - Present',
    desc: 'Architected and built the core UI library used by 50+ developers. Reduced bundle size by 40% and improved Web Vitals significantly.'
  },
  {
    id: '02',
    role: 'Full Stack Engineer',
    company: 'StartupX Inc.',
    date: '2021 - 2023',
    desc: 'Led the development of a real-time analytics dashboard processing millions of events per day using React and Node.js.'
  },
  {
    id: '03',
    role: 'Software Developer Intern',
    company: 'Global Agency',
    date: '2020 - 2021',
    desc: 'Developed interactive marketing campaigns and e-commerce platforms for Fortune 500 clients.'
  }
];

const Experience = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 page-transition">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Work <span className="text-accent">History.</span>
          </h1>
          <div className="w-full h-px bg-[#1f1f1f]" />
        </motion.div>

        <div className="flex flex-col">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              className="group border-b border-[#1f1f1f] py-12 relative overflow-hidden"
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
      </div>
    </section>
  );
};

export default Experience;
