import React from 'react';
import { motion } from 'framer-motion';
import portraitImg from '../assets/WhatsApp Image 2026-02-04 at 9.55.24 PM.jpeg';

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
                src={portraitImg}
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
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] uppercase tracking-tighter">
              Meet <span className="text-accent">Swayam Sachin Nerkar.</span>
            </h1>

            <div className="space-y-6 text-[#a0a0a0] text-lg leading-relaxed font-medium">
              <p>
                I’m an AI Engineering student, frontend developer, and tech enthusiast passionate about building modern digital experiences and intelligent systems.
                I focus on combining clean UI/UX design with practical development to create websites, AI-based tools, and interactive applications that are both functional and visually engaging.
                Currently, I’m expanding my skills in full-stack development, AI/ML, and modern web technologies while building real-world projects and innovative digital solutions.
              </p>
              <p>
                ✔ AI Engineering Student
                ✔ Full stack Web & UI/UX Developer
                ✔ Building Real world ML projects
                ✔ AI tech & Fintech Projects
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#1f1f1f]">
              <div>
                <p className="text-sm uppercase tracking-widest text-[#666] mb-2 font-semibold">Location</p>
                <p className="text-xl font-bold text-white">Nagpur, Maharashtra, India</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-[#666] mb-2 font-semibold">Focus</p>
                <p className="text-xl font-bold text-white">AIML Developer & trader/investor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
