import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import img1 from '../assets/conference.jpeg';
import img3 from '../assets/iaqsa stand.jpeg';
import img4 from '../assets/icaqsa.jpeg';
import img5 from '../assets/iim outdoor.jpeg';

const roles = [
  "UI/UX Developer",
  "Full Stack Developer",
  "AI/ML Developer",
  "Software Engineer"
];

const backgroundImages = [img1, img3, img4, img5];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
};

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax + fade the background slightly as user scrolls
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.7]);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentRole(p => (p + 1) % roles.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-slate-950 overflow-x-hidden">

      {/* ─── SECTION 1 — Full-screen visual cover ─────────────────────────── */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Background image carousel */}
        <motion.div
          style={{ y: bgY, opacity: bgOpacity }}
          className="absolute inset-0 flex"
        >
          <motion.div
            className="flex h-full w-full"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 60 }}
          >
            {[...backgroundImages, ...backgroundImages].map((src, i) => (
              <div
                key={i}
                className="w-[100vw] md:w-[50vw] lg:w-[33.333vw] flex-shrink-0 h-full relative"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-slate-950/60" />
        {/* Edge fade — makes images look seamless */}
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #020617 0%, transparent 15%, transparent 85%, #020617 100%)'
          }}
        />
        {/* Bottom fade into Section 2 */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.07) 0%, transparent 70%)'
          }}
        />

        {/* Section 1 content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center gap-5 text-center px-6"
        >
          {/* Pill badge */}
          <span
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-400 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Portfolio · 2026
          </span>

          <p
            className="text-slate-400 text-sm md:text-base font-medium tracking-[0.35em] uppercase max-w-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Engineering · Design · Intelligence
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-slate-600 text-[10px] font-medium uppercase tracking-[0.25em]">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-slate-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SECTION 2 — Revealed identity card ───────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">

        {/* Blurred background continuation (matching image blur from above) */}
        <div className="absolute inset-0 bg-slate-950" />
        {/* Top continuation from section 1 */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-950 to-transparent" />

        {/* Ambient glow behind card */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)'
          }}
        />

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center"
        >

          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-[11px] uppercase tracking-[0.4em] text-slate-500 mb-8 font-medium"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="mb-4 leading-none select-none"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Swayam{' '}
            </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #22d3ee 0%, #38bdf8 50%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Nerkar
            </span>
          </motion.h1>

          {/* Thin divider */}
          <motion.div
            variants={fadeUp}
            className="w-16 h-px mb-6"
            style={{ background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.6), transparent)' }}
          />

          {/* Animated role */}
          <motion.div
            variants={fadeUp}
            className="h-9 flex items-center justify-center mb-6 overflow-hidden"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-base md:text-lg font-semibold uppercase tracking-[0.2em]"
                style={{
                  background: 'linear-gradient(90deg, #22d3ee, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-12"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          >
            Building high-performance digital experiences where engineering precision meets refined design — from AI systems to polished interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider text-white transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  boxShadow: '0 0 24px rgba(6,182,212,0.35)',
                }}
              >
                Explore Work
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href="Swayam nerkar 2026 resume.docx"
                download
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider text-slate-300 border border-slate-700 hover:border-cyan-500/60 hover:text-white transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif', background: 'rgba(15,23,42,0.6)' }}
              >
                <Download size={15} />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex items-center gap-6 text-slate-600"
          >
            {['AI/ML', 'Full Stack', 'UI/UX', 'Fintech'].map((tag, i) => (
              <React.Fragment key={tag}>
                <span
                  className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-500"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {tag}
                </span>
                {i < 2 && <span className="w-1 h-1 rounded-full bg-slate-700" />}
              </React.Fragment>
            ))}
          </motion.div>

        </motion.div>
      </section>

    </div>
  );
};

export default Home;
