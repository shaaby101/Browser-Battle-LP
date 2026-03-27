'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  GraduationCap, 
  CheckCircle2, 
  Plane, 
  Users, 
  Building2, 
  BookOpen, 
  Award,
  ChevronRight,
  ArrowRight,
  FileText,
  HelpCircle,
  MapPin
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const GLOBAL_STATS = [
  { label: '8,000+', sublabel: 'Students from 30+ Countries', icon: Globe2 },
  { label: 'NAAC A++', sublabel: 'Highest Accreditation', icon: Award },
  { label: 'NIRF 65th', sublabel: 'Top University Ranking', icon: Building2 },
  { label: 'JET Exempt', sublabel: 'Direct Admission Path', icon: CheckCircle2 },
];

const PROGRAMS = [
  {
    title: 'Bachelor of Technology (B.Tech)',
    specialisations: ['Computer Science (AI, ML, Cybersecurity)', 'Aerospace Engineering', 'Software Engineering'],
    desc: 'Cutting-edge engineering programs at JAIN Global Campus, Kanakapura.',
  },
  {
    title: 'Management & Commerce',
    specialisations: ['MBA (Finance, Marketing, analytics)', 'BBA (Aviation, HR, Marketing)', 'B.Com (ACCA & CMA UK Integrated)'],
    desc: 'Globally recognized business programs with industry certifications.',
  },
];

const PHOTOS = [
  { src: '/jain university.jpg', alt: 'Main Building Entrance' },
  { src: '/academicexcellence.jpg', alt: 'Modern Classrooms' },
  { src: '/campus life.jpg', alt: 'Vibrant Campus Life' },
  { src: '/cricketground.jpg', alt: 'The Oval Cricket Ground' },
  { src: '/infractucture.jpg', alt: 'World-Class Infrastructure' },
  { src: '/300 acers.jpg', alt: '300-Acre Lush Campus' },
  { src: '/Jain-University-Bangalore.jpg', alt: 'JAIN University Global View' },
  { src: '/School of Design , Media, and creative Arts.jpeg', alt: 'School of Design' },
  { src: '/department of humanities and social sciences.jpeg', alt: 'Humanities & Social Sciences' },
  { src: '/engineering and technology.jpeg', alt: 'Engineering & Technology Block' },
  { src: '/school of allied health care and sciences.jpeg', alt: 'Allied Healthcare Sciences' },
  { src: '/school of applied computing.jpeg', alt: 'Applied Computing Block' },
  { src: '/school of law.jpeg', alt: 'Faculty of Law' },
  { src: '/alimini2025.jpg', alt: 'Graduation 2025' },
  { src: '/alimini2026.jpg', alt: 'Future Leaders' },
  { src: '/alumini2024.jpg', alt: 'Alumni Network' },
];

export default function InternationalAdmissionsPage() {
  return (
    <div className="pt-[78px] min-h-screen bg-white">
      {/* ── HERO SECTION ── */}
      <section className="relative h-[60vh] flex flex-col justify-center overflow-hidden">
        <Image
          src="/jain university.jpg"
          alt="JAIN Global Campus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12366b]/95 via-[#12366b]/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-6">
              <Globe2 size={14} className="text-blue-300" />
              Global Admissions 2026-27
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Study in India's <span className="text-[#f9b233]">Global University</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-blue-100 mb-8 leading-relaxed font-medium">
              Join a multicultural community of 8,000+ students from 30+ countries at our world-class 300-acre NAAC A++ campus.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link href="/admissions" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f9b233] text-[#12366b] font-bold rounded-xl transition-all hover:scale-105 shadow-xl">
                Apply Now <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {GLOBAL_STATS.map(({ label, sublabel, icon: Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4 border border-gray-100 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-[#12366b]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{label}</h3>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS & ELIGIBILITY ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Programs */}
          <div>
            <span className="text-[#12366b] font-bold text-sm tracking-widest uppercase block mb-4">Academic Programs</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Programs for International Students</h2>
            <div className="space-y-6">
              {PROGRAMS.map((prog, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-[#12366b] mb-4">{prog.title}</h3>
                  <p className="text-sm text-gray-600 mb-6">{prog.desc}</p>
                  <ul className="space-y-3">
                    {prog.specialisations.map((spec, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <CheckCircle2 size={16} className="text-green-500" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Support */}
          <div className="bg-[#12366b] rounded-3xl p-10 text-white sticky top-24">
            <h2 className="text-2xl font-bold mb-8">Eligibility & Visa Support</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-[#f9b233]" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Academic Requirements</h4>
                  <p className="text-sm text-blue-100 leading-relaxed">UG applicants need 10+2/equivalent. PG applicants need a Bachelor's degree with min 55% aggregate marks.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-[#f9b233]" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">JET Exemption</h4>
                  <p className="text-sm text-blue-100 leading-relaxed">International students are generally exempt from JAIN Entrance Test. Admissions based on academic merit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Plane size={20} className="text-[#f9b233]" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Visa & FRRO Assistance</h4>
                  <p className="text-sm text-blue-100 leading-relaxed">Our International Relations team assists with Visa processing and FRRO/FRO registration within 14 days of arrival.</p>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-10 border-t border-white/10 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#f9b233] mb-4">Admissions Open 2026-27</p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 text-sm font-bold hover:underline">
                Contact International Office <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#12366b] font-bold text-sm tracking-widest uppercase block mb-4">Our Vibrant Campus</span>
            <h2 className="text-4xl font-black text-gray-900">Life at JAIN University</h2>
            <div className="w-16 h-1 bg-[#f9b233] mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PHOTOS.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <p className="text-white text-sm font-bold">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="bg-[#12366b] py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f9b233]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Begin Your International Journey Today</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Join the ranks of successful alumni from across the globe. Our dedicated team is here to guide you through every step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="px-10 py-4 bg-[#f9b233] text-[#12366b] font-bold rounded-xl shadow-2xl hover:scale-105 transition-transform">
              Join JAIN University
            </Link>
            <Link href="/contact-us" className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
              Request Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
