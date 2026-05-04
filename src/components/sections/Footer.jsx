import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[#1f1f1f] py-12 px-6 md:px-12 mt-auto">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-black font-['Syne'] tracking-tighter uppercase">
              <span className="text-white">SN</span><span className="text-[#38bdf8]">.</span>
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-bold uppercase tracking-widest text-[#666]">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1f1f1f] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#555] text-xs font-bold tracking-widest uppercase">
            &copy; {currentYear} SN.DEV. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[#555] text-xs font-bold tracking-widest uppercase">
            ENGINEERED IN SAN FRANCISCO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
