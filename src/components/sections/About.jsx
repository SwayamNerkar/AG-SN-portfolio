import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Terminal className="text-primary-400" size={24} />,
      title: 'Clean Code',
      desc: 'Writing maintainable, scalable, and efficient code is my priority.',
    },
    {
      icon: <Code className="text-primary-400" size={24} />,
      title: 'Modern Tech',
      desc: 'Building with the latest frameworks and best practices.',
    },
    {
      icon: <Cpu className="text-primary-400" size={24} />,
      title: 'Optimization',
      desc: 'Ensuring fast load times and smooth performance across devices.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold mb-4 text-white">Who am I?</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I am a passionate software engineer with a strong focus on building user-centric, visually stunning, and highly performant web applications. With a foundation in computer science and an eye for design, I bridge the gap between aesthetics and functionality.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                My philosophy is simple: write clean code, design intuitive interfaces, and always keep learning. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or optimizing my workflows.
              </p>

              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">3+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Years Exp.</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">20+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Projects</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Commitment</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl flex gap-6 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-lg glass flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
