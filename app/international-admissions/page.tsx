"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe2,
  Users,
  Award,
  GraduationCap,
  Plane,
  FileCheck2,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const GLOBAL_STATS = [
  { label: "Students", value: "8,000+", description: "Learners across disciplines" },
  { label: "Countries", value: "30+", description: "Nationalities on campus" },
  { label: "NIRF Ranking", value: "Top 100", description: "Consistently ranked in India" },
  { label: "Accreditation", value: "NAAC A++", description: "Highest grade for quality" },
];

const PROGRAMS = [
  {
    title: "B.Tech (Computer Science & Engineering)",
    tag: "UG | 4 Years",
    highlight: "AI, Data Science, Cyber Security, and Cloud Computing tracks with strong global industry connect.",
  },
  {
    title: "B.Tech (Aerospace & Aeronautical Engineering)",
    tag: "UG | 4 Years",
    highlight: "Future-ready programs aligned to global aerospace and aviation careers.",
  },
  {
    title: "B.Com (Hons) with ACCA / CMA Integration",
    tag: "UG | 3 Years",
    highlight: "International professional certification pathways embedded into the curriculum.",
  },
  {
    title: "BBA (Global Management)",
    tag: "UG | 3 Years",
    highlight: "Practice-oriented learning with global case studies and international exposure.",
  },
  {
    title: "MBA (Global Business & Finance)",
    tag: "PG | 2 Years",
    highlight: "Industry-driven specialisations with strong placement outcomes in India and abroad.",
  },
  {
    title: "Custom Pathway & Twinning Options",
    tag: "UG / PG",
    highlight: "Talk to our International Relations team for pathway and progression programmes.",
  },
];

const CAMPUS_IMAGES = [
  { src: "/jain university.jpg", caption: "Main University Facade" },
  { src: "/academicexcellence.jpg", caption: "Academic Excellence Block" },
  { src: "/capus.jpg", caption: "Academic Blocks & Green Spine" },
  { src: "/infractucture.jpg", caption: "World-class Infrastructure" },
  { src: "/cricketground.jpg", caption: "International Standard Sports Facilities" },
  { src: "/campus life.jpg", caption: "Vibrant Campus Life" },
  { src: "/empowering.jpg", caption: "Empowering Learning Spaces" },
  { src: "/300 acers.jpg", caption: "300-acre Lush Campus" },
  { src: "/jain-university-bangalore-3.webp", caption: "Aerial View of Campus" },
  { src: "/jain-university-bangalore-4.webp", caption: "Residential & Academic Zones" },
  { src: "/Jain-University-Bangalore.jpg", caption: "Front View of Kanakapura Campus" },
  { src: "/jain-university-banglore2.jpg", caption: "Campus Boulevard" },
  { src: "/engineering and technology.jpeg", caption: "School of Engineering & Technology" },
  { src: "/school of applied computing.jpeg", caption: "School of Applied Computing" },
  { src: "/school of law.jpeg", caption: "School of Law" },
  { src: "/school of allied health care and sciences.jpeg", caption: "School of Allied Health Sciences" },
  { src: "/School of Design , Media, and creative Arts.jpeg", caption: "School of Design, Media & Creative Arts" },
];

