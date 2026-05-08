import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with actual EmailJS credentials later
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    //   from_name: form.name,
    //   to_name: 'Your Name',
    //   from_email: form.email,
    //   to_email: 'your_email@example.com',
    //   message: form.message,
    // }, 'YOUR_PUBLIC_KEY')

    // Simulating API call for demonstration
    setTimeout(() => {
      setLoading(false);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-primary-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's work together!</h3>
            <p className="text-slate-400 mb-10 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg glass flex items-center justify-center text-primary-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:hello@example.com" className="text-lg font-medium text-white hover:text-primary-400 transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg glass flex items-center justify-center text-primary-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-medium text-white">Nagpur, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg glass flex items-center justify-center text-primary-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-lg font-medium text-white">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl flex flex-col gap-6"
            >
              <div>
                <label className="text-sm font-medium text-slate-400 mb-2 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-400 mb-2 block">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-400 mb-2 block">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="What's on your mind?"
                  className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <Send size={18} />}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-center text-sm"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
