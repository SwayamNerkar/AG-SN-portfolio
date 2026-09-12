import React from 'react';
import { motion } from 'framer-motion';

const licences = [
  {
    id: 1,
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google Digital Garage',
    date: 'Issued Jun 2023',
    credentialId: 'R2V-F54-PF3',
    skills: ['Digital Marketing'],
    image: '/images/digital_marketing_badge.jpg',
  },
  {
    id: 2,
    title: 'GDSC-Techotsav 2024',
    issuer: 'Google Developer Students Club',
    date: 'Issued Apr 2024',
    credentialId: 'GHRCE-DSC-TCSV-091',
    skills: ['Virtual Reality (VR)', 'Artificial Intelligence (AI)'],
    image: '/images/gdsc_techotsav_badge.jpg',
  },
  {
    id: 3,
    title: 'Introduction to Responsible AI',
    issuer: 'Google',
    date: 'Issued May 2024',
    credentialId: '8887045',
    skills: ['Responsible AI'],
    image: '/images/google_cloud_badge.jpg',
  },
  {
    id: 4,
    title: 'Introduction to Generative AI',
    issuer: 'Google',
    date: 'Issued Apr 2024',
    credentialId: '8768438',
    skills: ['Generative AI'],
    image: '/images/google_cloud_badge.jpg',
  },
  {
    id: 5,
    title: 'Secure BigLake Data',
    issuer: 'Google',
    date: 'Issued May 2024',
    credentialId: '9200126',
    skills: ['Smart Analytics', 'Security'],
    image: '/images/google_cloud_badge.jpg',
  },
  {
    id: 6,
    title: 'Configure Service Accounts and IAM Roles for Google Cloud',
    issuer: 'Google',
    date: 'Issued May 2024',
    credentialId: '9199305',
    skills: ['Security', 'IAM'],
    image: '/images/google_cloud_badge.jpg',
  },
  {
    id: 7,
    title: 'The Arcade Certification Zone May 2024',
    issuer: 'Google Cloud Community India',
    date: 'Issued May 2024',
    credentialId: '9061289',
    skills: ['Google Cloud'],
    image: '/images/google_cloud_badge.jpg',
  },
  {
    id: 8,
    title: 'The Arcade Health Tech',
    issuer: 'Google Cloud Community India',
    date: 'Issued May 2024',
    credentialId: '9159924',
    skills: ['Artificial Intelligence (AI)'],
    image: '/images/google_cloud_badge.jpg',
  },
  {
    id: 9,
    title: 'Prompt Design in Vertex AI',
    issuer: 'Google',
    date: 'Issued May 2024',
    credentialId: '8856097',
    skills: ['Machine Learning', 'Vertex AI'],
    image: '/images/google_cloud_badge.jpg',
  },
  {
    id: 10,
    title: 'Develop GenAI Apps with Gemini and Streamlit',
    issuer: 'Google',
    date: 'Issued 2024',
    credentialId: '8882439',
    skills: ['Generative AI', 'Gemini', 'Streamlit'],
    image: '/images/google_cloud_badge.jpg',
  },
  {
    id: 11,
    title: 'Introduction to Large Language Models',
    issuer: 'Google',
    date: 'Issued May 2024',
    credentialId: '8886918',
    skills: ['Large Language Models (LLM)'],
    image: '/images/google_cloud_badge.jpg',
  }
];

const Licences = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black font-['Syne'] tracking-tighter uppercase mb-4 text-white">
          Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-[#38bdf8]">Certifications</span>
        </h2>
        <div className="w-24 h-1 bg-[#ccff00]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {licences.map((licence, index) => (
          <motion.div
            key={licence.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#0f0f0f] border border-[#1f1f1f] p-6 rounded-lg hover:border-[#ccff00] transition-colors duration-300 group flex flex-col"
          >
            <div className="mb-6 overflow-hidden rounded-md bg-[#1a1a1a] aspect-video flex items-center justify-center border border-[#1f1f1f]">
              <img src={licence.image} alt={licence.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2 font-['Syne']">{licence.title}</h3>
            <p className="text-[#38bdf8] font-medium mb-1">{licence.issuer}</p>
            <p className="text-[#888] text-sm mb-4">{licence.date}</p>

            {licence.credentialId && (
              <p className="text-[#666] text-xs mb-4 uppercase tracking-wider">ID: {licence.credentialId}</p>
            )}

            <div className="mt-auto pt-4 border-t border-[#1f1f1f]">
              <div className="flex flex-wrap gap-2">
                {licence.skills.map((skill, i) => (
                  <span key={i} className="text-xs bg-[#1a1a1a] text-[#aaa] px-2 py-1 rounded-sm border border-[#2a2a2a]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Licences;
