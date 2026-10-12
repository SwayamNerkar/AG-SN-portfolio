import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ActiveSectionContext = createContext({
  activeSection: 'home',
  setActiveSection: () => {},
});

export const useActiveSection = () => useContext(ActiveSectionContext);

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'events',
  'achievements',
  'licences',
  'contact',
];

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // If user is on a dedicated route like /about, /projects etc., set active section to match pathname
  useEffect(() => {
    if (location.pathname !== '/') {
      const pathId = location.pathname.replace('/', '').toLowerCase();
      if (SECTION_IDS.includes(pathId)) {
        setActiveSection(pathId);
      }
    }
  }, [location.pathname]);

  // If user is on home page ('/'), track scroll position in real time
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
