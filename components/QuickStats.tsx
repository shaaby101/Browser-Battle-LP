import { Users, BookOpen, Briefcase, Globe } from 'lucide-react';

const stats = [
  { icon: Users,     number: '21,000+',    label: 'Aspiring Students' },
  { icon: BookOpen,  number: '88 UG · 55 PG', label: 'Programs Offered' },
  { icon: Briefcase, number: '400+',       label: 'Top Recruiters'   },
  { icon: Globe,     number: '35,000+',    label: 'Alumni Network'   },
];

export default function QuickStats() {
  return (
    /*
     * Negative top margin pulls the banner up to visually bridge
     * the Hero section and the content below it.
     */
    <div className="relative z-20 -mt-16 mx-4 sm:mx-8 lg:mx-auto lg:max-w-5xl px-0">
      <div
        className="bg-white rounded-2xl shadow-2xl border-t-4 border-theme-red overflow-hidden"
        aria-label="Key university statistics"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 lg:p-8 hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300">
                  <Icon className="text-theme-red" size={22} aria-hidden="true" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-theme-red leading-tight mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
