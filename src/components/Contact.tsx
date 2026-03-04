'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin,
  Zap, 
  Github, 
  Linkedin,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'caiquevilhegas16@gmail.com',
    href: 'mailto:caiquevilhegas16@gmail.com',
    color: 'cyan'
  },
  {
    icon: MapPin,
    label: 'LOCALIZAÇÃO',
    value: 'São Paulo, Brasil',
    href: 'https://maps.app.goo.gl/cqcT3SJ8AcczTcE16',
    color: 'purple',
  }
];

const socialLinks = [
  { icon: Github, label: 'GITHUB', href: 'https://github.com/vilhegas', color: 'slate' },
  { icon: Linkedin, label: 'LINKEDIN', href: 'https://linkedin.com/in/caiquevilhegas', color: 'blue' },
];

export default function Contact() {

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; border: string; bg: string; glow: string }> = {
      cyan: { text: 'text-cyan-400', border: 'border-cyan-400/30', bg: 'bg-cyan-400/10', glow: 'shadow-cyan-400/20' },
      emerald: { text: 'text-emerald-400', border: 'border-emerald-400/30', bg: 'bg-emerald-400/10', glow: 'shadow-emerald-400/20' },
      purple: { text: 'text-purple-400', border: 'border-purple-400/30', bg: 'bg-purple-400/10', glow: 'shadow-purple-400/20' },
      slate: { text: 'text-slate-400', border: 'border-slate-400/30', bg: 'bg-slate-400/10', glow: 'shadow-slate-400/20' },
      blue: { text: 'text-blue-400', border: 'border-blue-400/30', bg: 'bg-blue-400/10', glow: 'shadow-blue-400/20' },
      sky: { text: 'text-sky-400', border: 'border-sky-400/30', bg: 'bg-sky-400/10', glow: 'shadow-sky-400/20' }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section className="relative bg-slate-950 overflow-hidden py-12 scroll-mt-24" id="contato">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />
      
      {/* Animated border top */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            INICIAR <span className="text-cyan-400">CONTATO</span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            Envie sua mensagem
          </p>
        </motion.div>

        <div className="flex justify-center">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md space-y-6"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const colors = getColorClasses(item.color);
                const Icon = item.icon;
                
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`group flex items-center gap-4 p-4 bg-slate-900/80 border ${colors.border} hover:${colors.border.replace('/30', '/60')} transition-all duration-300`}
                  >
                    <div className={`p-3 ${colors.bg} ${colors.text} rounded-lg group-hover:shadow-lg ${colors.glow} transition-all`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`text-xs font-mono ${colors.text} mb-1`}>{item.label}</div>
                      <div className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="p-6 bg-slate-900/50 border border-cyan-500/20 rounded-lg">
              <h3 className="text-xs font-mono text-cyan-400 mb-4 flex items-center gap-2">
                <Zap className="w-3 h-3" />
                REDES SOCIAIS
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const colors = getColorClasses(social.color);
                  const Icon = social.icon;
                  
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 p-3 ${colors.bg} border ${colors.border} rounded-lg flex flex-col items-center gap-2 hover:${colors.bg.replace('/10', '/20')} transition-all group`}
                    >
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                      <span className={`text-[10px] font-mono ${colors.text}`}>{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Status Card */}
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75" />
                </div>
                <div>
                  <div className="text-emerald-400 font-mono text-xs font-bold">DISPONÍVEL</div>
                  <div className="text-slate-400 text-xs">Resposta em até 24h</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-cyan-500/10 text-center"
        >
          <div className="flex items-center justify-center gap-4 text-cyan-400/20 text-xs font-mono">
            <span>◢</span>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <span>END</span>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <span>◣</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}