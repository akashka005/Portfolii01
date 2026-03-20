import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { 
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 grid grid-cols-12 bg-[#E4E3E0] border-b border-[#141414]"
    >
      <Link to="/" className="col-span-4 md:col-span-2 p-4 md:p-6 border-r border-[#141414] flex items-center group cursor-pointer">
        <MagneticButton distance={40} strength={0.2}>
          <span className="font-display text-2xl md:text-3xl uppercase leading-none tracking-tighter group-hover:text-[#FF6321] transition-colors">
            AKASH K A
          </span>
        </MagneticButton>
      </Link>
      
      <div className="hidden md:flex col-span-7 border-r border-[#141414] items-center justify-center gap-4 lg:gap-6 xl:gap-8 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest">
        {isHome ? (
          <>
            <MagneticButton distance={30} strength={0.25}><button onClick={() => scrollToSection('about')} className="hover:text-[#FF6321] transition-colors cursor-pointer">About</button></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><button onClick={() => scrollToSection('projects')} className="hover:text-[#FF6321] transition-colors cursor-pointer">Projects</button></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><button onClick={() => scrollToSection('playground')} className="hover:text-[#FF6321] transition-colors cursor-pointer">Playground</button></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><button onClick={() => scrollToSection('skills')} className="hover:text-[#FF6321] transition-colors cursor-pointer">Expertise</button></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><button onClick={() => scrollToSection('education')} className="hover:text-[#FF6321] transition-colors cursor-pointer">Academic</button></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><button onClick={() => scrollToSection('certifications')} className="hover:text-[#FF6321] transition-colors cursor-pointer">Certs</button></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><button onClick={() => scrollToSection('achievements')} className="hover:text-[#FF6321] transition-colors cursor-pointer">Wins</button></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><button onClick={() => scrollToSection('contact')} className="hover:text-[#FF6321] transition-colors cursor-pointer">Contact</button></MagneticButton>
          </>
        ) : (
          <>
            <MagneticButton distance={30} strength={0.25}><Link to="/#about" className="hover:text-[#FF6321] transition-colors">About</Link></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><Link to="/#projects" className="hover:text-[#FF6321] transition-colors">Projects</Link></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><Link to="/#playground" className="hover:text-[#FF6321] transition-colors">Playground</Link></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><Link to="/#skills" className="hover:text-[#FF6321] transition-colors">Expertise</Link></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><Link to="/#education" className="hover:text-[#FF6321] transition-colors">Academic</Link></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><Link to="/#certifications" className="hover:text-[#FF6321] transition-colors">Certs</Link></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><Link to="/#achievements" className="hover:text-[#FF6321] transition-colors">Wins</Link></MagneticButton>
            <MagneticButton distance={30} strength={0.25}><Link to="/#contact" className="hover:text-[#FF6321] transition-colors">Contact</Link></MagneticButton>
          </>
        )}
      </div>

      <div className="col-span-8 md:col-span-3 p-4 md:p-6 flex items-center justify-between">
        <div className="hidden lg:flex flex-col">
          <span className="text-[8px] font-bold opacity-40 uppercase tracking-widest">Phagwara, IN</span>
          <span className="text-[10px] font-mono font-bold">{time}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[8px] font-bold opacity-40 uppercase tracking-widest">Available</span>
          </div>
          <a 
            href="/cv/AKASH.pdf" 
            download 
            className="group relative flex items-center gap-2 px-3 py-1.5 border border-[#141414] rounded-full hover:bg-[#141414] hover:text-[#E4E3E0] transition-all duration-300"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">CV</span>
            <Download size={12} className="group-hover:rotate-12 transition-transform" />
          </a>
          <div className="w-8 h-8 rounded-full bg-[#141414] flex items-center justify-center text-[#E4E3E0] text-xs font-bold">
            A
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
