import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter, Code2, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden text-gray-900">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6">
             <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={12} className="animate-pulse" /> Available for Internships 2026
              </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-medium leading-[1.1] mb-8 tracking-tight">
            Building the <span className="text-blue-600">Future</span> of Web & <span className="relative inline-block">AI<motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 1, duration: 0.8 }} className="absolute bottom-2 left-0 h-2 bg-blue-100 -z-10" /></span>.
          </h1>
          
          <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed font-light">
            I'm <span className="text-gray-900 font-medium">Alex Chen</span>. A developer exploring unconventional solutions at the intersection of AI, design, and systems.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all"
            >
              Explore My Work <ArrowRight size={20} />
            </motion.a>
            
            <div className="flex items-center gap-4">
              {[
                { icon: <Github size={22} />, label: 'GitHub' },
                { icon: <Linkedin size={22} />, label: 'LinkedIn' },
                { icon: <Twitter size={22} />, label: 'Twitter' }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  href="#" 
                  className="p-3 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse delay-700" />
          
          {/* Mock Terminal Card */}
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-3xl p-1 border border-gray-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 ml-4">
                <Terminal size={14} /> index.ts — Portfolio
              </div>
            </div>
            <div className="p-8 font-mono text-sm space-y-4">
              <div className="flex gap-4">
                <span className="text-gray-600">01</span>
                <span><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = &#123;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-600">02</span>
                <span className="ml-4 text-gray-400 tracking-wide">name: <span className="text-green-400">'Alex Chen'</span>,</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-600">03</span>
                <span className="ml-4 text-gray-400 tracking-wide">focus: <span className="text-green-400">['Deep Learning', 'Backend']</span>,</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-600">04</span>
                <span className="ml-4 text-gray-400 tracking-wide">curiosity: <span className="text-yellow-400">Infinity</span></span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-600">05</span>
                <span><span className="text-pink-400">&#125;</span>;</span>
              </div>
              <div className="pt-4 flex gap-4">
                <span className="text-gray-600">06</span>
                <span><span className="text-blue-400">developer</span>.<span className="text-yellow-400">buildFuture</span>();</span>
              </div>
              <div className="flex items-center gap-2 text-green-400 pt-2 ml-10">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Running local server...
              </div>
            </div>
          </div>

          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -right-6 top-1/2 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl"
          >
             <Code2 className="text-blue-500" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

