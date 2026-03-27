'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Cpu, Briefcase, Calculator, FlaskConical, Palette, BookOpen, Scale, HeartPulse, Monitor, ChevronRight, ChevronLeft, GraduationCap, Users, Award, Building } from 'lucide-react';

const DEPARTMENTS = {
  engineering: {
    name: 'Engineering & Technology',
    fullName: 'Faculty of Engineering and Technology (FET)',
    icon: Cpu,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    bgGradient: 'from-blue-600 to-blue-800',
    border: 'border-blue-200',
    image: '/infractucture.jpg',
    brief: 'The Faculty of Engineering and Technology at JAIN Global Campus is a premier institution dedicated to nurturing the next generation of engineers and technologists. With state-of-the-art laboratories, wind tunnels, AI computing clusters, and industry partnerships with Fortune 500 companies, we provide students with hands-on experience and cutting-edge knowledge.',
    highlights: [
      { icon: Users, label: '5,000+ Students', desc: 'Enrolled across all programs' },
      { icon: Award, label: 'NAAC A++', desc: 'Highest accreditation grade' },
      { icon: Building, label: '50+ Labs', desc: 'State-of-the-art facilities' },
    ],
    programs: [
      { level: 'Undergraduate (B.Tech)', courses: ['Computer Science (AI, ML, Cybersecurity, Cloud Technology)', 'Aerospace Engineering', 'Aeronautical Engineering', 'Mechanical Engineering (Mechatronics, Robotics)', 'Civil Engineering', 'Electronics & Communication Engineering', 'Electrical & Electronics Engineering'] },
      { level: 'Postgraduate (M.Tech)', courses: ['Structural Engineering', 'Data Sciences', 'Cybersecurity', 'Embedded Systems', 'Aerospace Engineering'] },
      { level: 'Research', courses: ['Ph.D. in various engineering disciplines'] }
    ]
  },
  management: {
    name: 'Management',
    fullName: 'Faculty of Management - CMS Business School',
    icon: Briefcase,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    bgGradient: 'from-amber-600 to-amber-800',
    border: 'border-amber-200',
    image: '/infractucture.jpg',
    brief: 'The Faculty of Management comprises the Center for Management Studies (CMS) for undergraduate programs and the prestigious CMS Business School for postgraduate studies. Our programs are designed to develop business leaders who can navigate the complexities of global markets while maintaining ethical standards.',
    highlights: [
      { icon: Users, label: '3,000+ Alumni', desc: 'In leadership positions globally' },
      { icon: Award, label: 'Top 50 B-School', desc: 'Ranked in India' },
      { icon: Building, label: 'Industry Tie-ups', desc: 'With 200+ companies' },
    ],
    programs: [
      { level: 'Undergraduate (BBA/BMS)', courses: ['BBA in Corporate Management', 'BBA in Sports Management', 'BBA in Branding & Entrepreneurship', 'BMS in Aviation Management', 'BMS in International Business', 'BMS in Financial Services'] },
      { level: 'Postgraduate (MBA)', courses: ['Finance', 'Marketing', 'Human Resource Management', 'Business Analytics', 'International Business', 'Logistics & Supply Chain Management', 'Dual Specializations available'] }
    ]
  },
  commerce: {
    name: 'Commerce',
    fullName: 'Faculty of Commerce',
    icon: Calculator,
    color: 'text-green-600',
    bg: 'bg-green-50',
    bgGradient: 'from-green-600 to-green-800',
    border: 'border-green-200',
    image: '/infractucture.jpg',
    brief: 'The Faculty of Commerce specializes in accounting, finance, and professional certifications. Our programs are integrated with globally recognized certifications like ACCA, CA, and CMA, providing students with a competitive edge in the financial sector.',
    highlights: [
      { icon: Users, label: '2,500+ Students', desc: 'Pursuing commerce programs' },
      { icon: Award, label: 'ACCA Platinum', desc: 'Approved Learning Partner' },
      { icon: Building, label: '95% Placement', desc: 'In top financial firms' },
    ],
    programs: [
      { level: 'Undergraduate (B.Com)', courses: ['B.Com Regular', 'B.Com Honors', 'B.Com Professional (integrated with ACCA, CA, or CMA)', 'B.Com in Investment Banking', 'B.Com in Corporate Accounting'] },
      { level: 'Postgraduate (M.Com)', courses: ['M.Com with Electives', 'M.Com in Accounting & Finance', 'M.Com in Financial Analysis'] }
    ]
  },
  sciences: {
    name: 'Sciences',
    fullName: 'Faculty of Sciences',
    icon: FlaskConical,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    bgGradient: 'from-purple-600 to-purple-800',
    border: 'border-purple-200',
    image: '/infractucture.jpg',
    brief: 'The School of Sciences offers traditional and emerging scientific fields with a strong emphasis on research and practical applications. Our well-equipped laboratories and experienced faculty prepare students for careers in research, healthcare, and technology sectors.',
    highlights: [
      { icon: Users, label: '1,800+ Students', desc: 'In science programs' },
      { icon: Award, label: '40+ Research Papers', desc: 'Published annually' },
      { icon: Building, label: 'Advanced Labs', desc: 'For all disciplines' },
    ],
    programs: [
      { level: 'Undergraduate (B.Sc)', courses: ['Physics, Mathematics, Computer Science (PMCs)', 'Forensic Science', 'Biotechnology', 'Biochemistry', 'Genetics', 'Microbiology'] },
      { level: 'Postgraduate (M.Sc)', courses: ['Physics', 'Chemistry', 'Biotechnology', 'Microbiology', 'Forensic Science', 'Psychology'] }
    ]
  },
  'creative-arts': {
    name: 'Creative Arts & Design',
    fullName: 'School of Design, Media and Creative Arts (SDMCA)',
    icon: Palette,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    bgGradient: 'from-pink-600 to-pink-800',
    border: 'border-pink-200',
    image: '/infractucture.jpg',
    brief: 'The School of Design, Media and Creative Arts (SDMCA) is where creativity meets technology. Our programs blend traditional artistic skills with modern digital tools, preparing students for careers in design, animation, film, and media industries.',
    highlights: [
      { icon: Users, label: '1,200+ Creatives', desc: 'Shaping the industry' },
      { icon: Award, label: 'Award-Winning', desc: 'Student projects' },
      { icon: Building, label: 'Design Studios', desc: 'Industry-standard equipment' },
    ],
    programs: [
      { level: 'Undergraduate (B.Des/B.A./B.Sc)', courses: ['B.Des in Communication Design', 'B.Des in Product Design', 'B.Des in Interaction Design', 'B.A. in Fashion Design', 'B.A. in Film and Media', 'B.Sc in Animation', 'B.Sc in Gaming', 'B.Sc in Digital Filmmaking'] },
      { level: 'Postgraduate (M.Des/M.A./M.Sc)', courses: ['M.Des in User Experience (UX)', 'M.Des in Interior Design', 'M.A. in Journalism & Mass Communication', 'M.Sc in Graphics & Animation'] }
    ]
  },
  humanities: {
    name: 'Humanities & Social Sciences',
    fullName: 'Faculty of Humanities and Social Sciences',
    icon: BookOpen,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    bgGradient: 'from-indigo-600 to-indigo-800',
    border: 'border-indigo-200',
    image: '/infractucture.jpg',
    brief: 'The Faculty of Humanities and Social Sciences offers a comprehensive liberal arts education that develops critical thinking, communication skills, and a deep understanding of human society. Our programs prepare students for diverse careers in media, policy, academia, and social sectors.',
    highlights: [
      { icon: Users, label: '1,500+ Students', desc: 'Exploring humanities' },
      { icon: Award, label: 'Research Focus', desc: 'Social impact studies' },
      { icon: Building, label: 'Media Lab', desc: 'Professional facilities' },
    ],
    programs: [
      { level: 'Undergraduate (B.A.)', courses: ['Economics (Honors)', 'Psychology', 'Sociology', 'Journalism', 'English (Optional)'] },
      { level: 'Postgraduate (M.A.)', courses: ['Economics', 'Public Policy', 'Journalism & Mass Communication', 'Performing Arts'] }
    ]
  },
  law: {
    name: 'Law',
    fullName: 'School of Law',
    icon: Scale,
    color: 'text-slate-600',
    bg: 'bg-slate-100',
    bgGradient: 'from-slate-600 to-slate-800',
    border: 'border-slate-200',
    image: '/infractucture.jpg',
    brief: 'The School of Law provides rigorous legal education combining theoretical knowledge with practical skills. Our moot courts, legal aid clinics, and partnerships with law firms ensure students are ready to excel in the legal profession.',
    highlights: [
      { icon: Users, label: '800+ Law Students', desc: 'Future legal minds' },
      { icon: Award, label: 'Bar Council', desc: 'Approved programs' },
      { icon: Building, label: 'Moot Court', desc: 'Professional practice' },
    ],
    programs: [
      { level: 'Undergraduate (5-Year Integrated)', courses: ['B.A. LL.B. (Honors)', 'B.B.A. LL.B. (Honors)'] },
      { level: 'Postgraduate (LL.M.)', courses: ['Corporate and Commercial Law', 'Intellectual Property Law', 'Criminal Law'] }
    ]
  },
  healthcare: {
    name: 'Allied Healthcare',
    fullName: 'School of Allied Healthcare and Sciences (SAHS)',
    icon: HeartPulse,
    color: 'text-red-600',
    bg: 'bg-red-50',
    bgGradient: 'from-red-600 to-red-800',
    border: 'border-red-200',
    image: '/infractucture.jpg',
    brief: 'The School of Allied Healthcare and Sciences focuses on paramedical and healthcare-related disciplines. With clinical partnerships and hands-on training, our programs prepare students for essential roles in the healthcare ecosystem.',
    highlights: [
      { icon: Users, label: '1,000+ Students', desc: 'In healthcare programs' },
      { icon: Award, label: 'Hospital Tie-ups', desc: 'Clinical training' },
      { icon: Building, label: 'Simulation Labs', desc: 'Practical experience' },
    ],
    programs: [
      { level: 'Undergraduate Programs', courses: ['Bachelor of Physiotherapy (BPT)', 'B.Sc in Medical Lab Technology', 'B.Sc in Cardiac Technology', 'B.Sc in Anesthesia & Operation Theatre Technology', 'B.Sc in Cancer Biology', 'B.Sc in Psychology'] }
    ]
  },
  computing: {
    name: 'Applied Computing',
    fullName: 'Faculty of Applied Computing',
    icon: Monitor,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    bgGradient: 'from-cyan-600 to-cyan-800',
    border: 'border-cyan-200',
    image: '/infractucture.jpg',
    brief: 'The Faculty of Applied Computing offers cutting-edge programs in computer applications and information technology. With a curriculum aligned with industry needs and hands-on project experience, our graduates are ready to tackle real-world technology challenges.',
    highlights: [
      { icon: Users, label: '2,000+ Students', desc: 'In computing programs' },
      { icon: Award, label: '100% Placement', desc: 'In IT sector' },
      { icon: Building, label: 'Tech Labs', desc: 'Latest infrastructure' },
    ],
    programs: [
      { level: 'Undergraduate (BCA)', courses: ['Artificial Intelligence', 'Cloud Technology', 'Cybersecurity', 'Data Analytics', 'Mobile Applications'] },
      { level: 'Postgraduate (MCA)', courses: ['General MCA', 'Information Security', 'Storage & Cloud Technology'] }
    ]
  }
};

