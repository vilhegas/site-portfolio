'use client';
import './globals.css';
import { MouseProvider} from '@/components/MouseContext';
import  SoullessModel  from '@/components/SoullessModel'; 
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {  
  Mail,
  Code2
} from 'lucide-react';
import { Particles } from '@/components/Particles';
import Person from '@/components/Person';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';



const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Typing animation for hero
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 1024); // lg breakpoint
  };
  
  checkMobile();
  window.addEventListener('resize', checkMobile);
  
  return () => window.removeEventListener('resize', checkMobile);
}, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string): void => {
    setIsMenuOpen(false);

      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (!element) return;

        const headerOffset = 96; // ajuste: 80~110 dependendo da altura do seu header
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setActiveSection(id);
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      <Head>
        <title>{`Caique Vilhegas | Full Stack Developer`}</title>
        <meta name="description" content="Portfolio de Caique Vilhegas - Desenvolvedor Full Stack" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              CV
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'skills', 'projetos', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1.5">
                <div className={`w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800"
            >
              <div className="px-4 py-4 space-y-3">
                {['home', 'skills', 'projetos', 'contato'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {scrollToSection(item); setIsMenuOpen(false);}}
                    className="block w-full text-left capitalize text-slate-300 hover:text-cyan-400 py-2"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <MouseProvider>
        <section 
          id="home" 
          onMouseMove={(e) => {
            if (isMobile) return;
            const rect = e.currentTarget.getBoundingClientRect();
            setMouse({
              x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
              y: -((e.clientY - rect.top) / rect.height) * 2 + 1
            });
          }}
          className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        >
        <div className="absolute inset-0 bg-[#000] overflow-hidden">
          
        {/* Partículas */}
          <Particles />
        </div>

          {/* MODELO 3D - SÓ APARECE NO DESKTOP */}
            {!isMobile && (
              <div className="absolute inset-0 w-full h-full flex justify-end items-center pointer-events-none">
                <div className="w-1/2 h-full">
                  <Suspense fallback={null}>
                    <SoullessModel mouse={mouse} />
                  </Suspense>
                </div>
              </div>
            )}
          
          {/* CONTEÚDO */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* TEXTO */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h2 className="text-cyan-400 text-lg md:text-xl mb-4 font-medium tracking-wider uppercase">
                  Olá, eu sou
                </h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Caique Vilhegas
                </h1>
                <div className="h-12 md:h-16 lg:h-20 flex items-center justify-center lg:justify-start">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-400 border-r-4 border-cyan-400 pr-2 animate-pulse">
                    {displayText}
                  </span>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <button 
                    onClick={() => scrollToSection('contato')}
                    className="px-6 py-3 md:px-8 md:py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    Entre em Contato
                  </button>
                  <button 
                    onClick={() => scrollToSection('projetos')}
                    className="px-6 py-3 md:px-8 md:py-4 border-2 border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-bold rounded-full transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <Code2 className="w-4 h-4 md:w-5 md:h-5" />
                    Ver Projetos
                  </button>
                </motion.div>
              </motion.div>

              {/* ESPAÇO RESERVADO PARA MODELO NO DESKTOP */}
              <div className="hidden lg:block" />
            </div>
          </div>

          {/* SCROLL INDICATOR */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
          >
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-cyan-400 rounded-full" />
            </div>
          </motion.div>
        </section>
        </MouseProvider>

      {/* Skills Section */}
      <section>
          <Person />
      </section>

      {/* Projects Section */}
      <section>
           <Projects/>
      </section>

      {/* Contact Section */}
      <section>
        <Contact/>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>© 2024 Caique Vilhegas. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com React, Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;