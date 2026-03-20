import React from 'react';
import { motion } from 'motion/react';
import { achievements } from '../data/achievements';
import { TextSlam } from './TextSlam';
import { Trophy, Star, Award, Medal } from 'lucide-react';

const icons = [<Trophy size={24} />, <Star size={24} />, <Award size={24} />, <Medal size={24} />];

export const Achievements = () => {
  return (
    <section id="achievements" className="border-t border-[#141414] bg-[#141414] text-[#E4E3E0]">
      <div className="grid grid-cols-12">
        {/* Header Column */}
        <div className="col-span-12 md:col-span-4 p-6 md:p-12 border-r border-white/10 flex flex-col justify-between">
          <div className="sticky top-32">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FF6321] block mb-6">Milestones</span>
            <TextSlam>
              <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.8] tracking-tighter mb-8">
                Key <br /> <span className="text-[#FF6321]">Wins</span>
              </h2>
            </TextSlam>
            <p className="text-sm opacity-60 max-w-xs leading-relaxed">
              A record of competitive achievements, academic honors, and technical milestones.
            </p>
          </div>
        </div>

        {/* Achievements List */}
        <div className="col-span-12 md:col-span-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-16 border-b border-white/10 last:border-b-0 group hover:bg-[#FF6321] hover:text-[#141414] transition-all duration-700 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className="col-span-12 md:col-span-1 flex flex-col gap-2">
                <span className="text-4xl md:text-6xl font-display opacity-20 group-hover:opacity-100 transition-opacity">{item.id}</span>
                <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100">{item.year}</span>
              </div>
              
              <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-[#FF6321] group-hover:text-[#141414] transition-colors">
                  {icons[index % icons.length]}
                  <span className="text-[10px] font-bold uppercase tracking-widest">{item.rank}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-display uppercase tracking-tight group-hover:skew-x-[-6deg] transition-transform duration-500 origin-left">
                  {item.title}
                </h3>
                <p className="text-sm opacity-60 group-hover:opacity-100 max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="col-span-12 md:col-span-3 flex justify-end">
                <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center group-hover:bg-[#141414] group-hover:text-[#FF6321] group-hover:border-[#141414] transition-all duration-500">
                  <span className="text-xs font-bold uppercase tracking-widest">WIN</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
