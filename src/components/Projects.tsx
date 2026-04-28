import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Code } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-medium mb-6">Works <span className="text-gray-300 font-light">&</span> Experiments</h2>
            <p className="text-xl text-gray-500 max-w-xl font-light">A curated list of projects where I push boundaries and explore new technologies.</p>
          </motion.div>
          <motion.a 
            whileHover={{ x: 5 }}
            href="#" 
            className="group flex items-center gap-3 text-sm font-bold text-gray-900 border-b-2 border-transparent hover:border-blue-600 pb-1 transition-all"
          >
            All Repositories <Github size={18} className="group-hover:rotate-12 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`group flex flex-col relative ${idx === 1 ? 'lg:translate-y-12' : ''}`}
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-gray-200 group-hover:shadow-blue-200 transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white/90 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between items-end">
                    <h3 className="text-3xl font-display font-medium text-white">{project.title}</h3>
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-900"
                    >
                      <ExternalLink size={20} />
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <p className="text-gray-500 font-light leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center gap-6">
                  <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors">
                    <Code size={14} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

