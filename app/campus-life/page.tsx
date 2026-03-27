'use client';

import { useState } from 'react';

interface Location {
  id: number;
  name: string;
  description: string;
  icon: string;
  embedUrl: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Main Building Entrance',
    description: 'The grand entrance to our historic main campus building',
    icon: '🏛️',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774595643536!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ08yNHZCYlE.!2m2!1d12.64203809938147!2d77.44017986454794!3f301.1712113947883!4f8.541748793753413!5f0.4000000000000002',
  },
  {
    id: 2,
    name: 'Library',
    description: 'Browse our collection of 50,000+ books and digital resources',
    icon: '📚',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774596200355!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ08yLW5qOUFF!2m2!1d12.64227462911871!2d77.43987334232158!3f47.04612033219896!4f-6.240117564399199!5f0.7820865974627469',
  },
  {
    id: 3,
    name: 'Classroom Block A',
    description: 'State-of-the-art smart classrooms with modern amenities',
    icon: '🎓',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774596630348!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ08yNTNiWFE.!2m2!1d12.64221725293013!2d77.44006184351893!3f239.99679489453865!4f-2.2743875162097!5f0.7820865974627469',
  },
  {
    id: 4,
    name: 'Auditorium',
    description: '2000-seat auditorium for events, seminars and cultural programs',
    icon: '🎭',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774596747325!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ08yOW1ENkFF!2m2!1d12.64227577877584!2d77.44007812832686!3f42.37816568549938!4f-10.355979600586664!5f0.7820865974627469',
  },
  {
    id: 5,
    name: 'Sports Ground',
    description: 'Olympic-standard facilities for indoor and outdoor sports',
    icon: '🏆',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774598974443!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ08yNVBDdXdF!2m2!1d12.64222630377511!2d77.44000642262301!3f294.85855006842826!4f-7.886005406703546!5f0.7820865974627469" width="1024" height="768" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
  },
  {
    id: 6,
    name: 'Cafeteria',
    description: 'Multi-cuisine food court serving healthy and delicious meals',
    icon: '🍽️',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.55!3d12.975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzM1LjAiTiA3N8KwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567895',
  },
  {
    id: 7,
    name: 'Laboratory',
    description: 'Cutting-edge research labs with advanced equipment',
    icon: '🔬',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774603485706!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ08yLTJOYXc.!2m2!1d12.64222563311668!2d77.44007541419238!3f305.2647298546833!4f-8.224462883345382!5f0.7820865974627469" width="1024" height="768" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
  },
  {
    id: 8,
    name: 'Hostel Rooms',
    description: 'Comfortable residential facilities with modern amenities',
    icon: '🏠',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1774596982083!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ08yNVAwS1E.!2m2!1d12.64220782562587!2d77.44002445849414!3f220.15688974496453!4f-14.753027737448619!5f0.7820865974627469',
  },
];

export default function CampusLifePage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
        <section className="relative bg-gradient-to-br from-theme-red to-red-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Explore Our Campus
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Take a virtual 360° tour of our world-class facilities
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Select a Location to Explore
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-left"
                >
                  <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-red-50 group-hover:to-red-100 transition-colors duration-300">
                    <span className="text-5xl">{location.icon}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-theme-red transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{location.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-6 py-3 bg-white text-theme-red font-bold rounded-xl">
                      View 360°
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {selectedLocation && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedLocation(null)}>
            <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedLocation.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">{selectedLocation.name}</h3>
                    <p className="text-gray-600 text-sm">{selectedLocation.description}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedLocation(null)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <iframe
                src={selectedLocation.embedUrl}
                className="w-full"
                style={{ minHeight: '600px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`360° view of ${selectedLocation.name}`}
              />
            </div>
          </div>
        )}
      </div>
  );
}