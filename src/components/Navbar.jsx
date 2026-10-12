import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../context/ActiveSectionContext';

const navLinks = [
  { name: 'Home', path: '/', id: 'home' },
  { name: 'About', path: '/about', id: 'about' },
  { name: 'Skills', path: '/skills', id: 'skills' },
  { name: 'Experience', path: '/experience', id: 'experience' },
  { name: 'Projects', path: '/projects', id: 'projects' },
  { name: 'Events', path: '/events', id: 'events' },
  { name: 'Achievements', path: '/achievements', id: 'achievements' },
  { name: 'Licences', path: '/licences', id: 'licences' },
  { name: 'Contact', path: '/contact', id: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { activeSection } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, link) => {
    // If user is on Home page ('/'), scroll smoothly to the section anchor
    if (location.pathname === '/') {
      const el = document.getElementById(link.id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
        return;
      }
    }
    // Otherwise standard route transition occurs
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#1f1f1f] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <NavLink
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="z-50 group"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-black font-['Syne'] tracking-tighter uppercase flex items-center"
          >
            <span className="text-white group-hover:text-[#38bdf8] transition-colors duration-300">SN</span>
            <span className="text-[#38bdf8] group-hover:text-white transition-colors duration-300">.</span>
          </motion.div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isCurrentActive =
              location.pathname === '/'
                ? activeSection === link.id
                : location.pathname === link.path;

            return (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 relative group ${
                  isCurrentActive ? 'text-[#38bdf8]' : 'text-[#888] hover:text-white'
                }`}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {link.name}
                  {isCurrentActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#38bdf8]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full" />
                </motion.div>
              </NavLink>
            );
          })}
        </nav>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="px-6 py-2.5 bg-[#1f1f1f] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#ccff00] hover:text-black transition-all duration-300 rounded-sm"
          >
            Hire Me
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#888] hover:text-white z-50 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#050505] border-b border-[#1f1f1f] shadow-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => {
                const isCurrentActive =
                  location.pathname === '/'
                    ? activeSection === link.id
                    : location.pathname === link.path;

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`text-2xl font-black font-['Syne'] uppercase tracking-tight flex items-center justify-between transition-colors ${
                      isCurrentActive ? 'text-[#38bdf8]' : 'text-[#888]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isCurrentActive && (
                      <span className="text-xs font-mono text-[#38bdf8] border border-[#38bdf8]/40 px-2 py-0.5 rounded">
                        CURRENT
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
