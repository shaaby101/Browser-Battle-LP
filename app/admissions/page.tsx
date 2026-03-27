'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, FileText, ChevronRight, X, User, Mail, Phone, Calendar, CreditCard, GraduationCap, CheckCircle2 } from 'lucide-react';

// Course data structure
const COURSE_DATA = {
  UG: {
    Engineering: ['B.Tech - Computer Science', 'B.Tech - Aerospace', 'B.Tech - Mechanical', 'B.Tech - Civil'],
    Management: ['BBA (Corporate)', 'BMS (Aviation)', 'BBA (Sports)'],
    Commerce: ['B.Com (Regular)', 'B.Com (Professional)', 'B.Com (Honors)'],
  },
  PG: {
    Engineering: ['M.Tech (Data Sciences)', 'M.Tech (Structural)'],
    Management: ['MBA (Finance)', 'MBA (Marketing)', 'MBA (Business Analytics)'],
    Commerce: ['M.Com (Accounting & Finance)', 'M.Com (Financial Analysis)'],
  },
};

type Level = 'UG' | 'PG' | '';
type Faculty = keyof typeof COURSE_DATA.UG | '';

interface FormData {
  level: Level;
  faculty: Faculty;
  course: string;
  fullName: string;
  email: string;
  countryCode: string;
  mobile: string;
  dob: string;
  gender: string;
  aadhaar: string;
  abcId: string;
  grade10: string;
  grade12: string;
  degreeCgpa: string;
}

type FormErrors = { [K in keyof FormData]?: string };

const initialFormData: FormData = {
  level: '',
  faculty: '',
  course: '',
  fullName: '',
  email: '',
  countryCode: '+91',
  mobile: '',
  dob: '',
  gender: '',
  aadhaar: '',
  abcId: '',
  grade10: '',
  grade12: '',
  degreeCgpa: '',
};

