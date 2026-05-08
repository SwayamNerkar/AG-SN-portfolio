import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const roles = [
  "UI/UX Developer",
  "Full Stack Developer",
  "AI/ML Developer",
  "Investor & Trader"
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden page-transition">
      {/* Abstract Structural Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#38bdf8] to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">

        {/* Typography Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl flex flex-col items-center"
        >

          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black leading-[1.1] uppercase tracking-tighter mb-4">
            Building Digital
          </h1>

          <div className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#38bdf8] h-[1.5em] relative w-full flex justify-center items-center mb-8">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-medium">
            Architecting high-performance, structurally sound, and visually striking digital experiences. Merging deep engineering with refined design.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/projects"
                className="group relative px-8 py-4 bg-[#38bdf8] text-[#020617] font-bold uppercase tracking-wider overflow-hidden rounded-md text-center block"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a
                href="Swayam nerkar 2026 resume.docx"
                download="Swayam nerkar 2026 resume.docx"
                className="group px-8 py-4 bg-transparent border border-[#334155] text-white font-bold uppercase tracking-wider hover:border-[#38bdf8] hover:bg-[#38bdf8]/5 transition-all duration-300 rounded-md text-center inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
