'use client';
import { motion } from 'framer-motion';
import { Dumbbell, Trophy, TreePine, Users } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Dumbbell,
    name: 'Sprintoor Indoor Stadium',
    desc: '80,000 sq.ft indoor arena with bowling alley, basketball, badminton, TT, and top-tier fitness zones.',
  },
  {
    icon: Trophy,
    name: 'The Oval — Cricket Ground',
    desc: '2 lakh sq.ft international-standard cricket ground with floodlights, professional pitch, and pavilion.',
  },
  {
    icon: TreePine,
    name: '300-Acre Green Campus',
    desc: 'LEED-certified eco-campus with jogging tracks, lake views, and dedicated student recreation zones.',
  },
  {
    icon: Users,
    name: 'Student Clubs & Fests',
    desc: '150+ active clubs spanning tech, arts, entrepreneurship, cultural events, and social impact initiatives.',
  },
];

export default function CampusLifePage() {
  return (
    <div className="pt-[72px] min-h-screen bg-white">
      <div className="bg-jain-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold tracking-[0.15em] uppercase mb-4">
              <Users size={13} aria-hidden="true" /> Campus Life
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Campus Life at Kanakapura
            </h1>
            <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
              World-class sports, vibrant student culture, and a stunning 300-acre green campus.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HIGHLIGHTS.map(({ icon: Icon, name, desc }, i) => (
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