export default function InternationalAdmissionsPage() {
  return (
    <main className="pt-[72px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-jain-navy">
        <div className="absolute inset-0 bg-[url('/jain-university-bangalore-4.webp')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-jain-navy/80 to-jain-navy/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-red-300 mb-4">
              <Globe2 size={14} /> International Admissions 2025-26
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Study at JAIN (Deemed-to-be University),
              <span className="block text-red-300">Kanakapura Road Campus</span>
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Join a globally diverse community in Bengaluru, India&apos;s innovation capital. Experience
              world-class academics, industry exposure, and a safe, supportive environment tailored for
              international and NRI students.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-jain-red hover:bg-red-700 text-white font-semibold text-sm shadow-lg shadow-red-900/40 transition-all hover:scale-[1.02]"
              >
                Apply Now
                <FileCheck2 size={18} />
              </Link>
              <a
                href="#global-stats"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all"
              >
                Why Choose JAIN?
                <ArrowRightIcon />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-blue-100">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-green-300" />
                <span>NAAC A++ Accredited University</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-yellow-300" />
                <span>Kanakapura Road, Bengaluru, India</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-md lg:max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white"
          >
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Plane size={18} /> Dedicated International Relations Desk
            </h2>
            <p className="text-sm text-blue-100 mb-4">
              Our International Relations team assists you from offer letter to arrival on campus –
              including documentation, visa guidance, FRRO registration and settling-in support.
            </p>
            <ul className="space-y-2 text-sm text-blue-50">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-300" />
                Personalized counselling and program mapping
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-300" />
                Assistance with admission & fee payment timelines
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-300" />
                Pre-departure briefing and arrival coordination
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Global Stats */}
      <section id="global-stats" className="bg-white border-b border-gray-100 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {GLOBAL_STATS.map(({ label, value, description }) => (
              <div
                key={label}
                className="bg-gray-50 rounded-2xl p-4 sm:p-5 border border-gray-100 text-center shadow-sm"
              >
                <div className="text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase mb-1">
                  {label}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-jain-navy mb-1">{value}</div>
                <div className="text-[11px] sm:text-xs text-gray-600">{description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs for International Students */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Programs Popular with International Students
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                Choose from industry-aligned undergraduate and postgraduate programmes that are curated to
                meet global academic and employability standards.
              </p>
            </div>
            <div className="text-xs text-gray-500">
              Eligibility, detailed curriculum and fee structure are available on the
              <Link href="/admissions" className="font-semibold text-jain-navy hover:text-jain-red ml-1">
                Admissions page
              </Link>
              .
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {program.title}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-jain-navy/5 text-[11px] font-semibold text-jain-navy px-2 py-1">
                    {program.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {program.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Application Process */}
      <section className="py-14 sm:py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Eligibility for International Students</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-5">
              International, NRI, PIO and OCI candidates are eligible to apply under the International
              Admissions category. All applications are evaluated holistically based on academic
              performance and overall profile.
            </p>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 space-y-3 text-sm text-gray-700">
              <div className="flex gap-3">
                <GraduationCap size={18} className="text-jain-navy mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Academic Requirements</p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>For UG programmes: Successful completion of Grade 12 / A-Levels / equivalent.</li>
                    <li>For PG programmes: Recognised Bachelor&apos;s degree in a relevant discipline.</li>
                    <li>
                      Equivalence from Association of Indian Universities (AIU) may be required for certain
                      boards/universities.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3">
                <Users size={18} className="text-jain-navy mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">JET Exemption & English Proficiency</p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>
                      Eligible international applicants may be exempted from JAIN Entrance Test (JET) based
                      on qualifying examination scores.
                    </li>
                    <li>
                      Proof of English proficiency (IELTS / TOEFL / PTE or medium of instruction certificate)
                      may be requested during evaluation.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3">
                <ShieldCheck size={18} className="text-jain-navy mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Visa & Compliance</p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>Valid student visa for the entire duration of the programme.</li>
                    <li>
                      Mandatory registration with FRRO / FRRO portal in coordination with the International
                      Relations Department after arrival.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-jain-navy rounded-3xl text-white p-6 sm:p-7 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <FileCheck2 size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Application Journey</h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200">Step-by-step overview</p>
              </div>
            </div>
            <ol className="space-y-3 text-xs sm:text-sm">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold">
                  1
                </span>
                <div>
                  <p className="font-semibold">Submit Online Application</p>
                  <p className="text-blue-100">
                    Apply through the JAIN University admissions portal under the International Admissions
                    category and upload academic transcripts.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold">
                  2
                </span>
                <div>
                  <p className="font-semibold">Profile Evaluation & Offer</p>
                  <p className="text-blue-100">
                    The admissions committee reviews your application and shares a provisional admission
                    offer upon meeting eligibility.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold">
                  3
                </span>
                <div>
                  <p className="font-semibold">Fee Payment & Confirmation</p>
                  <p className="text-blue-100">
                    Confirm your seat by remitting the prescribed fee as per the offer letter and receive
                    the official admission confirmation.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold">
                  4
                </span>
                <div>
                  <p className="font-semibold">Visa & Arrival Support</p>
                  <p className="text-blue-100">
                    Receive guidance on visa documentation, arrival planning and mandatory FRRO registration
                    after reaching Bengaluru.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Kanakapura Campus Gallery</h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                Get a glimpse of our 300-acre, fully Wi-Fi enabled green campus with modern academic
                blocks, laboratories, residences and sports facilities.
              </p>
            </div>
            <div className="text-xs text-gray-500 max-w-sm">
              All images featured below are from the JAIN University campus and schools, curated to give
              you an authentic view of student life and infrastructure.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {CAMPUS_IMAGES.map((image) => (
              <figure
                key={image.src}
                className="relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 shadow-sm group"
              >
                <div className="relative w-full h-52 sm:h-56">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <figcaption className="px-3.5 py-3 text-[11px] sm:text-xs text-gray-700 bg-white/90">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-14 sm:py-16 bg-jain-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">International Student Support & Services</h2>
              <p className="text-sm sm:text-base text-blue-100 mb-5 max-w-2xl">
                The International Relations Department at JAIN University is your first point of contact
                from the time you enquire till graduation. Our role is to make your transition to India and
                to Bengaluru as smooth and enriching as possible.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
                  <p className="font-semibold mb-1 flex items-center gap-2">
                    <ShieldCheck size={16} />
                    Visa & FRRO Facilitation
                  </p>
                  <p className="text-blue-100">
                    Guidance on student visa documentation, bonafide letters, visa extensions and
                    coordination for mandatory FRRO/FRRO portal registration.
                  </p>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
                  <p className="font-semibold mb-1 flex items-center gap-2">
                    <Users size={16} />
                    Orientation & Pastoral Care
                  </p>
                  <p className="text-blue-100">
                    Dedicated induction programmes, cultural sensitisation, mentoring and 24x7 campus
                    security for a safe living-learning environment.
                  </p>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
                  <p className="font-semibold mb-1 flex items-center gap-2">
                    <MapPin size={16} />
                    Accommodation & City Familiarisation
                  </p>
                  <p className="text-blue-100">
                    Assistance in securing on-campus or recommended off-campus housing, airport pickup
                    (on request) and basic city orientation.
                  </p>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
                  <p className="font-semibold mb-1 flex items-center gap-2">
                    <GraduationCap size={16} />
                    Academic & Career Guidance
                  </p>
                  <p className="text-blue-100">
                    Continuous academic advising, language support where required and linkage to Career
                    Services for internships and placements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white text-jain-navy rounded-3xl p-6 sm:p-7 shadow-2xl">
              <h3 className="text-lg font-semibold mb-2">Contact International Relations</h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-4">
                For detailed guidance on eligibility, programme mapping, fee structure and visa support,
                please reach out to the International Relations team.
              </p>
              <dl className="space-y-2 text-xs sm:text-sm text-gray-800 mb-4">
                <div className="flex gap-2">
                  <dt className="font-semibold min-w-[70px]">Email</dt>
                  <dd>
                    <a
                      href="mailto:international.admissions@jainuniversity.ac.in"
                      className="text-jain-navy hover:text-jain-red font-semibold"
                    >
                      international.admissions@jainuniversity.ac.in
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold min-w-[70px]">Phone</dt>
                  <dd>+91-80-1234 5678 (Mon–Fri, 9:30 AM–5:30 PM IST)</dd>
                </div>
              </dl>
              <p className="text-[11px] text-gray-500">
                Note: The above contact details are indicative for information design. Please refer to the
                official JAIN University website for the most current email IDs, phone numbers and policy
                updates before applying.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.497-1.32l.083-.094L13.585 11H4a1 1 0 01-.117-1.993L4 9h9.585l-3.292-3.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}
