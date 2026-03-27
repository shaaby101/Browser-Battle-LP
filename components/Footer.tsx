import Link from 'next/link';
import {
  GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube,
  Phone, Mail, MapPin,
} from 'lucide-react';

const STUDY = [
  { label: 'Study Campus',       href: '/academics'   },
  { label: 'Distance Education', href: '/admissions'  },
  { label: 'JAIN Online',        href: '/admissions'  },
  { label: 'Foreign Campus',     href: '/about'       },
  { label: 'Skill Development',  href: '/academics'   },
];

const QUICK = [
  { label: 'Admissions 2026–27', href: '/admissions'  },
  { label: 'Scholarships',       href: '/admissions'  },
  { label: 'Placements',         href: '/research'    },
  { label: 'Research',           href: '/research'    },
  { label: 'Contact Us',         href: '/about'       },
];

const SOCIAL = [
  { icon: Facebook,  label: 'Facebook',  href: '#' },
  { icon: Twitter,   label: 'Twitter',   href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin,  label: 'LinkedIn',  href: '#' },
  { icon: Youtube,   label: 'YouTube',   href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-jain-dark text-gray-400" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Col 1 – Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group" aria-label="JAIN Global Campus">
              <div className="w-10 h-10 bg-gradient-to-br from-jain-red to-red-800 rounded-xl flex items-center justify-center">
                <GraduationCap size={18} className="text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-extrabold text-[14px] tracking-wide">JAIN</span>
                <span className="text-gray-500 text-[9px] tracking-[0.1em] uppercase">Global Campus · Kanakapura</span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              A 300-acre NAAC A++ campus on Kanakapura Road, Bengaluru — shaping future leaders since 1990.
            </p>
            <div className="flex gap-2 flex-wrap">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-jain-red text-gray-500 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 – Study Options */}
          <div>
            <h4 className="text-white font-bold text-[10px] tracking-[0.18em] uppercase mb-5 pb-2 border-b border-white/10 relative">
              Study Options
              <span className="absolute bottom-0 left-0 w-7 h-0.5 bg-jain-red" aria-hidden="true" />
            </h4>
            <ul className="space-y-2.5">
              {STUDY.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-white hover:pl-1 transition-all duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Quick Links */}
          <div>
            <h4 className="text-white font-bold text-[10px] tracking-[0.18em] uppercase mb-5 pb-2 border-b border-white/10 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-7 h-0.5 bg-jain-red" aria-hidden="true" />
            </h4>
            <ul className="space-y-2.5">
              {QUICK.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-white hover:pl-1 transition-all duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Contact */}
          <div>
            <h4 className="text-white font-bold text-[10px] tracking-[0.18em] uppercase mb-5 pb-2 border-b border-white/10 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-7 h-0.5 bg-jain-red" aria-hidden="true" />
            </h4>
            <address className="not-italic space-y-4">
              <div className="flex gap-2.5">
                <MapPin size={13} className="text-jain-red mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-xs text-gray-500 leading-relaxed">
                  <strong className="text-white text-[11px] block mb-0.5">Kanakapura Campus</strong>
                  Jakkasandra, Kanakapura Road,<br />
                  Bengaluru – 562112, Karnataka
                </p>
              </div>
              <div className="flex gap-2.5">
                <MapPin size={13} className="text-jain-red mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-xs text-gray-500 leading-relaxed">
                  <strong className="text-white text-[11px] block mb-0.5">JC Road Campus</strong>
                  #44/4, District Fund Road,<br />
                  Bengaluru – 560069, Karnataka
                </p>
              </div>
              <div className="space-y-1.5">
                <a href="tel:+918028437600" className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors">
                  <Phone size={11} className="text-jain-red" aria-hidden="true" /> 080-28437600
                </a>
                <a href="mailto:admissions@jainuniversity.ac.in" className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors break-all">
                  <Mail size={11} className="text-jain-red flex-shrink-0" aria-hidden="true" />
                  admissions@jainuniversity.ac.in
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs text-gray-600">
          <p>© 2026 JAIN (Deemed-to-be University). All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <span aria-hidden="true">·</span>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