export default function AdmissionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      // Reset dependent fields
      if (field === 'level') {
        updated.faculty = '';
        updated.course = '';
      }
      if (field === 'faculty') {
        updated.course = '';
      }
      return updated;
    });
    // Clear error on change
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.level) newErrors.level = 'Please select a level';
      if (!formData.faculty) newErrors.faculty = 'Please select a program';
      if (!formData.course) newErrors.course = 'Please select a course';
    }

    if (step === 2) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.mobile.trim()) {
        newErrors.mobile = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(formData.mobile)) {
        newErrors.mobile = 'Mobile must be 10 digits';
      }
      if (!formData.dob) newErrors.dob = 'Date of birth is required';
      if (!formData.gender) newErrors.gender = 'Please select gender';
      if (!formData.aadhaar.trim()) newErrors.aadhaar = 'Aadhaar/Passport is required';
      if (!formData.abcId.trim()) newErrors.abcId = 'ABC ID is required';
    }

    if (step === 3) {
      if (!formData.grade10.trim()) newErrors.grade10 = '10th grade % is required';
      if (!formData.grade12.trim()) newErrors.grade12 = '12th grade % is required';
      if (formData.level === 'PG' && !formData.degreeCgpa.trim()) {
        newErrors.degreeCgpa = 'Degree CGPA is required for PG';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      const refId = `JAIN2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(refId);
      setIsSubmitted(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
    setReferenceId('');
  };

  const getFacultyOptions = () => {
    if (!formData.level) return [];
    return Object.keys(COURSE_DATA[formData.level as 'UG' | 'PG']);
  };

  const getCourseOptions = () => {
    if (!formData.level || !formData.faculty) return [];
    return COURSE_DATA[formData.level as 'UG' | 'PG'][formData.faculty as keyof typeof COURSE_DATA.UG] || [];
  };

  const stepTitles = ['Program Selection', 'Personal Information', 'Academic Details'];

  return (
    <div className="pt-[72px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-jain-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold tracking-[0.15em] uppercase mb-4">
              <Award size={13} aria-hidden="true" /> Admissions
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Admissions 2026–27
            </h1>
            <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
              Applications are open for B.Tech, MBA, and integrated programs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="bg-white rounded-2xl p-10 shadow-lg max-w-xl mx-auto text-center border border-gray-100"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText size={28} className="text-jain-red" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-extrabold text-jain-navy mb-3">Start Your Application</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Fill out the online application form for B.Tech, MBA, BBA-LLB and other programs
            at JAIN Global Campus, Kanakapura.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-jain-red hover:bg-red-800 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-red-200"
          >
            Apply Online <ChevronRight size={16} aria-hidden="true" />
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleCloseModal}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-jain-navy to-blue-900 px-6 py-5 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Admission Application 2026-27</h3>
                  <button
                    onClick={handleCloseModal}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Progress Bar */}
                {!isSubmitted && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Step {currentStep} of 3</span>
                      <span>{stepTitles[currentStep - 1]}</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-jain-red"
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentStep / 3) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {isSubmitted ? (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={48} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted Successfully!</h3>
                    <p className="text-gray-600 mb-4">Your application has been received and is being processed.</p>
                    <div className="inline-block bg-gray-100 rounded-xl px-6 py-3 mb-6">
                      <p className="text-sm text-gray-500">Reference ID</p>
                      <p className="text-xl font-bold text-jain-navy">{referenceId}</p>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">Please save this reference ID for future correspondence.</p>
                    <button
                      onClick={handleCloseModal}
                      className="px-8 py-3 bg-jain-navy hover:bg-blue-900 text-white font-bold rounded-xl transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <AnimatePresence mode="wait">
                    {/* Step 1: Program Selection */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                            <GraduationCap size={20} className="text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Select Your Program</h4>
                            <p className="text-sm text-gray-500">Choose your level, program, and course</p>
                          </div>
                        </div>

                        {/* Level */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Level <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formData.level}
                            onChange={e => handleInputChange('level', e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.level ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                          >
                            <option value="">Select Level</option>
                            <option value="UG">Undergraduate (UG)</option>
                            <option value="PG">Postgraduate (PG)</option>
                          </select>
                          {errors.level && <p className="text-red-500 text-sm mt-1">{errors.level}</p>}
                        </div>

                        {/* Program */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Program <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formData.faculty}
                            onChange={e => handleInputChange('faculty', e.target.value)}
                            disabled={!formData.level}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.faculty ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed`}
                          >
                            <option value="">Select Program</option>
                            {getFacultyOptions().map(faculty => (
                              <option key={faculty} value={faculty}>{faculty}</option>
                            ))}
                          </select>
                          {errors.faculty && <p className="text-red-500 text-sm mt-1">{errors.faculty}</p>}
                        </div>

                        {/* Course - Progressive Disclosure */}
                        {formData.faculty && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                          >
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Course <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={formData.course}
                              onChange={e => handleInputChange('course', e.target.value)}
                              className={`w-full px-4 py-3 rounded-xl border ${errors.course ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                            >
                              <option value="">Select Course</option>
                              {getCourseOptions().map(course => (
                                <option key={course} value={course}>{course}</option>
                              ))}
                            </select>
                            {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {/* Step 2: Personal Information */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-5"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                            <User size={20} className="text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Personal Information</h4>
                            <p className="text-sm text-gray-500">Enter your personal details</p>
                          </div>
                        </div>

                        {/* Full Name */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              value={formData.fullName}
                              onChange={e => handleInputChange('fullName', e.target.value)}
                              placeholder="Enter your full name"
                              className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                            />
                          </div>
                          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                              type="email"
                              value={formData.email}
                              onChange={e => handleInputChange('email', e.target.value)}
                              placeholder="your.email@example.com"
                              className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                            />
                          </div>
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Mobile */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Mobile Number <span className="text-red-500">*</span>
                          </label>
                          <div className="flex gap-2">
                            <select
                              value={formData.countryCode}
                              onChange={e => handleInputChange('countryCode', e.target.value)}
                              className="w-24 px-3 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            >
                              <option value="+91">+91</option>
                              <option value="+1">+1</option>
                              <option value="+44">+44</option>
                              <option value="+61">+61</option>
                              <option value="+971">+971</option>
                            </select>
                            <div className="relative flex-1">
                              <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                              <input
                                type="tel"
                                value={formData.mobile}
                                onChange={e => handleInputChange('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))}
                                placeholder="10-digit mobile number"
                                className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.mobile ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                              />
                            </div>
                          </div>
                          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                        </div>

                        {/* DOB & Gender */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Date of Birth <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                              <input
                                type="date"
                                value={formData.dob}
                                onChange={e => handleInputChange('dob', e.target.value)}
                                className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.dob ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                              />
                            </div>
                            {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Gender <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={formData.gender}
                              onChange={e => handleInputChange('gender', e.target.value)}
                              className={`w-full px-4 py-3 rounded-xl border ${errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                            >
                              <option value="">Select</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                          </div>
                        </div>

                        {/* Aadhaar & ABC ID */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Aadhaar/Passport <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                              <input
                                type="text"
                                value={formData.aadhaar}
                                onChange={e => handleInputChange('aadhaar', e.target.value)}
                                placeholder="Enter ID number"
                                className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.aadhaar ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                              />
                            </div>
                            {errors.aadhaar && <p className="text-red-500 text-sm mt-1">{errors.aadhaar}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              ABC ID <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={formData.abcId}
                              onChange={e => handleInputChange('abcId', e.target.value)}
                              placeholder="Enter ABC ID"
                              className={`w-full px-4 py-3 rounded-xl border ${errors.abcId ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                            />
                            {errors.abcId && <p className="text-red-500 text-sm mt-1">{errors.abcId}</p>}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Academic Details */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-5"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                            <Award size={20} className="text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Academic History</h4>
                            <p className="text-sm text-gray-500">Enter your academic qualifications</p>
                          </div>
                        </div>

                        {/* 10th Grade */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            10th Grade Percentage <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              min="0"
                              max="100"
                              step="0.01"
                              value={formData.grade10}
                              onChange={e => handleInputChange('grade10', e.target.value)}
                              placeholder="Enter percentage (e.g., 85.50)"
                              className={`w-full px-4 py-3 rounded-xl border ${errors.grade10 ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">%</span>
                          </div>
                          {errors.grade10 && <p className="text-red-500 text-sm mt-1">{errors.grade10}</p>}
                        </div>

                        {/* 12th Grade */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            12th Grade Percentage <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              min="0"
                              max="100"
                              step="0.01"
                              value={formData.grade12}
                              onChange={e => handleInputChange('grade12', e.target.value)}
                              placeholder="Enter percentage (e.g., 88.75)"
                              className={`w-full px-4 py-3 rounded-xl border ${errors.grade12 ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">%</span>
                          </div>
                          {errors.grade12 && <p className="text-red-500 text-sm mt-1">{errors.grade12}</p>}
                        </div>

                        {/* Degree CGPA - Only for PG */}
                        {formData.level === 'PG' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                          >
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Degree CGPA <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="number"
                                min="0"
                                max="10"
                                step="0.01"
                                value={formData.degreeCgpa}
                                onChange={e => handleInputChange('degreeCgpa', e.target.value)}
                                placeholder="Enter CGPA (e.g., 8.5)"
                                className={`w-full px-4 py-3 rounded-xl border ${errors.degreeCgpa ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                              />
                              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">/10</span>
                            </div>
                            {errors.degreeCgpa && <p className="text-red-500 text-sm mt-1">{errors.degreeCgpa}</p>}
                          </motion.div>
                        )}

                        {/* Summary Card */}
                        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                          <h5 className="font-semibold text-blue-900 mb-2">Application Summary</h5>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <p className="text-gray-600">Program:</p>
                            <p className="font-medium text-gray-900">{formData.level === 'UG' ? 'Undergraduate' : 'Postgraduate'}</p>
                            <p className="text-gray-600">Program:</p>
                            <p className="font-medium text-gray-900">{formData.faculty}</p>
                            <p className="text-gray-600">Course:</p>
                            <p className="font-medium text-gray-900">{formData.course}</p>
                            <p className="text-gray-600">Applicant:</p>
                            <p className="font-medium text-gray-900">{formData.fullName}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>

              {/* Modal Footer */}
              {!isSubmitted && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between">
                  {currentStep > 1 ? (
                    <button
                      onClick={handleBack}
                      className="px-6 py-2.5 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                    >
                      ← Back
                    </button>
                  ) : (
                    <div />
                  )}
                  
                  {currentStep < 3 ? (
                    <button
                      onClick={handleNext}
                      className="px-8 py-2.5 bg-jain-navy hover:bg-blue-900 text-white font-bold rounded-xl transition-colors"
                    >
                      Next →
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-2.5 bg-jain-red hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
                    >
                      Submit Application
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
