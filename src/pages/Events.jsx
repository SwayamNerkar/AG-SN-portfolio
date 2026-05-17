import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import ieeeWebinar from '../assets/IEEE webinar.png';
import awsUserGroup from '../assets/AWS user group.png';
import gcoenShardeum from '../assets/GCOEN Shardeum.png';
import pynetsLab from '../assets/pynets lab .png';
import ndimHackathon from '../assets/NDIM hackathon .png';
import build4change from '../assets/build4change.png';
import supabaseLw15 from '../assets/supabase lw15.png';
import skyStory from '../assets/skystory.png';

const events = [
  {
    id: 5,
    title: 'IEEE WIE Webinar – Student Coordinator',
    type: 'Webinar',
    date: 'April 2026',
    img: ieeeWebinar,
    desc: 'Contributed as a Student Coordinator for the webinar “Jumpstart Your Tech Career: Master Cloud Computing Fundamentals with AWS, Azure & GCP”, organized by the Department of AI in collaboration with the IEEE WIE Student Branch at GHRCEMN. Coordinated with faculty members and organizing teams to ensure smooth event execution, participant engagement, and technical management. The webinar provided insights into AWS, Microsoft Azure, and Google Cloud Platform (GCP) along with career opportunities in Cloud Computing.',
    subtitle: 'G H Raisoni College of Engineering & Management (GHRCEMN), Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 6,
    title: 'AWS User Group Nagpur – Event Coordination & Community Contribution',
    type: 'Community Event',
    date: '2026',
    img: awsUserGroup,
    desc: 'Contributed to the successful execution of the AWS re:Invent Recap Session organized by the AWS User Group Nagpur. The session, delivered by Vishal Alhat, focused on major AWS re:Invent announcements, cloud architecture insights, and real-world industry applications. Collaborated with the organizing team and volunteers in managing event coordination, attendee engagement, and smooth event operations. The event brought together cloud enthusiasts, developers, and learners for insightful discussions and community networking.',
    subtitle: 'Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 7,
    title: 'Shardeum Mini Hackathon – Participant',
    type: 'Hackathon',
    date: '2026',
    img: gcoenShardeum,
    desc: 'Participated in the Mini Hackathon by Shardeum, organized by the Electrical Engineering Students Association (EESA) at Government College of Engineering Nagpur, along with teammate Prajwal Ghagre. Collaborated on innovative ideas focused on Web3 and blockchain technologies, exploring real-world problem-solving approaches and decentralized solutions. The hackathon provided valuable hands-on experience in teamwork, creativity, and technical brainstorming.',
    subtitle: 'Government College of Engineering, Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 8,
    title: 'Essentials of Data Science Workshop – Participant',
    type: 'Workshop',
    date: '2026',
    img: pynetsLab,
    desc: 'Successfully completed the Workshop on Essentials of Data Science, organized by G H Raisoni College of Engineering & Management in collaboration with PyNet Labs. The workshop strengthened my understanding of Data Science fundamentals, networking concepts, and practical applications of data-driven technologies. It also provided valuable exposure to industry insights and emerging trends through interactive learning sessions with experts.',
    subtitle: 'G H Raisoni College of Engineering & Management (GHRCEMN), Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 9,
    title: 'Biz Tech Ideathon 2025 – Participant',
    type: 'Ideathon',
    date: '2025',
    img: ndimHackathon,
    desc: 'Participated in the Biz Tech Ideathon 2025, contributing to the Registration & Idea Submission Round (Online) alongside teammates Vibhuti Sarode, Sahil Karande, Prajwal Ghagre, and Swayam Nerkar. Collaborated on brainstorming innovative business and technology-driven solutions, focusing on creativity, strategic thinking, and real-world problem-solving approaches. The ideathon provided valuable exposure to teamwork, idea development, and innovation-based collaboration.',
    subtitle: 'New Delhi Institute of Management',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 10,
    title: 'Build4Change Hackathon – 2nd Runner-Up',
    type: 'Hackathon',
    date: 'August 2025',
    img: build4change,
    desc: 'Achieved the 2nd Runner-Up Position at the Build4Change Hackathon as part of Team Stack Overfloor. Developed an AI-based anomaly detection system for medical imaging, designed to assist doctors in diagnosis and improve patient confidence in medical reports through intelligent image analysis and anomaly identification. Collaborated with teammates Swayam Nerkar, Chaitanya Karanjekar, Vibhuti Sarode, and Avinash Madnani, with valuable contributions from Ayaan Sheikh, Aqtab Zafar, and Saud Ahmad.',
    subtitle: 'Anjuman College of Engineering & Technology',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 11,
    title: 'Supabase Launch Week 15 Meetup – Participant',
    type: 'Meetup',
    date: '2026',
    img: supabaseLw15,
    desc: 'Participated in the Supabase Launch Week 15 Meetup in Nagpur, engaging with the local developer community through interactive discussions, hands-on demos, and knowledge-sharing sessions on modern backend technologies. Explored the latest Supabase features including Edge Functions, Real-Time Updates, and AI Integrations, while gaining insights into open-source backend development and scalable application architecture. Special thanks to Aayush Paigwar and the organizing community for creating an engaging and collaborative learning environment.',
    subtitle: 'Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 12,
    title: 'Story Hands-On Session – Web3 Participant',
    type: 'Web3 Event',
    date: 'June 2025',
    img: skyStory,
    desc: 'Participated in the Story Hands-On Session held in Nagpur on 15 June 2025, focused on innovative Web3 technologies and decentralized content-based addressing systems designed for secure and resilient data sharing. Gained practical exposure to blockchain interactions by successfully executing a first wallet transaction and engaging in discussions around decentralized ecosystems, Web3 innovation, and future internet infrastructure. Collaborated and networked with fellow participants including Thanush Chittabathina and Abhishek Bhadra, while receiving guidance from Aishwary Gathe and Atharva Werulkar. Special thanks to Tushar Pamnani, Central DAO, and Story for organizing the interactive learning session.',
    subtitle: 'Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 1,
    title: 'Global Tech Summit 2025',
    type: 'Conference',
    date: 'Oct 12, 2025',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?fit=crop&w=800&h=500',
    desc: 'Joined industry leaders at the Global Tech Summit 2025 to discuss the future of technology, AI advancements, and software architecture.',
    subtitle: 'Global Technology Conference',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 2,
    title: 'React Advanced Workshop',
    type: 'Workshop',
    date: 'Aug 04, 2025',
    img: 'https://images.unsplash.com/photo-1475721025870-2440edfab4e0?fit=crop&w=800&h=500',
    desc: 'Participated in a hands-on workshop covering advanced React patterns, performance optimization, and modern state management.',
    subtitle: 'Frontend Development Workshop',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 3,
    title: 'AI Dev Hackathon',
    type: 'Hackathon',
    date: 'May 20, 2025',
    img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?fit=crop&w=800&h=500',
    desc: 'Competed in a 48-hour hackathon to build AI-powered applications, focusing on integrating LLMs into user-facing products.',
    subtitle: 'AI & Machine Learning',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 4,
    title: 'Design Systems Meetup',
    type: 'Meetup',
    date: 'Mar 15, 2025',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?fit=crop&w=800&h=500',
    desc: 'Attended a meetup focused on building scalable, accessible, and beautiful design systems for enterprise applications.',
    subtitle: 'UI/UX Design Community',
    link: '#',
    linkText: 'View Details'
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
              Industry <span className="text-accent">Events.</span>
            </h1>
            <div className="w-full h-px bg-[#1f1f1f]" />
          </div>
          <p className="text-[#888] font-semibold tracking-widest uppercase text-sm max-w-xs md:text-right">
            ( Click card for details ) Speaking engagements, workshops, and community involvement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] rounded-sm cursor-pointer aspect-video"
              onClick={() => setSelectedEvent(event)}
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-[#38bdf8] text-[#020617] font-bold uppercase text-xs tracking-widest">
                    {event.type}
                  </span>
                  <span className="text-white font-semibold text-sm bg-black/50 backdrop-blur-sm px-3 py-1 border border-white/10">
                    {event.date}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {event.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-[#0a0a0a] border border-[#1f1f1f] max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-sm relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors p-2"
                >
                  <X size={32} />
                </button>

                <div className="overflow-y-auto">
                  <div className="aspect-video w-full bg-[#111]">
                    <img
                      src={selectedEvent.img}
                      alt="Event Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8 md:p-12">
                    <div className="mb-8">
                      <p className="text-accent font-bold tracking-widest uppercase text-xs mb-2">{selectedEvent.type}</p>
                      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">{selectedEvent.title}</h2>
                      <div className="flex flex-col gap-1">
                        <p className="text-white/40 font-bold text-sm uppercase tracking-widest">{selectedEvent.subtitle}</p>
                        <p className="text-white/40 font-bold text-sm uppercase tracking-widest">{selectedEvent.date}</p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <p className="text-[#a0a0a0] leading-relaxed font-medium text-lg">
                        {selectedEvent.desc}
                      </p>

                      <div className="flex flex-wrap gap-4 pt-4">
                        {selectedEvent.link !== '#' && (
                          <a
                            href={selectedEvent.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-accent transition-colors"
                          >
                            <ExternalLink size={16} /> {selectedEvent.linkText}
                          </a>
                        )}
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

export default Events;
