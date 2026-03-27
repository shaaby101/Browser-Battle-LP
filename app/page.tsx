'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TreePine, Award, Building2, Dumbbell,
  Cpu, Plane, ShieldCheck, HardHat,
  ArrowRight, ChevronRight, Trophy, Users, BookOpen, Briefcase,
  MapPin, Layers,
} from 'lucide-react';

/* ── Animation Variants ── */
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

/* ── Quick Stats Data ── */
const STATS = [
  { icon: TreePine,   value: '300+ Acres',     label: 'Sprawling Green Campus'        },
  { icon: Award,      value: 'NAAC A++',        label: 'Highest Accreditation Grade'   },
  { icon: Briefcase,  value: 'Top Recruiters',  label: 'Deloitte · Amazon · TCS'      },
  { icon: Dumbbell,   value: '80,000 sq.ft',    label: 'Sprintoor Indoor Stadium'      },
];

/* ── BTech Programs Data ── */
const PROGRAMS = [
  {
    icon: Cpu,
    title: 'Computer Science',
    specialisation: 'Artificial Intelligence & Machine Learning',
    desc: 'Build intelligent systems and autonomous agents with rigorous ML theory and hands-on GPU labs.',
    link: '/academics',
  },
  {
    icon: Plane,
    title: 'Aerospace Engineering',
    specialisation: 'Aeronautics & Propulsion',
    desc: 'Design and analyse aircraft structures, propulsion systems and UAVs in state-of-the-art wind tunnels.',
    link: '/academics',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    specialisation: 'Network Defence & Ethical Hacking',
    desc: 'Master cryptography, penetration testing, and enterprise-grade security architecture.',
    link: '/academics',
  },
  {
    icon: HardHat,
    title: 'Civil Engineering',
    specialisation: 'Structural & Environmental Design',
    desc: 'Design resilient infrastructure with BIM modelling, sustainable materials, and smart city frameworks.',
    link: '/academics',
  },
];

/* ── Campus Life Highlights ── */
const CAMPUS = [
  {
    icon: Dumbbell,
    name: 'Sprintoor',
    tag: 'Multi-Sport Indoor Arena',
    desc: "80,000 sq.ft of premium indoor sports infrastructure including a professional bowling alley, basketball courts, badminton, table tennis, and fitness zones — one of South India's finest university sports complexes.",
  },
  {
    icon: Trophy,
    name: 'The Oval',
    tag: 'International Cricket Ground',
    desc: '2 lakh sq.ft international-standard cricket ground equipped with a professional pitch, floodlights, and pavilion — a venue that has hosted premier-level matches.',
  },
  {
    icon: Layers,
    name: 'Green Campus',
    tag: '300+ Acre LEED-Certified',
    desc: 'A lush, meticulously landscaped 300-acre campus with ecological zones, jogging tracks, and lake views — designed for holistic student well-being alongside academic excellence.',
  },
];

/* ======================================================
   HOME PAGE
   ====================================================== */
