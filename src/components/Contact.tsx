import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Send } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { TextSlam } from './TextSlam';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    about: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (Simulated)');
  };

  return (
    <section id="contact" className="border-t border-[#141414]">
      <div className="grid grid-cols-12">
        {/* Left: Contact Info */}
        <div className="col-span-12 lg:col-span-5 p-6 md:p-12 border-r border-[#141414] flex flex-col justify-between">
          <div>
            <TextSlam>
              <h2 className="text-[12vw] md:text-[8vw] font-display uppercase leading-[0.8] tracking-tighter mb-12">
                GET IN <br /> <span className="text-[#FF6321]">TOUCH</span>
              </h2>
            </TextSlam>
            <p className="text-sm opacity-60 max-w-xs mb-12">
              Have a project in mind or just want to say hi? Feel free to reach out through the form or social channels.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="flex flex-col gap-2"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Email</span>
                <a href="mailto:akashka688@gmail.com" className="text-xl md:text-2xl font-display uppercase hover:text-[#FF6321] transition-colors">
                  akashka688@gmail.com
                </a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="flex flex-col gap-2"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Phone</span>
                <a href="tel:+919600205581" className="text-xl md:text-2xl font-display uppercase hover:text-[#FF6321] transition-colors">
                  +91 9600205581
                </a>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akashka005/' },
                { name: 'GitHub', url: 'https://github.com/akashka005' },
                { name: 'LeetCode', url: 'https://leetcode.com/u/akash00510/' }
              ].map((social, idx) => (
                <MagneticButton key={social.name} distance={40} strength={0.2}>
                  <motion.a 
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 + (idx * 0.1) }}
                    className="px-8 py-4 border border-[#141414] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#141414] hover:text-[#E4E3E0] hover:skew-x-[-10deg] transition-all duration-300 block"
                  >
                    {social.name}
                  </motion.a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="col-span-12 lg:col-span-7">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="p-6 md:p-12 border-b md:border-r border-[#141414] flex flex-col gap-4"
            >
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Your Name</label>
              <input 
                type="text" 
                required
                placeholder="John Doe"
                className="bg-transparent border-none p-0 text-xl md:text-2xl font-display uppercase focus:ring-0 placeholder:opacity-20"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="p-6 md:p-12 border-b border-[#141414] flex flex-col gap-4"
            >
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Your Email</label>
              <input 
                type="email" 
                required
                placeholder="john@example.com"
                className="bg-transparent border-none p-0 text-xl md:text-2xl font-display uppercase focus:ring-0 placeholder:opacity-20"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="col-span-1 md:col-span-2 p-6 md:p-12 border-b border-[#141414] flex flex-col gap-4"
            >
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">What is it about?</label>
              <input 
                type="text" 
                required
                placeholder="Project Inquiry"
                className="bg-transparent border-none p-0 text-xl md:text-2xl font-display uppercase focus:ring-0 placeholder:opacity-20"
                value={formData.about}
                onChange={(e) => setFormData({...formData, about: e.target.value})}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="col-span-1 md:col-span-2 p-6 md:p-12 border-b border-[#141414] flex flex-col gap-4"
            >
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Description</label>
              <textarea 
                rows={4}
                required
                placeholder="Tell me more about your project..."
                className="bg-transparent border-none p-0 text-xl md:text-2xl font-display uppercase focus:ring-0 placeholder:opacity-20 resize-none"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="col-span-1 md:col-span-2"
            >
              <MagneticButton className="w-full" distance={100} strength={0.15}>
                <button 
                  type="submit"
                  className="w-full p-8 md:p-12 bg-[#FF6321] text-[#141414] flex items-center justify-between group hover:bg-[#141414] hover:text-[#FF6321] transition-all duration-500"
                >
                  <span className="text-3xl md:text-6xl font-display uppercase tracking-tighter">Send Message</span>
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-current flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <Send className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </button>
              </MagneticButton>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};
