import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Events from './Events';
import Achievements from './Achievements';
import Licences from './Licences';
import Contact from './Contact';
import { SerialScrollSidebar } from '../components/SerialScrollSidebar';
import { useActiveSection } from '../context/ActiveSectionContext';

export const ContinuousScrollPortfolio = () => {
  const { activeSection } = useActiveSection();

  return (
    <div className="relative w-full">
      {/* Floating Serial Sidebar */}
      <SerialScrollSidebar activeSection={activeSection} />

      {/* 01. Home Section */}
      <section id="home" className="relative min-h-screen">
        <Home />
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent" />

      {/* 02. About Section */}
      <section id="about" className="relative min-h-screen">
        <About />
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent" />

      {/* 03. Skills Section */}
      <section id="skills" className="relative min-h-screen">
        <Skills />
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent" />

      {/* 04. Experience Section */}
      <section id="experience" className="relative min-h-screen">
        <Experience />
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent" />

      {/* 05. Projects Section */}
      <section id="projects" className="relative min-h-screen">
        <Projects />
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent" />

      {/* 06. Events Section */}
      <section id="events" className="relative min-h-screen">
        <Events />
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent" />

      {/* 07. Achievements Section */}
      <section id="achievements" className="relative min-h-screen">
        <Achievements />
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent" />

      {/* 08. Licences Section */}
      <section id="licences" className="relative min-h-screen">
        <Licences />
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent" />

      {/* 09. Contact Section */}
      <section id="contact" className="relative min-h-screen">
        <Contact />
      </section>
    </div>
  );
};
