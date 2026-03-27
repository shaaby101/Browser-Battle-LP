import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail } from 'lucide-react';

const studyLinks = [
  { label: 'Study Campus',       href: '#' },
  { label: 'Distance Education', href: '#' },
  { label: 'JAIN Online',        href: '#' },
  { label: 'Foreign Campus',     href: '#' },
  { label: 'Skill Development',  href: '#' },
];

const quickLinks = [
  { label: 'Admissions 2026–27', href: '#admissions' },
  { label: 'Scholarships',       href: '#' },
  { label: 'Placements',         href: '#' },
  { label: 'Research & Innovation', href: '#research' },
  { label: 'Contact Us',         href: '#' },
];

const socialLinks = [
  { icon: Facebook,  label: 'Facebook',  href: '#', id: 'footer-facebook'  },
  { icon: Twitter,   label: 'Twitter',   href: '#', id: 'footer-twitter'   },
  { icon: Instagram, label: 'Instagram', href: '#', id: 'footer-instagram' },
  { icon: Linkedin,  label: 'LinkedIn',  href: '#', id: 'footer-linkedin'  },
  { icon: Youtube,   label: 'YouTube',   href: '#', id: 'footer-youtube'   },
];

export default function Footer() {
  return (
    <footer className="bg-theme-dark text-gray-300" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">

          {/* ── Col 1: Brand ── */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4" aria-label="JAIN University logo">
              <span className="w-10 h-10 bg-gradient-to-br from-theme-red to-red-800 text-white font-black text-xl flex items-center justify-center rounded-lg flex-shrink-0">
                J
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-extrabold text-base tracking-wide">JAIN</span>
                <span className="text-gray-500 text-[9px] tracking-wider">DEEMED-TO-BE UNIVERSITY</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              A premier institution committed to academic excellence, research innovation,
              and holistic student development since 1990.
            </p>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-2" aria-label="Social media links">
              {socialLinks.map(({ icon: Icon, label, href, id }) => (
                <a
                  key={id}
                  href={href}
                  id={id}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-theme-red text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-theme-red focus-visible:outline-offset-2"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Study Options ── */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5 pb-2 border-b border-gray-800 relative">
              Study Options
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-theme-red" aria-hidden="true" />
            </h4>
            <ul className="space-y-2.5">
              {studyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white hover:pl-1.5 transition-all duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Quick Links ── */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5 pb-2 border-b border-gray-800 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-theme-red" aria-hidden="true" />
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white hover:pl-1.5 transition-all duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5 pb-2 border-b border-gray-800 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-theme-red" aria-hidden="true" />
            </h4>
            <address className="not-italic text-sm text-gray-400 space-y-4">
              <div>
                <p className="text-white text-xs font-semibold mb-1">JC Road Campus</p>
                <p className="text-xs leading-relaxed">
                  #44/4, District Fund Road,<br />
                  Jayanagar 9th Block,<br />
                  Bengaluru – 560069, Karnataka
                </p>
              </div>
              <div>
                <p className="text-white text-xs font-semibold mb-1">Jayanagar Campus</p>
                <p className="text-xs leading-relaxed">
                  No. 34, 1st Cross, Jayanagar,<br />
                  Bengaluru – 560011, Karnataka
                </p>
              </div>
              <div className="space-y-1.5">
                <a
                  href="tel:+918028437600"
                  id="footer-phone"
                  className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={12} aria-hidden="true" className="text-theme-red flex-shrink-0" />
                  080-28437600
                </a>
                <a
                  href="mailto:admissions@jainuniversity.ac.in"
                  id="footer-email"
                  className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors break-all"
                >
                  <Mail size={12} aria-hidden="true" className="text-theme-red flex-shrink-0" />
                  admissions@jainuniversity.ac.in
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs text-gray-600">
          <p>© 2026 JAIN (Deemed-to-be University). All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors" id="footer-privacy">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link href="#" className="hover:text-white transition-colors" id="footer-terms">Terms of Use</Link>
            <span aria-hidden="true">·</span>
            <Link href="#" className="hover:text-white transition-colors" id="footer-sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
