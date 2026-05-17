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
import supabaseLw14 from '../assets/supabase lw14.png';
import supabaseTicket from '../assets/supabase ticket .png';
import vidharba from '../assets/vidharba.png';
import ghrceFigma from '../assets/ghrce figma.png';
import iitkCertificate from '../assets/IITK certificate.png';
import nxtwaveOnline from '../assets/nextwave online .png';
import gdg2024 from '../assets/gdg 2024.png';
import iimBootcamp from '../assets/IIM .png';
import tieNagpur from '../assets/TIE nagpur.png';
import cssProject from '../assets/CSS.png';
import engIndia from '../assets/eng india.png';
import fireblazeHome from '../assets/fireblaze home.png';
import googleCloud from '../assets/google cloud.png';
import azureDevDay from '../assets/azure dev day.png';
import iaisSummit from '../assets/IAIS3.png';
import infedHackathon from '../assets/Imm infed.png';
import azureIotSession from '../assets/reskill ghriet.png';
import googleIoExtended from '../assets/perficient .png';
import aiManthan from '../assets/iim manthan.png';
import mlsaEvent from '../assets/robot.png';
import techotsavEvent from '../assets/tech gdsc.png';
import axis24 from "../assets/axis'24.png";
import makxeniaWorkshop from '../assets/makxenia.png';

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
    id: 13,
    title: 'Supabase Launch Week 14 Meetup – Participant',
    type: 'Meetup',
    date: '2025',
    img: supabaseLw14,
    desc: 'Attended the Supabase Launch Week 14 Meetup, hosted by Supabase and led by Tejas Nasre. The session focused on the fundamentals of Supabase through interactive discussions and hands-on learning experiences. Collaborated with peers including Swayam Nerkar, Soumya Agrawal, Vaibhav Talkhande, and Soham Khedkar during a collaborative project-building activity that emphasized teamwork and practical implementation. The meetup provided valuable exposure to web development, backend technologies, and open-source innovation, while also offering networking opportunities with developers and tech enthusiasts from the community.',
    subtitle: 'Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 14,
    title: 'Supabase Launch Week 14 & 15 - ticket',
    type: 'Meetup',
    date: 'March 2025',
    img: supabaseTicket,
    desc: 'Participated in Supabase Launch Week 14 held at OFIS Nagpur, exploring the latest advancements, developer tools, and innovative features introduced by Supabase. Engaged with the developer community through interactive discussions and learning sessions focused on modern backend development, open-source technologies, and project optimization techniques.',
    subtitle: 'OFIS, Nagpur',
    link: '#',
    linkText: 'View Details',
    imgFit: 'object-contain'
  },
  {
    id: 15,
    title: 'Advantage Vidarbha 2025 – Education & Skill Development Session',
    type: 'Summit Session',
    date: '2025',
    img: vidharba,
    desc: 'Attended Advantage Vidarbha 2025, a large-scale initiative focused on industrial growth, innovation, investment opportunities, and economic development in the Vidarbha region under the leadership of Nitin Gadkari. Participated in the Education and Skill Development Session, which emphasized empowering students and professionals with future-ready skills, industry exposure, and innovation-driven learning opportunities. The event also highlighted impactful projects and inventions showcased by young engineers and entrepreneurs from colleges across Nagpur. Attended the session alongside colleagues Rushabh Chamat, Gaurav Waghmare, Dhiraj Bhange, Vibhuti Sarode, Charvi Khandar, and Swayam Nerkar.',
    subtitle: 'Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 16,
    title: 'Ctrl+Alt+Design: UI/UX & Brand Designing Workshop – Participant',
    type: 'Workshop',
    date: '2025',
    img: ghrceFigma,
    desc: 'Participated in the hands-on workshop “Ctrl+Alt+Design: A UI/UX & Brand Designing Workshop”, focused on modern UI/UX principles, branding strategies, and creative design practices. The session was conducted by Shreyash Bhisekar and Mohit K Rahangdale, covering practical concepts in Figma, prototyping, wireframing, logo design, branding, and animation through interactive demonstrations and real-world examples. Attended the workshop alongside Swayam Nerkar and Thanush Chittabathina, gaining valuable insights into user-centered design and brand identity creation.',
    subtitle: 'GHRCEMN, Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 17,
    title: 'E-Summit’24 & Generative AI Workshop – Participant',
    type: 'Summit & Workshop',
    date: 'January 2025',
    img: iitkCertificate,
    desc: 'Participated in E-Summit’24, organized by the Entrepreneurship Cell at IIT Kanpur from January 17–19, 2025. The event provided valuable exposure to entrepreneurship, startup ecosystems, innovation strategies, and emerging technologies through interactive sessions and networking opportunities. Also attended a Generative AI Workshop, gaining practical insights into AI-driven business solutions, automation, content generation, and innovative product development. The sessions highlighted the growing impact of AI across industries and its role in entrepreneurship and scalable technology solutions.',
    subtitle: 'Indian Institute of Technology Kanpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 18,
    title: 'Generative AI Mega Workshop – Participant',
    type: 'Workshop',
    date: '2025',
    img: nxtwaveOnline,
    desc: 'Successfully completed live sessions of the Generative AI Mega Workshop organized by NxtWave. The workshop provided practical exposure to Generative AI technologies, covering topics such as AI opportunities, applications, investments, architecture, Large Language Models (LLMs), AI avatar development, model building, deployment, and testing processes. The sessions enhanced understanding of modern AI workflows and emerging trends in artificial intelligence and machine learning.',
    subtitle: 'NxtWave (Online)',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 19,
    title: 'DevFest 2024 – Participant',
    type: 'Summit & Conference',
    date: '2024',
    img: gdg2024,
    desc: 'Participated in DevFest 2024, organized by GDG Nagpur in collaboration with GDG Cloud Nagpur, GDSC, Google Developer Experts, and Women Techmakers Nagpur. The event provided valuable exposure to emerging technologies, developer ecosystems, and professional networking opportunities. Attended insightful sessions on LLMs, Flutter, Firebase, Angular Signals, AI applications, and quiz generation systems, along with engaging panel discussions focused on technology and Nagpur’s growing innovation ecosystem. The experience enhanced both technical understanding and interpersonal skills through collaboration, networking, and interaction with industry experts and developers. Attended the event alongside teammates Pratiksha Kathane, Vibhuti Sarode, Mahip Tople, Yash Balpande, Abhishek Bhadra, Sagar Katakwar, and Karan Baghele.',
    subtitle: 'GDG Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 20,
    title: 'Ideation Bootcamp – Participant',
    type: 'Bootcamp',
    date: '2025',
    img: iimBootcamp,
    desc: 'Participated in the Ideation Bootcamp organized by InFED and the Corporate Relations & Placement Committee at IIM Nagpur. The bootcamp provided practical exposure to entrepreneurship, startup ideation, and business strategy development through mentorship-driven sessions and collaborative activities. Gained hands-on experience in idea validation, business model creation, pitch preparation, team building, resource mapping, networking, and action plan development for transforming innovative concepts into scalable ventures. Special thanks to Shashikant Chaudhary and Aniruddha Athawale for their valuable guidance and mentorship throughout the program.',
    subtitle: 'Indian Institute of Management Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 21,
    title: "Funding: The Investors' Perspective – Participant",
    type: 'Funding & Startup Session',
    date: 'October 2024',
    img: tieNagpur,
    desc: "Attended the session “Funding: The Investors' Perspective” conducted by Shashikant Chaudhary at GHRCEMN on 26 October 2024. The session provided valuable insights into startup funding strategies, investor expectations, pitching techniques, key business metrics, and entrepreneurial growth opportunities. It also highlighted practical approaches to attracting investors and scaling innovative ventures across domains such as AI, SaaS, healthcare, and food tech. Attended the program alongside Vibhuti Sarode and Avinash Madnani.",
    subtitle: 'G H Raisoni College of Engineering & Management (GHRCEMN), Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 22,
    title: 'Smart Scheduling System for Educational Management – Minor Project',
    type: 'Academic Project',
    date: '2025',
    img: cssProject,
    desc: 'Developed a comprehensive scheduling and management system designed for teachers, Heads of Departments (HODs), and students to streamline timetable coordination, communication, and schedule management within educational institutions.\n\nThe project focused on improving organizational efficiency through real-time schedule synchronization, conflict management, and user-friendly accessibility across multiple devices.\n\nKey Features:\n• User-friendly and intuitive interface design\n• Real-time schedule updates and synchronization\n• Customizable scheduling based on user requirements\n• Integrated communication and messaging system\n• Multi-device accessibility for flexible usage',
    subtitle: 'GHRCEMN',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 23,
    title: 'Indian Knowledge Systems (IKS) & Artificial Intelligence Lecture Series – Participant',
    type: 'Lecture Series',
    date: '2025',
    img: engIndia,
    desc: 'Participated in the lecture series on Indian Knowledge Systems (IKS) and Artificial Intelligence (AI) hosted by MasterSoft in collaboration with the Trust Program. The sessions explored the connection between India’s traditional knowledge systems and modern AI technologies, highlighting how cultural heritage and innovative engineering practices can work together to drive future technological advancements. The experience provided valuable exposure to interdisciplinary learning, innovation, and the integration of traditional wisdom with emerging technologies.',
    subtitle: 'MasterSoft & Trust Program',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 24,
    title: 'Microsoft & Fireblaze AI School Workshop – Participant',
    type: 'Workshop',
    date: '2025',
    img: fireblazeHome,
    desc: 'Participated in a hands-on workshop organized by Microsoft and Fireblaze AI School in collaboration with Google Developer Groups on Campus GHRCE.\n\nThe workshop, conducted by Aman T., focused on Windows operating systems, Microsoft Azure cloud deployment, cybersecurity awareness, virtual machines, and cloud computing technologies. The session also introduced students to GitHub Education and the GitHub Student Developer Pack.\n\nAttended the event alongside Rutuja Balpande, Mohit K Rahangdale, Kanak Dharamthok, Rekha Kushwaha, and Nandini Jaiswal.',
    subtitle: 'G H Raisoni College of Engineering & Management (GHRCEMN), Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 25,
    title: 'Google Cloud & Qwiklabs Learning Program – Participant',
    type: 'Learning Program',
    date: '2025',
    img: googleCloud,
    desc: 'Participated in a cloud learning program organized by Google Cloud Community India and DevRhylme Pvt. Ltd., gaining hands-on exposure to Google Cloud technologies and cloud infrastructure fundamentals.\n\nExplored the Google Cloud learning ecosystem through Qwiklabs, focusing on cloud labs, project environments, IAM roles, APIs, and Google Cloud services. The program enhanced practical understanding of cloud computing workflows and modern infrastructure management.\n\nKey Learnings:\n• Worked with Google Cloud lab environments and Qwiklabs\n• Learned Google Cloud Console navigation and project management\n• Explored Cloud IAM roles and access control concepts\n• Gained insights into APIs, cloud services, AI, and Machine Learning',
    subtitle: 'Google Cloud Community India & DevRhylme',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 26,
    title: 'Microsoft Azure Developer Day – Participant',
    type: 'Summit & Conference',
    date: '2024',
    img: azureDevDay,
    desc: 'Successfully attended Microsoft Azure Developer Day organized by the Azure Developer Community in association with Reskilll.\n\nThe event provided valuable exposure to Microsoft Azure technologies, cloud architecture, modern development practices, and innovative Azure services through expert-led sessions and technical discussions.\n\nThe experience strengthened understanding of cloud computing concepts and enhanced practical knowledge in modern developer and AI-driven cloud ecosystems.',
    subtitle: 'Azure Developer Community & Reskilll',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 27,
    title: 'IAIS 2024 International AI Summit – Volunteer',
    type: 'Summit & Conference',
    date: 'August 2024',
    img: iaisSummit,
    desc: 'Successfully volunteered at the IAIS 2024 International AI Summit #3, conducted on 30–31 August 2024 at GHRCEMN. The summit was technically sponsored by IEEE Bombay Section and IEEE Student Branch GHRCEM.\n\nThe event brought together AI researchers, industry experts, academicians, and students from across the globe to discuss the latest advancements in Artificial Intelligence through keynote sessions, technical discussions, and workshops.\n\nHad the opportunity to gain insights from experts including Jibu Elias, Akash James, and Nivash Jeevanandam. Special thanks to Dr. Smita Nirkhi Singh, Dr. Vivek Kapur, and Tabassum H Khan for their guidance and support.',
    subtitle: 'GH Raisoni College of Engineering & Management (GHRCEMN), Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 28,
    title: 'InFED Hackathon – Participant',
    type: 'Hackathon',
    date: '2025',
    img: infedHackathon,
    desc: 'Participated in a hackathon hosted by InFED Nagpur at IIM Nagpur, collaborating on innovative ideas and problem-solving challenges in a competitive and teamwork-driven environment.\n\nWorked alongside talented teammates including Vibhuti Sarode, Amit Chakdhare, Suhani Tatte, Swayam Nerkar, and Mahip Tople, gaining valuable experience in collaboration, ideation, and innovation-focused development.\n\nSpecial thanks to Atharva Badkas and the InFED Nagpur team for organizing the engaging and impactful event.',
    subtitle: 'Indian Institute of Management Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 29,
    title: 'Microsoft Azure & IoT Session – Participant',
    type: 'Seminar & Workshop',
    date: '2025',
    img: azureIotSession,
    desc: 'Participated in the “Exploring the Future with Microsoft Azure and IoT” session organized by the Department of Artificial Intelligence at GHRCEMN in collaboration with Microsoft Azure.\n\nThe session, delivered by Kaushal Pohekar, focused on Azure IoT Hub, sensor connectivity, AI/ML integration, energy management, and cloud-based IoT solutions. It provided valuable insights into how Azure enables secure and scalable IoT ecosystems.\n\nAlso attended an interactive hands-on session by Saniya Imroze on Microsoft Copilot and Microsoft 365 applications, including practical experience in creating custom Copilot solutions.',
    subtitle: 'G H Raisoni College of Engineering & Management (GHRCEMN), Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 30,
    title: 'Google I/O Extended Nagpur – Participant',
    type: 'Summit & Conference',
    date: 'August 2024',
    img: googleIoExtended,
    desc: 'Participated in Google I/O Extended Nagpur, a local extension of Google’s annual developer conference held on 11 August in Nagpur. The event brought together developers, students, and technology enthusiasts to explore the latest innovations in software development and emerging technologies.\n\nAttended insightful sessions and workshops focused on Artificial Intelligence, Machine Learning, Google technologies, cloud computing, and developer tools, while also engaging in networking and community collaboration activities.\n\nThe event provided valuable exposure to industry trends, innovation-driven learning, and opportunities to connect with developers and professionals from the tech ecosystem.',
    subtitle: 'GDG Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 31,
    title: 'AI Manthan – AI Conclave Participant',
    type: 'Summit & Conference',
    date: '2025',
    img: aiManthan,
    desc: 'Participated in AI Manthan – Day 2, an AI conclave organized by the Vishwakarma Foundation in collaboration with IIM Nagpur.\n\nThe event brought together AI enthusiasts, industry experts, academicians, and students to discuss emerging trends, real-world AI applications, innovation, and the future impact of Artificial Intelligence across industries.\n\nAttended keynote sessions, panel discussions, workshops, startup showcases, and networking activities focused on AI technologies, ethical implications, collaboration opportunities, and practical AI implementation.',
    subtitle: 'Indian Institute of Management Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 32,
    title: 'Microsoft Learn Student Ambassador Event – Participant',
    type: 'Community Event',
    date: '2025',
    img: mlsaEvent,
    desc: 'Participated in the Microsoft Learn Student Ambassador (MLSA) Event – Leveraging AI, organized under the Microsoft Student Ambassadors Program and guided by Aman T. and Aman Khapre.\n\nThe event included expert-led workshops and hands-on technical sessions focused on Artificial Intelligence, computer vision, and Microsoft technologies. Worked on practical implementations involving object classification, object detection models, and hand detection systems using Arduino UNO.\n\nThe program provided valuable exposure to AI model development, hardware integration, and real-world applications of intelligent systems.',
    subtitle: 'Microsoft Student Ambassadors – Imagine Cup',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 33,
    title: 'Techotsav – AI Conclave & Panel Discussion',
    type: 'Summit & Conference',
    date: '21 April 2024',
    img: techotsavEvent,
    desc: 'Attended the Techotsav program, which featured insightful panel discussions with industry experts and speakers from various technology groups.\n\nThe discussions focused on Generative AI technologies, core model architectures, emerging trends, and the future impact of Artificial Intelligence on software development and tech ecosystems.',
    subtitle: 'Panel Discussion on Generative AI & The Future of AI',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 34,
    title: 'AXIS ’24 Campus Ambassador – Certification of Excellence',
    type: 'Leadership & Volunteering',
    date: '2024',
    img: axis24,
    desc: 'Awarded a distinguished Certificate of Excellence for outstanding contributions and leadership in the Campus Ambassador Program for AXIS ’24, the national-level techno-management festival of VNIT Nagpur.\n\nRepresented the festival on campus, drove student participation, and successfully coordinated promotional campaigns, showing high commitment, leadership, and marketing skills.',
    subtitle: 'Visvesvaraya National Institute of Technology (VNIT), Nagpur',
    link: '#',
    linkText: 'View Details'
  },
  {
    id: 35,
    title: 'Makxenia Line Follower Robot Workshop – Participant',
    type: 'Seminar & Workshop',
    date: '29 March 2024',
    img: makxeniaWorkshop,
    desc: 'Participated in a hands-on 1-day workshop focused on designing, building, and programming a Line Follower Robot with PID Controller, organized by Makxenia Engineering Resource Pvt. Ltd.\n\nThe workshop provided deep insights into hardware configuration, infrared sensor calibration, closed-loop feedback systems, and Proportional-Integral-Derivative (PID) algorithm fine-tuning for smooth navigation and trajectory tracking.',
    subtitle: 'Makxenia Engineering Resource Pvt. Ltd.',
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
                className={`w-full h-full ${event.imgFit || 'object-cover'} opacity-40 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0`}
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
                      className={`w-full h-full ${selectedEvent.imgFit || 'object-cover'}`}
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
