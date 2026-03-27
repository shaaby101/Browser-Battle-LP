'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Globe, GraduationCap, Building2, BookOpen, Hotel, Users, ArrowRight } from 'lucide-react';

const CAMPUSES = [
  {
    id: 'kanakapura',
    name: 'JAIN Global Campus, Kanakapura Road',
    image: '/jain university.jpg',
    location: 'Bengaluru, Karnataka',
    type: 'Main Integrated Campus',
    highlights: ['300+ Acre Eco-Friendly Campus', 'Next-Gen Engineering & Aerospace Labs', 'World-Class Sports Stadiums'],
    stats: { students: '10,000+', faculty: '400+', programs: '80+' }
  },
  {
    id: 'kochi',
    name: 'JAIN Kochi Campus',
    image: '/jain universitykochi.jpg',
    location: 'Knowledge Park, Kochi, Kerala',
    type: 'International Study Centre',
    highlights: ['Multi-disciplinary Academic Hub', 'Global Study Pathway Programs', 'Strategic Maritime & Tech Location'],
    stats: { students: '3,500+', faculty: '150+', programs: '40+' }
  },
  {
    id: 'cms',
    name: 'Center for Management Studies (CMS)',
    image: '/Jain-University-Bangalore.jpg',
    location: 'Lalbagh Road, Bengaluru',
    type: 'Business & Media Excellence',
    highlights: ['Premier Business School', 'Corporate Integrated Learning', 'Global Media & Communication Labs'],
    stats: { students: '2,500+', faculty: '100+', programs: '20+' }
  },
  {
    id: 'set',
    name: 'School of Engineering & Technology (SET)',
    image: '/Jain_University_4.jpg',
    location: 'Jakkasandra, Bengaluru',
    type: 'Technical Specialisation Hub',
    highlights: ['Advanced IT & AI Computing Clusters', 'Industry-led Research Centers', 'Incubation & Startup Accelerator'],
    stats: { students: '4,000+', faculty: '180+', programs: '35+' }
  },
  {
    id: 'jirs',
    name: 'Jain International Residential School (JIRS)',
    image: '/jain heritage school.jpg',
    location: 'Kanakapura Road, Campus',
    type: 'World-Class Schooling',
    highlights: ['Top-ranked Residential School in India', 'Diverse Student Community from 25+ Nations', 'Holistic Academic & Athletic Training'],
    stats: { students: '800+', faculty: '120+', countries: '25+' }
  },
  {
    id: 'city',
    name: 'JAIN City Campus',
    image: '/jain universitybanglore.jpg',
    location: 'Jayanagar, Bengaluru',
    type: 'Urban Academic Center',
    highlights: ['City Center Accessibility', 'Focus on Commerce & Humanities', 'Vibrant Student Community Hub'],
    stats: { students: '1,500+', faculty: '80+', programs: '15+' }
  }
];

export default function InternationalCampusesPage() {
  const flagship = CAMPUSES[0];
  const hubs = CAMPUSES.slice(1);

  return (
    <main className="min-h-screen bg-white">
      {/* ── 1. GLOBAL HERO SECTION ── */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-jain-navy">
        <div className="absolute inset-0 z-0">
          <Image
            src="/academicexcellence.jpg"
            alt="Global Education"
            fill
            className="object-cover opacity-30 scale-105 animate-pulse-slow blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-jain-navy/80 via-transparent to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 bg-jain-red text-white text-[10px] font-black tracking-[0.4em] uppercase mb-8 shadow-2xl rounded-full border border-white/10 backdrop-blur-sm">
              <Globe size={14} className="animate-spin-slow" /> Global Network
            </span>
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-extrabold text-jain-navy mb-8 tracking-tighter leading-none">
              World Class <br /> 
              <span className="text-jain-red">Infrastructure</span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
              A sprawling network of excellence across India, designed to foster global leaders and innovative pioneers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. FLAGSHIP SECTION ── */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-auto overflow-hidden">
                <Image src={flagship.image} alt={flagship.name} fill className="object-cover transition-transform duration-1000 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
              </div>
              <div className="p-10 lg:p-20 flex flex-col justify-center">
                <span className="text-jain-red font-black tracking-[0.3em] uppercase text-[10px] mb-6 block bg-red-50 w-fit px-4 py-1.5 rounded-full">Flagship Campus</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-jain-navy mb-8 tracking-tight leading-tight">
                  {flagship.name}
                </h2>
                <div className="flex items-center gap-3 text-slate-400 font-bold mb-10 italic text-sm">
                  <MapPin size={20} className="text-jain-red" /> {flagship.location}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  {flagship.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-4 group/item">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-jain-red flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm font-bold text-slate-600 leading-snug group-hover/item:text-jain-navy transition-colors">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-10 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                  {Object.entries(flagship.stats).map(([key, val]) => (
                    <div key={key}>
                      <div className="text-2xl font-extrabold text-jain-navy">{val}</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. SPECIALIZED HUBS ── */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-20">
            <div className="max-w-2xl">
              <span className="text-jain-red font-black tracking-[0.3em] uppercase text-xs mb-4 block underline underline-offset-8">Urban Specialisations</span>
              <h2 className="text-4xl sm:text-5xl font-black text-[#12366b] tracking-tight">Academic <span className="text-gray-300 italic">Ecosystem</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {hubs.map((campus, idx) => (
              <motion.div
                key={campus.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={campus.image} alt={campus.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12366b]/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white font-black text-xs tracking-widest bg-jain-red px-4 py-1.5 rounded-full uppercase">
                    {campus.type}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold text-jain-navy mb-4 group-hover:text-jain-red transition-colors h-16 flex items-center tracking-tight leading-7">
                    {campus.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 mb-8 uppercase tracking-wider">
                    <MapPin size={14} className="text-jain-red" /> {campus.location}
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-xl font-extrabold text-jain-navy">{Object.values(campus.stats)[0]}</span>
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Enrollment</span>
                    </div>
                    <button className="p-4 bg-slate-50 rounded-2xl group-hover:bg-jain-navy group-hover:text-white transition-all duration-500 shadow-sm">
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PREMIUM FOOTER CTA ── */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-jain-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jain-red/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/10 backdrop-blur-md">
            <Hotel size={40} className="text-jain-red" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-10 tracking-tight leading-tight">
            Shape Your <span className="text-jain-red italic">Global Journey</span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl font-medium mb-14 leading-relaxed max-w-2xl mx-auto">
            Our multi-campus presence ensures you have access to the best resources, faculty, and industry networks no matter your field of study.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-12 py-5 bg-jain-red hover:bg-[#8e141c] rounded-2xl font-black tracking-[0.2em] uppercase text-xs transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-red-500/20">
              Campus Tour 
            </button>
            <button className="px-12 py-5 bg-white/5 border-2 border-white/10 hover:bg-white hover:text-jain-navy rounded-2xl font-black tracking-[0.2em] uppercase text-xs transition-all backdrop-blur-md active:scale-95">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
