import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, Target, Lightbulb } from 'lucide-react';
import { projects } from '../data/projects';
import { TextSlam } from '../components/TextSlam';

export const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#E4E3E0] p-6">
        <h1 className="text-6xl font-display uppercase mb-8">Project Not Found</h1>
        <Link to="/" className="px-8 py-4 bg-[#141414] text-[#E4E3E0] font-bold uppercase tracking-widest hover:bg-[#FF6321] hover:text-[#141414] transition-colors">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E4E3E0] pt-[72px] md:pt-[84px]">
      {/* Hero Section */}
      <section className="border-b border-[#141414]">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-7 p-6 md:p-12 border-r border-[#141414] flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-[#FF6321] transition-all mb-12 group">
                <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
              </Link>
              <span className="text-[10px] font-mono opacity-40 block mb-4">Case Study // {project.id}</span>
              <TextSlam>
                <h1 className="text-6xl md:text-9xl font-display uppercase leading-[0.8] tracking-tighter mb-8">
                  {project.title}
                </h1>
              </TextSlam>
              <p className="text-xl md:text-2xl font-medium leading-tight max-w-xl opacity-80">
                {project.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Year</span>
                <p className="text-lg font-display uppercase">{project.date}</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Role</span>
                <p className="text-lg font-display uppercase">Developer</p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative overflow-hidden bg-[#141414]">
            <motion.img
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#FF6321]/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="grid grid-cols-12 border-b border-[#141414] relative">
        {/* Blueprint Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#141414 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="col-span-12 lg:col-span-4 p-6 md:p-12 border-r border-[#141414] bg-[#141414] text-[#E4E3E0] z-10">
          <div className="sticky top-32 space-y-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6321] block mb-6">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.fullTech.map((tech, i) => (
                  <span key={i} className="px-4 py-2 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:border-[#FF6321] hover:text-[#FF6321] transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6321] block mb-6">System Status</span>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-[10px] opacity-40 uppercase">Status</span>
                  <span className="text-[10px] font-mono text-green-500">DEPLOYED_STABLE</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-[10px] opacity-40 uppercase">Version</span>
                  <span className="text-[10px] font-mono">v2.4.0</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-[10px] opacity-40 uppercase">Environment</span>
                  <span className="text-[10px] font-mono">PRODUCTION</span>
                </div>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/10">
              <a href="#" className="flex items-center justify-between group">
                <span className="text-xl font-display uppercase tracking-tight group-hover:text-[#FF6321] transition-colors">Live Preview</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#FF6321] group-hover:border-[#FF6321] group-hover:text-[#141414] transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 p-6 md:p-12 space-y-24">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-[#FF6321]">
              <Target size={24} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Overview</span>
            </div>
            <p className="text-2xl md:text-3xl font-medium leading-snug">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-[#141414] text-[#E4E3E0] space-y-6 shadow-[8px_8px_0px_#FF6321]"
            >
              <div className="flex items-center gap-4 text-[#FF6321]">
                <Lightbulb size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest">The Challenge</span>
              </div>
              <p className="text-lg opacity-80 leading-relaxed">
                {project.challenges}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-[#141414] space-y-6 shadow-[8px_8px_0px_#141414]"
            >
              <div className="flex items-center gap-4 text-[#FF6321]">
                <Code2 size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest">The Solution</span>
              </div>
              <p className="text-lg opacity-80 leading-relaxed">
                {project.solutions}
              </p>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-[#FF6321]">
              <CheckCircle2 size={24} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Key Results</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {project.results.map((result, i) => (
                <div key={i} className="p-6 border-l-4 border-[#FF6321] bg-white/50 flex items-center justify-between group hover:bg-[#FF6321] hover:text-white transition-all duration-300">
                  <span className="text-xl font-display uppercase tracking-tight">{result}</span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Development Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12 pt-12 border-t border-[#141414]/10"
          >
            <div className="flex items-center gap-4 text-[#FF6321]">
              <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-[10px] font-bold">P</div>
              <span className="text-[10px] font-bold uppercase tracking-widest">Development Process</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: '01', label: 'Ideation', desc: 'Defining core logic and system architecture.' },
                { step: '02', label: 'Prototyping', desc: 'Building lightweight functional models.' },
                { step: '03', label: 'Development', desc: 'Scaling the codebase and ML pipelines.' },
                { step: '04', label: 'Deployment', desc: 'Production release and monitoring.' }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-[#141414] flex flex-col gap-4 group hover:bg-[#141414] hover:text-[#E4E3E0] transition-all duration-500">
                  <span className="text-[10px] font-mono text-[#FF6321]">{item.step}</span>
                  <h4 className="text-lg font-display uppercase">{item.label}</h4>
                  <p className="text-xs opacity-60 group-hover:opacity-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project Footer */}
      <section className="bg-[#141414] text-[#E4E3E0] p-12 md:p-24 overflow-hidden relative group">
        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">Next Project</span>
          <button 
            onClick={() => {
              const nextIndex = (projects.findIndex(p => p.id === project.id) + 1) % projects.length;
              navigate(`/project/${projects[nextIndex].id}`);
            }}
            className="text-6xl md:text-9xl font-display uppercase tracking-tighter hover:text-[#FF6321] transition-colors duration-500"
          >
            {projects[(projects.findIndex(p => p.id === project.id) + 1) % projects.length].title}
          </button>
        </div>
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display uppercase leading-none select-none">
            NEXT
          </div>
        </div>
      </section>

      {/* System Log Footer */}
      <section className="bg-[#0a0a0a] text-[#FF6321] p-4 border-t border-white/5 font-mono text-[8px] uppercase tracking-widest overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          <span>[LOG] Initializing system check... OK</span>
          <span>[LOG] Loading assets for {project.title}... OK</span>
          <span>[LOG] Establishing secure connection... OK</span>
          <span>[LOG] Version v2.4.0 stable... OK</span>
          <span>[LOG] User: {project.id} authorized... OK</span>
          <span>[LOG] Initializing system check... OK</span>
          <span>[LOG] Loading assets for {project.title}... OK</span>
          <span>[LOG] Establishing secure connection... OK</span>
          <span>[LOG] Version v2.4.0 stable... OK</span>
          <span>[LOG] User: {project.id} authorized... OK</span>
        </div>
      </section>
    </div>
  );
};
