import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SECTIONS = [
  { id: 'home', name: 'Home', number: '01' },
  { id: 'about', name: 'About', number: '02' },
  { id: 'skills', name: 'Skills', number: '03' },
  { id: 'experience', name: 'Experience', number: '04' },
  { id: 'projects', name: 'Projects', number: '05' },
  { id: 'events', name: 'Events', number: '06' },
  { id: 'achievements', name: 'Achievements', number: '07' },
  { id: 'licences', name: 'Licences', number: '08' },
  { id: 'contact', name: 'Contact', number: '09' },
];

export const SerialScrollSidebar = ({ activeSection = 'home', onSelect }) => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const scrollToSection = (id) => {
    if (onSelect) {
      onSelect(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-end gap-3 select-none pointer-events-none">
      {/* Background Pill Frame */}
      <div className="pointer-events-auto bg-black/60 backdrop-blur-xl border border-white/10 p-2.5 rounded-full flex flex-col items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          const isHovered = hoveredSection === sec.id;

          return (
            <div
              key={sec.id}
              className="relative flex items-center justify-center cursor-pointer group py-1"
              onMouseEnter={() => setHoveredSection(sec.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => scrollToSection(sec.id)}
            >
              {/* Tooltip Label (Floats to the Left) */}
              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute right-9 px-3 py-1 rounded-md text-[11px] font-mono tracking-widest uppercase flex items-center gap-2 whitespace-nowrap border ${
                      isActive
                        ? 'bg-[#38bdf8] text-black border-[#38bdf8] font-bold shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                        : 'bg-black/90 text-white/80 border-white/15 backdrop-blur-md'
                    }`}
                  >
                    <span className={isActive ? 'text-black/60' : 'text-[#38bdf8]'}>
                      {sec.number}
                    </span>
                    <span>{sec.name}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dot / Indicator Track */}
              <div className="relative flex items-center justify-center w-5 h-5">
                {/* Active Outer Pulsing Ring */}
                {isActive && (
                  <motion.div
                    layoutId="active-sidebar-indicator"
                    className="absolute inset-0 rounded-full border-2 border-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.7)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}

                {/* Inner Dot */}
                <div
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2 h-2 bg-[#38bdf8]'
                      : 'w-1.5 h-1.5 bg-white/30 group-hover:bg-white/80 group-hover:scale-125'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Serial Counter Label */}
      <div className="text-[10px] font-mono tracking-widest text-zinc-500 pr-1 pointer-events-none uppercase">
        {SECTIONS.find((s) => s.id === activeSection)?.number || '01'} / 09
      </div>
    </div>
  );
};
