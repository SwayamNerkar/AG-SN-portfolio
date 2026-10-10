import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/sections/Footer';
import Background3D from './components/Background3D';
import SmoothScroll from './components/SmoothScroll';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import Licences from './pages/Licences';
import Contact from './pages/Contact';

const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SecurityWrapper = ({ children }) => {
  useEffect(() => {
    // Prevent right-click context menu
    const handleContextMenu = (e) => e.preventDefault();
    
    // Prevent dragging
    const handleDragStart = (e) => e.preventDefault();
    
    // Prevent copying
    const handleCopy = (e) => {
      e.preventDefault();
      // Optional: alert user they cannot copy
    };

    // Prevent common dev tools / saving shortcuts
    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I (DevTools)
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J (Console)
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U (View Source)
        (e.ctrlKey && e.keyCode === 83) || // Ctrl+S (Save Page)
        (e.metaKey && e.keyCode === 83) || // Cmd+S (Save Page on Mac)
        (e.metaKey && e.altKey && e.keyCode === 73) // Cmd+Option+I (DevTools Mac)
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <>{children}</>;
};


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SecurityWrapper>
      <Router>
        <ScrollToTop />
        <Background3D />
        <SmoothScroll>
          <div className="bg-transparent min-h-screen text-[#e0e0e0] flex flex-col selection:bg-[#ccff00] selection:text-black font-sans">
            <AnimatePresence>
              {loading ? (
                <motion.div
                  key="loader"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: "-100%" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-[#ccff00] text-black"
                >
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="text-6xl md:text-8xl font-black font-['Syne'] tracking-tighter uppercase"
                    >
                      Loading
                    </motion.h1>
                  </div>
                </motion.div>
              ) : (
                <>
                  <Navbar />
                  <main className="flex-grow flex flex-col">
                    <Routes>
                      <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                      <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                      <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
                      <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
                      <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                      <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
                      <Route path="/achievements" element={<PageTransition><Achievements /></PageTransition>} />
                      <Route path="/licences" element={<PageTransition><Licences /></PageTransition>} />
                      <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              )}
            </AnimatePresence>
          </div>
        </SmoothScroll>
      </Router>
    </SecurityWrapper>
  );
}

export default App;


