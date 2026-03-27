'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, BookOpen, Award, Users, ChevronRight, Cpu, Briefcase, Calculator, FlaskConical, Palette, Scale, HeartPulse, Monitor } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: GraduationCap, label: '140+', description: 'Academic Programs' },
  { icon: Award, label: 'NAAC A++', description: 'Accreditation' },
  { icon: Users, label: '21,000+', description: 'Students Enrolled' },
  { icon: BookOpen, label: '9', description: 'Faculties' },
];

const DEPARTMENTS = [
  { icon: Cpu, name: 'Engineering & Technology', slug: 'engineering', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Briefcase, name: 'Management', slug: 'management', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: Calculator, name: 'Commerce', slug: 'commerce', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: FlaskConical, name: 'Sciences', slug: 'sciences', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Palette, name: 'Creative Arts & Design', slug: 'creative-arts', color: 'text-pink-600', bg: 'bg-pink-50' },
  { icon: BookOpen, name: 'Humanities & Social Sciences', slug: 'humanities', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Scale, name: 'Law', slug: 'law', color: 'text-slate-600', bg: 'bg-slate-100' },
  { icon: HeartPulse, name: 'Allied Healthcare', slug: 'healthcare', color: 'text-red-600', bg: 'bg-red-50' },
  { icon: Monitor, name: 'Applied Computing', slug: 'computing', color: 'text-cyan-600', bg: 'bg-cyan-50' },
];

export default function AcademicsPage() {
  return (
    <div className="pt-[72px] min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-jain-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold tracking-[0.15em] uppercase mb-4">
              <GraduationCap size={13} aria-hidden="true" /> Academics
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Academic Excellence
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
              Discover world-class education with industry-aligned curriculum, experienced faculty, and state-of-the-art facilities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HIGHLIGHTS.map(({ icon: Icon, label, description }, index) => (
            <motion.div
              key={description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <div className="w-12 h-12 bg-jain-navy/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon size={24} className="text-jain-navy" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{label}</div>
              <div className="text-sm text-gray-500">{description}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Academic Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Transformative Learning Experience
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At JAIN (Deemed-to-be University), we believe in nurturing well-rounded individuals through a blend of theoretical knowledge and practical application. Our academic programs are designed to prepare students for the challenges of tomorrow.
            </p>
            <ul className="space-y-4">
              {['Industry-aligned curriculum updated regularly', 'Experienced faculty from academia and industry', 'State-of-the-art labs and research facilities', 'International collaborations and exchange programs'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <ChevronRight size={18} className="text-jain-red flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-jain-navy to-blue-900 rounded-3xl p-8 text-white"
          >
            <h3 className="text-xl font-bold mb-4">Academic Calendar 2026-27</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span>Admissions Open</span>
                <span className="font-semibold">January 2026</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span>Entrance Exams</span>
                <span className="font-semibold">April - May 2026</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span>Orientation Week</span>
                <span className="font-semibold">July 2026</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span>Classes Begin</span>
                <span className="font-semibold">August 2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Departments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from 9 diverse faculties offering programs at undergraduate, postgraduate, and doctoral levels.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPARTMENTS.map(({ icon: Icon, name, slug, color, bg }, index) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/departments/${slug}`}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all group"
                >
                  <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={24} className={color} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-jain-navy transition-colors">{name}</h3>
                  </div>
                  <ChevronRight size={20} className="text-gray-400 group-hover:text-jain-navy group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/departments"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jain-navy hover:bg-jain-navy/90 text-white font-bold rounded-xl transition-all hover:scale-105"
            >
              View All Departments <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-jain-navy py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Join 21,000+ students at one of India's top-ranked universities. Applications for 2026-27 are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/admissions" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-jain-red hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              Apply Now <ChevronRight size={18} />
            </Link>
            <Link 
              href="/campus-life" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20"
            >
              Explore Campus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