export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-[72px]"
        id="about"
        aria-label="Hero"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/jain university.jpg"
            alt="Aerial view of JAIN Global Campus, Kanakapura"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: 'center 30%' }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Location badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-semibold tracking-widest uppercase">
                <MapPin size={11} className="text-red-300" aria-hidden="true" />
                Kanakapura Road, Bangalore
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-white leading-[1.06] mb-6 tracking-tight"
            >
              Excellence Lives Here.{' '}
              <span className="block text-red-400 mt-1">
                JAIN Global Campus,{' '}
                <span className="text-white">Kanakapura.</span>
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-white/80 max-w-xl mb-10 leading-relaxed font-medium"
            >
              A 300-acre world-class NAAC A++ campus shaping the next generation
              of engineers, leaders, and innovators.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link
                href="/academics"
                className="inline-flex items-center gap-2 px-8 py-4 bg-jain-red hover:bg-red-800 text-white font-bold text-sm rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-red-900/50 tracking-wide"
              >
                Explore Programs <ChevronRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/campus-life"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/70 text-white font-bold text-sm rounded-xl transition-all duration-200 hover:bg-white/20 hover:scale-105 active:scale-95 tracking-wide"
              >
                Discover Campus <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Floating Stats Banner ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-card-lg border-t-4 border-jain-red overflow-hidden"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
                {STATS.map(({ icon: Icon, value, label }, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-5 lg:p-7 hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div className="w-11 h-11 bg-red-50 group-hover:bg-red-100 rounded-xl flex items-center justify-center mb-3 transition-colors duration-200">
                      <Icon size={20} className="text-jain-red" aria-hidden="true" />
                    </div>
                    <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-jain-navy leading-tight mb-0.5">
                      {value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-wide leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Spacer below floating stats ── */}
      <div className="h-24 bg-white" aria-hidden="true" />

      {/* ── 2. ACADEMIC EXCELLENCE (Light Photo Overlay) ─ */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-white" id="academics" aria-label="Programs">
        {/* Academic Background Setup */}
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src="/academicexcellence.jpg"
            alt="Academic Excellence Background"
            fill
            className="object-cover opacity-100"
            style={{ objectPosition: 'center 40%' }}
          />
          {/* Extremely professional bright frosted overlay so the photo is visible as a lush texture but text is perfectly dark/readable */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[6px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 text-jain-red text-xs font-bold tracking-[0.15em] uppercase mb-3">
              <BookOpen size={14} aria-hidden="true" />
              Academic Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-jain-navy mb-3 drop-shadow-sm">
              B.Tech Programs at Kanakapura
            </h2>
            <div className="w-12 h-1 bg-jain-red rounded-full mb-5" aria-hidden="true" />
            <p className="text-gray-700 font-medium text-base sm:text-lg max-w-xl leading-relaxed">
              Industry-aligned engineering programs with dedicated research labs,
              global faculty, and 100% placement support.
            </p>
          </motion.div>

          {/* Staggered Program Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {PROGRAMS.map(({ icon: Icon, title, specialisation, desc, link }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ type: 'tween', duration: 0.22 }}
                className="group bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-jain-red/40 flex flex-col transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-red-50 group-hover:bg-jain-red rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-colors duration-300">
                  <Icon size={22} className="text-jain-red group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-jain-navy group-hover:text-jain-red mb-1 transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-xs font-semibold text-jain-red/90 mb-3 leading-tight">
                  {specialisation}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-5">{desc}</p>
                <Link
                  href={link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-jain-red group-hover:gap-2.5 transition-all duration-200"
                  aria-label={`Learn more about ${title}`}
                >
                  Know More <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-jain-navy bg-white/80 backdrop-blur-sm text-jain-navy hover:bg-jain-navy hover:text-white font-bold text-sm rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
            >
              View All Programs <ChevronRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. CAMPUS LIFE (Dark Premium Photo Overlay) ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-jain-navy" id="campus-life" aria-label="Campus Life">
        
        {/* Campus Background Setup */}
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src="/campus life.jpg"
            alt="Campus Life at Kanakapura"
            fill
            className="object-cover opacity-100"
            style={{ objectPosition: 'center 50%' }}
          />
          {/* Deep professional navy glass overlay so text turns white and highly readable, but photo is visible */}
          <div className="absolute inset-0 bg-[#0b132b]/75" />
          <div className="absolute inset-0 bg-jain-navy/50 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-jain-navy via-transparent to-[#0b132b] opacity-80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold tracking-[0.15em] uppercase mb-3">
              <Users size={14} aria-hidden="true" />
              Campus Life
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              World-Class Infrastructure
            </h2>
            <div className="w-12 h-1 bg-red-400 rounded-full mb-5" aria-hidden="true" />
            <p className="text-blue-200 text-base sm:text-lg max-w-xl leading-relaxed">
              Beyond academics — a campus built for champions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {CAMPUS.map(({ icon: Icon, name, tag, desc }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ type: 'tween', duration: 0.22 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-7 shadow-2xl border border-white/10 hover:border-red-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-400/10 rounded-bl-[80px] group-hover:bg-red-400/20 transition-colors duration-300" aria-hidden="true" />
                <div className="w-12 h-12 bg-jain-red rounded-xl flex items-center justify-center mb-5 shadow-inner border border-red-500/50">
                  <Icon size={22} className="text-white" aria-hidden="true" />
                </div>
                <span className="inline-block text-[10px] font-bold text-red-400 tracking-widest uppercase mb-2">
                  {tag}
                </span>
                <h3 className="text-xl font-extrabold text-white mb-3">{name}</h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              href="/campus-life"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-jain-red hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-red-900/40 border border-red-500/50"
            >
              Explore Campus Life <ChevronRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. ADMISSIONS CTA STRIP (Red Accent) ────────────── */}
      <section
        className="bg-jain-red py-20 relative overflow-hidden"
        id="admissions"
        aria-label="Admissions"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 text-red-200 text-xs font-bold tracking-[0.15em] uppercase mb-3">
                <Award size={12} aria-hidden="true" />
                Admissions Open
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Begin Your Journey at JAIN Global Campus
              </h2>
              <p className="text-red-100 text-base max-w-xl leading-relaxed">
                Applications are now open for B.Tech, MBA, and integrated programs for the 2026–27 academic session.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="flex-shrink-0">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2.5 px-9 py-4 bg-white text-jain-red font-bold text-base rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl tracking-wide"
              >
                Apply Now: 2026–27 <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
