import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, BookOpen } from 'lucide-react';
import shardeumGcoen from '../assets/shardeum gcoen.png';
import googleCloud from '../assets/google cloud.png';
import iaisSummit from '../assets/IAIS3.png';
import googleArcade from '../assets/goole comunity.png';
import edujourneyAzure from '../assets/edujourney azure.png';
import axis24 from "../assets/axis'24.png";

const achievements = [
  {
    id: 1,
    title: 'Sahyadri Ratna Puraskar 2025',
    category: 'Notable Award',
    date: '2025',
    img: 'https://picsum.photos/id/104/800/500',
    icon: <Award className="text-accent" size={24} />,
    desc: 'Recipient of the prestigious Sahyadri Ratna Puraskar 2025, awarded in recognition of outstanding achievements, technical excellence, and contributions in the fields of technology, innovation, and academic development.',
    link: 'https://www.linkedin.com/sharing/share-offsite/?url=https://example.com/sahyadri-ratna-2025',
    linkText: 'Share on LinkedIn'
  },
  {
    id: 2,
    title: 'Published Author – “Option Decoders”',
    category: 'Publication',
    date: '2024',
    img: 'https://picsum.photos/id/20/800/500',
    icon: <BookOpen className="text-accent" size={24} />,
    desc: 'Authored the book "Option Decoders", focused on simplifying concepts of options trading, derivatives, and market psychology for beginners and aspiring traders. The book is published and available on major platforms including Amazon and Google Books, reflecting strong analytical, financial, and educational expertise.',
    link: 'https://www.amazon.com',
    linkText: 'View on Amazon'
  },
  {
    id: 7,
    title: '2nd Runner-Up – Build4Change Hackathon',
    category: 'Hackathon Award',
    date: 'Aug 22, 2024',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&h=500&q=80',
    icon: <Award className="text-accent" size={24} />,
    desc: 'Secured 2nd Runner-Up position with Team "Stack Overfloor" at Anjuman College of Engineering & Technology, Nagpur. Developed an innovative AI-based anomaly detection system for medical imaging.',
    link: 'https://github.com/SwayamNerkar',
    linkText: 'View Project'
  },
  {
    id: 3,
    title: 'Cloud Computing Seminar Organization',
    category: 'Leadership',
    date: '2025',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500&q=80',
    icon: <ExternalLink className="text-accent" size={24} />,
    desc: 'Actively contributed to organizing the technical seminar: "Jumpstart Your Tech Career: Master Cloud Computing Fundamentals with AWS, Azure & GCP". Handled event coordination, technical session management, and student engagement activities.',
    link: 'https://www.linkedin.com/in/swayam-nerkar-79043322b',
    linkText: 'View Organization Details'
  },
  {
    id: 4,
    title: 'Shardeum Mini Hackathon Participant',
    category: 'Hackathon',
    date: '2024',
    img: shardeumGcoen,
    icon: <Award className="text-accent" size={24} />,
    desc: 'Participated in the Shardeum Mini Hackathon at Government College of Engineering, Nagpur. Collaborated on innovative technical problem-solving and blockchain-oriented development concepts within the Shardeum ecosystem.',
    link: 'https://github.com/SwayamNerkar',
    linkText: 'View Github'
  },
  {
    id: 5,
    title: 'Biz Tech Ideathon 2025',
    category: 'Innovation',
    date: '2025',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500&q=80',
    icon: <Award className="text-accent" size={24} />,
    desc: 'Participated in Biz Tech Ideathon 2025, focusing on entrepreneurship, business innovation, and technology-driven solution building. Developed and pitched innovative tech-business models.',
    link: 'https://www.linkedin.com/in/swayam-nerkar-79043322b',
    linkText: 'View Event'
  },
  {
    id: 6,
    title: 'Technical Blog Writing – “The Writers’ Lounge”',
    category: 'Writing / Content',
    date: '2024 - 2025',
    img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&h=500&q=80',
    icon: <BookOpen className="text-accent" size={24} />,
    desc: 'Authored technical articles and creative content for "The Writers\' Lounge". Focused on simplifying complex tech concepts, improving SEO, and engaging readers through high-quality professional writing.',
    link: 'https://www.linkedin.com/in/swayam-nerkar-79043322b',
    linkText: 'Read My Blogs'
  },
  {
    id: 8,
    title: 'Google Cloud & Qwiklabs Learning Program – Participant',
    category: 'Certification & Learning',
    date: '2025',
    img: googleCloud,
    icon: <BookOpen className="text-accent" size={24} />,
    desc: 'Participated in a cloud learning program organized by Google Cloud Community India and DevRhylme Pvt. Ltd., gaining hands-on exposure to Google Cloud technologies and cloud infrastructure fundamentals.\n\nExplored the Google Cloud learning ecosystem through Qwiklabs, focusing on cloud labs, project environments, IAM roles, APIs, and Google Cloud services. The program enhanced practical understanding of cloud computing workflows and modern infrastructure management.\n\nKey Learnings:\n• Worked with Google Cloud lab environments and Qwiklabs\n• Learned Google Cloud Console navigation and project management\n• Explored Cloud IAM roles and access control concepts\n• Gained insights into APIs, cloud services, AI, and Machine Learning',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 9,
    title: 'IAIS 2024 International AI Summit – Volunteer',
    category: 'Leadership & Volunteering',
    date: '2024',
    img: iaisSummit,
    icon: <Award className="text-accent" size={24} />,
    desc: 'Successfully volunteered at the IAIS 2024 International AI Summit #3, conducted on 30–31 August 2024 at GHRCEMN. The summit was technically sponsored by IEEE Bombay Section and IEEE Student Branch GHRCEM.\n\nThe event brought together AI researchers, industry experts, academicians, and students from across the globe to discuss the latest advancements in Artificial Intelligence through keynote sessions, technical discussions, and workshops.\n\nHad the opportunity to gain insights from experts including Jibu Elias, Akash James, and Nivash Jeevanandam. Special thanks to Dr. Smita Nirkhi Singh, Dr. Vivek Kapur, and Tabassum H Khan for their guidance and support.',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 10,
    title: 'Google Arcade Games & Qwiklabs Challenges – Achievement',
    category: 'Certification & Learning',
    date: '2025',
    img: googleArcade,
    icon: <BookOpen className="text-accent" size={24} />,
    desc: 'Successfully completed the Google Arcade Games learning challenges through Qwiklabs, earning multiple badges, certifications, and credentials by completing hands-on labs, trivia rounds, and skill-based challenges.\n\nThe program strengthened practical knowledge in cloud technologies, problem-solving, and developer tools through interactive learning experiences and real-world tasks.\n\nAlso received official swags and recognition for successfully completing all challenge levels and achievements.',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 11,
    title: 'Azure AI Fundamentals Cloud Course – Certification',
    category: 'Certification & Learning',
    date: '2025',
    img: edujourneyAzure,
    icon: <BookOpen className="text-accent" size={24} />,
    desc: 'Successfully completed the Azure AI Fundamentals Cloud Course from EduJourney.in, presented by Swaraj A Deshmukh.\n\nThe course provided hands-on exposure to core Artificial Intelligence concepts and practical implementation using Microsoft Azure AI services and cloud technologies.\n\nKey Learnings:\n• Machine Learning using Azure Machine Learning Studio\n• Natural Language Processing (NLP) and Text Analytics\n• Computer Vision with Azure Vision services\n• Conversational AI using Azure Bot Service and QnA Maker',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 12,
    title: 'AXIS ’24 Campus Ambassador – Certification of Excellence',
    category: 'Leadership & Volunteering',
    date: '2024',
    img: axis24,
    icon: <Award className="text-accent" size={24} />,
    desc: 'Awarded a distinguished Certificate of Excellence for outstanding contributions and leadership in the Campus Ambassador Program for AXIS ’24, the national-level techno-management festival of VNIT Nagpur.\n\nRepresented the festival on campus, drove student participation, and successfully coordinated promotional campaigns, showing high commitment, leadership, and marketing skills.',
    link: '#',
    linkText: 'View Details'
  }
];

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

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
              Awards & <span className="text-accent">Recognition.</span>
            </h1>
            <div className="w-full h-px bg-[#1f1f1f]" />
          </div>
          <p className="text-[#888] font-semibold tracking-widest uppercase text-sm max-w-xs md:text-right">
            ( Click card for details ), showcasing industry recognition and published works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] rounded-sm cursor-pointer aspect-video"
              onClick={() => setSelectedAchievement(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-sm">
                    {item.icon}
                  </div>
                  <span className="text-white font-bold text-xs bg-black/50 backdrop-blur-sm px-3 py-1 border border-white/10">
                    {item.date}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-accent transition-colors duration-300 uppercase tracking-tighter">
                    {item.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedAchievement && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedAchievement(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-[#0a0a0a] border border-[#1f1f1f] max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-sm relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors p-2"
                >
                  <X size={32} />
                </button>

                <div className="overflow-y-auto">
                  <div className="aspect-video w-full bg-[#111]">
                    <img
                      src={selectedAchievement.img}
                      alt="Achievement Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8 md:p-12">
                    <div className="mb-8">
                      <p className="text-accent font-bold tracking-widest uppercase text-xs mb-2">{selectedAchievement.category}</p>
                      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">{selectedAchievement.title}</h2>
                      <p className="text-white/40 font-bold text-sm uppercase tracking-widest">{selectedAchievement.date}</p>
                    </div>

                    <div className="space-y-8">
                      <p className="text-[#a0a0a0] leading-relaxed font-medium text-lg">
                        {selectedAchievement.desc}
                      </p>

                      <div className="flex flex-wrap gap-4 pt-4">
                        <a
                          href={selectedAchievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-accent transition-colors"
                        >
                          <ExternalLink size={16} /> {selectedAchievement.linkText}
                        </a>
                      </div>
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

export default Achievements;
