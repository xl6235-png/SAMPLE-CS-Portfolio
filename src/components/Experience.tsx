import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
            Professional Journey
          </h2>
          <p className="text-gray-600">My internship experiences and contributions.</p>
        </div>

        <div className="space-y-20 relative">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Desktop Center Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-[-80px] w-px bg-gray-100 -translate-x-1/2 hidden md:block last:hidden" />
              
              <div className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className={`bg-gray-50/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-gray-100 transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-blue-900/5 group-hover:-translate-y-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                      {exp.period}
                    </div>
                    <h3 className="text-2xl font-display font-medium mb-1">{exp.role}</h3>
                    <div className="text-lg font-bold text-gray-900 mb-6">{exp.company}</div>
                    <ul className={`space-y-4 flex flex-col ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className={`text-gray-500 font-light leading-relaxed flex items-start gap-3 ${idx % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Node */}
                <div className="relative z-10 w-12 h-12 bg-white rounded-2xl border-4 border-gray-50 flex items-center justify-center shadow-sm text-blue-600 shrink-0 hidden md:flex">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping absolute" />
                  <div className="w-2 h-2 rounded-full bg-blue-600 relative" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
