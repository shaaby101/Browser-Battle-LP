import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Program {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
  href: string;
}

const programs: Program[] = [
  {
    icon: '⚙️',
    title: 'Engineering & Technology',
    description: 'B.Tech & M.Tech in CS, AI/ML, Mechanical, Civil, Electronics and more — with world-class labs.',
    highlights: ['🔬 State-of-the-art labs', '💼 100% Placement support', '🤝 Industry tie-ups'],
    href: '#',
  },
  {
    icon: '📊',
    title: 'Commerce & Management',
    description: 'BBA, MBA, B.Com in Finance, Marketing, HR, International Business, and Entrepreneurship.',
    highlights: ['📈 Bloomberg Terminal', '🌍 Global exchange programs', '🚀 Incubation center'],
    href: '#',
  },
  {
    icon: '🔭',
    title: 'Sciences',
    description: 'B.Sc & M.Sc in Physics, Chemistry, Math, Biotechnology, and Environmental Science.',
    highlights: ['🧬 Advanced research labs', '📡 Interdisciplinary projects', '🏅 Scholarships'],
    href: '#',
  },
  {
    icon: '🎨',
    title: 'Design & Fine Arts',
    description: 'B.Des & M.Des in Visual Communication, Fashion, Interior, Product, and Digital Media.',
    highlights: ['🖥️ Digital design studios', '🎭 Annual design exhibition', '🤝 Industry mentors'],
    href: '#',
  },
  {
    icon: '⚖️',
    title: 'Law',
    description: 'BBA-LLB, B.Com-LLB, LLM — Corporate, Criminal, IP, and Cyber Law specialisations.',
    highlights: ['🏛️ Moot court facility', '📋 Legal aid clinics', '⚖️ Top law firm tie-ups'],
    href: '#',
  },
  {
    icon: '🌏',
    title: 'Liberal Arts & Humanities',
    description: 'BA & MA in Psychology, Economics, Sociology, Media Studies, and Political Science.',
    highlights: ['📝 Critical thinking', '🤝 Social impact projects', '🌍 Global perspectives'],
    href: '#',
  },
];

export default function ProgramsGrid() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      id="academics"
      aria-label="Programs Offered"
    >
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/300 acers.jpg"
          alt="Campus Background for Academic Excellence"
          fill
          className="object-cover"
        />
        {/* Lighter frosted blur overlay so the white cards pop beautifully while showing the campus */}
        <div className="absolute inset-0 bg-jain-slate/90 backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-jain-red font-bold tracking-[0.15em] uppercase text-xs shadow-sm mb-3 block">
            Academic Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-jain-navy mb-2">
            B.Tech Programs at Kanakapura
          </h2>
          <div className="w-14 h-1 bg-jain-red rounded-full mb-5" aria-hidden="true" />
          <p className="text-gray-600 text-base sm:text-lg max-w-xl">
            Industry-aligned engineering programs with dedicated research labs, global faculty, and 100% placement support.
          </p>
        </div>

        {/* Programs Grid: 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Link
              href={program.href}
              key={index}
              className="group relative bg-white border-2 border-gray-100 rounded-2xl p-6 flex flex-col gap-3
                         transition-all duration-300 shadow-sm
                         hover:-translate-y-2 hover:shadow-card-lg hover:border-jain-red/30
                         focus-visible:outline-2 focus-visible:outline-jain-red focus-visible:outline-offset-2"
              tabIndex={0}
              aria-label={`Learn more about ${program.title}`}
            >
              {/* Animated top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-jain-red to-red-400 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                aria-hidden="true"
              />

              <span className="text-4xl" aria-hidden="true">{program.icon}</span>

              <h3 className="text-lg font-bold text-jain-navy group-hover:text-jain-red transition-colors duration-200">
                {program.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {program.description}
              </p>

              <ul className="space-y-1">
                {program.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-gray-400">{h}</li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-1 text-sm font-bold text-jain-red group-hover:gap-2.5 transition-all duration-200 mt-1">
                Know More <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
