import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
import { CustomCursor } from './components/CustomCursor';
import { PageTransition } from './components/PageTransition';
import { useSmoothScroll } from './hooks/useSmoothScroll';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/project/:id" element={<PageTransition><CaseStudy /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  useSmoothScroll();

  return (
    <Router>
      <main className="relative bg-[#E4E3E0] min-h-screen selection:bg-[#FF6321] selection:text-[#141414]">
        <CustomCursor />
        
        {/* Film Grain Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03] mix-blend-multiply">
          <svg className="w-full h-full">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        <Navbar />
        <AnimatedRoutes />
        
        <footer className="grid grid-cols-12 border-t border-[#141414] bg-[#141414] text-[#E4E3E0] p-6 md:p-12 relative z-10">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
            <span className="text-2xl font-display uppercase tracking-tighter">AKASH K A</span>
            <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">© 2026 All Rights Reserved</p>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col md:items-end justify-end gap-2 mt-8 md:mt-0">
            <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Designed with Brutalist Precision</p>
            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-[#FF6321] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#FF6321] transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </Router>
  );
}
