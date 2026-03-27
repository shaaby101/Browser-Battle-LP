'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Award, Users, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';

/* ── Professional Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Custom professional cubic-bezier
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
  { icon: Award,    title: 'NAAC A++ Accreditation', desc: 'Highest grade awarded for academic and infrastructure excellence in India.' },
  { icon: Users,    title: '21,000+ Students',       desc: 'A vibrant global community of scholars from 45+ countries.' },
  { icon: BookOpen, title: '140+ Programs',          desc: 'Comprehensive UG, PG, and doctoral programs driving research and innovation.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      
      {/* ── 1. About Us Hero Section ── */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center pt-[72px] overflow-hidden" aria-label="About Hero">
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
          {/* Elegant dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-jain-navy via-jain-navy/60 to-black/30" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[11px] font-bold tracking-[0.2em] uppercase">
                <MapPin size={12} className="text-jain-red" aria-hidden="true" />
                Bengaluru, India
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              A Legacy of <span className="text-jain-red">Excellence.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-medium">
              Ranked among India's top universities, JAIN (Deemed-to-be University) shapes visionary leaders and pioneering engineers globally.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Detailed College Information ── */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Detail */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: '-100px' }} 
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.span variants={fadeUp} className="text-jain-red font-bold tracking-[0.15em] uppercase text-xs">
              About JAIN Global Campus
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-jain-navy leading-[1.15]">
              Empowering Minds in a 300+ Acre Eco-Campus
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-1 bg-jain-red rounded-full" />
            
            <motion.div variants={fadeUp} className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
              <p>
                Established with a vision to provide quality education and entrepreneurial development, JAIN Global Campus located in Kanakapura, Bengaluru, is an architectural marvel. Spanning over 300 acres of lush greenery, the campus offers an environment that inspires academic pursuit and holistic growth.
              </p>
              <p>
                Recognised by the UGC and awarded the prestigious NAAC A++ accreditation, our curriculum is deeply integrated with industry requirements. The Kanakapura campus houses dedicated B.Tech, Aerospace, and Management faculties equipped with cutting-edge laboratories, wind tunnels, and AI computing clusters.
              </p>
            </motion.div>

            <motion.ul variants={fadeUp} className="space-y-3 pt-2">
              {[
                '100% Placement Assistance with Fortune 500 tie-ups',
                'State-of-the-art Sprintoor Indoor Arena (80,000 sq.ft)',
                'Dedicated Innovation & Incubation Center (JUiNC)',
                'Global faculty and international exchange programs'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-jain-red mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-semibold text-jain-navy">{item}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-jain-slate rounded-[2rem] p-8 sm:p-10 shadow-card-lg relative"
          >
            <div className="absolute top-0 right-10 w-24 h-24 bg-jain-red/5 rounded-full blur-2xl" />
            <div className="relative z-10 space-y-8">
              {stats.map(({ icon: Icon, title, desc }, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex gap-5 group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100 group-hover:border-jain-red/30 group-hover:bg-red-50 transition-colors">
                    <Icon size={24} className="text-jain-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-jain-navy mb-1.5">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Image Gallery / Visuals ── */}
      <section className="bg-jain-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-white mb-4">Capturing Campus Life</h2>
            <div className="w-12 h-1 bg-jain-red rounded-full mx-auto" aria-hidden="true" />
          </motion.div>

          {/* Image Grid with elegant hover reveals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/about-1.jpg', alt: 'Campus Aerial View', label: '300-Acre Campus' },
              { src: '/about-2.jpg', alt: 'Students Studying', label: 'Modern Infrastructure' },
              { src: '/about-3.jpg', alt: 'Sports Facilities', label: 'The Oval Cricket Ground' },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Fallback color if images are not uploaded yet */}
                <div className="absolute inset-0 bg-jain-slate/10" />
                <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-jain-navy via-jain-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-bold text-lg">{img.label}</p>
                  <p className="text-red-300 text-xs font-semibold tracking-widest uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Explore <ChevronRight size={12} />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
