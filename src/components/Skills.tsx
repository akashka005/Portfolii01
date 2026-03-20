import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TextSlam } from './TextSlam';

const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "C++", desc: "High-performance systems and competitive programming." },
      { name: "Python", desc: "Primary language for ML, data science, and scripting." },
      { name: "Java", desc: "Enterprise-grade applications and Android development." },
      { name: "JavaScript", desc: "Building dynamic and interactive web experiences." }
    ]
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", desc: "Modern frontend library for component-based UI." },
      { name: "Flask", desc: "Lightweight Python web framework for microservices." },
      { name: "Django", desc: "Robust, full-featured Python web framework." },
      { name: "TensorFlow", desc: "Deep learning framework for neural networks." }
    ]
  },
  {
    title: "Data Science",
    items: [
      { name: "NumPy", desc: "Fundamental package for scientific computing." },
      { name: "Pandas", desc: "Powerful data manipulation and analysis tool." },
      { name: "Scikit-learn", desc: "Machine learning library for classical algorithms." },
      { name: "NLP", desc: "Natural Language Processing for text analysis." }
    ]
  }
];

export const Skills = ({ onSkillHover }: { onSkillHover?: (skill: string | null) => void }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleMouseEnter = (skillName: string) => {
    setHoveredSkill(skillName);
    onSkillHover?.(skillName);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
    onSkillHover?.(null);
  };

  const allSkills = skillGroups.flatMap(group => group.items.map(item => item.name));
  const marqueeSkills = [...allSkills, ...allSkills, ...allSkills]; // Triple for seamless loop

  return (
    <section id="skills" className="border-t border-[#141414]">
      {/* Infinite Tech Marquee */}
      <div className="border-b border-[#141414] py-6 bg-[#141414] overflow-hidden whitespace-nowrap flex group cursor-default">
        <motion.div 
          animate={{ x: [0, -2000] }}
          whileHover={{ x: [0, -2000], transition: { duration: 60, repeat: Infinity, ease: "linear" } }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 text-4xl md:text-7xl font-display uppercase tracking-tighter text-[#E4E3E0]/20 group-hover:text-[#FF6321] transition-colors duration-700"
        >
          {marqueeSkills.map((skill, i) => (
            <span 
              key={i} 
              className="flex items-center gap-16"
              onMouseEnter={() => handleMouseEnter(skill)}
              onMouseLeave={handleMouseLeave}
            >
              {skill}
              <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-current" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 p-6 md:p-12 border-r border-[#141414] flex flex-col gap-8">
          <TextSlam>
            <h2 className="text-4xl md:text-6xl font-display uppercase leading-none tracking-tighter">
              Expertise
            </h2>
          </TextSlam>
          <p className="text-xs opacity-60 leading-relaxed">
            Technical proficiency across full-stack development and machine learning ecosystems.
          </p>
        </div>

        <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50, skewY: 2 }}
              whileInView={{ opacity: 1, y: 0, skewY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="border-r border-[#141414] last:border-r-0"
            >
              <div className="p-6 border-b border-[#141414] bg-[#141414] text-[#E4E3E0]">
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {group.title}
                </span>
              </div>
              <div className="p-6 md:p-12 flex flex-col gap-6">
                {group.items.map((skill, i) => (
                  <div 
                    key={i} 
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(skill.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <motion.div 
                      initial={{ opacity: 0, x: -30, skewX: -5 }}
                      whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (index * 0.1) + (i * 0.05) }}
                      className="text-xl md:text-2xl font-display uppercase tracking-tight hover:text-[#FF6321] transition-colors cursor-default"
                    >
                      {skill.name}
                    </motion.div>
                    
                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 20 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="absolute left-full top-1/2 -translate-y-1/2 z-50 hidden md:block"
                        >
                          <div className="bg-[#141414] text-[#E4E3E0] p-3 border border-[#FF6321] min-w-[200px] shadow-[4px_4px_0px_#FF6321]">
                            <p className="text-[10px] font-mono leading-tight uppercase tracking-wider">
                              {skill.desc}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
