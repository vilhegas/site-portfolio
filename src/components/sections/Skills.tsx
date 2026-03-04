'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Code2, 
  Database, 
  Github, 
  Palette, 
  Cpu, 
  Zap, 
  Terminal,
  Shield,
  Activity
} from 'lucide-react';

const skills = [
  { name: 'HTML/CSS', icon: Globe, level: 95, category: 'FRONTEND' },
  { name: 'JavaScript/TypeScript', icon: Code2, level: 90, category: 'CORE' },
  { name: 'React/Next.js', icon: Code2, level: 85, category: 'FRAMEWORK' },
  { name: 'SQL/MySQL/MariaDB', icon: Database, level: 80, category: 'DATA' },
  { name: 'WordPress', icon: Globe, level: 90, category: 'CMS' },
  { name: 'Python', icon: Code2, level: 75, category: 'BACKEND' },
  { name: 'Git/GitHub', icon: Github, level: 85, category: 'DEVOPS' },
  { name: 'Figma/Photoshop', icon: Palette, level: 80, category: 'DESIGN' },
];

const getTier = (level: number) => {
  if (level >= 90) return { label: 'ELITE', color: 'text-yellow-400', border: 'border-yellow-400', glow: 'shadow-yellow-400/50', bg: 'bg-yellow-400/10' };
  if (level >= 80) return { label: 'ADVANCED', color: 'text-cyan-400', border: 'border-cyan-400', glow: 'shadow-cyan-400/50', bg: 'bg-cyan-400/10' };
  return { label: 'OPERATIONAL', color: 'text-emerald-400', border: 'border-emerald-400', glow: 'shadow-emerald-400/50', bg: 'bg-emerald-400/10' };
};

export default function Skills() {
  return (
    <section className="relative min-h-screen bg-[#000] overflow-hidden scroll-mt-24" id="skills">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      
      {/* Animated scanline */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-32 pointer-events-none"
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Header - System Status */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8 border-b border-cyan-500/30 pb-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
              <span className="text-emerald-400 font-mono text-sm tracking-widest">ONLINE</span>
            </div>
            <div className="h-4 w-px bg-cyan-500/30" />
            <span className="text-cyan-400 font-mono text-sm tracking-wider"></span>
          </div>
          <div className="text-cyan-400/60 font-mono text-xs">
            {new Date().toLocaleDateString()}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN - Profile Data */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Profile Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative bg-slate-900/80 border border-cyan-500/30 backdrop-blur-sm p-6 overflow-hidden group"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
              
              {/* Glitch effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/50 rounded-lg">
                    <Cpu className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/50 rounded">
                    <Shield className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-mono text-xs tracking-wider">FULL STACK</span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  SOBRE <span className="text-cyan-400">MIM</span>
                </h2>
                
                <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                  <p>
                    Minha trajetória técnica teve início na
                    <span className="text-cyan-400 font-semibold"> Mecatrônica</span>, onde 
                    desenvolvi sólida base em
                    diagnóstico de sistemas, análise de circuitos
                    eletrônicos e resolução estruturada de problemas,
                    habilidades que hoje transponho para o
                    desenvolvimento de software com precisão e
                    rigor analítico. Atuo no desenvolvimento <span className="text-cyan-400 font-semibold">Full Stack </span>
                    com foco em front-end, utilizando
                    JavaScript, TypeScript, React e outras tecnologias.
                  </p>
                  <p>
                    Tenho <span className="text-cyan-400 font-semibold">experiência</span> prática em integração de APIs
                    REST (Google Analytics, Meta Business,
                    Adveronix), automação de pipelines de dados
                    com Python e JavaScript, e aplicação de práticas
                    de SEO técnico e UX para maximizar performance
                    e engajamento. Também trabalho com WordPress,
                    bancos de dados SQL/MySQL/MariaDB, e
                    ferramentas de versionamento Git/GitHub.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-cyan-500/20">
                  {[
                    { value: '2+', label: 'ANOS EXP', icon: Activity },
                    { value: '10+', label: 'PROJETOS', icon: Terminal },
                    { value: '7+', label: 'CERTIFICADOS', icon: Shield },
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-3 bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors"
                    >
                      <stat.icon className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xl font-bold text-white font-mono">{stat.value}</div>
                      <div className="text-[10px] text-cyan-400/70 tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Skills Matrix */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="h-full"
            >
              {/* Skills Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  SKILLS
                  <span className="text-xs text-cyan-400/60 font-mono font-normal"></span>
                </h3>
                <div className="flex gap-2">
                  {['ELITE', 'ADVANCED', 'OPERATIONAL'].map((tier, i) => (
                    <div key={tier} className="flex items-center gap-1 text-[10px] text-slate-400">
                      <div className={`w-2 h-2 rounded-full ${
                        i === 0 ? 'bg-yellow-400' : i === 1 ? 'bg-cyan-400' : 'bg-emerald-400'
                      }`} />
                      {tier}
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Grid - Hexagonal/Cyber Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const tier = getTier(skill.level);
                  const Icon = skill.icon;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      className={`relative bg-slate-900/60 border ${tier.border}/30 p-4 group cursor-pointer overflow-hidden`}
                    >
                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 ${tier.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className={`absolute inset-0 shadow-lg ${tier.glow} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 ${tier.bg} border ${tier.border}/50 rounded`}>
                              <Icon className={`w-5 h-5 ${tier.color}`} />
                            </div>
                            <div>
                              <h4 className="text-white font-semibold text-sm leading-tight">{skill.name}</h4>
                              <span className="text-[10px] text-slate-500 font-mono tracking-wider">{skill.category}</span>
                            </div>
                          </div>
                          <span className={`text-xs font-mono font-bold ${tier.color} border ${tier.border}/30 px-2 py-1 rounded`}>
                            {tier.label}
                          </span>
                        </div>

                        {/* Progress Bar - Cyber Style */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-mono text-slate-400">
                            <span>LEVEL</span>
                            <span className={tier.color}>{skill.level}%</span>
                          </div>
                          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-pulse" />
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                              className={`h-full ${tier.color.replace('text-', 'bg-')} relative`}
                            >
                              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse" />
                            </motion.div>
                          </div>
                        </div>

                        {/* Decorative corner */}
                        <div className={`absolute bottom-0 right-0 w-4 h-4 border-b ${tier.border} border-r ${tier.border} opacity-0 group-hover:opacity-100 transition-opacity`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}