import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiSass,
  SiThreedotjs,
  SiDocker,
  SiVercel,
  SiGithub,
  SiFigma,
  SiFirebase,
  SiNetlify,
  SiPostman,
  SiGooglecolab,
  SiJupyter,
  SiAndroidstudio,
  SiStreamlit,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';
import {
  TbNetwork,
  TbCpu,
  TbBrain,
  TbChartDots,
  TbRobot,
  TbChartCandle,
  TbFileAnalytics,
  TbShieldCheck,
  TbTrendingUp,
  TbInfinity,
} from 'react-icons/tb';

const skillsData = [
  {
    group: 'Programming',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
    ],
  },
  {
    group: 'Architecture',
    items: [
      { name: 'Api & mcp', icon: TbNetwork, color: '#38bdf8' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'System Design', icon: TbCpu, color: '#a78bfa' },
    ],
  },
  {
    group: 'Styling',
    items: [
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
      { name: 'SASS', icon: SiSass, color: '#CC6699' },
      { name: 'WebGL / Three.js', icon: SiThreedotjs, color: '#ffffff' },
    ],
  },
  {
    group: 'Ops & Cloud',
    items: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'CI/CD Pipelines', icon: TbInfinity, color: '#38bdf8' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
    ],
  },
  {
    group: 'AI & data',
    items: [
      { name: 'ML & DL models', icon: TbBrain, color: '#ec4899' },
      { name: 'Data Visualization', icon: TbChartDots, color: '#38bdf8' },
      { name: 'AI-Based Automation', icon: TbRobot, color: '#a855f7' },
    ],
  },
  {
    group: 'FinTech',
    items: [
      { name: 'Trading APIs', icon: TbChartCandle, color: '#22c55e' },
      { name: 'Strategy Backtesting', icon: TbFileAnalytics, color: '#eab308' },
      { name: 'Risk Management', icon: TbShieldCheck, color: '#ef4444' },
      { name: 'Market Analysis', icon: TbTrendingUp, color: '#06b6d4' },
    ],
  },
  {
    group: 'Tools',
    items: [
      { name: 'Git/github', icon: SiGithub, color: '#f05032' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Canva', icon: MdOutlineDesignServices, color: '#00C4CC' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Google Colab', icon: SiGooglecolab, color: '#F9AB00' },
      { name: 'Jupyter Notebook', icon: SiJupyter, color: '#F37626' },
      { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
      { name: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' },
    ],
  },
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
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-[#888] font-bold tracking-[0.2em] uppercase text-sm mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-[#38bdf8]"></span>
                {category.group}
              </h3>

              <div className="flex flex-col border-t border-[#1e293b]">
                {category.items.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                      className="flex justify-between items-center py-5 border-b border-[#1e293b] group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#38bdf8]/50 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                          style={{ color: skill.color }}
                        >
                          {Icon && <Icon className="text-xl transition-transform duration-300 group-hover:scale-110" />}
                        </div>
                        <span className="text-2xl md:text-3xl font-bold text-[#e0e0e0] group-hover:text-[#38bdf8] transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="opacity-0 group-hover:opacity-100 text-[#38bdf8] text-xl font-mono transition-opacity duration-300">
                        →
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
