'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import { useState } from 'react';
import Header from '@/components/ui/Header';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollToSection } = useScrollToSection({ setActiveSection });
  const sectionIds = ['home', 'skills', 'projetos', 'contato'];
  useActiveSection({
  sectionIds,
  setActiveSection,
  offsetPx: 96,
});

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <Hero scrollToSection={scrollToSection} />

      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <section id="projetos" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="contato" className="scroll-mt-24">
        <Contact />
      </section>

      <footer className="py-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>© 2024 Caique Vilhegas. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com React, Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}