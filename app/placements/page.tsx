'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Briefcase, TrendingUp, Award, Users, Building2, GraduationCap, 
  ChevronRight, CheckCircle2, Target, BookOpen, Handshake, 
  ArrowUpRight, Quote, Star, Rocket, BadgeCheck
} from 'lucide-react';

const PLACEMENT_STATS = [
  { icon: Target, value: '93%+', label: 'Placement Rate', description: 'Students successfully placed' },
  { icon: TrendingUp, value: '₹42 LPA', label: 'Highest Package', description: 'Top offer received' },
  { icon: Award, value: '₹6.2 LPA', label: 'Average Package', description: 'Across all programs' },
  { icon: Star, value: '₹14.92 LPA', label: 'Top 100 Average', description: 'Elite performers' },
  { icon: Building2, value: '550+', label: 'Recruiters', description: 'Companies visiting annually' },
  { icon: Users, value: '31,000+', label: 'Students Placed', description: 'Since inception' },
];

const TOP_RECRUITERS = [
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Deloitte.svg' },
  { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
  { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/TATA_Consultancy_Services_Logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
  { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/HCLTech_new_logo.svg' },
];

const PLACEMENT_PROCESS = [
  { step: 1, title: 'Orientation & Career Guidance', description: 'Introduction to career paths and industry expectations' },
  { step: 2, title: 'Student Profiling', description: 'Skills assessment and career preference mapping' },
  { step: 3, title: 'Skill Development & Training', description: 'Technical and soft skills enhancement programs' },
  { step: 4, title: 'Company Interaction', description: 'Industry visits, guest lectures, and networking events' },
  { step: 5, title: 'Recruitment Drives', description: 'On-campus and virtual placement drives' },
  { step: 6, title: 'Interviews & Assessments', description: 'Technical rounds, HR interviews, and evaluations' },
  { step: 7, title: 'Final Placement Offers', description: 'Offer letters and onboarding support' },
];

const TRAINING_FEATURES = [
  { icon: BookOpen, title: '150+ Hours Training', description: 'Structured placement training through LEAD Program' },
  { icon: GraduationCap, title: '16,000+ Courses', description: 'Access to LinkedIn Learning for skill development' },
  { icon: Users, title: 'Mock Interviews', description: 'Practice sessions with industry experts' },
  { icon: Briefcase, title: 'Internship Opportunities', description: 'Hands-on experience with top companies' },
];

const TESTIMONIALS = [
  { 
    quote: "We are extremely pleased with the students from JAIN University. Their technical skills and professional attitude make them valuable assets. Looking forward to hiring again.",
    author: "HR Director",
    company: "Fortune 500 Tech Company"
  },
  { 
    quote: "Excellent coordination from the placement team and a high-quality talent pool. JAIN students consistently meet our expectations.",
    author: "Talent Acquisition Lead",
    company: "Global Consulting Firm"
  },
];

const RECENT_HIGHLIGHTS = [
  { value: '₹81.25 LPA', label: 'Highest Package (2025 Batch)' },
  { value: '₹8 LPA', label: 'Average Package (Engineering)' },
  { value: '2500+', label: 'Job Offers in Single Season' },
  { value: '3500+', label: 'Corporate Partners' },
];

export default function PlacementsPage() {
  return (
    <div className="pt-[72px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-jain-navy py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-jain-navy via-blue-900 to-jain-navy opacity-90" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-jain-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold tracking-[0.15em] uppercase mb-4">
              <Briefcase size={13} aria-hidden="true" /> Career Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Placements at<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">JAIN University</span>
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl leading-relaxed mb-8">
              Your journey from student to professional begins here. With 550+ top recruiters, 
              industry-focused training, and a dedicated placement team, we transform careers every day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/admissions" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-jain-red hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:scale-105"
              >
                Apply Now <ChevronRight size={18} />
              </Link>
              <a 
                href="#stats" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20"
              >
                View Statistics <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Highlights Bar */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {RECENT_HIGHLIGHTS.map(({ value, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-jain-navy">{value}</div>
                <div className="text-sm text-gray-600">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Placement Stats */}
      <section id="stats" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Placement Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for themselves — our consistent track record of excellence in placements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PLACEMENT_STATS.map(({ icon: Icon, value, label, description }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-jain-navy/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-jain-navy" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-jain-navy mb-1">{value}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{label}</div>
                <div className="text-xs text-gray-500">{description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Top Recruiters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our students are placed in leading multinational companies across diverse industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {TOP_RECRUITERS.map(({ name, logo }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="relative w-full h-12 mb-3">
                  <Image
                    src={logo}
                    alt={`${name} official logo`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{name}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              And 530+ more companies recruiting from our campus every year
            </p>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Industry-Ready Training & Support
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                JAIN University ensures students are industry-ready through comprehensive training programs, 
                mock interviews, and skill development initiatives. Our Student Career Advisory & Placement 
                Support (SCAPS) team provides personalized guidance throughout your journey.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {TRAINING_FEATURES.map(({ icon: Icon, title, description }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-jain-navy/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon size={20} className="text-jain-navy" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-jain-navy to-blue-900 rounded-3xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Rocket size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">LEAD Program</h3>
                  <p className="text-blue-200 text-sm">Leadership & Excellence in Aptitude Development</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  'Aptitude & reasoning training',
                  'Technical skill workshops',
                  'Communication & soft skills',
                  'Group discussions practice',
                  'Resume building & LinkedIn optimization',
                  'Industry expert sessions'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Placement Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic 7-step approach ensuring every student gets the best career opportunities.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
              {PLACEMENT_PROCESS.map(({ step, title, description }, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-lg hover:border-jain-navy/30 transition-all z-10"
                >
                  <div className="w-10 h-10 bg-jain-navy rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                  <p className="text-xs text-gray-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Recruiters Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Feedback from our recruiting partners about JAIN University graduates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map(({ quote, author, company }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
              >
                <Quote size={40} className="text-jain-navy/20 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-jain-navy/10 rounded-full flex items-center justify-center">
                    <Handshake size={24} className="text-jain-navy" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{author}</p>
                    <p className="text-sm text-gray-600">{company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-jain-navy to-blue-900 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Why Choose JAIN for Placements?
                </h2>
                <ul className="space-y-4">
                  {[
                    { icon: Building2, text: 'Strong industry connections with 3500+ corporate partners' },
                    { icon: TrendingUp, text: 'Consistent high placement rates across all streams' },
                    { icon: BadgeCheck, text: 'Focus on skill development & employability' },
                    { icon: Rocket, text: 'Opportunities in MNCs, startups & global firms' },
                  ].map(({ icon: Icon, text }, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={16} className="text-white" />
                      </div>
                      <span className="text-blue-100">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-5xl font-extrabold text-white mb-2">93%+</div>
                  <div className="text-blue-200 mb-4">Placement Rate</div>
                  <Link 
                    href="/admissions" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-jain-red hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:scale-105"
                  >
                    Start Your Journey <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-jain-navy py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Launch Your Career?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Join 31,000+ successful alumni who started their careers at JAIN University. 
            Applications for 2026-27 are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/admissions" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-jain-red hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              Apply Now <ChevronRight size={18} />
            </Link>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20"
            >
              Contact Placement Cell
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
