"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Award, CalendarDays, MapPin, ArrowUpRight, Network, Quote } from "lucide-react";

const EVENTS = [
  {
    year: "2024",
    title: "Bangalore Alumni Meet 2024",
    date: "1 June 2024",
    location: "Bengaluru, India",
    image: "/alumini2024.jpg",
    highlight:
      "A landmark city meet bringing together alumni from engineering, management, commerce and sciences for an evening of networking and nostalgia.",
    details: [
      "Over 350 alumni from across India and overseas in attendance.",
      "Panel conversations with industry leaders and notable JAIN alumni.",
      "Launch of city-wise alumni chapters and mentoring initiatives.",
    ],
  },
  {
    year: "2025",
    title: "Campus Homecoming & Batch Reconnects 2025",
    date: "Summer 2025 Season",
    location: "Kanakapura Road Campus, Bengaluru",
    image: "/alimini2025.jpg",
    highlight:
      "A full-day campus experience for alumni with curated department-wise reconnects, lab visits and interactions with faculty.",
    details: [
      "Guided campus walks featuring the latest infrastructure and research spaces.",
      "Batch-wise networking lounges and mentoring corners for current students.",
      "Showcase of alumni-founded startups and industry collaborations.",
    ],
  },
  {
    year: "2026",
    title: "1st Alumni Connect 2026 – Global Leadership Conclave",
    date: "Planned for 2026",
    location: "Hybrid – Bengaluru & Virtual",
    image: "/alimini2026.jpg",
    highlight:
      "The inaugural edition of an annual alumni leadership series connecting global JAIN graduates with campus and each other.",
    details: [
      "Keynotes by distinguished alumni from technology, finance, design and public policy.",
      "Thematic roundtables on emerging careers, global mobility and entrepreneurship.",
      "Launch of structured alumni mentoring grids for current students.",
    ],
  },
];

export default function AlumniPage() {
  return (
    <main className="pt-[72px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-jain-navy">
        <div className="absolute inset-0 bg-[url('/alimini2025.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-jain-navy/90 to-jain-navy/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-red-300 mb-3">
              <Users size={14} /> JAIN Global Alumni Network
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Once a JAINite,
              <span className="block text-red-300">Always a JAINite.</span>
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              With thousands of graduates spread across continents, the JAIN alumni community is a strong
              and vibrant network that mentors, collaborates and celebrates together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#events"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-jain-red hover:bg-red-700 text-white font-semibold text-sm shadow-lg shadow-red-900/40 transition-all hover:scale-[1.02]"
              >
                View Recent Alumni Events
                <ArrowUpRight size={18} />
              </Link>
              <a
                href="https://alumni.jainuniversity.ac.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all"
              >
                Alumni Connect Portal
                <Network size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white"
          >
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Award size={18} /> Why stay connected?
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-50">
              <li>Access curated networking events across cities and campuses.</li>
              <li>Engage as mentors, speakers and industry partners for current students.</li>
              <li>Stay informed about executive education, upskilling and research collaborations.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Year-wise Alumni Events */}
      <section id="events" className="py-14 sm:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Alumni Events Snapshot</h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                Recent and upcoming alumni engagements that keep JAIN graduates connected with each other
                and with campus.
              </p>
            </div>
            <p className="text-xs text-gray-500 max-w-sm">
              Images and event information are based on the latest alumni engagement initiatives and are
              presented in a concise, informative format for prospective and existing alumni.
            </p>
          </div>

          <div className="space-y-8">
            {EVENTS.map((event, index) => (
              <motion.article
                key={event.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-6 lg:gap-10 items-stretch bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden shadow-sm"
              >
                <div className="relative min-h-[220px] sm:min-h-[260px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-black/60 text-white text-xs font-semibold px-3 py-1 flex items-center gap-2">
                    <CalendarDays size={14} />
                    <span>{event.year}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 mb-3">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays size={14} /> {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} /> {event.location}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{event.highlight}</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1">
                      {event.details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Benefits & Stories */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Stay Connected, Stay Ahead</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-5 max-w-2xl">
              The JAIN alumni ecosystem opens doors to knowledge sharing, career mobility and
              cross-industry collaboration. By staying engaged, you strengthen both your own professional
              journey and that of the next generation of JAIN graduates.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="font-semibold mb-1">Alumni Connect Portal</p>
                <p className="text-gray-600 mb-2">
                  A dedicated digital space to update your profile, discover events and connect with
                  classmates and faculty.
                </p>
                <Link
                  href="https://alumni.jainuniversity.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-jain-navy font-semibold text-xs hover:text-jain-red"
                >
                  Visit Portal <ArrowUpRight size={14} />
                </Link>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="font-semibold mb-1">Networking & Career Mobility</p>
                <p className="text-gray-600">
                  City chapters and professional clusters help you explore new roles, geographies and
                  collaborative projects.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="font-semibold mb-1">Mentoring & Giving Back</p>
                <p className="text-gray-600">
                  Speak in classrooms, mentor students, support internships and co-create industry
                  projects with your alma mater.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="font-semibold mb-1">Lifelong Learning</p>
                <p className="text-gray-600">
                  Stay updated on executive programmes, certifications and specialised courses hosted by
                  various JAIN schools.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-jain-navy/10 flex items-center justify-center">
                <Quote size={18} className="text-jain-navy" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500 font-semibold">
                  Alumni Voices
                </p>
                <p className="text-sm font-semibold text-gray-900">Representative success journeys</p>
              </div>
            </div>
            <div className="space-y-4 text-xs sm:text-sm text-gray-700">
              <p>
                “The alumni network at JAIN has been instrumental in opening global opportunities. From my
                first role in Bengaluru to a leadership position overseas, fellow JAIN graduates have been
                a constant support system.”
              </p>
              <p className="font-semibold text-gray-900">Engineering Alumni – Class of 2014</p>
              <hr className="border-dashed border-gray-200" />
              <p>
                “Coming back as a guest speaker and mentor is deeply fulfilling. It is a chance to give
                back while also staying updated on new-age skills and programmes being introduced at the
                university.”
              </p>
              <p className="font-semibold text-gray-900">Management Alumni – Class of 2012</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
