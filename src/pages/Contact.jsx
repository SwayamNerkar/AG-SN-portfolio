import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

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
            Let's <span className="outline-text">Talk.</span>
          </h1>
          <div className="w-full h-px bg-[#1f1f1f]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-bold mb-8">Ready to build something extraordinary?</h2>
            <p className="text-[#a0a0a0] mb-12 text-lg font-medium leading-relaxed">
              Whether it's a full-scale web application or a unique digital experience, I'm available for freelance opportunities and exciting collaborations.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-[#666] uppercase tracking-widest text-sm font-bold mb-2">Direct Mail</p>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="mailto:hello@sn.dev"
                  className="text-2xl md:text-3xl font-bold hover:text-[#38bdf8] transition-colors inline-block"
                >
                  hello@sn.dev
                </motion.a>
              </div>
              <div>
                <p className="text-[#666] uppercase tracking-widest text-sm font-bold mb-2">Socials</p>
                <div className="flex gap-6 text-xl font-bold">
                  <motion.a whileHover={{ y: -5, color: '#38bdf8' }} href="#" className="transition-colors">Twitter</motion.a>
                  <motion.a whileHover={{ y: -5, color: '#38bdf8' }} href="#" className="transition-colors">LinkedIn</motion.a>
                  <motion.a whileHover={{ y: -5, color: '#38bdf8' }} href="#" className="transition-colors">Github</motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-[#0f172a] p-8 md:p-12 border border-[#1e293b] rounded-sm shadow-2xl">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-[#888]">Name</label>
                <input
                  type="text"
                  required
                  className="bg-transparent border-b border-[#334155] py-3 text-white focus:outline-none focus:border-[#38bdf8] transition-colors rounded-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-[#888]">Email</label>
                <input
                  type="email"
                  required
                  className="bg-transparent border-b border-[#334155] py-3 text-white focus:outline-none focus:border-[#38bdf8] transition-colors rounded-none"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-[#888]">Message</label>
                <textarea
                  required
                  rows="4"
                  className="bg-transparent border-b border-[#334155] py-3 text-white focus:outline-none focus:border-[#38bdf8] transition-colors resize-none rounded-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={formState === 'loading'}
                className="mt-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-[#38bdf8] hover:text-[#020617] transition-all duration-300 w-full sm:w-auto self-start rounded-sm disabled:opacity-50"
              >
                {formState === 'loading' ? 'Sending...' : formState === 'success' ? 'Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
