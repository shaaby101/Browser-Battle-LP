'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, MapPin } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  description: string;
  image: string;
  embedUrl: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Main Building Entrance',
    description: 'The grand entrance to our historic main campus building',
    image: '/jain university.jpg',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774595643536!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ08yNHZCYlE.!2m2!1d12.64203809938147!2d77.44017986454794!3f301.1712113947883!4f8.541748793753413!5f0.4000000000000002',
  },
  {
    id: 2,
    name: 'Library & Resource Centre',
    description: 'Browse our collection of 50,000+ books and digital resources',
    image: '/academicexcellence.jpg',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774596200355!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ08yLW5qOUFF!2m2!1d12.64227462911871!2d77.43987334232158!3f47.04612033219896!4f-6.240117564399199!5f0.7820865974627469',
  },
  {
    id: 3,
    name: 'Classroom Block A',
    description: 'State-of-the-art smart classrooms with modern amenities',
    image: '/capus.jpg',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774596630348!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ08yNTNiWFE.!2m2!1d12.64221725293013!2d77.44006184351893!3f239.99679489453865!4f-2.2743875162097!5f0.7820865974627469',
  },
  {
    id: 4,
    name: 'Auditorium',
    description: '2000-seat auditorium for events, seminars and cultural programs',
    image: '/infractucture.jpg',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774596747325!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ08yOW1ENkFF!2m2!1d12.64227577877584!2d77.44007812832686!3f42.37816568549938!4f-10.355979600586664!5f0.7820865974627469',
  },
  {
    id: 5,
    name: 'Sports Ground',
    description: 'Olympic-standard facilities for indoor and outdoor sports',
    image: '/cricketground.jpg',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774598974443!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ08yNVBDdXdF!2m2!1d12.64222630377511!2d77.44000642262301!3f294.85855006842826!4f-7.886005406703546!5f0.7820865974627469',
  },
  {
    id: 6,
    name: 'Cafeteria & Food Court',
    description: 'Multi-cuisine food court serving healthy and delicious meals',
    image: '/campus life.jpg',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.55!3d12.975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzM1LjAiTiA3N8KwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567895',
  },
  {
    id: 7,
    name: 'Engineering Laboratories',
    description: 'Cutting-edge research labs with advanced technical equipment',
    image: '/empowering.jpg',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774603485706!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ08yLTJOYXc.!2m2!1d12.64222563311668!2d77.44007541419238!3f305.2647298546833!4f-8.224462883345382!5f0.7820865974627469',
  },
  {
    id: 8,
    name: 'Hostel Rooms',
    description: 'Comfortable residential facilities with modern amenities',
    image: '/300 acers.jpg',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774596982083!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ08yNVAwS1E.!2m2!1d12.64220782562587!2d77.44002445849414!3f220.15688974496453!4f-14.753027737448619!5f0.7820865974627469',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function CampusLifePage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-jain-navy overflow-hidden">
        <div className="absolute inset-0 bg-jain-navy" />
        <div className="absolute inset-0 bg-[url('/infractucture.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-black/50 opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight"
          >
            Explore <span className="text-red-400">Our Campus</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-zinc-200 max-w-2xl mx-auto font-medium drop-shadow-md"
          >
            Take an interactive, 360° virtual tour of our world-class facilities and breathtaking 300-acre infrastructure.
          </motion.p>
        </div>
      </section>

      {/* ── PHOTO GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {locations.map((location) => (
            <motion.div
              key={location.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => setSelectedLocation(location)}
              className="group relative h-[340px] rounded-2xl shadow-card hover:shadow-2xl overflow-hidden cursor-pointer bg-jain-navy border-4 border-white transition-all duration-300"
            >
              {/* Background Image */}
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/95 via-[#0b132b]/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* Sleek Button Overlay (Visible on Hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#0b132b]/30 backdrop-blur-[2px]">
                <div className="flex items-center gap-2 bg-white text-jain-navy px-6 py-3 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <MapPin size={16} className="text-jain-red" />
                  <span className="font-bold text-sm tracking-wide">Enter 360°</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-extrabold text-white text-xl mb-1.5 drop-shadow-md leading-tight group-hover:text-red-100 transition-colors">
                  {location.name}
                </h3>
                <p className="text-blue-100 text-xs font-medium leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {location.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── 360° MODAL ── */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-jain-navy/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6" 
            onClick={() => setSelectedLocation(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="bg-white rounded-2xl w-full max-w-6xl overflow-hidden shadow-2xl flex flex-col border border-white/20" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-jain-red shadow-sm border border-red-100">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-jain-navy text-lg sm:text-xl leading-tight">{selectedLocation.name}</h3>
                    <p className="text-gray-500 font-medium text-xs mt-0.5">{selectedLocation.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedLocation(null)} 
                  className="p-2.5 bg-gray-50 hover:bg-jain-red text-jain-navy hover:text-white rounded-full transition-colors duration-200 border border-gray-200 hover:border-jain-red"
                  aria-label="Close 360 viewer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* iframe container */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[75vh] bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                  <div className="w-10 h-10 border-4 border-jain-red border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs font-bold text-gray-500 animate-pulse tracking-widest uppercase">Loading 360° Environment...</span>
                </div>
                <iframe
                  src={selectedLocation.embedUrl}
                  className="absolute inset-0 w-full h-full border-0 z-10"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`360° view of ${selectedLocation.name}`}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}