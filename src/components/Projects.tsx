import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'motion/react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { MagneticButton } from './MagneticButton';
import { TextSlam } from './TextSlam';

export const Projects = ({ activeSkill }: { activeSkill?: string | null }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="border-t border-[#141414] relative">
      {/* Immersive Marquee */}
      <div className="border-b border-[#141414] py-4 bg-[#FF6321] overflow-hidden whitespace-nowrap flex">
        <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.5em] text-[#141414] animate-marquee">
          <span>Selected Works • Case Studies • Machine Learning • Web Development • Selected Works • Case Studies • Machine Learning • Web Development •</span>
          <span>Selected Works • Case Studies • Machine Learning • Web Development • Selected Works • Case Studies • Machine Learning • Web Development •</span>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 p-6 md:p-12 border-r border-[#141414] flex flex-col justify-between">
          <div className="sticky top-32">
            <TextSlam>
              <h2 className="text-6xl md:text-8xl font-display uppercase leading-none tracking-tighter">
                Selected <br /> <span className="text-[#FF6321]">Works</span>
              </h2>
            </TextSlam>
            <p className="mt-8 text-sm opacity-60 max-w-xs">
              Deep dive into my technical journey. Click on a project to explore the challenges and solutions behind the code.
            </p>
          </div>
        </div>
        
        <div className="col-span-12 md:col-span-8">
          {projects.map((project, index) => {
            const isHighlighted = activeSkill && project.fullTech.some(t => t.toLowerCase() === activeSkill.toLowerCase());
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.05 
                }}
                className={`border-b border-[#141414] last:border-b-0 transition-all duration-500 ${isHighlighted ? 'bg-[#FF6321]/20' : ''}`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`relative overflow-hidden transition-colors duration-500 ${expandedId === project.id ? 'bg-[#141414] text-[#E4E3E0]' : 'group'}`}>
                  {(expandedId !== project.id || isHighlighted) && (
                    <div className={`absolute inset-0 bg-[#FF6321] transition-transform duration-700 ease-[0.16,1,0.3,1] ${isHighlighted ? 'translate-y-0 opacity-10' : 'translate-y-full group-hover:translate-y-0'}`} />
                  )}
                  
                  {/* Fixed Preview Image on Right */}
                  <AnimatePresence>
                    {(hoveredId === project.id || isHighlighted) && expandedId !== project.id && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: isHighlighted ? 0.2 : 0.4, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute right-24 top-1/2 -translate-y-1/2 w-48 h-24 hidden md:block z-0 pointer-events-none"
                      >
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover grayscale"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button 
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    className={`w-full text-left grid grid-cols-8 relative z-10 transition-colors duration-500 ${expandedId !== project.id ? 'group-hover:text-[#141414]' : ''} ${isHighlighted ? 'text-[#141414]' : ''}`}
                  >
                    <div className={`col-span-2 md:col-span-1 p-4 md:p-6 border-r border-[#141414]/20 flex items-center justify-center font-mono text-xs transition-opacity ${expandedId === project.id || isHighlighted ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {project.id}
                      </motion.span>
                    </div>
                    <div className="col-span-7 md:col-span-5 p-4 md:p-12 flex flex-col gap-2 overflow-hidden">
                      <motion.h3 
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.05 }}
                        className={`text-xl md:text-5xl font-display uppercase tracking-tight transition-transform duration-500 origin-left ${expandedId !== project.id ? 'group-hover:skew-x-[-6deg]' : ''} ${isHighlighted ? 'skew-x-[-6deg]' : ''}`}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                        className={`text-xs md:text-sm transition-opacity max-w-md ${expandedId === project.id || isHighlighted ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}
                      >
                        {project.description}
                      </motion.p>
                    </div>
                    <div className="col-span-3 md:col-span-2 p-4 md:p-6 flex items-center justify-end">
                      <motion.div 
                        animate={isHighlighted ? { scale: 1.1, rotate: 45 } : {}}
                        whileHover={expandedId !== project.id ? { scale: 1.2, rotate: 90 } : {}}
                        className={`w-8 h-8 md:w-12 md:h-12 rounded-full border border-current flex items-center justify-center transition-all duration-500 ${expandedId === project.id ? 'bg-[#FF6321] text-[#141414] border-[#FF6321]' : 'group-hover:bg-[#141414] group-hover:text-[#FF6321] group-hover:border-[#141414]'} ${isHighlighted ? 'bg-[#141414] text-[#FF6321] border-[#141414]' : ''}`}
                      >
                        {expandedId === project.id ? <Minus size={16} /> : <Plus size={16} />}
                      </motion.div>
                    </div>
                  </button>
                </div>

                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-[#141414] text-[#E4E3E0]"
                    >
                      <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10">
                        <div className="space-y-8">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6321] block mb-4">The Challenge</span>
                            <p className="text-lg leading-relaxed opacity-80">{project.challenges}</p>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6321] block mb-4">The Solution</span>
                            <p className="text-lg leading-relaxed opacity-80">{project.solutions}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-8">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6321] block mb-4">Technologies</span>
                            <div className="flex flex-wrap gap-2">
                              {project.fullTech.map((t, i) => (
                                <span key={i} className={`px-4 py-2 border text-xs uppercase tracking-widest font-medium transition-colors ${t.toLowerCase() === activeSkill?.toLowerCase() ? 'bg-[#FF6321] border-[#FF6321] text-[#141414]' : 'border-white/20'}`}>
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="pt-8">
                            <MagneticButton>
                              <Link to={`/project/${project.id}`} className="inline-flex items-center gap-4 text-sm uppercase tracking-[0.2em] font-bold hover:text-[#FF6321] transition-colors">
                                View Case Study <ArrowUpRight size={16} />
                              </Link>
                            </MagneticButton>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
