import Link from 'next/link';
import { ChevronRight, Cpu, HardHat, ShieldCheck, Plane } from 'lucide-react';

const PROGRAMS = [
  { icon: Cpu, title: 'B.Tech in Computer Science', specialisation: 'AI & Machine Learning', link: '/academics' },
  { icon: Plane, title: 'B.Tech in Aerospace', specialisation: 'Aeronautics & Propulsion', link: '/academics' },
  { icon: ShieldCheck, title: 'B.Tech in Cybersecurity', specialisation: 'Network Defence', link: '/academics' },
  { icon: HardHat, title: 'B.Tech in Civil Engineering', specialisation: 'Smart Infrastructure', link: '/academics' },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#12366b] mb-4">
            Undergraduate <span className="text-[#f9b233]">Programs</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our industry-aligned B.Tech programs designed to shape the innovators and engineers of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center flex-1 transition hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200">
              <div className="w-14 h-14 bg-[#12366b]/10 rounded-full flex items-center justify-center mb-4 text-[#12366b]">
                <prog.icon size={26} />
              </div>
              <h3 className="text-lg font-bold text-center text-[#12366b] mb-1">{prog.title}</h3>
              <p className="text-sm text-center font-medium text-[#f9b233] uppercase tracking-wide mb-4 flex-1">
                {prog.specialisation}
              </p>
              <Link href={prog.link} className="inline-flex items-center text-sm font-bold text-[#12366b] hover:text-[#f9b233] transition-colors">
                View Details <ChevronRight size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
