'use client';

import Image from 'next/image';
import { MapPin, Mail, Phone, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function ContactUsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── 1. CONTACT HERO (Photo Overlay) ── */}
      <section className="relative pt-32 pb-48 lg:pt-40 lg:pb-56 overflow-hidden bg-jain-navy">
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src="/empowering.jpg"
            alt="Students at JAIN Campus"
            fill
            className="object-cover opacity-80"
            style={{ objectPosition: 'center 30%' }}
            priority
          />
          <div className="absolute inset-0 bg-[#0b132b]/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-jain-navy via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-red-300 text-xs font-bold tracking-[0.2em] uppercase mb-4 justify-center w-full">
              <MessageSquare size={14} /> Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
              We'd Love to Hear <br />
              <span className="text-jain-red/90 drop-shadow-md">From You</span>
            </h1>
            <p className="text-blue-100 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Reach out to our Kanakapura campus admission counselors. We are here to guide your journey to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. CONTACT INFO CARDS (Floating over Hero) ── */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 mb-24">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {/* Location */}
          <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-jain-red flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-jain-red">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold text-jain-navy mb-3 uppercase tracking-wide">Location</h3>
            <p className="text-gray-600 font-medium leading-relaxed mb-4">
              JAIN Global Campus<br />
              Jakkasandra Post, Kanakapura Road<br />
              Ramanagara District - 562112
            </p>
            <a href="#map" className="text-jain-red font-bold text-sm hover:underline mt-auto">View on Map</a>
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-jain-red flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-jain-red">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold text-jain-navy mb-3 uppercase tracking-wide">Email</h3>
            <p className="text-gray-600 font-medium leading-relaxed mb-4">
              admissions@jainuniversity.ac.in<br />
              enquiry.ug@jainuniversity.ac.in
            </p>
            <a href="mailto:admissions@jainuniversity.ac.in" className="text-jain-red font-bold text-sm hover:underline mt-auto">Send us an Email</a>
          </motion.div>

          {/* Phone */}
          <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-jain-red flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-jain-red">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-jain-navy mb-3 uppercase tracking-wide">Contact Details</h3>
            <p className="text-gray-600 font-medium leading-relaxed mb-4">
              +91 97669 89091<br />
              +91 97669 66299<br />
              <span className="text-sm text-gray-400 mt-2 block">(Mon - Sat, 9:00 AM to 6:00 PM)</span>
            </p>
            <a href="tel:+919766989091" className="text-jain-red font-bold text-sm hover:underline mt-auto">Call Us Now</a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 3. FORM & MAP SECTION ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-jain-navy mb-4">
              We Love to Hear From You
            </h2>
            <div className="w-16 h-1.5 bg-jain-red rounded-full mx-auto mb-6" />
            <p className="text-gray-600 font-medium max-w-2xl mx-auto">
              Please call or email the contact form and our admissions team will be happy to assist you with any questions regarding courses, fees, and campus tours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            
            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-card hover:shadow-card-lg border border-gray-100 transition-all duration-300"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name <span className="text-red-500">*</span></label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-jain-red/50 focus:border-jain-red transition-all" placeholder="Enter your full name" required />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-bold text-gray-700 mb-2">Mobile No <span className="text-red-500">*</span></label>
                  <input type="tel" id="mobile" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-jain-red/50 focus:border-jain-red transition-all" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-jain-red/50 focus:border-jain-red transition-all" placeholder="you@example.com" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-jain-red/50 focus:border-jain-red transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-jain-red hover:bg-red-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-red-500/30 transition-all duration-200 hover:-translate-y-1 active:scale-95">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div 
               id="map"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="h-[600px] w-full bg-gray-200 rounded-2xl shadow-card overflow-hidden border border-gray-100 flex flex-col relative group"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.414341908643!2d77.439812!3d12.686153000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae5b800ca8d50b%3A0xe54e198adbf4aee2!2sJAIN%20Global%20Campus!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 flex items-start gap-4 pointer-events-none">
                 <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 text-jain-red">
                   <MapPin size={20} />
                 </div>
                 <div>
                   <h4 className="font-bold text-jain-navy">JAIN Global Campus</h4>
                   <p className="text-xs text-gray-600 mt-1 leading-snug">Jakkasandra Post, Kanakapura Road, Ramanagara, Karnataka 562112</p>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
