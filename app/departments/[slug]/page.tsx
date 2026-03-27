'use client';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Cpu, Briefcase, Calculator, FlaskConical, Palette, BookOpen, Scale, HeartPulse, Monitor, ChevronRight, GraduationCap, Users, Award, BookMarked, Building, IndianRupee } from 'lucide-react';
import { notFound } from 'next/navigation';

const DEPARTMENTS_DATA: Record<string, {
  name: string;
  fullName: string;
  icon: typeof Cpu;
  image: string;
  description: string;
  overview: string;
  highlights: { icon: typeof Users; label: string; value: string }[];
  programs: { level: string; courses: { name: string; fee: string }[] }[];
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
        level: 'Undergraduate (B.Tech) - 4 Years',
        courses: [
          { name: 'Computer Science (AI, ML, Cybersecurity, Cloud Technology)', fee: '₹2,50,000/year' },
          { name: 'Aerospace Engineering', fee: '₹2,75,000/year' },
          { name: 'Aeronautical Engineering', fee: '₹2,75,000/year' },
          { name: 'Mechanical Engineering (Mechatronics, Robotics)', fee: '₹2,25,000/year' },
          { name: 'Civil Engineering', fee: '₹2,00,000/year' },
          { name: 'Electronics & Communication Engineering', fee: '₹2,25,000/year' },
          { name: 'Electrical & Electronics Engineering', fee: '₹2,00,000/year' }
        ]
      },
      {
        level: 'Postgraduate (M.Tech) - 2 Years',
        courses: [
          { name: 'Structural Engineering', fee: '₹1,50,000/year' },
          { name: 'Data Sciences', fee: '₹1,75,000/year' },
          { name: 'Cybersecurity', fee: '₹1,75,000/year' },
          { name: 'Embedded Systems', fee: '₹1,50,000/year' },
          { name: 'Aerospace Engineering', fee: '₹1,75,000/year' }
        ]
      },
      {
        level: 'Research (Ph.D.) - 3-5 Years',
        courses: [
          { name: 'Ph.D. in various engineering disciplines', fee: '₹1,25,000/year' }
        ]
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
        level: 'Undergraduate (BBA/BMS) - 3 Years',
        courses: [
          { name: 'BBA in Corporate Management', fee: '₹1,75,000/year' },
          { name: 'BBA in Sports Management', fee: '₹2,00,000/year' },
          { name: 'BBA in Branding & Entrepreneurship', fee: '₹1,85,000/year' },
          { name: 'BMS in Aviation Management', fee: '₹2,25,000/year' },
          { name: 'BMS in International Business', fee: '₹2,00,000/year' },
          { name: 'BMS in Financial Services', fee: '₹1,90,000/year' }
        ]
      },
      {
        level: 'Postgraduate (MBA) - 2 Years',
        courses: [
          { name: 'Finance', fee: '₹3,50,000/year' },
          { name: 'Marketing', fee: '₹3,50,000/year' },
          { name: 'Human Resource Management', fee: '₹3,25,000/year' },
          { name: 'Business Analytics', fee: '₹3,75,000/year' },
          { name: 'International Business', fee: '₹3,50,000/year' },
          { name: 'Logistics & Supply Chain Management', fee: '₹3,25,000/year' },
          { name: 'Dual Specializations available', fee: '₹3,75,000/year' }
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
        level: 'Undergraduate (B.Com) - 3 Years',
        courses: [
          { name: 'B.Com Regular', fee: '₹85,000/year' },
          { name: 'B.Com Honors', fee: '₹1,10,000/year' },
          { name: 'B.Com Professional (integrated with ACCA, CA, or CMA)', fee: '₹1,75,000/year' },
          { name: 'B.Com in Investment Banking', fee: '₹1,50,000/year' },
          { name: 'B.Com in Corporate Accounting', fee: '₹1,25,000/year' }
        ]
      },
      {
        level: 'Postgraduate (M.Com) - 2 Years',
        courses: [
          { name: 'M.Com with Electives', fee: '₹75,000/year' },
          { name: 'M.Com in Accounting & Finance', fee: '₹90,000/year' },
          { name: 'M.Com in Financial Analysis', fee: '₹95,000/year' }
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
        level: 'Undergraduate (B.Sc) - 3 Years',
        courses: [
          { name: 'Physics, Mathematics, Computer Science (PMCs)', fee: '₹95,000/year' },
          { name: 'Forensic Science', fee: '₹1,25,000/year' },
          { name: 'Biotechnology', fee: '₹1,35,000/year' },
          { name: 'Biochemistry', fee: '₹1,20,000/year' },
          { name: 'Genetics', fee: '₹1,30,000/year' },
          { name: 'Microbiology', fee: '₹1,15,000/year' }
        ]
      },
      {
        level: 'Postgraduate (M.Sc) - 2 Years',
        courses: [
          { name: 'Physics', fee: '₹85,000/year' },
          { name: 'Chemistry', fee: '₹85,000/year' },
          { name: 'Biotechnology', fee: '₹1,10,000/year' },
          { name: 'Microbiology', fee: '₹95,000/year' },
          { name: 'Forensic Science', fee: '₹1,00,000/year' },
          { name: 'Psychology', fee: '₹90,000/year' }
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
        level: 'Undergraduate (B.Des/B.A./B.Sc) - 4 Years',
        courses: [
          { name: 'B.Des in Communication Design', fee: '₹2,50,000/year' },
          { name: 'B.Des in Product Design', fee: '₹2,50,000/year' },
          { name: 'B.Des in Interaction Design', fee: '₹2,75,000/year' },
          { name: 'B.A. in Fashion Design', fee: '₹2,25,000/year' },
          { name: 'B.A. in Film and Media', fee: '₹2,00,000/year' },
          { name: 'B.Sc in Animation', fee: '₹1,85,000/year' },
          { name: 'B.Sc in Gaming', fee: '₹2,00,000/year' },
          { name: 'B.Sc in Digital Filmmaking', fee: '₹2,25,000/year' }
        ]
      },
      {
        level: 'Postgraduate (M.Des/M.A./M.Sc) - 2 Years',
        courses: [
          { name: 'M.Des in User Experience (UX)', fee: '₹2,00,000/year' },
          { name: 'M.Des in Interior Design', fee: '₹1,85,000/year' },
          { name: 'M.A. in Journalism & Mass Communication', fee: '₹1,50,000/year' },
          { name: 'M.Sc in Graphics & Animation', fee: '₹1,75,000/year' }
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
        level: 'Undergraduate (B.A.) - 3 Years',
        courses: [
          { name: 'Economics (Honors)', fee: '₹1,10,000/year' },
          { name: 'Psychology', fee: '₹1,25,000/year' },
          { name: 'Sociology', fee: '₹90,000/year' },
          { name: 'Journalism', fee: '₹1,35,000/year' },
          { name: 'English (Optional)', fee: '₹85,000/year' }
        ]
      },
      {
        level: 'Postgraduate (M.A.) - 2 Years',
        courses: [
          { name: 'Economics', fee: '₹80,000/year' },
          { name: 'Public Policy', fee: '₹95,000/year' },
          { name: 'Journalism & Mass Communication', fee: '₹1,10,000/year' },
          { name: 'Performing Arts', fee: '₹1,00,000/year' }
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
          { name: 'B.A. LL.B. (Honors)', fee: '₹2,00,000/year' },
          { name: 'B.B.A. LL.B. (Honors)', fee: '₹2,25,000/year' }
        ]
      },
      {
        level: 'Postgraduate (LL.M.) - 1 Year',
        courses: [
          { name: 'Corporate and Commercial Law', fee: '₹1,50,000/year' },
          { name: 'Intellectual Property Law', fee: '₹1,60,000/year' },
          { name: 'Criminal Law', fee: '₹1,40,000/year' }
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
        level: 'Undergraduate Programs - 4 Years',
        courses: [
          { name: 'Bachelor of Physiotherapy (BPT)', fee: '₹1,75,000/year' },
          { name: 'B.Sc in Medical Lab Technology', fee: '₹1,25,000/year' },
          { name: 'B.Sc in Cardiac Technology', fee: '₹1,40,000/year' },
          { name: 'B.Sc in Anesthesia & Operation Theatre Technology', fee: '₹1,35,000/year' },
          { name: 'B.Sc in Cancer Biology', fee: '₹1,30,000/year' },
          { name: 'B.Sc in Psychology', fee: '₹1,15,000/year' }
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
        level: 'Undergraduate (BCA) - 3 Years',
        courses: [
          { name: 'Artificial Intelligence', fee: '₹1,50,000/year' },
          { name: 'Cloud Technology', fee: '₹1,45,000/year' },
          { name: 'Cybersecurity', fee: '₹1,55,000/year' },
          { name: 'Data Analytics', fee: '₹1,50,000/year' },
          { name: 'Mobile Applications', fee: '₹1,40,000/year' }
        ]
      },
      {
        level: 'Postgraduate (MCA) - 2 Years',
        courses: [
          { name: 'General MCA', fee: '₹1,25,000/year' },
          { name: 'Information Security', fee: '₹1,40,000/year' },
          { name: 'Storage & Cloud Technology', fee: '₹1,35,000/year' }
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
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Programs Offered</h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <IndianRupee size={14} />
                <span>Approximate annual tuition fees</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {department.programs.map(({ level, courses }) => (
                <div key={level} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-jain-navy text-sm uppercase tracking-wider mb-4">{level}</h3>
                  <ul className="space-y-4">
                    {courses.map((course, i) => (
                      <li key={i} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-start gap-2 text-gray-700 text-sm">
                          <ChevronRight size={14} className="text-jain-red flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <span className="block">{course.name}</span>
                            <span className="flex items-center gap-1 text-jain-navy font-semibold mt-1">
                              <IndianRupee size={12} />
                              {course.fee.replace('₹', '')}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 text-center">
              * Fees are approximate and subject to change. Additional charges may apply for hostel, examination, and other facilities. 
              Please contact the admissions office for the latest fee structure.
            </p>
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
