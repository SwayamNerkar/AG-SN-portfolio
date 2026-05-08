import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    type: 'work',
    role: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    date: '2023 - Present',
    description: 'Lead the frontend team in developing responsive web applications using React and Next.js. Improved performance by 40% and implemented a comprehensive design system.',
  },
  {
    id: 2,
    type: 'work',
    role: 'Full Stack Developer',
    company: 'StartupX',
    date: '2021 - 2023',
    description: 'Built scalable APIs using Node.js and developed interactive UI components. Integrated third-party services and handled database architecture.',
  },
  {
    id: 3,
    type: 'education',
    role: 'Master of Computer Science',
    company: 'University of Technology',
    date: '2019 - 2021',
    description: 'Specialized in Artificial Intelligence and Web Technologies. Graduated with honors. Thesis on advanced UI/UX patterns in modern web apps.',
  },
  {
    id: 4,
    type: 'education',
    role: 'Bachelor of Software Engineering',
    company: 'State University',
    date: '2015 - 2019',
    description: 'Core focus on algorithms, data structures, and software architecture. Led the university programming club.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Journey</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-darker rounded-full">
            <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-primary-500 to-transparent rounded-full" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-primary-500 ring-4 ring-darker z-10">
                  <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-75" />
                </div>

                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 pl-0 md:pl-12 md:pr-12 md:px-0">
                  <div className={`glass-card p-6 rounded-2xl relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}>
                    {/* Arrow */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white/5 border-white/10 rotate-45 transform ${index % 2 === 0 ? '-left-2 border-l border-b' : '-right-2 border-r border-t'
                      }`} />

                    <div className={`flex items-center gap-2 mb-2 text-primary-400 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                      }`}>
                      {exp.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                      <span className="font-medium">{exp.role}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>

                    <div className={`flex items-center gap-2 text-slate-500 text-sm mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                      }`}>
                      <Calendar size={14} />
                      <span>{exp.date}</span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
