'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cpu, Briefcase, Calculator, FlaskConical, Palette, BookOpen, Scale, HeartPulse, Monitor, ChevronRight, GraduationCap } from 'lucide-react';

const FACULTIES = [
  {
    id: 'engineering',
    slug: 'engineering',
    icon: Cpu,
    name: 'Engineering & Technology',
    description: 'Technical and innovation-driven education at the JAIN Global Campus.',
    programs: [
      {
        level: 'Undergraduate (B.Tech)',
        courses: [
          'Computer Science (AI, ML, Cybersecurity, Cloud Technology)',
          'Aerospace Engineering',
          'Aeronautical Engineering',
          'Mechanical Engineering (Mechatronics, Robotics)',
          'Civil Engineering',
          'Electronics & Communication Engineering',
          'Electrical & Electronics Engineering'
        ]
      },
      {
        level: 'Postgraduate (M.Tech)',
        courses: [
          'Structural Engineering',
          'Data Sciences',
          'Cybersecurity',
          'Embedded Systems',
          'Aerospace Engineering'
        ]
      },
      {
        level: 'Research',
        courses: ['Ph.D. in various engineering disciplines']
      }
    ]
  },
  {
    id: 'management',
    slug: 'management',
    icon: Briefcase,
    name: 'Management',
    description: 'Management studies through Center for Management Studies (CMS) and CMS Business School.',
    programs: [
      {
        level: 'Undergraduate (BBA/BMS)',
        courses: [
          'BBA in Corporate Management',
          'BBA in Sports Management',
          'BBA in Branding & Entrepreneurship',
          'BMS in Aviation Management',
          'BMS in International Business',
          'BMS in Financial Services'
        ]
      },
      {
        level: 'Postgraduate (MBA)',
        courses: [
          'Finance',
          'Marketing',
          'Human Resource Management',
          'Business Analytics',
          'International Business',
          'Logistics & Supply Chain Management',
          'Dual Specializations available'
        ]
      }
    ]
  },
  {
    id: 'commerce',
    slug: 'commerce',
    icon: Calculator,
    name: 'Commerce',
    description: 'Specializing in accounting, finance, and professional certifications.',
    programs: [
      {
        level: 'Undergraduate (B.Com)',
        courses: [
          'B.Com Regular',
          'B.Com Honors',
          'B.Com Professional (integrated with ACCA, CA, or CMA)',
          'B.Com in Investment Banking',
          'B.Com in Corporate Accounting'
        ]
      },
      {
        level: 'Postgraduate (M.Com)',
        courses: [
          'M.Com with Electives',
          'M.Com in Accounting & Finance',
          'M.Com in Financial Analysis'
        ]
      }
    ]
  },
  {
    id: 'sciences',
    slug: 'sciences',
    icon: FlaskConical,
    name: 'Sciences',
    description: 'Traditional and emerging scientific fields through the School of Sciences.',
    programs: [
      {
        level: 'Undergraduate (B.Sc)',
        courses: [
          'Physics, Mathematics, Computer Science (PMCs)',
          'Forensic Science',
          'Biotechnology',
          'Biochemistry',
          'Genetics',
          'Microbiology'
        ]
      },
      {
        level: 'Postgraduate (M.Sc)',
        courses: [
          'Physics',
          'Chemistry',
          'Biotechnology',
          'Microbiology',
          'Forensic Science',
          'Psychology'
        ]
      }
    ]
  },
  {
    id: 'creative-arts',
    slug: 'creative-arts',
    icon: Palette,
    name: 'Creative Arts & Design',
    description: 'Managed by the School of Design, Media and Creative Arts (SDMCA).',
    programs: [
      {
        level: 'Undergraduate (B.Des/B.A./B.Sc)',
        courses: [
          'B.Des in Communication Design',
          'B.Des in Product Design',
          'B.Des in Interaction Design',
          'B.A. in Fashion Design',
          'B.A. in Film and Media',
          'B.Sc in Animation',
          'B.Sc in Gaming',
          'B.Sc in Digital Filmmaking'
        ]
      },
      {
        level: 'Postgraduate (M.Des/M.A./M.Sc)',
        courses: [
          'M.Des in User Experience (UX)',
          'M.Des in Interior Design',
          'M.A. in Journalism & Mass Communication',
          'M.Sc in Graphics & Animation'
        ]
      }
    ]
  },
  {
    id: 'humanities',
    slug: 'humanities',
    icon: BookOpen,
    name: 'Humanities & Social Sciences',
    description: 'Liberal arts and social research programs.',
    programs: [
      {
        level: 'Undergraduate (B.A.)',
        courses: [
          'Economics (Honors)',
          'Psychology',
          'Sociology',
          'Journalism',
          'English (Optional)'
        ]
      },
      {
        level: 'Postgraduate (M.A.)',
        courses: [
          'Economics',
          'Public Policy',
          'Journalism & Mass Communication',
          'Performing Arts'
        ]
      }
    ]
  },
  {
    id: 'law',
    slug: 'law',
    icon: Scale,
    name: 'Law',
    description: 'Legal education through the School of Law.',
    programs: [
      {
        level: 'Undergraduate (5-Year Integrated)',
        courses: [
          'B.A. LL.B. (Honors)',
          'B.B.A. LL.B. (Honors)'
        ]
      },
      {
        level: 'Postgraduate (LL.M.)',
        courses: [
          'Corporate and Commercial Law',
          'Intellectual Property Law',
          'Criminal Law'
        ]
      }
    ]
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    icon: HeartPulse,
    name: 'Allied Healthcare',
    description: 'Paramedical and healthcare-related disciplines.',
    programs: [
      {
        level: 'Undergraduate Programs',
        courses: [
          'Bachelor of Physiotherapy (BPT)',
          'B.Sc in Medical Lab Technology',
          'B.Sc in Cardiac Technology',
          'B.Sc in Anesthesia & Operation Theatre Technology',
          'B.Sc in Cancer Biology',
          'B.Sc in Psychology'
        ]
      }
    ]
  },
  {
    id: 'computing',
    slug: 'computing',
    icon: Monitor,
    name: 'Applied Computing',
    description: 'Computer applications and information technology programs.',
    programs: [
      {
        level: 'Undergraduate (BCA)',
        courses: [
          'Artificial Intelligence',
          'Cloud Technology',
          'Cybersecurity',
          'Data Analytics',
          'Mobile Applications'
        ]
      },
      {
        level: 'Postgraduate (MCA)',
        courses: [
          'General MCA',
          'Information Security',
          'Storage & Cloud Technology'
        ]
      }
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

export default function DepartmentsPage() {
  return (
    <div className="pt-[72px] min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-jain-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold tracking-[0.15em] uppercase mb-4">
              <GraduationCap size={13} aria-hidden="true" /> Departments
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Our Departments
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
              Explore 140+ NAAC A++ accredited programs across 9 faculties — from engineering and management to creative arts and healthcare.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Faculties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {FACULTIES.map(({ id, slug, icon: Icon, name, description, programs }, index) => (
            <motion.section
              key={id}
              id={id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={index}
            >
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Faculty Header */}
                <div className="bg-jain-navy/5 px-6 sm:px-8 py-6 border-b border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-jain-navy rounded-2xl flex items-center justify-center shadow-sm">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{name}</h2>
                      <p className="text-gray-600">{description}</p>
                    </div>
                  </div>
                </div>

                {/* Programs Grid */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map(({ level, courses }) => (
                      <div key={level} className="space-y-3">
                        <h3 className="font-bold text-jain-navy text-sm uppercase tracking-wider">{level}</h3>
                        <ul className="space-y-2">
                          {courses.map((course, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                              <ChevronRight size={14} className="text-jain-red flex-shrink-0 mt-1" />
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Know More CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                      Learn more about this department
                    </p>
                    <Link 
                      href={`/departments/${slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-jain-navy hover:bg-jain-navy/90 text-white text-sm font-bold rounded-xl transition-all hover:scale-105"
                    >
                      Know More <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-jain-navy py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Join 21,000+ students at one of India's top-ranked universities. Applications for 2026-27 are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/admissions" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-jain-red hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              Apply Now <ChevronRight size={18} />
            </Link>
            <Link 
              href="/campus-life" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20"
            >
              Explore Campus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
