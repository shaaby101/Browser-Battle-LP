'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  MapPin, 
  Award, 
  Briefcase, 
  ChevronRight, 
  ArrowRight,
  Globe,
  Heart
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 }
  })
};

const EVENTS = [
  {
    year: '2026',
    title: '1st Alumni Connect 2026',
    date: 'February 7, 2026',
    location: 'Seminar Hall, JU-FET, Bangalore',
    description: 'The Series Launch of "Alumni Connect 2026" focused on bridging the gap between industry leaders and the future generation of engineers. A landmark event celebrating professional achievements and global networking.',
    image: '/alimini2026.jpg',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    year: '2025',
    title: 'Alumni Highlights: Inceptrix & Lumina',
    date: 'November 2025',
    location: 'Global Campus, Kanakapura',
    description: 'A year of cultural resurgence and mentorship. Alumni from batches 2010 to 2025 returned to campus for innovation sprints and cultural showcases, strengthening the bond with their alma mater.',
    image: '/alimini2025.jpg',
    color: 'from-amber-500 to-orange-600'
  },
  {
    year: '2024',
    title: 'Grand Alumni Meet 2024',
    date: 'June 1, 2024',
    location: 'JAIN Global Campus, Bangalore',
    description: 'A nostalgic journey back to campus. Over 1000+ alumni gathered for networking sessions, campus tours, and a gala social evening, fostering camaraderie and a lasting university spirit.',
    image: '/alumini2024.jpg',
    color: 'from-jain-red to-red-800'
  }
];

export default function AlumniPage() {
  return (
    <div className="pt-[78px] min-h-screen bg-white">
      
      {/* ── HERO SECTION ── */}
      <section className="relative h-[50vh] flex flex-col justify-center overflow-hidden bg-jain-navy">
        <div className="absolute inset-0 z-0">
          <Image
            src="/alumini2024.jpg"
            alt="JAIN Alumni Network"
            fill
            priority
            className="object-cover opacity-40 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jain-navy via-jain-navy/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-6">
              <Users size={14} className="text-red-400" />
              Global Alumni Network
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Excellence <span className="text-red-400">Reconnected.</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
              Celebrating the journey of our global ambassadors. From classroom memories to industry leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ALUMNI PORTAL CTA ── */}
      <section className="relative z-20 -mt-12 max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-jain-navy mb-2">Join the Alumni Connect Portal</h2>
            <p className="text-gray-500 text-sm font-medium">Register today to access job boards, mentorship programs, and exclusive event invitations.</p>
          </div>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-jain-red hover:bg-red-700 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-200">
            Register Now <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>

      {/* ── YEAR-WISE EVENTS ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-jain-red font-bold text-sm tracking-widest uppercase block mb-3">Our Legacy in Action</span>
          <h2 className="text-3xl sm:text-4xl font-black text-jain-navy mb-4">Milestone Alumni Reconnects</h2>
          <div className="w-16 h-1 bg-jain-red mx-auto rounded-full" />
        </div>

        <div className="space-y-32">
          {EVENTS.map((event, i) => (
            <motion.div 
              key={event.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute -inset-4 bg-gradient-to-br ${event.color} opacity-10 rounded-[2.5rem] group-hover:opacity-20 transition-opacity`} />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 px-6 py-2 bg-white rounded-2xl shadow-xl">
                    <span className="text-2xl font-black text-jain-navy">{event.year}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4 text-jain-red font-bold text-xs tracking-widest uppercase">
                  <Calendar size={16} />
                  {event.date}
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-jain-navy leading-tight">{event.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
                  <MapPin size={16} className="text-red-400" />
                  {event.location}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed pt-2">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ALUMNI IMPACT ── */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Globe size={32} />
              </div>
              <h4 className="text-4xl font-black text-jain-navy mb-2">50,000+</h4>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">Global Alumni Network</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-jain-red mb-6">
                <Briefcase size={32} />
              </div>
              <h4 className="text-4xl font-black text-jain-navy mb-2">93%+</h4>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">Placement Record</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Award size={32} />
              </div>
              <h4 className="text-4xl font-black text-jain-navy mb-2">150+</h4>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">Industry Collaborations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="bg-jain-red py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Heart size={48} className="text-white opacity-20 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Stay Connected, Stay Inspired</h2>
          <p className="text-red-100 text-lg mb-10 max-w-xl mx-auto font-medium">
            Join the Alumni Relations office in shaping the future of JAIN University. Your success is our legacy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="px-10 py-4 bg-white text-jain-red font-bold rounded-2xl shadow-2xl hover:scale-105 transition-transform">
              Contact Alumni Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
