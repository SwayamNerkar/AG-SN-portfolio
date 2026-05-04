import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
            About <span className="text-accent">Me.</span>
          </h1>
          <div className="w-full h-px bg-[#1f1f1f]" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="aspect-[4/5] bg-[#111] rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 border border-[#222]">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=800&h=1000" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#ccff00] mix-blend-multiply opacity-20" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 flex flex-col justify-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              I Engineer Digital Experiences That Are Built to Last.
            </h2>
            
            <div className="space-y-6 text-[#a0a0a0] text-lg leading-relaxed font-medium">
              <p>
                As a software engineer, I view coding not just as typing commands, but as digital architecture. Every line of code is a structural element meant to support a robust, scalable, and visually compelling product.
              </p>
              <p>
                My philosophy strips away the unnecessary, focusing on core functionality wrapped in stark, high-contrast aesthetics. I build tools and platforms that command attention while maintaining flawless performance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#1f1f1f]">
              <div>
                <p className="text-sm uppercase tracking-widest text-[#666] mb-2 font-semibold">Location</p>
                <p className="text-xl font-bold text-white">San Francisco, CA</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-[#666] mb-2 font-semibold">Focus</p>
                <p className="text-xl font-bold text-white">Frontend Architecture</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
