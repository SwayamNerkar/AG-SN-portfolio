import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Nexus AI Terminal',
    category: 'Artificial Intelligence',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fit=crop&w=1200&h=800',
    link: '#'
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Full Stack Web',
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=1200&h=800',
    link: '#'
  },
  {
    id: 3,
    title: 'Virtual Architecture Studio',
    category: 'WebGL & 3D',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fit=crop&w=1200&h=800',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 page-transition">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Selected <span className="outline-text">Works.</span>
            </h1>
            <div className="w-full h-px bg-[#1f1f1f]" />
          </div>
          <p className="text-[#888] font-semibold tracking-widest uppercase text-sm max-w-xs md:text-right">
            A curated collection of my most recent and impactful digital builds.
          </p>
        </motion.div>

        <div className="grid gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-3xl md:text-5xl font-bold group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h2>
                <span className="text-[#666] uppercase tracking-widest text-sm font-bold mt-2 md:mt-0">
                  {project.category}
                </span>
              </div>
              <div className="w-full aspect-[16/7] md:aspect-[21/9] overflow-hidden rounded-sm bg-[#111] relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-[0.22,1,0.36,1]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
