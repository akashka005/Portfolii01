import React from 'react';
import { motion } from 'motion/react';
import { User, Cpu, Globe, Zap } from 'lucide-react';
import { TextSlam } from './TextSlam';

export const About = () => {
  const stats = [
    { label: 'Origin', value: 'Phagwara, IN', icon: <Globe size={14} /> },
    { label: 'Status', value: 'B.Tech CSE @ LPU', icon: <Zap size={14} /> },
    { label: 'Focus', value: 'AI & ML', icon: <Cpu size={14} /> },
    { label: 'Performance', value: '96% ICSE / 81% ISC', icon: <User size={14} /> },
  ];

  return (
    <section id="about" className="border-t border-[#141414] bg-[#E4E3E0] relative overflow-hidden">
      {/* Background Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <motion.div 
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-full h-20 bg-gradient-to-b from-transparent via-[#141414] to-transparent"
        />
      </div>

      <div className="grid grid-cols-12">
        {/* Left Column: Vertical Title */}
        <div className="col-span-12 md:col-span-2 border-r border-[#141414] p-6 flex md:flex-col justify-between items-center md:items-start bg-[#141414] text-[#E4E3E0]">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] md:rotate-180 md:[writing-mode:vertical-lr]">
            System Profile // 2026
          </span>
          <div className="hidden md:block w-px h-32 bg-[#FF6321]/40 mx-auto my-8" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] md:[writing-mode:vertical-lr]">
            v1.0.42_STABLE
          </span>
        </div>

        {/* Middle Column: Core Content */}
        <div className="col-span-12 md:col-span-7 p-6 md:p-16 border-r border-[#141414]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <TextSlam>
              <h2 className="text-5xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter mb-12">
                Engineering <br /> <span className="text-[#FF6321]">Digital</span> <br /> Intelligence.
              </h2>
            </TextSlam>
            
            <div className="space-y-8 max-w-2xl">
              <p className="text-xl md:text-2xl font-medium leading-tight text-[#141414]">
                I am Akash K A, a Computer Science Engineering student at Lovely Professional University, specializing in Artificial Intelligence and Machine Learning.
              </p>
              <p className="text-sm md:text-base opacity-70 leading-relaxed">
                Currently pursuing my B.Tech with a focus on building intelligent systems that solve real-world complexities. From developing real-time fraud detection pipelines to AI-powered resume analysis, I bridge the gap between algorithmic logic and user-centric design.
              </p>
              
              <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 border border-[#141414] bg-white/50 group hover:bg-[#141414] hover:text-[#E4E3E0] transition-all duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6321] block mb-2">Core Competencies</span>
                  <p className="text-sm font-medium">Problem-Solving, Logical Reasoning, and Quantitative Aptitude. Adaptable leader and team player.</p>
                </div>
                <div className="p-6 border border-[#141414] bg-white/50 group hover:bg-[#141414] hover:text-[#E4E3E0] transition-all duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6321] block mb-2">The Mission</span>
                  <p className="text-sm font-medium">To leverage Machine Learning and Data Visualization to build scalable, high-impact applications.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: System Specs */}
        <div className="col-span-12 md:col-span-3 bg-[#141414]/5">
          <div className="sticky top-32 p-6 md:p-12 space-y-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-8">System Specs</span>
              <div className="space-y-6">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full border border-[#141414]/20 flex items-center justify-center group-hover:bg-[#FF6321] group-hover:border-[#FF6321] transition-colors">
                      {stat.icon}
                    </div>
                    <div>
                      <span className="text-[8px] font-bold uppercase tracking-widest opacity-40 block">{stat.label}</span>
                      <span className="text-xs font-mono font-bold uppercase">{stat.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-12 border-t border-[#141414]/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">System Online</span>
              </div>
              <p className="text-[10px] font-mono opacity-40 leading-tight uppercase">
                Consistently strengthening algorithmic thinking on LeetCode with a target of 300+ problems solved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
