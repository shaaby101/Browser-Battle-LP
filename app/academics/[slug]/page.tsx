'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Cpu, Briefcase, Calculator, FlaskConical, Palette, BookOpen, Scale, HeartPulse, Monitor, ChevronRight, ChevronLeft, GraduationCap, Users, Award, Building, Target, Eye, Beaker, Trophy, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

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
    about: 'The Faculty of Engineering and Technology at JAIN Global Campus is a premier institution dedicated to nurturing the next generation of engineers and technologists. With state-of-the-art laboratories, wind tunnels, AI computing clusters, and industry partnerships with Fortune 500 companies, we provide students with hands-on experience and cutting-edge knowledge. Our focus is on technical and innovation-driven education, primarily located at the JAIN Global Campus.',
    vision: 'To be a globally recognized center of excellence in engineering education and research, producing ethical leaders and innovators who drive technological advancement and contribute to sustainable development.',
    mission: [
      'Deliver industry-relevant curriculum with hands-on learning',
      'Foster innovation through research and entrepreneurship',
      'Build strong industry-academia partnerships',
      'Develop socially responsible engineering professionals'
    ],
    highlights: [
      { icon: Users, label: '5,000+ Students', desc: 'Enrolled across all programs' },
      { icon: Award, label: 'NAAC A++', desc: 'Highest accreditation grade' },
      { icon: Building, label: '50+ Labs', desc: 'State-of-the-art facilities' },
    ],
    programs: [
      { level: 'Undergraduate (B.Tech)', courses: ['Computer Science (AI, ML, Cybersecurity, Cloud Technology)', 'Aerospace Engineering', 'Aeronautical Engineering', 'Mechanical Engineering (Mechatronics, Robotics)', 'Civil Engineering', 'Electronics & Communication Engineering', 'Electrical & Electronics Engineering'], duration: '4 Years', eligibility: '10+2 with PCM, minimum 60%' },
      { level: 'Postgraduate (M.Tech)', courses: ['Structural Engineering', 'Data Sciences', 'Cybersecurity', 'Embedded Systems', 'Aerospace Engineering'], duration: '2 Years', eligibility: 'B.Tech/B.E. with minimum 60%' },
      { level: 'Research (Ph.D.)', courses: ['Ph.D. in Computer Science', 'Ph.D. in Mechanical Engineering', 'Ph.D. in Civil Engineering', 'Ph.D. in Aerospace Engineering'], duration: '3-5 Years', eligibility: 'M.Tech/M.E. with research aptitude' }
    ],
    faculty: [
      { name: 'Dr. Rajesh Kumar', designation: 'Professor & HOD', qualification: 'Ph.D. IIT Delhi', specialization: 'Artificial Intelligence & Machine Learning', image: '/infractucture.jpg' },
      { name: 'Dr. Priya Sharma', designation: 'Associate Professor', qualification: 'Ph.D. IISc Bangalore', specialization: 'Aerospace Propulsion', image: '/infractucture.jpg' },
      { name: 'Dr. Anil Reddy', designation: 'Associate Professor', qualification: 'Ph.D. NIT Trichy', specialization: 'Structural Engineering', image: '/infractucture.jpg' },
      { name: 'Dr. Sneha Patel', designation: 'Assistant Professor', qualification: 'Ph.D. BITS Pilani', specialization: 'Cybersecurity', image: '/infractucture.jpg' },
    ],
    labs: [
      { name: 'AI & Machine Learning Lab', desc: 'GPU clusters, deep learning workstations, and neural network simulators' },
      { name: 'Aerospace Wind Tunnel', desc: 'Subsonic and supersonic wind tunnels for aerodynamic testing' },
      { name: 'Robotics & Automation Lab', desc: 'Industrial robots, CNC machines, and automation systems' },
      { name: 'IoT & Embedded Systems Lab', desc: 'Microcontrollers, sensors, and embedded development kits' },
      { name: 'CAD/CAM Center', desc: 'Advanced design software and 3D printing facilities' },
    ],
    achievements: [
      'Best Engineering College Award - Karnataka State 2025',
      '45+ patents filed by faculty and students',
      'AICTE approved Innovation & Incubation Center',
      '₹5 Cr research grants received in last 3 years',
      '100% placement rate for top performers'
    ],
    hod: {
      name: 'Dr. Rajesh Kumar',
      designation: 'Head of Department',
      qualification: 'Ph.D. (IIT Delhi), M.Tech (IIT Bombay)',
      email: 'hod.fet@jainuniversity.ac.in',
      phone: '+91 80 4343 1234',
      office: 'FET Block, Room 101, JAIN Global Campus',
      image: '/infractucture.jpg'
    }
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
    about: 'The Faculty of Management comprises the Center for Management Studies (CMS) for undergraduate programs and the prestigious CMS Business School for postgraduate studies. Our programs are designed to develop business leaders who can navigate the complexities of global markets while maintaining ethical standards. We focus on experiential learning, case studies, and industry immersion.',
    vision: 'To nurture globally competent business leaders with ethical values who can create sustainable value for organizations and society.',
    mission: [
      'Provide world-class management education',
      'Develop entrepreneurial mindset and leadership skills',
      'Foster industry-relevant research and consulting',
      'Build global perspectives through international exposure'
    ],
    highlights: [
      { icon: Users, label: '3,000+ Alumni', desc: 'In leadership positions globally' },
      { icon: Award, label: 'Top 50 B-School', desc: 'Ranked in India' },
      { icon: Building, label: 'Industry Tie-ups', desc: 'With 200+ companies' },
    ],
    programs: [
      { level: 'Undergraduate (BBA/BMS)', courses: ['BBA in Corporate Management', 'BBA in Sports Management', 'BBA in Branding & Entrepreneurship', 'BMS in Aviation Management', 'BMS in International Business', 'BMS in Financial Services'], duration: '3 Years', eligibility: '10+2 with minimum 50%' },
      { level: 'Postgraduate (MBA)', courses: ['Finance', 'Marketing', 'Human Resource Management', 'Business Analytics', 'International Business', 'Logistics & Supply Chain Management', 'Dual Specializations available'], duration: '2 Years', eligibility: 'Graduation with minimum 50%, CAT/MAT/CMAT score' }
    ],
    faculty: [
      { name: 'Dr. Suresh Menon', designation: 'Professor & Dean', qualification: 'Ph.D. IIM Ahmedabad', specialization: 'Strategic Management', image: '/infractucture.jpg' },
      { name: 'Dr. Kavitha Rao', designation: 'Professor', qualification: 'Ph.D. IIM Bangalore', specialization: 'Marketing Management', image: '/infractucture.jpg' },
      { name: 'Prof. Vikram Singh', designation: 'Associate Professor', qualification: 'MBA, CFA', specialization: 'Finance & Investment', image: '/infractucture.jpg' },
      { name: 'Dr. Anita Desai', designation: 'Assistant Professor', qualification: 'Ph.D. XLRI', specialization: 'Human Resources', image: '/infractucture.jpg' },
    ],
    labs: [
      { name: 'Bloomberg Finance Lab', desc: 'Real-time market data and trading simulations' },
      { name: 'Business Analytics Lab', desc: 'Advanced analytics tools and visualization software' },
      { name: 'Entrepreneurship Cell', desc: 'Startup incubation and mentorship programs' },
      { name: 'Digital Marketing Lab', desc: 'SEO, SEM, and social media marketing tools' },
    ],
    achievements: [
      'Ranked among Top 50 B-Schools in India',
      '95% placement rate with average package ₹12 LPA',
      '50+ industry partnerships for internships',
      'International exchange programs with 15 universities',
      'CMS Case Competition winners - National level'
    ],
    hod: {
      name: 'Dr. Suresh Menon',
      designation: 'Dean, Faculty of Management',
      qualification: 'Ph.D. (IIM Ahmedabad), MBA (FMS Delhi)',
      email: 'dean.management@jainuniversity.ac.in',
      phone: '+91 80 4343 2345',
      office: 'CMS Block, Room 201, JAIN Global Campus',
      image: '/infractucture.jpg'
    }
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
    about: 'The Faculty of Commerce specializes in accounting, finance, and professional certifications. Our programs are integrated with globally recognized certifications like ACCA, CA, and CMA, providing students with a competitive edge in the financial sector. We focus on building strong foundations in accounting principles, financial management, and business law.',
    vision: 'To be the preferred destination for commerce education, producing finance professionals who are globally competent and ethically grounded.',
    mission: [
      'Integrate professional certifications with academic programs',
      'Develop industry-ready finance professionals',
      'Foster research in accounting and financial practices',
      'Build strong corporate partnerships for placements'
    ],
    highlights: [
      { icon: Users, label: '2,500+ Students', desc: 'Pursuing commerce programs' },
      { icon: Award, label: 'ACCA Platinum', desc: 'Approved Learning Partner' },
      { icon: Building, label: '95% Placement', desc: 'In top financial firms' },
    ],
    programs: [
      { level: 'Undergraduate (B.Com)', courses: ['B.Com Regular', 'B.Com Honors', 'B.Com Professional (integrated with ACCA, CA, or CMA)', 'B.Com in Investment Banking', 'B.Com in Corporate Accounting'], duration: '3 Years', eligibility: '10+2 with Commerce, minimum 50%' },
      { level: 'Postgraduate (M.Com)', courses: ['M.Com with Electives', 'M.Com in Accounting & Finance', 'M.Com in Financial Analysis'], duration: '2 Years', eligibility: 'B.Com with minimum 50%' }
    ],
    faculty: [
      { name: 'Dr. Ramesh Iyer', designation: 'Professor & HOD', qualification: 'Ph.D., CA, CMA', specialization: 'Financial Accounting', image: '/infractucture.jpg' },
      { name: 'CA Pradeep Gupta', designation: 'Associate Professor', qualification: 'CA, M.Com', specialization: 'Taxation & Audit', image: '/infractucture.jpg' },
      { name: 'Dr. Meera Krishnan', designation: 'Assistant Professor', qualification: 'Ph.D., ACCA', specialization: 'International Accounting', image: '/infractucture.jpg' },
    ],
    labs: [
      { name: 'Tally & SAP Lab', desc: 'Enterprise accounting software training' },
      { name: 'Financial Analysis Lab', desc: 'Stock analysis and portfolio management tools' },
      { name: 'E-Filing Center', desc: 'Tax filing and compliance software' },
    ],
    achievements: [
      'ACCA Platinum Status Learning Partner',
      '200+ students cleared CA Foundation',
      'MoU with Big 4 accounting firms',
      '₹8 LPA average placement package',
      'Best Commerce Department - State Award 2024'
    ],
    hod: {
      name: 'Dr. Ramesh Iyer',
      designation: 'Head of Department',
      qualification: 'Ph.D., CA, CMA',
      email: 'hod.commerce@jainuniversity.ac.in',
      phone: '+91 80 4343 3456',
      office: 'Commerce Block, Room 105, JAIN Global Campus',
      image: '/infractucture.jpg'
    }
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
    about: 'The School of Sciences oversees traditional and emerging scientific fields with a strong emphasis on research and practical applications. Our well-equipped laboratories and experienced faculty prepare students for careers in research, healthcare, and technology sectors. We offer programs in physics, chemistry, life sciences, and forensic sciences.',
    vision: 'To be a center of scientific excellence fostering groundbreaking research and producing scientists who contribute to human progress.',
    mission: [
      'Provide rigorous scientific education with research focus',
      'Develop critical thinking and analytical skills',
      'Promote interdisciplinary research collaborations',
      'Contribute to scientific knowledge through publications'
    ],
    highlights: [
      { icon: Users, label: '1,800+ Students', desc: 'In science programs' },
      { icon: Award, label: '40+ Research Papers', desc: 'Published annually' },
      { icon: Building, label: 'Advanced Labs', desc: 'For all disciplines' },
    ],
    programs: [
      { level: 'Undergraduate (B.Sc)', courses: ['Physics, Mathematics, Computer Science (PMCs)', 'Forensic Science', 'Biotechnology', 'Biochemistry', 'Genetics', 'Microbiology'], duration: '3 Years', eligibility: '10+2 with Science, minimum 50%' },
      { level: 'Postgraduate (M.Sc)', courses: ['Physics', 'Chemistry', 'Biotechnology', 'Microbiology', 'Forensic Science', 'Psychology'], duration: '2 Years', eligibility: 'B.Sc with minimum 55%' }
    ],
    faculty: [
      { name: 'Dr. Venkat Rao', designation: 'Professor & HOD', qualification: 'Ph.D. IISc', specialization: 'Molecular Biology', image: '/infractucture.jpg' },
      { name: 'Dr. Lakshmi Narayan', designation: 'Professor', qualification: 'Ph.D. TIFR', specialization: 'Theoretical Physics', image: '/infractucture.jpg' },
      { name: 'Dr. Sunita Verma', designation: 'Associate Professor', qualification: 'Ph.D. JNU', specialization: 'Forensic Science', image: '/infractucture.jpg' },
    ],
    labs: [
      { name: 'Biotechnology Research Lab', desc: 'PCR, gel electrophoresis, and cell culture facilities' },
      { name: 'Forensic Science Lab', desc: 'Crime scene analysis and DNA fingerprinting' },
      { name: 'Physics Instrumentation Lab', desc: 'Advanced spectroscopy and laser systems' },
      { name: 'Microbiology Lab', desc: 'Sterile culture and fermentation technology' },
    ],
    achievements: [
      '40+ research papers in indexed journals annually',
      'DST-FIST funded laboratory facilities',
      'Collaboration with DRDO for defense research',
      'Best Research Department Award 2024',
      '5 patents filed in biotechnology'
    ],
    hod: {
      name: 'Dr. Venkat Rao',
      designation: 'Head of Department',
      qualification: 'Ph.D. (IISc Bangalore)',
      email: 'hod.sciences@jainuniversity.ac.in',
      phone: '+91 80 4343 4567',
      office: 'Science Block, Room 201, JAIN Global Campus',
      image: '/infractucture.jpg'
    }
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
    about: 'The School of Design, Media and Creative Arts (SDMCA) is where creativity meets technology. Our programs blend traditional artistic skills with modern digital tools, preparing students for careers in design, animation, film, and media industries. We emphasize portfolio development, industry projects, and creative entrepreneurship.',
    vision: 'To be Asia\'s leading creative arts institution producing designers and artists who shape culture and drive innovation.',
    mission: [
      'Nurture creative talent through hands-on learning',
      'Bridge traditional arts with digital technologies',
      'Foster design thinking and creative problem-solving',
      'Build industry connections for career success'
    ],
    highlights: [
      { icon: Users, label: '1,200+ Creatives', desc: 'Shaping the industry' },
      { icon: Award, label: 'Award-Winning', desc: 'Student projects' },
      { icon: Building, label: 'Design Studios', desc: 'Industry-standard equipment' },
    ],
    programs: [
      { level: 'Undergraduate (B.Des/B.A./B.Sc)', courses: ['B.Des in Communication Design', 'B.Des in Product Design', 'B.Des in Interaction Design', 'B.A. in Fashion Design', 'B.A. in Film and Media', 'B.Sc in Animation', 'B.Sc in Gaming', 'B.Sc in Digital Filmmaking'], duration: '3-4 Years', eligibility: '10+2 with portfolio review' },
      { level: 'Postgraduate (M.Des/M.A./M.Sc)', courses: ['M.Des in User Experience (UX)', 'M.Des in Interior Design', 'M.A. in Journalism & Mass Communication', 'M.Sc in Graphics & Animation'], duration: '2 Years', eligibility: 'Graduation with portfolio' }
    ],
    faculty: [
      { name: 'Prof. Arjun Khanna', designation: 'Professor & Dean', qualification: 'NID, Royal College of Art', specialization: 'Industrial Design', image: '/infractucture.jpg' },
      { name: 'Prof. Neha Bhatia', designation: 'Associate Professor', qualification: 'NIFT, Parsons', specialization: 'Fashion Design', image: '/infractucture.jpg' },
      { name: 'Mr. Rohan Das', designation: 'Assistant Professor', qualification: 'FTII, UCLA', specialization: 'Film Direction', image: '/infractucture.jpg' },
    ],
    labs: [
      { name: 'Animation Studio', desc: 'Motion capture, 3D modeling, and rendering farms' },
      { name: 'Film Production Studio', desc: 'Professional cameras, lighting, and sound equipment' },
      { name: 'Fashion Design Lab', desc: 'Pattern making, sewing machines, and textile testing' },
      { name: 'UX Research Lab', desc: 'Eye tracking, usability testing, and prototyping tools' },
    ],
    achievements: [
      'National Award for Best Animation Short Film 2024',
      'Cannes Film Festival student section selection',
      '50+ students placed in top design studios',
      'Fashion week showcase participation',
      'Adobe Design Achievement Award winners'
    ],
    hod: {
      name: 'Prof. Arjun Khanna',
      designation: 'Dean, SDMCA',
      qualification: 'NID Ahmedabad, Royal College of Art London',
      email: 'dean.sdmca@jainuniversity.ac.in',
      phone: '+91 80 4343 5678',
      office: 'Design Block, Room 301, JAIN Global Campus',
      image: '/infractucture.jpg'
    }
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
    about: 'The Faculty of Humanities and Social Sciences offers a comprehensive liberal arts education that develops critical thinking, communication skills, and a deep understanding of human society. Our programs prepare students for diverse careers in media, policy, academia, and social sectors. We emphasize research, writing, and analytical reasoning.',
    vision: 'To cultivate thoughtful citizens and scholars who understand society and contribute meaningfully to human progress.',
    mission: [
      'Provide holistic liberal arts education',
      'Develop research and analytical capabilities',
      'Foster social awareness and civic responsibility',
      'Prepare students for diverse career paths'
    ],
    highlights: [
      { icon: Users, label: '1,500+ Students', desc: 'Exploring humanities' },
      { icon: Award, label: 'Research Focus', desc: 'Social impact studies' },
      { icon: Building, label: 'Media Lab', desc: 'Professional facilities' },
    ],
    programs: [
      { level: 'Undergraduate (B.A.)', courses: ['Economics (Honors)', 'Psychology', 'Sociology', 'Journalism', 'English (Optional)'], duration: '3 Years', eligibility: '10+2 with minimum 50%' },
      { level: 'Postgraduate (M.A.)', courses: ['Economics', 'Public Policy', 'Journalism & Mass Communication', 'Performing Arts'], duration: '2 Years', eligibility: 'Graduation with minimum 50%' }
    ],
    faculty: [
      { name: 'Dr. Nalini Rajan', designation: 'Professor & HOD', qualification: 'Ph.D. JNU', specialization: 'Media Studies', image: '/infractucture.jpg' },
      { name: 'Dr. Ashok Chatterjee', designation: 'Professor', qualification: 'Ph.D. Delhi School of Economics', specialization: 'Development Economics', image: '/infractucture.jpg' },
      { name: 'Dr. Priya Nair', designation: 'Associate Professor', qualification: 'Ph.D. NIMHANS', specialization: 'Clinical Psychology', image: '/infractucture.jpg' },
    ],
    labs: [
      { name: 'Media Production Lab', desc: 'Radio, TV, and digital content production' },
      { name: 'Psychology Lab', desc: 'Behavioral research and counseling facilities' },
      { name: 'Language Lab', desc: 'Multilingual communication training' },
    ],
    achievements: [
      'National award for best student journalism',
      '30+ research papers in peer-reviewed journals',
      'Partnership with leading media houses',
      'Student-run campus radio station',
      'Policy research cited by government bodies'
    ],
    hod: {
      name: 'Dr. Nalini Rajan',
      designation: 'Head of Department',
      qualification: 'Ph.D. (JNU New Delhi)',
      email: 'hod.humanities@jainuniversity.ac.in',
      phone: '+91 80 4343 6789',
      office: 'Humanities Block, Room 102, JAIN Global Campus',
      image: '/infractucture.jpg'
    }
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
    about: 'The School of Law provides rigorous legal education combining theoretical knowledge with practical skills. Our moot courts, legal aid clinics, and partnerships with law firms ensure students are ready to excel in the legal profession. We emphasize legal research, advocacy skills, and professional ethics.',
    vision: 'To produce legal professionals of the highest caliber who uphold justice and contribute to legal scholarship.',
    mission: [
      'Provide comprehensive legal education',
      'Develop advocacy and research skills',
      'Instill professional ethics and values',
      'Bridge theory with legal practice'
    ],
    highlights: [
      { icon: Users, label: '800+ Law Students', desc: 'Future legal minds' },
      { icon: Award, label: 'Bar Council', desc: 'Approved programs' },
      { icon: Building, label: 'Moot Court', desc: 'Professional practice' },
    ],
    programs: [
      { level: 'Undergraduate (5-Year Integrated)', courses: ['B.A. LL.B. (Honors)', 'B.B.A. LL.B. (Honors)'], duration: '5 Years', eligibility: '10+2 with minimum 45%, CLAT/LSAT score' },
      { level: 'Postgraduate (LL.M.)', courses: ['Corporate and Commercial Law', 'Intellectual Property Law', 'Criminal Law'], duration: '1-2 Years', eligibility: 'LL.B. with minimum 55%' }
    ],
    faculty: [
      { name: 'Dr. Justice (Retd.) K.N. Rao', designation: 'Professor & Dean', qualification: 'LL.D., Former High Court Judge', specialization: 'Constitutional Law', image: '/infractucture.jpg' },
      { name: 'Dr. Smita Joshi', designation: 'Professor', qualification: 'Ph.D. NLSIU', specialization: 'Corporate Law', image: '/infractucture.jpg' },
      { name: 'Adv. Rahul Mehta', designation: 'Associate Professor', qualification: 'LL.M. Harvard', specialization: 'International Law', image: '/infractucture.jpg' },
    ],
    labs: [
      { name: 'Moot Court Hall', desc: 'Full-fledged courtroom for advocacy practice' },
      { name: 'Legal Aid Clinic', desc: 'Pro bono legal services to community' },
      { name: 'Legal Research Center', desc: 'Extensive law library and databases' },
    ],
    achievements: [
      'National Moot Court Championship winners 2024',
      'Bar Council of India approved programs',
      '100+ students placed in top law firms',
      'Legal aid clinic helped 500+ cases',
      'Published Law Review Journal'
    ],
    hod: {
      name: 'Dr. Justice (Retd.) K.N. Rao',
      designation: 'Dean, School of Law',
      qualification: 'LL.D., Former Karnataka High Court Judge',
      email: 'dean.law@jainuniversity.ac.in',
      phone: '+91 80 4343 7890',
      office: 'Law Block, Room 101, JAIN Global Campus',
      image: '/infractucture.jpg'
    }
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
    about: 'The School of Allied Healthcare and Sciences focuses on paramedical and healthcare-related disciplines. With clinical partnerships and hands-on training, our programs prepare students for essential roles in the healthcare ecosystem. We emphasize practical skills, patient care, and healthcare technology.',
    vision: 'To produce competent healthcare professionals who deliver compassionate care and advance medical sciences.',
    mission: [
      'Provide industry-relevant healthcare education',
      'Develop clinical skills through hospital training',
      'Foster research in healthcare technologies',
      'Build ethical healthcare practitioners'
    ],
    highlights: [
      { icon: Users, label: '1,000+ Students', desc: 'In healthcare programs' },
      { icon: Award, label: 'Hospital Tie-ups', desc: 'Clinical training' },
      { icon: Building, label: 'Simulation Labs', desc: 'Practical experience' },
    ],
    programs: [
      { level: 'Undergraduate Programs', courses: ['Bachelor of Physiotherapy (BPT)', 'B.Sc in Medical Lab Technology', 'B.Sc in Cardiac Technology', 'B.Sc in Anesthesia & Operation Theatre Technology', 'B.Sc in Cancer Biology', 'B.Sc in Psychology'], duration: '3-4 Years', eligibility: '10+2 with Science (PCB), minimum 50%' }
    ],
    faculty: [
      { name: 'Dr. Sanjay Kulkarni', designation: 'Professor & HOD', qualification: 'Ph.D., MPT', specialization: 'Neurophysiotherapy', image: '/infractucture.jpg' },
      { name: 'Dr. Rekha Sharma', designation: 'Associate Professor', qualification: 'M.Sc., Ph.D.', specialization: 'Clinical Biochemistry', image: '/infractucture.jpg' },
      { name: 'Mr. Arun Nair', designation: 'Assistant Professor', qualification: 'M.Sc. Cardiac Technology', specialization: 'Cardiovascular Diagnostics', image: '/infractucture.jpg' },
    ],
    labs: [
      { name: 'Physiotherapy Clinic', desc: 'Rehabilitation equipment and patient care facilities' },
      { name: 'Clinical Simulation Lab', desc: 'Patient simulators and diagnostic equipment' },
      { name: 'Medical Lab Technology Lab', desc: 'Pathology and microbiology testing equipment' },
      { name: 'Cardiac Care Lab', desc: 'ECG, Echo, and cardiac monitoring systems' },
    ],
    achievements: [
      'Tie-ups with 15 multi-specialty hospitals',
      '100% placement in healthcare sector',
      'State-of-the-art simulation center',
      'Student clinics serving 1000+ patients annually',
      'Research collaboration with AIIMS'
    ],
    hod: {
      name: 'Dr. Sanjay Kulkarni',
      designation: 'Head of Department',
      qualification: 'Ph.D. (NIMHANS), MPT (Ortho)',
      email: 'hod.sahs@jainuniversity.ac.in',
      phone: '+91 80 4343 8901',
      office: 'Healthcare Block, Room 201, JAIN Global Campus',
      image: '/infractucture.jpg'
    }
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
    about: 'The Faculty of Applied Computing offers cutting-edge programs in computer applications and information technology. With a curriculum aligned with industry needs and hands-on project experience, our graduates are ready to tackle real-world technology challenges. We focus on practical skills, industry certifications, and emerging technologies.',
    vision: 'To be a premier institution for applied computing education, producing tech professionals who drive digital transformation.',
    mission: [
      'Provide industry-aligned computing education',
      'Develop practical programming and problem-solving skills',
      'Foster innovation and entrepreneurship in tech',
      'Build strong industry connections for placements'
    ],
    highlights: [
      { icon: Users, label: '2,000+ Students', desc: 'In computing programs' },
      { icon: Award, label: '100% Placement', desc: 'In IT sector' },
      { icon: Building, label: 'Tech Labs', desc: 'Latest infrastructure' },
    ],
    programs: [
      { level: 'Undergraduate (BCA)', courses: ['Artificial Intelligence', 'Cloud Technology', 'Cybersecurity', 'Data Analytics', 'Mobile Applications'], duration: '3 Years', eligibility: '10+2 with Mathematics, minimum 50%' },
      { level: 'Postgraduate (MCA)', courses: ['General MCA', 'Information Security', 'Storage & Cloud Technology'], duration: '2 Years', eligibility: 'BCA/B.Sc with Mathematics, minimum 50%' }
    ],
    faculty: [
      { name: 'Dr. Prakash Kumar', designation: 'Professor & HOD', qualification: 'Ph.D. IIT Madras', specialization: 'Cloud Computing', image: '/infractucture.jpg' },
      { name: 'Dr. Deepa Nair', designation: 'Associate Professor', qualification: 'Ph.D. NIT', specialization: 'Artificial Intelligence', image: '/infractucture.jpg' },
      { name: 'Mr. Karthik Srinivas', designation: 'Assistant Professor', qualification: 'M.Tech, AWS Certified', specialization: 'DevOps & Cloud', image: '/infractucture.jpg' },
    ],
    labs: [
      { name: 'Cloud Computing Lab', desc: 'AWS, Azure, and GCP infrastructure' },
      { name: 'AI/ML Lab', desc: 'GPU workstations and deep learning frameworks' },
      { name: 'Mobile App Development Lab', desc: 'iOS and Android development environment' },
      { name: 'Cybersecurity Lab', desc: 'Ethical hacking and penetration testing tools' },
    ],
    achievements: [
      '100% placement with average ₹6 LPA package',
      'Smart India Hackathon winners',
      'Industry certifications: AWS, Azure, Google Cloud',
      '50+ student startups incubated',
      'Collaboration with TCS, Infosys, Wipro'
    ],
    hod: {
      name: 'Dr. Prakash Kumar',
      designation: 'Head of Department',
      qualification: 'Ph.D. (IIT Madras), M.Tech (NIT)',
      email: 'hod.computing@jainuniversity.ac.in',
      phone: '+91 80 4343 9012',
      office: 'Computing Block, Room 301, JAIN Global Campus',
      image: '/infractucture.jpg'
    }
  }
};

