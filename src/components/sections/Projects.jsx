import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Nexus AI Terminal',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fit=crop&w=800&h=500',
    description: 'A sophisticated AI dashboard for data visualization and predictive analysis with dark mode support.',
    tech: ['React', 'Python', 'TensorFlow', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&h=500',
    description: 'Full-stack e-commerce solution with Stripe integration, real-time inventory, and admin dashboard.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Crypto Tracker App',
    category: 'Apps',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?fit=crop&w=800&h=500',
    description: 'Real-time cryptocurrency tracking application with interactive charts and portfolio management.',
    tech: ['React Native', 'Firebase', 'CoinGecko API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Virtual Architecture Studio',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fit=crop&w=800&h=500',
    description: 'Interactive 3D portfolio for architecture firms using WebGL and advanced animations.',
    tech: ['Three.js', 'React', 'GSAP', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const categories = ['All', 'Web', 'AI', 'Apps'];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full opacity-50 mb-8" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'glass text-slate-400 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-darker/50 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-medium bg-darker/80 backdrop-blur-md text-white rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs text-primary-400 bg-primary-500/10 rounded-md border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-darker font-medium rounded-lg hover:bg-slate-200 transition-colors text-sm"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center gap-2 px-4 py-2 glass text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
