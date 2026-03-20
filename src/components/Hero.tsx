import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TextSlam } from './TextSlam';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col pt-[72px] md:pt-[84px]">
      <div className="flex-1 grid grid-cols-12">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-8 border-r border-[#141414] flex flex-col">
          <div className="flex-1 p-6 md:p-12 flex flex-col justify-center border-b border-[#141414]">
            <TextSlam>
              <h1 className="text-[18vw] md:text-[14vw] font-display uppercase leading-[0.8] tracking-tighter mb-8">
                AKASH <br /> 
                <span className="text-[#FF6321]">K A</span>
              </h1>
            </TextSlam>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Specialization</span>
                <p className="text-lg md:text-2xl font-medium leading-tight">
                  Artificial Intelligence & <br /> Machine Learning
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Location</span>
                <p className="text-lg md:text-2xl font-medium leading-tight">
                  Phagwara, <br /> Punjab, India
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-12 flex items-center justify-between bg-[#141414] text-[#E4E3E0]">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll to explore</span>
            <div className="w-12 h-12 rounded-full border border-[#E4E3E0]/20 flex items-center justify-center animate-bounce">
              ↓
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden lg:flex col-span-4 flex-col">
          <div className="flex-1 relative overflow-hidden group border-b border-[#141414]">
            <motion.div 
              style={{ y }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              <img 
                // Replace with your local profile image path, e.g., "/profile.jpg"
                src="/img/profile.jpg"
                alt="Akash K A" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[#FF6321]/10 mix-blend-multiply pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-[8px] font-bold uppercase tracking-[0.5em] text-white mix-blend-difference">
              Profile // 001
            </div>
          </div>
          <div className="p-12 flex flex-col gap-6 bg-[#141414] text-[#E4E3E0]">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Status</span>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-sm font-bold uppercase tracking-widest">
                Available for Innovation
              </p>
            </div>
            <p className="text-xs leading-relaxed opacity-60">
              Currently exploring the intersection of deep learning and creative web interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
