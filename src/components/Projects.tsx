'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitFork, 
  Code, 
  Terminal, 
  Zap, 
  Eye,
  Calendar,
  Folder,
  Cpu
} from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
  visibility: string;
  fork: boolean;
}

const languageColors: Record<string, string> = {
  TypeScript: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
  JavaScript: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  Python: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  HTML: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
  CSS: 'text-purple-400 border-purple-400/30 bg-purple-400/10',
  Java: 'text-red-400 border-red-400/30 bg-red-400/10',
  default: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10'
};

export default function Projects() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedProject, setSelectedProject] = useState<GitHubRepo | null>(null);

  const GITHUB_USERNAME = 'vilhegas';

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4&visibility=public`
      );
      
      if (!response.ok) throw new Error('Falha ao carregar projetos');
      
      const data = await response.json();
      // Filtra apenas repos com conteúdo (não vazios)
      const validProjects = data
        .filter((repo: GitHubRepo) => 
            !repo.fork && repo.description && repo.name !== GITHUB_USERNAME
        )
        .slice(0, 3);
      
      setProjects(validProjects);
    } catch (err) {
      setError('Erro na conexão com o servidor GitHub');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  };

  const getLanguageStyle = (lang: string) => {
    return languageColors[lang] || languageColors.default;
  };

  return (
    <section className="relative bg-black overflow-hidden py-20 scroll-mt-24" id="projetos">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <motion.div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/50 rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Folder className="w-6 h-6 text-cyan-400 relative z-10" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  PROJETOS <span className="text-cyan-400">_REPO</span>
                </h2>
                <div className="flex items-center gap-2 text-xs text-cyan-400/60 font-mono mt-1">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span>LIVE_SYNC_GITHUB_API</span>
                  <span className="text-slate-500">//</span>
                  <span>AUTO_UPDATE</span>
                </div>
              </div>
            </div>

            {/* Live Stats */}
            <div className="flex items-center gap-4 p-3 bg-slate-900/50 border border-cyan-500/20 rounded-lg">
              <div className="text-right">
                <div className="text-xs text-slate-500 font-mono">REPOSITÓRIOS</div>
                <div className="text-lg font-bold text-cyan-400 font-mono">
                  {loading ? '...' : projects.length.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="h-8 w-px bg-cyan-500/20" />
              <div className="text-right">
                <div className="text-xs text-slate-500 font-mono">STATUS</div>
                <div className="text-xs font-bold text-emerald-400 font-mono flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  ONLINE
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-slate-900/50 border border-cyan-500/20 rounded-lg animate-pulse" />
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 bg-red-500/10 border border-red-500/30 rounded-lg text-center"
          >
            <Terminal className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-red-400 font-mono font-bold mb-2">CONNECTION_FAILED</h3>
            <p className="text-slate-400 text-sm mb-4">{error}</p>
            <button 
              onClick={fetchProjects}
              className="px-4 py-2 bg-red-500/10 border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-950 transition-all font-mono text-sm"
            >
              RETRY_CONNECTION
            </button>
          </motion.div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {projects.map((project, index) => {
                const langStyle = getLanguageStyle(project.language);
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedProject(project)}
                    className="group relative bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Card Header */}
                    <div className="p-5 border-b border-cyan-500/10 relative">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-2 rounded ${langStyle} border`}>
                          <Code className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2">
                          {project.stargazers_count > 0 && (
                            <span className="flex items-center gap-1 text-xs text-yellow-400 font-mono">
                              <Star className="w-3 h-3" />
                              {project.stargazers_count}
                            </span>
                          )}
                          {project.forks_count > 0 && (
                            <span className="flex items-center gap-1 text-xs text-cyan-400 font-mono">
                              <GitFork className="w-3 h-3" />
                              {project.forks_count}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                        {project.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-500 font-mono">
                        <Calendar className="w-3 h-3" />
                        <span>UPDATED: {formatDate(project.updated_at)}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      <p className="text-slate-400 text-sm line-clamp-2 mb-4 h-10">
                        {project.description || 'No description available'}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.language && (
                          <span className={`px-2 py-1 rounded text-xs font-mono border ${langStyle}`}>
                            {project.language}
                          </span>
                        )}
                        {project.topics.slice(0, 2).map((topic) => (
                          <span 
                            key={topic}
                            className="px-2 py-1 rounded text-xs font-mono border border-slate-600 text-slate-400 bg-slate-800/50"
                          >
                            {topic}
                          </span>
                        ))}
                        {project.topics.length > 2 && (
                          <span className="px-2 py-1 rounded text-xs font-mono text-slate-500">
                            +{project.topics.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-cyan-500/10">
                        <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          CLICK_TO_EXPAND
                        </span>
                        <div className="flex gap-2">
                          <a 
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded transition-all"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          {project.homepage && (
                            <a 
                              href={project.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 rounded transition-all"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-6 h-6 bg-cyan-400/10 rotate-45 translate-x-3 translate-y-3 group-hover:bg-cyan-400/20 transition-colors" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Modal Detail */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-lg overflow-hidden"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-transparent">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-slate-400">
                        <span className={`px-2 py-1 rounded text-xs font-mono border ${getLanguageStyle(selectedProject.language)}`}>
                          {selectedProject.language || 'MISC'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(selectedProject.updated_at)}
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-all"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {selectedProject.topics.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono text-cyan-400 mb-2 flex items-center gap-2">
                        <Cpu className="w-3 h-3" />
                        TECH_STACK
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.topics.map((topic) => (
                          <span 
                            key={topic}
                            className="px-3 py-1 rounded-full text-xs font-mono border border-cyan-500/30 text-cyan-400 bg-cyan-400/5"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <a 
                      href={selectedProject.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-3 bg-cyan-500/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition-all font-mono text-sm rounded"
                    >
                      <Github className="w-4 h-4" />
                      VIEW_SOURCE
                    </a>
                    {selectedProject.homepage && (
                      <a 
                        href={selectedProject.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 p-3 bg-emerald-500/10 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 transition-all font-mono text-sm rounded"
                      >
                        <ExternalLink className="w-4 h-4" />
                        LIVE_DEMO
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Refresh Button */}
        {!loading && !error && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 text-center"
          >
            <button
              onClick={fetchProjects}
              className="px-6 py-3 bg-slate-900/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all font-mono text-sm flex items-center gap-2 mx-auto rounded"
            >
              <Terminal className="w-4 h-4" />
              REFRESH_DATA
              <span className="text-xs text-slate-500 ml-2">[F5]</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}