export default function DepartmentPage() {
  const params = useParams();
  const slug = params.slug as string;
  const department = DEPARTMENTS[slug as keyof typeof DEPARTMENTS];

  if (!department) {
    return (
      <div className="pt-[72px] min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Department Not Found</h1>
          <Link href="/academics" className="text-jain-red hover:underline">
            ← Back to Academics
          </Link>
        </div>
      </div>
    );
  }

  const { name, fullName, icon: Icon, color, bg, bgGradient, border, image, brief, highlights, programs } = department;

  return (
    <div className="pt-[72px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-br ${bgGradient} py-20 px-4 overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <Link 
            href="/academics" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft size={18} />
            Back to All Departments
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-center gap-8"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Icon size={32} className="text-white" />
                </div>
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  <GraduationCap size={14} className="inline mr-2" />
                  Department
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {name}
              </h1>
              <p className="text-xl text-white/90 mb-2">{fullName}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image & Highlights */}
          <div className="lg:col-span-1 space-y-6">
            {/* Department Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`relative h-64 lg:h-80 rounded-3xl overflow-hidden border-4 ${border} shadow-lg`}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${bgGradient} opacity-20`} />
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {highlights.map(({ icon: HIcon, label, desc }, i) => (
                <div key={i} className={`${bg} ${border} border rounded-2xl p-4 flex items-center gap-4`}>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <HIcon size={24} className={color} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{label}</p>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Brief & Programs */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Department</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{brief}</p>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`bg-white rounded-3xl border ${border} overflow-hidden shadow-sm`}
            >
              <div className={`${bg} px-6 py-4 border-b ${border}`}>
                <h2 className="text-xl font-bold text-gray-900">Programs Offered</h2>
              </div>
              <div className="p-6 space-y-6">
                {programs.map(({ level, courses }, i) => (
                  <div key={i}>
                    <h3 className={`font-bold ${color} text-sm uppercase tracking-wider mb-3`}>{level}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {courses.map((course, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-700">
                          <ChevronRight size={16} className={`${color} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/admissions" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-jain-red hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                Apply Now <ChevronRight size={18} />
              </Link>
              <Link 
                href="/campus-life" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-all"
              >
                Explore Campus
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
