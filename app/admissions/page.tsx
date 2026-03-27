'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, FileText, ChevronRight } from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <div className="pt-[72px] min-h-screen bg-jain-slate">
      <div className="bg-jain-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold tracking-[0.15em] uppercase mb-4">
              <Award size={13} aria-hidden="true" /> Admissions
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Admissions 2026–27
            </h1>
            <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
              Applications are open for B.Tech, MBA, and integrated programs.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="bg-white rounded-2xl p-10 shadow-card max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText size={28} className="text-jain-red" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-extrabold text-jain-navy mb-3">Start Your Application</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Fill out the online application form for B.Tech, MBA, BBA-LLB and other programs
            at JAIN Global Campus, Kanakapura.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-jain-red hover:bg-red-800 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Apply Online <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
