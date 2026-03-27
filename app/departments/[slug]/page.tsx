'use client';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Cpu, Briefcase, Calculator, FlaskConical, Palette, BookOpen, Scale, HeartPulse, Monitor, ChevronRight, GraduationCap, Users, Award, BookMarked, Building } from 'lucide-react';
import { notFound } from 'next/navigation';

const DEPARTMENTS_DATA: Record<string, {
  name: string;
  fullName: string;
  icon: typeof Cpu;
  image: string;
  description: string;
  overview: string;
  highlights: { icon: typeof Users; label: string; value: string }[];
  programs: { level: string; courses: string[] }[];
  facilities: string[];
  careers: string[];
}> = {
  engineering: {
    name: 'Engineering & Technology',
    fullName: 'School of Engineering & Technology',
    icon: Cpu,
    image: '/engineering and technology.jpeg',
    description: 'Technical and innovation-driven education at the JAIN Global Campus.',
    overview: 'The School of Engineering & Technology at JAIN (Deemed-to-be University) offers cutting-edge programs designed to produce industry-ready professionals. With state-of-the-art laboratories, experienced faculty, and strong industry partnerships, we prepare students for the technological challenges of tomorrow.',
    highlights: [
      { icon: Users, label: 'Students', value: '5000+' },
      { icon: Award, label: 'Placements', value: '95%' },
      { icon: BookMarked, label: 'Programs', value: '25+' },
      { icon: Building, label: 'Labs', value: '50+' },
    ],
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
    ],
    facilities: [
      'Advanced Computing Labs',
      'Robotics & Automation Center',
      'Aerospace Simulation Lab',
      'IoT & Embedded Systems Lab',
      'CAD/CAM Workshop',
      'Research & Innovation Center'
    ],
    careers: [
      'Software Engineer',
      'Data Scientist',
      'Aerospace Engineer',
      'Robotics Engineer',
      'Cloud Architect',
      'Research Scientist'
    ]
  },
  management: {
    name: 'Management',
    fullName: 'Center for Management Studies (CMS)',
    icon: Briefcase,
    image: '/jain university.jpg',
    description: 'Management studies through Center for Management Studies (CMS) and CMS Business School.',
    overview: 'CMS Business School is one of India\'s premier management institutions, offering world-class MBA and BBA programs. Our curriculum blends theoretical foundations with practical business acumen, preparing leaders for the global marketplace.',
    highlights: [
      { icon: Users, label: 'Students', value: '3000+' },
      { icon: Award, label: 'Placements', value: '98%' },
      { icon: BookMarked, label: 'Programs', value: '15+' },
      { icon: Building, label: 'Partner Companies', value: '200+' },
    ],
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
    ],
    facilities: [
      'Bloomberg Finance Lab',
      'Business Incubation Center',
      'Case Study Rooms',
      'Executive Conference Halls',
      'Digital Library',
      'Simulation Labs'
    ],
    careers: [
      'Business Analyst',
      'Investment Banker',
      'Marketing Manager',
      'HR Director',
      'Entrepreneur',
      'Management Consultant'
    ]
  },
  commerce: {
    name: 'Commerce',
    fullName: 'School of Commerce',
    icon: Calculator,
    image: '/academicexcellence.jpg',
    description: 'Specializing in accounting, finance, and professional certifications.',
    overview: 'The School of Commerce offers comprehensive programs in accounting, finance, and business studies. Our integrated programs with professional certifications like CA, CMA, and ACCA give students a competitive edge in the corporate world.',
    highlights: [
      { icon: Users, label: 'Students', value: '2500+' },
      { icon: Award, label: 'CA Success Rate', value: '85%' },
      { icon: BookMarked, label: 'Programs', value: '12+' },
      { icon: Building, label: 'Industry Partners', value: '100+' },
    ],
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
    ],
    facilities: [
      'Accounting Software Labs',
      'Financial Trading Room',
      'Tax Research Center',
      'Audit Simulation Lab',
      'Professional Certification Center',
      'Industry Connect Hub'
    ],
    careers: [
      'Chartered Accountant',
      'Financial Analyst',
      'Tax Consultant',
      'Auditor',
      'Investment Advisor',
      'Corporate Finance Manager'
    ]
  },
  sciences: {
    name: 'Sciences',
    fullName: 'School of Sciences',
    icon: FlaskConical,
    image: '/academicexcellence.jpg',
    description: 'Traditional and emerging scientific fields through the School of Sciences.',
    overview: 'The School of Sciences offers rigorous programs in pure and applied sciences, fostering scientific inquiry and innovation. Our well-equipped laboratories and research facilities provide students with hands-on experience in cutting-edge scientific methodologies.',
    highlights: [
      { icon: Users, label: 'Students', value: '1800+' },
      { icon: Award, label: 'Research Papers', value: '500+' },
      { icon: BookMarked, label: 'Programs', value: '18+' },
      { icon: Building, label: 'Research Labs', value: '30+' },
    ],
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
    ],
    facilities: [
      'Advanced Research Labs',
      'Biotechnology Center',
      'Forensic Science Lab',
      'Microbiology Lab',
      'Spectroscopy Lab',
      'Computational Science Center'
    ],
    careers: [
      'Research Scientist',
      'Forensic Expert',
      'Biotechnologist',
      'Lab Director',
      'Quality Analyst',
      'Science Educator'
    ]
  },
  'creative-arts': {
    name: 'Creative Arts & Design',
    fullName: 'School of Design, Media and Creative Arts (SDMCA)',
    icon: Palette,
    image: '/School of Design , Media, and creative Arts.jpeg',
    description: 'Managed by the School of Design, Media and Creative Arts (SDMCA).',
    overview: 'SDMCA nurtures creative talent through industry-aligned programs in design, media, and the arts. Our state-of-the-art studios, experienced faculty from the creative industry, and emphasis on portfolio development prepare students for successful careers in the creative economy.',
    highlights: [
      { icon: Users, label: 'Students', value: '1200+' },
      { icon: Award, label: 'Awards Won', value: '150+' },
      { icon: BookMarked, label: 'Programs', value: '14+' },
      { icon: Building, label: 'Studios', value: '20+' },
    ],
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
    ],
    facilities: [
      'Design Studios',
      'Animation Lab',
      'Photography Studio',
      'Film Production Unit',
      'Fashion Workshop',
      'Digital Media Lab'
    ],
    careers: [
      'UX Designer',
      'Animation Director',
      'Fashion Designer',
      'Film Director',
      'Game Designer',
      'Creative Director'
    ]
  },
  humanities: {
    name: 'Humanities & Social Sciences',
    fullName: 'School of Humanities & Social Sciences',
    icon: BookOpen,
    image: '/department of humanities and social sciences.jpeg',
    description: 'Liberal arts and social research programs.',
    overview: 'The School of Humanities & Social Sciences offers interdisciplinary programs that develop critical thinking, communication skills, and a deep understanding of human society. Our graduates excel in diverse fields from academia to public policy.',
    highlights: [
      { icon: Users, label: 'Students', value: '1500+' },
      { icon: Award, label: 'Research Projects', value: '200+' },
      { icon: BookMarked, label: 'Programs', value: '10+' },
      { icon: Building, label: 'Research Centers', value: '8' },
    ],
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
    ],
    facilities: [
      'Language Lab',
      'Psychology Lab',
      'Media Center',
      'Research Library',
      'Seminar Halls',
      'Cultural Center'
    ],
    careers: [
      'Economist',
      'Psychologist',
      'Journalist',
      'Policy Analyst',
      'Social Researcher',
      'Content Strategist'
    ]
  },
  law: {
    name: 'Law',
    fullName: 'School of Law',
    icon: Scale,
    image: '/school of law.jpeg',
    description: 'Legal education through the School of Law.',
    overview: 'The School of Law provides comprehensive legal education with a focus on practical skills and ethical practice. Our moot court facilities, legal aid clinics, and internship programs ensure students are ready for the demanding legal profession.',
    highlights: [
      { icon: Users, label: 'Students', value: '800+' },
      { icon: Award, label: 'Moot Court Wins', value: '50+' },
      { icon: BookMarked, label: 'Programs', value: '6' },
      { icon: Building, label: 'Court Rooms', value: '4' },
    ],
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
    ],
    facilities: [
      'Moot Court Hall',
      'Legal Aid Clinic',
      'Law Library',
      'Research Center',
      'ADR Center',
      'Legal Tech Lab'
    ],
    careers: [
      'Advocate',
      'Corporate Lawyer',
      'Legal Advisor',
      'Judge',
      'Legal Consultant',
      'Legal Researcher'
    ]
  },
  healthcare: {
    name: 'Allied Healthcare',
    fullName: 'School of Allied Health Sciences',
    icon: HeartPulse,
    image: '/school of allied health care and sciences.jpeg',
    description: 'Paramedical and healthcare-related disciplines.',
    overview: 'The School of Allied Health Sciences prepares students for rewarding careers in healthcare support services. With clinical partnerships and hands-on training, our graduates play vital roles in patient care and medical diagnostics.',
    highlights: [
      { icon: Users, label: 'Students', value: '600+' },
      { icon: Award, label: 'Hospital Partners', value: '30+' },
      { icon: BookMarked, label: 'Programs', value: '8' },
      { icon: Building, label: 'Clinical Labs', value: '15' },
    ],
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
    ],
    facilities: [
      'Physiotherapy Clinic',
      'Medical Lab',
      'Anatomy Lab',
      'Simulation Center',
      'Rehabilitation Unit',
      'Diagnostic Center'
    ],
    careers: [
      'Physiotherapist',
      'Lab Technician',
      'Cardiac Technologist',
      'Healthcare Manager',
      'Clinical Researcher',
      'Medical Equipment Specialist'
    ]
  },
  computing: {
    name: 'Applied Computing',
    fullName: 'School of Applied Computing',
    icon: Monitor,
    image: '/school of applied computing.jpeg',
    description: 'Computer applications and information technology programs.',
    overview: 'The School of Applied Computing offers practical, industry-focused programs in computer applications and IT. Our curriculum emphasizes hands-on learning, project-based assessment, and industry internships to create job-ready professionals.',
    highlights: [
      { icon: Users, label: 'Students', value: '2000+' },
      { icon: Award, label: 'Placements', value: '92%' },
      { icon: BookMarked, label: 'Programs', value: '10+' },
      { icon: Building, label: 'Computer Labs', value: '25' },
    ],
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
    ],
    facilities: [
      'Programming Labs',
      'Cloud Computing Center',
      'Cybersecurity Lab',
      'Mobile App Development Studio',
      'AI/ML Research Lab',
      'Software Testing Center'
    ],
    careers: [
      'Software Developer',
      'App Developer',
      'Cloud Engineer',
      'Cybersecurity Analyst',
      'Data Analyst',
      'IT Consultant'
    ]
  }
};

