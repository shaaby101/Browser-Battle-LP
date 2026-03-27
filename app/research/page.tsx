'use client';
import { motion } from 'framer-motion';
import { Microscope, FlaskConical, Globe, Lightbulb } from 'lucide-react';

const AREAS = [
  { icon: Microscope, name: 'Aerospace Research',     desc: 'UAV design, propulsion systems, and aerodynamic simulation using computational fluid dynamics.' },
  { icon: FlaskConical, name: 'AI & Data Science Lab', desc: 'GPU-powered deep learning research in NLP, computer vision, and autonomous systems.' },
  { icon: Globe,      name: 'Sustainable Infrastructure', desc: 'Smart materials, low-carbon construction, and green urban planning frameworks.' },
  { icon: Lightbulb, name: 'Cybersecurity Research', desc: 'Threat intelligence, blockchain security, and post-quantum cryptography.' },
];

export default function ResearchPage() {
  return (
    <div className="pt-[72px] min-h-screen bg-white">
      <div className="bg-jain-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold tracking-[0.15em] uppercase mb-4">
              <Microscope size={13} aria-hidden="true" /> Research
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Research & Innovation
            </h1>
            <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
              Cutting-edge interdisciplinary research across engineering, sciences, and technology.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AREAS.map(({ icon: Icon, name, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.015, y: -4 }}
              className="bg-jain-slate rounded-2xl p-7 shadow-card hover:shadow-card-lg border border-transparent hover:border-jain-red/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Icon size={22} className="text-jain-red" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-extrabold text-jain-navy mb-2">{name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
