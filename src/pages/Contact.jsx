import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

// ─── EmailJS config pulled from .env ─────────────────────────────────────────
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ─── Direct Contact Information ─────────────────────────────────────────────
const PHONE_NUMBER = '+917350782684';
const PHONE_DISPLAY = '+91 7350782684';
const EMAIL_ADDRESS = 'swayamnerkar16@gmail.com';

// ─── Framer variants ──────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Contact = () => {
  const formRef = useRef(null);

  const [fields, setFields] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [formState, setFormState] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedType, setCopiedType] = useState(''); // 'phone' | 'email' | ''

  const handleChange = (e) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleCopy = (text, type) => {
    navigator.clipboard?.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(''), 2500);
  };

  // ── Open Native SMS application with prefilled message ────────────────────
  const handleOpenSMS = () => {
    const defaultText = fields.message 
      ? `Hi Swayam, I am ${fields.from_name || 'reaching out'}. ${fields.message}`
      : `Hi Swayam, I found your portfolio and would like to connect!`;
    const encoded = encodeURIComponent(defaultText);
    window.open(`sms:${PHONE_NUMBER}?body=${encoded}`, '_self');
  };

  // ── Open WhatsApp Messenger with prefilled message ────────────────────────
  const handleOpenWhatsApp = () => {
    const defaultText = fields.message 
      ? `Hi Swayam, I am ${fields.from_name || 'reaching out'}. ${fields.message}`
      : `Hi Swayam, I found your portfolio and would like to connect!`;
    const encoded = encodeURIComponent(defaultText);
    window.open(`https://wa.me/917350782684?text=${encoded}`, '_blank');
  };

  // ── Open Default Email Client / Gmail ─────────────────────────────────────
  const handleOpenDirectMail = () => {
    const sub = encodeURIComponent(fields.subject || 'Portfolio Collaboration Inquiry');
    const body = encodeURIComponent(
      `Name: ${fields.from_name || ''}\nEmail: ${fields.from_email || ''}\n\nMessage:\n${fields.message || ''}`
    );
    window.open(`mailto:${EMAIL_ADDRESS}?subject=${sub}&body=${body}`, '_self');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMsg('');

    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        // Send email via EmailJS with form ref
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
          publicKey: PUBLIC_KEY,
        });
      } else {
        // Fallback directly to mailto if EmailJS credentials are not present
        handleOpenDirectMail();
      }

      setFormState('success');
      setFields({ from_name: '', from_email: '', subject: '', message: '' });
      setTimeout(() => setFormState('idle'), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      // Even if EmailJS quota or service is down, offer instant mailto fallback
      setErrorMsg(err?.text || 'Could not send directly via server. Opening your mail client...');
      setFormState('error');
      setTimeout(() => {
        handleOpenDirectMail();
        setFormState('idle');
      }, 2000);
    }
  };

  const inputClass =
    'bg-transparent border-b border-[#334155] py-3 text-white focus:outline-none focus:border-[#38bdf8] transition-colors rounded-none w-full placeholder:text-[#555] text-sm md:text-base';

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 page-transition">
      <div className="container mx-auto max-w-6xl">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Let's <span className="outline-text">Talk.</span>
          </h1>
          <div className="w-full h-px bg-[#1f1f1f]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* ── Left: Info & Instant Message Actions ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to build something extraordinary?
            </h2>
            <p className="text-[#a0a0a0] mb-10 text-base md:text-lg font-medium leading-relaxed">
              Whether it's a full-scale AI application, scalable full-stack software, or freelance collaboration,
              feel free to reach out directly via Email, SMS, or WhatsApp!
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-6 mb-10">
              
              {/* Direct Gmail */}
              <div className="p-5 bg-[#0f172a]/60 border border-[#1e293b] rounded-sm hover:border-[#38bdf8]/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#38bdf8] font-bold">
                    <Mail size={14} /> Direct Gmail
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(EMAIL_ADDRESS, 'email')}
                    className="text-xs text-[#888] hover:text-white flex items-center gap-1 transition-colors"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    {copiedType === 'email' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="text-lg md:text-xl font-bold text-white hover:text-[#38bdf8] transition-colors break-all"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                  <button
                    type="button"
                    onClick={handleOpenDirectMail}
                    className="px-3 py-1.5 bg-[#38bdf8]/10 hover:bg-[#38bdf8] text-[#38bdf8] hover:text-black text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
                  >
                    Open Mail
                  </button>
                </div>
              </div>

              {/* Direct Phone & SMS */}
              <div className="p-5 bg-[#0f172a]/60 border border-[#1e293b] rounded-sm hover:border-[#38bdf8]/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#38bdf8] font-bold">
                    <Phone size={14} /> Phone & SMS Messages
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(PHONE_NUMBER, 'phone')}
                    className="text-xs text-[#888] hover:text-white flex items-center gap-1 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedType === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    {copiedType === 'phone' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-lg md:text-xl font-bold text-white hover:text-[#38bdf8] transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleOpenSMS}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white text-white hover:text-black text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center gap-1"
                    >
                      <MessageSquare size={13} /> SMS
                    </button>
                    <button
                      type="button"
                      onClick={handleOpenWhatsApp}
                      className="px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-black text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Socials */}
            <div>
              <p className="text-[#666] uppercase tracking-widest text-xs font-bold mb-3">
                Social Profiles
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base font-bold">
                {[
                  { label: 'Twitter', href: 'https://x.com/SwayamNerkar' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/swayam-nerkar-79043322b' },
                  { label: 'Github', href: 'https://github.com/Swayamnerkar' },
                  { label: 'Instagram', href: 'https://www.instagram.com/trade.swayam.dev/' },
                  { label: 'OptionDecoders', href: 'https://www.instagram.com/optiondecoders' },
                ].map(({ label, href }) => (
                  <motion.a
                    key={label}
                    whileHover={{ y: -3, color: '#38bdf8' }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Working Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 md:gap-7 bg-[#0f172a] p-6 md:p-10 border border-[#1e293b] rounded-sm shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#1e293b]">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                  Send A Message
                </h3>
                <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest">
                  Gmail & EmailJS Ready
                </span>
              </div>

              {/* Name */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#888]">Your Name *</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  value={fields.from_name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g. Alex Sharma"
                  disabled={formState === 'loading'}
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" style={{ transitionDelay: '0.05s' }} className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#888]">Your Email Address *</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  value={fields.from_email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g. alex@example.com"
                  disabled={formState === 'loading'}
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" style={{ transitionDelay: '0.1s' }} className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#888]">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={fields.subject}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Project inquiry / Freelance / Hiring"
                  disabled={formState === 'loading'}
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" style={{ transitionDelay: '0.15s' }} className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#888]">Message *</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={fields.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe your project, timeline, or query..."
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
                    <CheckCircle2 size={18} className="shrink-0" />
                    <span>Message sent successfully! Swayam will get back to you soon.</span>
                  </motion.div>
                )}
                {formState === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-sm bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium"
                  >
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Submit button via EmailJS / Direct */}
                <motion.button
                  whileHover={{ scale: formState === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: formState === 'loading' ? 1 : 0.98 }}
                  type="submit"
                  disabled={formState === 'loading'}
                  className="px-8 py-3.5 bg-white text-black font-bold uppercase tracking-wider hover:bg-[#38bdf8] hover:text-[#020617] transition-all duration-300 rounded-sm disabled:opacity-50 flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  {formState === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </>
                  ) : formState === 'success' ? (
                    'Sent ✓'
                  ) : (
                    <>
                      <Send size={15} /> Send Email
                    </>
                  )}
                </motion.button>

                {/* Instant SMS Button */}
                <button
                  type="button"
                  onClick={handleOpenSMS}
                  className="px-5 py-3.5 bg-[#1e293b] hover:bg-[#334155] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2 border border-white/5"
                  title="Open SMS on phone or messaging app"
                >
                  <MessageSquare size={14} className="text-[#38bdf8]" /> SMS Message
                </button>

                {/* Instant WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="px-5 py-3.5 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors border border-emerald-500/20"
                  title="Send via WhatsApp"
                >
                  WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
