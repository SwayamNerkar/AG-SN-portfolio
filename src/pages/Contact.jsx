import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ─── EmailJS config pulled from .env ─────────────────────────────────────────
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ─── Framer variants ──────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Contact = () => {
  const formRef = useRef(null);

  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [formState, setFormState] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMsg('');

    try {
      // EmailJS sends the form using the template variables:
      // {{from_name}}, {{from_email}}, {{subject}}, {{message}}
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setFormState('success');
      setFields({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg(err?.text || 'Something went wrong. Please try again.');
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  const inputClass =
    'bg-transparent border-b border-[#334155] py-3 text-white focus:outline-none focus:border-[#38bdf8] transition-colors rounded-none w-full placeholder:text-[#555]';

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 page-transition">
      <div className="container mx-auto max-w-6xl">

        {/* ── Header ── */}
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

          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Ready to build something extraordinary?
            </h2>
            <p className="text-[#a0a0a0] mb-12 text-lg font-medium leading-relaxed">
              Whether it's a full-scale web application or a unique digital experience,
              I'm available for freelance opportunities and exciting collaborations.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-[#666] uppercase tracking-widest text-sm font-bold mb-2">
                  Direct Mail
                </p>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="mailto:swayamnerkar16@gmail.com"
                  className="text-2xl md:text-3xl font-bold hover:text-[#38bdf8] transition-colors inline-block"
                >
                  swayamnerkar16@gmail.com
                </motion.a>
              </div>

              <div>
                <p className="text-[#666] uppercase tracking-widest text-sm font-bold mb-2">
                  Socials
                </p>
                <div className="flex flex-wrap gap-6 text-xl font-bold">
                  {[
                    { label: 'Twitter', href: 'https://x.com/SwayamNerkar' },
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/swayam-nerkar-79043322b' },
                    { label: 'Github', href: 'https://github.com/Swayamnerkar' },
                    { label: 'Instagram', href: 'https://www.instagram.com/trade.swayam.dev/' },
                    { label: 'OptionDecoders', href: 'https://www.instagram.com/optiondecoders' },
                  ].map(({ label, href }) => (
                    <motion.a
                      key={label}
                      whileHover={{ y: -5, color: '#38bdf8' }}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                    >
                      {label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 bg-[#0f172a] p-8 md:p-12 border border-[#1e293b] rounded-sm shadow-2xl"
            >
              {/* Name */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-[#888]">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  value={fields.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter your name"
                  disabled={formState === 'loading'}
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" style={{ transitionDelay: '0.05s' }} className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-[#888]">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  value={fields.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter your email"
                  disabled={formState === 'loading'}
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" style={{ transitionDelay: '0.1s' }} className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-[#888]">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={fields.subject}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="What's this about?"
                  disabled={formState === 'loading'}
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" style={{ transitionDelay: '0.15s' }} className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-[#888]">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={fields.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project..."
                  disabled={formState === 'loading'}
                />
              </motion.div>

              {/* Status feedback */}
              <AnimatePresence>
                {formState === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-sm bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {formState === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-sm bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {errorMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: formState === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: formState === 'loading' ? 1 : 0.98 }}
                type="submit"
                disabled={formState === 'loading' || formState === 'success'}
                className="mt-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-[#38bdf8] hover:text-[#020617] transition-all duration-300 w-full sm:w-auto self-start rounded-sm disabled:opacity-50 flex items-center gap-3"
              >
                {formState === 'loading' ? (
                  <>
                    {/* Spinner */}
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending…
                  </>
                ) : formState === 'success' ? (
                  'Sent ✓'
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
