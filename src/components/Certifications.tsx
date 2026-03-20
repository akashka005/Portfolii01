import React from 'react';
import { motion } from 'motion/react';
import { certifications } from '../data/certifications';
import { TextSlam } from './TextSlam';
import { MagneticButton } from './MagneticButton';
import { ExternalLink, Award } from 'lucide-react';

export const Certifications = () => {
  return (
    <section id="certifications" className="border-t border-[#141414] bg-[#E4E3E0]">
      <div className="grid grid-cols-12">
        {/* Header Column */}
        <div className="col-span-12 md:col-span-4 p-6 md:p-12 border-r border-[#141414] flex flex-col justify-between">
          <div className="sticky top-32">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FF6321] block mb-6">Credentials</span>
            <TextSlam>
              <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.8] tracking-tighter mb-8">
                Verified <br /> <span className="text-[#FF6321]">Skills</span>
              </h2>
            </TextSlam>
            <p className="text-sm opacity-60 max-w-xs leading-relaxed">
              A curated list of professional certifications and specializations that validate my technical expertise.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 md:p-12 border-b border-[#141414] group hover:bg-[#141414] hover:text-[#E4E3E0] transition-all duration-500 flex flex-col justify-between min-h-[320px] ${index % 2 === 0 ? 'md:border-r border-[#141414]' : ''}`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-[#FF6321] group-hover:border-[#FF6321] group-hover:text-[#141414] transition-all duration-500">
                    <Award size={20} />
                  </div>
                  <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100">{cert.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight mb-4 group-hover:skew-x-[-6deg] transition-transform duration-500 origin-left">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-6">{cert.issuer}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 border border-current opacity-40 group-hover:opacity-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <MagneticButton distance={30} strength={0.2}>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 border border-current rounded-full hover:bg-[#FF6321] hover:border-[#FF6321] hover:text-[#141414] transition-all group/btn"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest">View Certificate</span>
                    <ExternalLink size={14} className="group-hover/btn:rotate-45 transition-transform" />
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
