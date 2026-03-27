'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Award, Users, BookOpen, ChevronRight, CheckCircle2, X } from 'lucide-react';

/* ── Professional Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
      delay: i * 0.1,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const stats = [
  { icon: Award, title: 'NAAC A++ Accreditation', desc: 'Highest grade awarded for academic and infrastructure excellence in India.' },
  { icon: Users, title: '21,000+ Students', desc: 'A vibrant global community of scholars from 45+ countries.' },
  { icon: BookOpen, title: '140+ Programs', desc: 'Comprehensive UG, PG, and doctoral programs driving research and innovation.' },
];

export default function AboutPage() {
  const [showCampusMap, setShowCampusMap] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* ── 1. About Us Hero Section ── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden" aria-label="About Hero">
        {/* Background Image with Parallax-style slow scale */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <Image
            src="/jain university.jpg"
            alt="JAIN Global Campus Kanakapura"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          {/* Extremely clean dark overlay — avoids muddy colors */}
          <div className="absolute inset-0 bg-jain-navy/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-jain-navy via-transparent to-transparent opacity-90" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white text-[12px] font-bold tracking-[0.2em] uppercase shadow-lg">
                <MapPin size={14} className="text-jain-red" aria-hidden="true" />
                Bengaluru, India
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-jain-red">Excellence.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg sm:text-2xl text-blue-50/90 leading-relaxed font-light max-w-2xl mx-auto">
              Ranked among India's top universities, JAIN (Deemed-to-be University) shapes visionary leaders and pioneering engineers globally.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Detailed College Information ── */}
      <section className="py-24 sm:py-32 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Text Detail */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <div>
                <motion.span variants={fadeUp} className="text-jain-red font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                  About JAIN Global Campus
                </motion.span>
                <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-extrabold text-jain-navy leading-[1.15] tracking-tight">
                  Empowering Minds in a 300+ Acre Eco-Campus
                </motion.h2>
                <motion.div variants={fadeUp} className="w-20 h-1.5 bg-jain-red rounded-full mt-6" />
              </div>

              <motion.div variants={fadeUp} className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  Established with a vision to provide quality education and entrepreneurial development, JAIN Global Campus located in Kanakapura, Bengaluru, is an architectural marvel. Spanning over 300 acres of lush greenery, the campus offers an environment that inspires academic pursuit and holistic growth.
                </p>
                <p>
                  Recognised by the UGC and awarded the prestigious NAAC A++ accreditation, our curriculum is deeply integrated with industry requirements. The Kanakapura campus houses dedicated B.Tech, Aerospace, and Management faculties equipped with cutting-edge laboratories, wind tunnels, and AI computing clusters.
                </p>
              </motion.div>

              <motion.ul variants={fadeUp} className="space-y-4 pt-4 border-t border-gray-100">
                {[
                  '100% Placement Assistance with Fortune 500 tie-ups',
                  'State-of-the-art Sprintoor Indoor Arena (80,000 sq.ft)',
                  'Dedicated Innovation & Incubation Center (JUiNC)',
                  'Global faculty and international exchange programs'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-red-50 p-1 rounded-full text-jain-red">
                      <CheckCircle2 size={16} className="flex-shrink-0" />
                    </div>
                    <span className="text-base font-semibold text-jain-navy">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right Detailed Image with Floating Glassmorphism Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative h-[700px] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/infractucture.jpg"
                alt="Empowering Campus Infrastructure"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                style={{ objectPosition: 'center 40%' }}
              />
              {/* Deep gradient to make floating cards highly readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-jain-navy/95 via-jain-navy/40 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 space-y-4">
                {stats.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 items-center gap-5 shadow-lg"
                  >
                    <div className="w-14 h-14 bg-jain-red rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                      <Icon size={26} className="text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 tracking-wide">{title}</h3>
                      <p className="text-sm text-gray-200 leading-snug">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. Image Gallery / Visuals ── */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-jain-red font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
              Discover Kanakapura
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-jain-navy mb-5 tracking-tight">Capturing Campus Life</h2>
            <div className="w-16 h-1.5 bg-jain-red rounded-full mx-auto" aria-hidden="true" />
          </motion.div>

          {/* Image Grid with elegant hover reveals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: '/300 acers.jpg', alt: 'Campus Aerial View', label: '300-Acre Campus', hasMap: true },
              { src: '/infractucture.jpg', alt: 'Students Studying', label: 'Modern Infrastructure', hasMap: false },
              { src: '/cricketground.jpg', alt: 'Sports Facilities', label: 'The Oval Cricket Ground', hasMap: false },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                onClick={() => img.hasMap && setShowCampusMap(true)}
                className="group relative h-96 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="absolute inset-0 bg-gray-200" />
                <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-jain-navy/90 via-jain-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-2xl tracking-wide leading-tight">{img.label}</p>
                  <p className="text-red-300 text-sm font-bold tracking-[0.15em] uppercase mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    {img.hasMap ? 'View 360° Map' : 'Explore'} <ChevronRight size={16} />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Campus Map Modal ── */}
      {showCampusMap && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowCampusMap(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-jain-red" />
                <div>
                  <h3 className="font-bold text-jain-navy text-xl">300-Acre Campus</h3>
                  <p className="text-gray-600 text-sm">JAIN Global Campus, Kanakapura</p>
                </div>
              </div>
              <button
                onClick={() => setShowCampusMap(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-jain-red"
                aria-label="Close map"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Map Iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1774599882478!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREI5Nm1OZ2dF!2m2!1d12.64221080387853!2d77.44010150490199!3f282.0046882843104!4f-21.84556191040015!5f0.7820865974627469"
              width="1024"
              height="768"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="360° view of JAIN Global Campus"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
