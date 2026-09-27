import React from 'react';
import { motion } from 'framer-motion';

const ContentPlaceholder = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 mt-20 border-t border-slate-800/50 bg-slate-900/10 backdrop-blur-sm rounded-3xl mx-4 mb-20 shadow-[0_0_40px_rgba(6,182,212,0.05)] border border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 mb-6 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
          More Content Coming Soon
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
          This space is reserved for your upcoming additions. You can drop your new content right here when you are ready.
        </p>
      </motion.div>
    </section>
  );
};

export default ContentPlaceholder;
