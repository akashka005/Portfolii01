import React from 'react';
import { motion } from 'motion/react';
import { TextSlam } from './TextSlam';

const education = [
  {
    school: "Lovely Professional University",
    degree: "B.Tech - Computer Science",
    details: "CGPA: 6.6",
    period: "2023 - PRESENT"
  },
  {
    school: "Excel Central School",
    degree: "ISC (Class XII)",
    details: "81%",
    period: "2021 - 2023"
  },
  {
    school: "Excel Central School",
    degree: "ICSE (Class X)",
    details: "96%",
    period: "2019 - 2021"
  }
];

export const Education = () => {
  return (
    <section id="education" className="border-t border-[#141414]">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 p-6 md:p-12 border-r border-[#141414] flex flex-col justify-between bg-[#FF6321] text-[#141414]">
          <TextSlam>
            <h2 className="text-6xl md:text-9xl font-display uppercase leading-[0.8] tracking-tighter">
              Academic <br /> Path
            </h2>
          </TextSlam>
          <div className="mt-12 text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">
            Education History
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, skewY: 2 }}
              whileInView={{ opacity: 1, y: 0, skewY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1 
              }}
              whileHover={{ x: 10 }}
              className="p-6 md:p-12 border-b border-[#141414] last:border-b-0 flex flex-col gap-4 group cursor-default transition-colors hover:bg-[#141414]/5"
            >
              <span className="text-[10px] font-mono opacity-40 group-hover:text-[#FF6321] transition-colors">{item.period}</span>
              <h3 className="text-3xl md:text-4xl font-display uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">{item.school}</h3>
              <div className="flex justify-between items-end">
                <p className="text-sm opacity-60">{item.degree}</p>
                <span className="text-xl font-display text-[#FF6321] scale-0 group-hover:scale-100 transition-transform duration-500 origin-right">{item.details}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
