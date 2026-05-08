import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { group: 'Programming', items: ['React', 'TypeScript', 'Next.js', 'Node.js'] },
  { group: 'Architecture', items: ['Api & mcp', 'GraphQL', 'Redux', 'System Design'] },
  { group: 'Styling', items: ['Tailwind CSS', 'Framer Motion', 'SASS', 'WebGL / Three.js'] },
  { group: 'Ops & Cloud', items: ['Docker', 'AWS', 'CI/CD Pipelines', 'Vercel'] },
  { group: 'AI & data', items: ['ML & DL models', 'Data Visualization', 'AI-Based Automation'] },
  { group: 'FinTech', items: ['Trading APIs', 'Strategy Backtesting', 'Risk Management', 'Market Analysis'] },
  { group: 'Tools', items: ['Git/github', 'Figma', 'Canva', 'Firebase', 'Vercel', 'Netlify', 'Postman', 'Google Colab', 'Jupyter Notebook', 'Android Studio', 'Streamlit'] },
];

const Skills = () => {
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
            Tech <span className="outline-text">Arsenal.</span>
          </h1>
          <div className="w-full h-px bg-[#1f1f1f]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-[#888] font-bold tracking-[0.2em] uppercase text-sm mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-[#38bdf8]"></span>
                {category.group}
              </h3>

              <div className="flex flex-col border-t border-[#1e293b]">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex justify-between items-center py-5 border-b border-[#1e293b] group cursor-pointer"
                  >
                    <span className="text-2xl md:text-3xl font-bold text-[#e0e0e0] group-hover:text-[#38bdf8] transition-colors">
                      {skill}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 text-[#38bdf8] transition-opacity duration-300">
                      →
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
