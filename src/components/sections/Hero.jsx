import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Software Engineer", "Frontend Developer", "UI/UX Enthusiast", "Problem Solver"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-darker/50 via-darker/80 to-darker z-1" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      </div>

      {/* Floating Achievement Bubbles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute top-[10%] md:top-1/4 left-[-10%] md:left-[5%] lg:left-[10%] z-20 flex flex-col items-center pointer-events-none scale-75 md:scale-100"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full shadow-2xl"
        >
          <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-xl">
            🏆
          </div>
          <div className="text-left">
            <p className="text-white font-bold text-sm">33+ Events</p>
            <p className="text-slate-400 text-xs">Attended & Organized</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-[20%] md:bottom-[30%] right-[-10%] md:right-[5%] lg:right-[10%] z-20 flex flex-col items-center pointer-events-none scale-75 md:scale-100"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full shadow-2xl"
        >
          <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-xl">
            🚀
          </div>
          <div className="text-left">
            <p className="text-white font-bold text-sm">Hackathons</p>
            <p className="text-slate-400 text-xs">Multiple Wins</p>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-[15%] md:top-[20%] right-[-5%] md:right-[10%] lg:right-[20%] z-20 flex flex-col items-center pointer-events-none scale-75 md:scale-100"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-lg">
            🌟
          </div>
          <div className="text-left">
            <p className="text-white font-bold text-sm">Community</p>
            <p className="text-slate-400 text-xs">Leader</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full glass-card p-1 mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" style={{ animationDuration: '4s' }} />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
              alt="Profile"
              className="w-full h-full rounded-full object-cover relative z-10"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-primary-400 font-medium tracking-wider uppercase text-sm mb-4 block">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-white">Swayam</span>
            <br />
            <span className="text-gradient min-h-[1.2em] inline-block mt-2">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I craft responsive websites where technologies meet creativity.
            Transforming complex problems into elegant, intuitive interfaces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-darker font-medium rounded-full flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors group"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            className="px-8 py-3 glass text-white font-medium rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            Download Resume
            <Download size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-slate-400 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
