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

        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[1fr_2.5fr] gap-12 items-start">
                <div className="mb-4 md:mb-0">
                   <div className="text-lg font-bold text-gray-900">{exp.company}</div>
                   <div className="text-sm font-medium text-blue-600 mb-2">{exp.period}</div>
                </div>

                <div className="bg-gray-50 group-hover:bg-blue-50/50 p-8 rounded-3xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">{exp.role}</h3>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