export default function DepartmentDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const department = DEPARTMENTS_DATA[slug];
  
  if (!department) {
    notFound();
  }

  const Icon = department.icon;

  return (
    <div className="pt-[72px] min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] sm:h-[500px]">
        <Image
          src={department.image}
          alt={department.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jain-navy via-jain-navy/70 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/departments" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
                <ChevronRight size={16} className="rotate-180" /> Back to Departments
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon size={32} className="text-jain-navy" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold tracking-[0.15em] uppercase">
                    <GraduationCap size={13} /> Department
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                    {department.name}
                  </h1>
                </div>
              </div>
              <p className="text-blue-200 text-lg max-w-2xl">
                {department.fullName}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {department.highlights.map(({ icon: HIcon, label, value }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 text-center"
            >
              <div className="w-10 h-10 bg-jain-navy/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <HIcon size={20} className="text-jain-navy" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Department</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{department.overview}</p>
        </motion.div>
      </div>

      {/* Programs */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Programs Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {department.programs.map(({ level, courses }) => (
                <div key={level} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-jain-navy text-sm uppercase tracking-wider mb-4">{level}</h3>
                  <ul className="space-y-3">
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
          </motion.div>
        </div>
      </div>

      {/* Facilities & Careers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Facilities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Facilities</h2>
            <ul className="space-y-3">
              {department.facilities.map((facility, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-jain-navy rounded-full" />
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Career Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-jain-navy to-blue-900 rounded-3xl p-8 text-white"
          >
            <h2 className="text-xl font-bold mb-6">Career Opportunities</h2>
            <ul className="space-y-3">
              {department.careers.map((career, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ChevronRight size={16} className="text-red-400" />
                  <span>{career}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-jain-navy py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Join {department.name}?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards your career. Applications for 2026-27 are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/admissions" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-jain-red hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              Apply Now <ChevronRight size={18} />
            </Link>
            <Link 
              href="/departments" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20"
            >
              Explore Other Departments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
