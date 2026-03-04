'use client';
import { MouseProvider} from '@/components/MouseContext';
import  SoullessModel  from '@/components/SoullessModel'; 
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Globe, 
  Palette, 
  Cpu,
  ChevronRight
} from 'lucide-react';


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

  const skills = [
    { name: 'HTML/CSS', icon: <Globe className="w-6 h-6" />, level: 95 },
    { name: 'JavaScript/TypeScript', icon: <Code2 className="w-6 h-6" />, level: 90 },
    { name: 'React/Next.js', icon: <Code2 className="w-6 h-6" />, level: 85 },
    { name: 'SQL/MySQL/MariaDB', icon: <Database className="w-6 h-6" />, level: 80 },
    { name: 'WordPress', icon: <Globe className="w-6 h-6" />, level: 90 },
    { name: 'Python', icon: <Code2 className="w-6 h-6" />, level: 75 },
    { name: 'Git/GitHub', icon: <Github className="w-6 h-6" />, level: 85 },
    { name: 'Figma/Photoshop', icon: <Palette className="w-6 h-6" />, level: 80 },
  ];

  const experiences = [
    {
      title: 'Estagiário em Desenvolvimento Web',
      company: 'Aconsultora',
      period: '09/2023 - 10/2024',
      description: 'Desenvolvimento de landing pages com WordPress, integração de APIs (Google Analytics, Meta Business), automação de relatórios com Python e JavaScript, e otimização de SEO/UX.',
      tags: ['WordPress', 'APIs', 'Python', 'SEO']
    },
    {
      title: 'Estagiário em Engenharia Mecatrônica',
      company: 'MEDREX',
      period: '09/2022 - 12/2022',
      description: 'Manutenção de equipamentos, análise de circuitos eletrônicos, elaboração de relatórios técnicos e gestão de manutenção preventiva.',
      tags: ['Manutenção', 'Eletrônica', 'Relatórios Técnicos']
    }
  ];

  const projects = [
    {
      title: 'Dashboard de Analytics',
      description: 'Integração automatizada de dados do Google Analytics e Meta Business para geração de relatórios em tempo real.',
      tech: ['React', 'Node.js', 'APIs'],
      image: 'bg-gradient-to-br from-blue-600 to-purple-600'
    },
    {
      title: 'Sistema de Automação',
      description: 'Scripts Python para automação de relatórios e processamento de dados marketing.',
      tech: ['Python', 'Pandas', 'Automation'],
      image: 'bg-gradient-to-br from-green-600 to-teal-600'
    },
    {
      title: 'Landing Pages Responsivas',
      description: 'Desenvolvimento de páginas de alta conversão com WordPress customizado e otimização mobile.',
      tech: ['WordPress', 'PHP', 'CSS3'],
      image: 'bg-gradient-to-br from-orange-600 to-red-600'
    }
  ];

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
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
              {['home', 'sobre', 'skills', 'experiencia', 'projetos', 'contato'].map((item) => (
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
                {['home', 'sobre', 'skills', 'experiencia', 'projetos', 'contato'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
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
          {/* BACKGROUND GRADIENTE */}
          
          {/* FUNDO CYBERPUNK - PRÉDIOS E NÉON */}
            <div className="absolute inset-0 bg-[#080808] overflow-hidden">
              {/* Gradiente base atmosférico */}
              <div className="absolute inset-0 bg-gradient-to-b from-black-950/30 via-[#0a0a0f] to-cyan-950/20" />
                      
              {/* Partículas/chuva digital */}
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-[1px] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 80}%`,
                    height: `${15 + Math.random() * 30}px`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1.5 + Math.random() * 2}s`
                  }}
                />
              ))}
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

      {/* About Section */}
      <section id="sobre" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-30 blur-lg" />
                <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700">
                  <Cpu className="w-16 h-16 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Sobre Mim</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Minha trajetória técnica teve início na Mecatrônica, onde desenvolvi sólida base em diagnóstico de sistemas, análise de circuitos eletrônicos e resolução estruturada de problemas, habilidades que hoje transponho para o desenvolvimento de software com precisão e rigor analítico. 
                  </p>  
                  <p className="text-slate-400 leading-relaxed">
                    Atuo no desenvolvimento Full Stack com foco em front-end, utilizando JavaScript, TypeScript, React e outras tecnologias. Tenho experiência prática em integração de APIs REST (Google Analytics, Meta Business, Adveronix), automação de pipelines de dados com Python e JavaScript, e aplicação de práticas de SEO técnico e UX para maximizar performance e engajamento. Também trabalho com WordPress, bancos de dados SQL/MySQL/MariaDB, e ferramentas de versionamento Git/GitHub.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div>              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-cyan-400">2+</div>
                  <div className="text-sm text-slate-400">Anos de Experiência</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-cyan-400">10+</div>
                  <div className="text-sm text-slate-400">Projetos Entregues</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-cyan-400">7+</div>
                  <div className="text-sm text-slate-400">Certificados</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Minhas <span className="text-cyan-400">Habilidades</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tecnologias e ferramentas que utilizo para criar soluções digitais completas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <h3 className="font-semibold text-slate-200 mb-2">{skill.name}</h3>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experiência <span className="text-cyan-400">Profissional</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block w-1/2" />
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 z-10" />
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
                    <span className="text-cyan-400 text-sm font-medium">{exp.period}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-1">{exp.title}</h3>
                    <h4 className="text-slate-400 mb-4">{exp.company}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projetos <span className="text-cyan-400">Recentes</span>
            </h2>
            <p className="text-slate-400">
              Alguns dos trabalhos que desenvolvi recentemente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all"
              >
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a 
              href="https://github.com/Vilhegas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              <Github className="w-5 h-5" />
              Ver mais no GitHub
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos <span className="text-cyan-400">Conversar</span>?
            </h2>
            <p className="text-slate-400">
              Estou disponível para novas oportunidades e projetos freelance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="https://linkedin.com/in/caiquevilhegas"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all group"
            >
              <div className="p-4 bg-slate-700 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                <Linkedin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">LinkedIn</h3>
                <p className="text-slate-400 text-sm">/in/caiquevilhegas</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/Vilhegas"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all group"
            >
              <div className="p-4 bg-slate-700 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                <Github className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">GitHub</h3>
                <p className="text-slate-400 text-sm">/Vilhegas</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:caiquevilhegas16@gmail.com"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all group"
            >
              <div className="p-4 bg-slate-700 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-slate-400 text-sm">caiquevilhegas16@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+5511942570103"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all group"
            >
              <div className="p-4 bg-slate-700 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Telefone</h3>
                <p className="text-slate-400 text-sm">+55 (11) 94257-0103</p>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 text-slate-400 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700">
              <MapPin className="w-5 h-5 text-cyan-400" />
              São Paulo, SP - Brasil
            </div>
          </motion.div>
        </div>
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