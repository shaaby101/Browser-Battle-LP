import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    description:
      'B.Tech & M.Tech in CS, AI/ML, Mechanical, Civil, Electronics and more — with world-class labs.',
    highlights: ['🔬 State-of-the-art labs', '💼 100% Placement support', '🤝 Industry tie-ups'],
    href: '#',
  },
  {
    icon: '📊',
    title: 'Commerce & Management',
    description:
      'BBA, MBA, B.Com in Finance, Marketing, HR, International Business, and Entrepreneurship.',
    highlights: ['📈 Bloomberg Terminal', '🌍 Global exchange programs', '🚀 Incubation center'],
    href: '#',
  },
  {
    icon: '🔭',
    title: 'Sciences',
    description:
      'B.Sc & M.Sc in Physics, Chemistry, Math, Biotechnology, and Environmental Science.',
    highlights: ['🧬 Advanced research labs', '📡 Interdisciplinary projects', '🏅 Scholarships'],
    href: '#',
  },
  {
    icon: '🎨',
    title: 'Design & Fine Arts',
    description:
      'B.Des & M.Des in Visual Communication, Fashion, Interior, Product, and Digital Media.',
    highlights: ['🖥️ Digital design studios', '🎭 Annual design exhibition', '🤝 Industry mentors'],
    href: '#',
  },
  {
    icon: '⚖️',
    title: 'Law',
    description:
      'BBA-LLB, B.Com-LLB, LLM — Corporate, Criminal, IP, and Cyber Law specialisations.',
    highlights: ['🏛️ Moot court facility', '📋 Legal aid clinics', '⚖️ Top law firm tie-ups'],
    href: '#',
  },
  {
    icon: '🌏',
    title: 'Liberal Arts & Humanities',
    description:
      'BA & MA in Psychology, Economics, Sociology, Media Studies, and Political Science.',
    highlights: ['📝 Critical thinking', '🤝 Social impact projects', '🌍 Global perspectives'],
    href: '#',
  },
];

export default function ProgramsGrid() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      id="programs"
      aria-label="Programs Offered"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            Programs Offered
          </h2>
          <div className="w-14 h-1 bg-theme-red rounded-full mb-4" aria-hidden="true" />
          <p className="text-gray-500 text-base sm:text-lg max-w-xl">
            Discover your academic path across diverse world-class disciplines.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Link
              href={program.href}
              key={index}
              className="group relative bg-white border-2 border-gray-100 rounded-2xl p-6 flex flex-col gap-3
                         hover:-translate-y-1 hover:shadow-xl hover:shadow-red-100/60 hover:border-theme-red
                         transition-all duration-300 focus-visible:outline-2 focus-visible:outline-theme-red focus-visible:outline-offset-2"
              tabIndex={0}
              aria-label={`Learn more about ${program.title}`}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-theme-red rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                aria-hidden="true"
              />

              <span className="text-4xl" aria-hidden="true">{program.icon}</span>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-theme-red transition-colors">
                {program.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {program.description}
              </p>

              <ul className="space-y-1">
                {program.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-gray-500">{h}</li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-1 text-sm font-bold text-theme-red group-hover:gap-2 transition-all duration-200 mt-1">
                Know More <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
