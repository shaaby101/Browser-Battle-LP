'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cpu, Plane, ShieldCheck, HardHat, ChevronRight, BookOpen } from 'lucide-react';

const PROGRAMS = [
  { icon: Cpu,        title: 'Computer Science (AI & ML)',     seats: '180 seats', duration: '4 Years' },
  { icon: Plane,      title: 'Aerospace Engineering',           seats: '60 seats',  duration: '4 Years' },
  { icon: ShieldCheck,title: 'Cybersecurity',                   seats: '90 seats',  duration: '4 Years' },
  { icon: HardHat,    title: 'Civil Engineering',               seats: '120 seats', duration: '4 Years' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

export default function AcademicsPage() {
  return (
    <div className="pt-[72px] min-h-screen bg-jain-slate">
      {/* Page Header */}
      <div className="bg-jain-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold tracking-[0.15em] uppercase mb-4">
              <BookOpen size={13} aria-hidden="true" /> Academics
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Academic Programs
            </h1>
            <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
              NAAC A++ engineering & management programs designed for the future.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Programs List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {PROGRAMS.map(({ icon: Icon, title, seats, duration }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-lg border border-gray-100 hover:border-jain-red/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <Icon size={22} className="text-jain-red" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-jain-navy mb-2 text-sm leading-snug">{title}</h3>
              <p className="text-xs text-gray-400">{duration} · {seats}</p>
              <Link href="/admissions" className="inline-flex items-center gap-1 text-xs font-bold text-jain-red mt-4 hover:gap-2 transition-all">
                Apply Now <ChevronRight size={12} aria-hidden="true"/>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
