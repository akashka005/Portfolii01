import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { BentoGallery } from '../components/BentoGallery';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Certifications } from '../components/Certifications';
import { Achievements } from '../components/Achievements';
import { Contact } from '../components/Contact';

export const Home = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <>
      <Hero />
      <About />
      <Projects activeSkill={activeSkill} />
      <BentoGallery />
      <Skills onSkillHover={setActiveSkill} />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
    </>
  );
};