type TabType = 'about' | 'programs' | 'faculty' | 'labs' | 'contact';

export default function DepartmentPage() {
  const params = useParams();
  const slug = params.slug as string;
  const department = DEPARTMENTS[slug as keyof typeof DEPARTMENTS];
  const [activeTab, setActiveTab] = useState<TabType>('about');

  if (!department) {
    return (
      <div className="pt-[72px] min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Department Not Found</h1>
          <Link href="/academics" className="text-jain-red hover:underline">
            ← Back to Departments
          </Link>
        </div>
      </div>
    );
  }

  const { name, fullName, icon: Icon, color, bg, bgGradient, border, image, about, vision, mission, highlights, programs, faculty, labs, achievements, hod } = department;

  const tabs = [
    { id: 'about' as TabType, label: 'About & Vision', icon: Eye },
    { id: 'programs' as TabType, label: 'Programs', icon: GraduationCap },
    { id: 'faculty' as TabType, label: 'Faculty', icon: Users },
    { id: 'labs' as TabType, label: 'Labs & Research', icon: Beaker },
    { id: 'contact' as TabType, label: 'Contact HOD', icon: Mail },
  ];

  return (
    <div className="pt-[72px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-br ${bgGradient} py-16 sm:py-20 px-4 overflow-hidden`}>
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
            className="flex flex-col lg:flex-row lg:items-end gap-8"
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
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
                {name}
              </h1>
              <p className="text-lg text-white/90">{fullName}</p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4">
              {highlights.map(({ icon: HIcon, label, desc }, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                  <div className="flex items-center gap-3">
                    <HIcon size={20} className="text-white" />
                    <div>
                      <p className="text-white font-bold text-sm">{label}</p>
                      <p className="text-white/70 text-xs">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2 overflow-x-auto scrollbar-hide">
            {tabs.map(({ id, label, icon: TabIcon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === id 
                    ? `${bg} ${color}` 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <TabIcon size={16} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* About & Vision Tab */}
        {activeTab === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Department Image */}
              <div className="lg:col-span-1">
                <div className={`relative h-64 lg:h-full min-h-[300px] rounded-3xl overflow-hidden border-4 ${border} shadow-lg`}>
                  <Image src={image} alt={name} fill className="object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${bgGradient} opacity-20`} />
                </div>
              </div>

              {/* About Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center`}>
                      <BookOpen size={20} className={color} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">About the Department</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{about}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Vision */}
                  <div className={`${bg} rounded-3xl p-6 border ${border}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Eye size={20} className={color} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Vision</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{vision}</p>
                  </div>

                  {/* Mission */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center`}>
                        <Target size={20} className={color} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Mission</h3>
                    </div>
                    <ul className="space-y-2">
                      {mission.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <ChevronRight size={16} className={`${color} flex-shrink-0 mt-1`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Programs Tab */}
        {activeTab === 'programs' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {programs.map((program, i) => (
              <div key={i} className={`bg-white rounded-3xl border ${border} overflow-hidden shadow-sm`}>
                <div className={`${bg} px-6 py-4 border-b ${border}`}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-gray-900">{program.level}</h3>
                    <div className="flex gap-4 text-sm">
                      <span className={`${color} font-medium`}>Duration: {program.duration}</span>
                      <span className="text-gray-600">|</span>
                      <span className="text-gray-600">Eligibility: {program.eligibility}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Courses Offered</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {program.courses.map((course, j) => (
                      <div key={j} className={`flex items-center gap-2 p-3 ${bg} rounded-xl`}>
                        <ChevronRight size={16} className={color} />
                        <span className="text-gray-800 text-sm font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center pt-4">
              <Link 
                href="/admissions" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-jain-red hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                Apply Now <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Faculty Tab */}
        {activeTab === 'faculty' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {faculty.map((member, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${bgGradient} opacity-40`} />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                    <p className={`${color} text-sm font-medium mb-2`}>{member.designation}</p>
                    <p className="text-gray-500 text-xs mb-2">{member.qualification}</p>
                    <div className={`${bg} rounded-lg px-3 py-2`}>
                      <p className="text-gray-700 text-xs"><span className="font-semibold">Specialization:</span> {member.specialization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Labs & Research Tab */}
        {activeTab === 'labs' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Labs */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Beaker size={24} className={color} />
                Laboratories & Facilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {labs.map((lab, i) => (
                  <div key={i} className={`${bg} rounded-2xl p-5 border ${border}`}>
                    <h3 className="font-bold text-gray-900 mb-2">{lab.name}</h3>
                    <p className="text-gray-600 text-sm">{lab.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Trophy size={24} className={color} />
                Achievements & Recognition
              </h2>
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-8 h-8 ${bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Award size={16} className={color} />
                      </div>
                      <span className="text-gray-700 pt-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Contact HOD Tab */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className={`bg-white rounded-3xl overflow-hidden shadow-lg border ${border}`}>
              <div className={`bg-gradient-to-r ${bgGradient} p-6 text-white`}>
                <h2 className="text-2xl font-bold">Contact Head of Department</h2>
                <p className="text-white/80">Get in touch with the department leadership</p>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* HOD Photo */}
                  <div className="flex-shrink-0">
                    <div className={`relative w-40 h-40 rounded-2xl overflow-hidden border-4 ${border}`}>
                      <Image src={hod.image} alt={hod.name} fill className="object-cover" />
                    </div>
                  </div>

                  {/* HOD Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{hod.name}</h3>
                      <p className={`${color} font-semibold`}>{hod.designation}</p>
                      <p className="text-gray-500 text-sm mt-1">{hod.qualification}</p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <a href={`mailto:${hod.email}`} className="flex items-center gap-3 text-gray-700 hover:text-jain-red transition-colors">
                        <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center`}>
                          <Mail size={18} className={color} />
                        </div>
                        <span>{hod.email}</span>
                      </a>
                      
                      <a href={`tel:${hod.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-jain-red transition-colors">
                        <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center`}>
                          <Phone size={18} className={color} />
                        </div>
                        <span>{hod.phone}</span>
                      </a>
                      
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center`}>
                          <MapPin size={18} className={color} />
                        </div>
                        <span>{hod.office}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
                  <Link 
                    href="/admissions" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-jain-red hover:bg-red-700 text-white font-bold rounded-xl transition-all"
                  >
                    Apply to {name} <ChevronRight size={16} />
                  </Link>
                  <Link 
                    href="/campus-life" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-all"
                  >
                    Visit Campus
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
