import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Code2, Cpu, Database, Layout } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { TextSlam } from './TextSlam';

const playgroundItems = [
  {
    title: "Neural Network Visualizer",
    category: "ML / Research",
    icon: <Cpu size={20} />,
    size: "large",
    color: "bg-[#141414] text-[#E4E3E0]",
    image: "https://picsum.photos/seed/neural/800/600"
  },
  {
    title: "Portfolio v1",
    category: "React / CSS",
    icon: <Layout size={20} />,
    size: "small",
    color: "bg-[#FF6321] text-[#141414]",
    image: "https://picsum.photos/seed/portfolio/400/400"
  },
  {
    title: "Algo Visualizer",
    category: "JS / Canvas",
    icon: <Code2 size={20} />,
    size: "small",
    color: "bg-white text-[#141414]",
    image: "https://picsum.photos/seed/algo/400/400"
  },
  {
    title: "Brutalist UI Kit",
    category: "Design / React",
    icon: <Layout size={20} />,
    size: "medium",
    color: "bg-[#E4E3E0] text-[#141414]",
    image: "https://picsum.photos/seed/ui/600/400"
  }
];

export const BentoGallery = () => {
  return (
    <section id="playground" className="py-24 border-b border-[#141414]">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 p-6 md:p-12 border-r border-[#141414] flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FF6321] block mb-6">Playground</span>
            <TextSlam>
              <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.8] tracking-tighter mb-8">
                Digital<br />Archives
              </h2>
            </TextSlam>
            <p className="text-sm opacity-60 max-w-xs leading-relaxed">
              A collection of experiments, prototypes, and open-source contributions that push the boundaries of my technical stack.
            </p>
          </div>
          <div className="mt-12">
            <MagneticButton>
              <a href="https://github.com/akashka005" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-8 py-4 bg-[#141414] text-[#E4E3E0] font-bold uppercase tracking-widest hover:bg-[#FF6321] hover:text-[#141414] transition-all group">
                <Github size={20} /> View Github <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
            {playgroundItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative group overflow-hidden border border-[#141414] ${
                  item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                  item.size === 'medium' ? 'md:col-span-2' : ''
                } ${item.color}`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="p-2 border border-current rounded-full">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{item.category}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display uppercase tracking-tight mb-2">{item.title}</h3>
                    <div className="w-0 group-hover:w-full h-[1px] bg-current transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
