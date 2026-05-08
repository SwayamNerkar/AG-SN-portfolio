import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import swayinImg from '../assets/swayin_predictor.png';
import shardeumImg from '../assets/shardeum_project.png';
import matrixImg from '../assets/matrix_portfolio.png';

const projects = [
  {
    id: 1,
    title: 'SWAYIN Index Accuracy',
    category: 'AI / Fintech',
    img: swayinImg,
    github: 'https://github.com/SwayamNerkar/SWAYIN-Index-price-accuracy',
    link: '#',
    tags: ['AI/ML', 'LSTM', 'Python', 'Financial Analytics'],
    desc: 'An AI-powered stock market prediction and analysis platform developed to forecast NIFTY 50 index price movements using machine learning and deep learning models.',
    techStack: 'Python, TensorFlow, LSTM, Pandas, NumPy, Matplotlib, Scikit-learn, Streamlit, APIs',
    features: [
      'AI-based NIFTY 50 forecasting',
      'LSTM neural network prediction model',
      'Historical market data analysis',
      'Interactive visualization dashboard',
      'Technical indicator integration',
      'Real-time market trend insights',
      'Prediction accuracy optimization',
      'Buy/Sell trend analysis'
    ],
    impact: 'Built a real-world AI-driven financial analysis system focused on stock market forecasting and prediction accuracy enhancement using machine learning, deep learning, and time-series analysis techniques.'
  },
  {
    id: 2,
    title: 'Shardeum Blockchain',
    category: 'Web3 / Blockchain',
    img: shardeumImg,
    github: 'https://github.com/SwayamNerkar/Shardeum.Project',
    link: '#',
    tags: ['Web3', 'Blockchain', 'React.js', 'UI/UX'],
    desc: 'A blockchain-based Web3 project inspired by the Shardeum ecosystem, focused on exploring decentralized technologies, scalable blockchain infrastructure, and modern Web3 development concepts.',
    techStack: 'JavaScript, React.js, Web3, Blockchain Concepts, APIs, Tailwind CSS, Node.js',
    features: [
      'Blockchain-inspired Web3 interface',
      'Modern responsive frontend design',
      'Interactive decentralized application structure',
      'Wallet/Web3 integration concepts',
      'Scalable and clean UI architecture',
      'Real-time blockchain ecosystem exploration',
      'Responsive and optimized user experience'
    ],
    impact: 'Built a Web3-focused blockchain project inspired by the Shardeum ecosystem to explore decentralized technologies, scalable blockchain systems, and modern frontend development practices.'
  },
  {
    id: 3,
    title: 'Matrix Portfolio',
    category: 'Web Development / UI',
    img: matrixImg,
    github: 'https://github.com/SwayamNerkar/Matrix-Portfolio',
    link: '#',
    tags: ['HTML/CSS', 'JS Animations', 'Retro UI', 'Portfolio'],
    desc: 'A "Matrix" themed personal portfolio and resume website, which was one of my first major projects in 2023. It features a digital rain background and a hacker-style terminal aesthetic.',
    techStack: 'HTML5, CSS3, JavaScript (Digital Rain Canvas), Responsive Design',
    features: [
      'Digital Matrix Rain canvas effect',
      'Terminal-inspired navigation menu',
      'Interactive typewriter animations',
      'Modern responsive resume layout',
      'Early frontend experimentation'
    ],
    impact: 'Demonstrated early passion for creative web development and mastery of custom CSS/JS animations through a unique themed experience.'
  },
  {
    id: 4,
    title: 'FindMate – Smart Connection',
    category: 'Web App / Networking',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=800&q=80',
    github: 'https://github.com/SwayamNerkar/FindMate-website-',
    link: '#',
    tags: ['React.js', 'Firebase', 'Tailwind', 'UI/UX'],
    desc: 'FindMate is a modern web-based platform designed to help users discover, connect, and interact through a clean and user-friendly digital experience.',
    techStack: 'React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Firebase, APIs',
    features: [
      'Modern responsive user interface',
      'Interactive and clean frontend experience',
      'Optimized component-based architecture',
      'Dynamic user interaction system',
      'Mobile-friendly responsive design',
      'Smooth navigation and UI transitions',
      'Scalable frontend structure',
      'Real-time connectivity concepts'
    ],
    impact: 'Developed a modern networking and connection platform focused on responsive frontend development, interactive UI/UX design, and scalable web application architecture using modern web technologies.'
  },
  {
    id: 5,
    title: 'Curriculum Scheduling System',
    category: 'College Management / Dashboard',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800&q=80',
    github: 'https://github.com/SwayamNerkar/CSS',
    link: '#',
    tags: ['React.js', 'Firebase', 'Management System', 'Dashboard UI'],
    desc: 'CSS (Curriculum Scheduling System) is a smart college management and scheduling platform developed for GHRCEMN to streamline day-to-day academic and administrative operations.',
    techStack: 'HTML5, CSS3, JavaScript, React.js, Firebase, Responsive Web Design',
    features: [
      'Curriculum and timetable scheduling system',
      'Student attendance management',
      'Examination and academic workflow management',
      'Faculty coordination and scheduling',
      'Finance and administration module concepts',
      'Responsive dashboard interface',
      'Role-based management structure',
      'Interactive and user-friendly UI',
      'Centralized college activity management',
      'Modern portal-inspired architecture'
    ],
    impact: 'Developed a centralized college management and curriculum scheduling platform for GHRCEMN focused on improving academic workflow management, scheduling efficiency, and user experience.'
  },
  {
    id: 6,
    title: 'The Career Company',
    category: 'Career Services / Frontend',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&h=800&q=80',
    github: 'https://github.com/SwayamNerkar/The-Man-Company-Website',
    link: '#',
    tags: ['JavaScript', 'LocalStorage', 'Frontend', 'UI/UX'],
    desc: 'The Career Company is a modern web-based career guidance and mentorship platform designed to connect candidates with mentors through an interactive digital experience.',
    techStack: 'HTML5, CSS3, JavaScript, LocalStorage API, Font Awesome',
    features: [
      'Interactive landing page with career services overview',
      'Candidate registration system',
      'Mentor onboarding and profile management',
      'Dynamic mentor profile rendering',
      'Session booking and scheduling system',
      'Booking confirmation workflow',
      'Responsive and modern UI design',
      'LocalStorage-based persistent data handling',
      'Organized multi-page web architecture'
    ],
    impact: 'Developed a career guidance and mentorship web platform focused on improving mentor-candidate interaction, scheduling workflows, and responsive user experience.'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
            ( Click entries to preview Project), curated collection of my recent & impactful digital builds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] rounded-sm cursor-pointer aspect-video"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-accent text-black font-black uppercase text-[10px] tracking-widest">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-accent transition-colors duration-300 uppercase tracking-tighter">
                    {project.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-[#0a0a0a] border border-[#1f1f1f] max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-sm relative flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors bg-black/50 p-2 rounded-full"
                >
                  <X size={24} />
                </button>

                {/* Image Side */}
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden bg-[#111] relative">
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content Side */}
                <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                  <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
                    {selectedProject.title}
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <p className="text-[#a0a0a0] leading-relaxed font-medium mb-6">
                        {selectedProject.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-[#222] text-[#666]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                      <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 border-b border-[#1f1f1f] pb-2">Tech Stack</h4>
                        <p className="text-[#888] text-sm leading-relaxed">{selectedProject.techStack}</p>
                      </div>

                      <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 border-b border-[#1f1f1f] pb-2">Key Features</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                          {selectedProject.features.map((feature, i) => (
                            <li key={i} className="text-[#888] text-xs flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 border-b border-[#1f1f1f] pb-2">Impact</h4>
                        <p className="text-[#888] text-xs leading-relaxed italic">{selectedProject.impact}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white text-black font-black uppercase tracking-widest text-xs py-4 flex items-center justify-center gap-2 hover:bg-accent transition-colors"
                      >
                        <Github size={16} /> View GitHub
                      </a>
                      {selectedProject.link && selectedProject.link !== '#' && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 border border-[#222] text-white font-black uppercase tracking-widest text-xs py-4 flex items-center justify-center gap-2 hover:bg-[#111] transition-colors"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
