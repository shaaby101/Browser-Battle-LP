'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, GraduationCap } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',        href: '/'            },
  { label: 'About Us',    href: '/about'       },
  { label: 'Academics',   href: '/academics'   },
  { label: 'Admissions',  href: '/admissions'  },
  { label: 'Research',    href: '/research'    },
  { label: 'Campus Life', href: '/campus-life' },
  { label: 'Contact Us',  href: '/contact-us'  },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-8"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0 group"
          aria-label="JAIN Global Campus – Home"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-jain-red to-red-800 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
            <GraduationCap size={20} className="text-white" aria-hidden="true" />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-jain-red font-extrabold text-[15px] tracking-wide">JAIN</span>
            <span className="text-jain-navy/60 text-[9px] font-semibold tracking-[0.12em] uppercase">
              Global Campus · Kanakapura
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-0.5 flex-1 justify-center" role="menubar">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href || pathname.startsWith(href + '/');
            return (
              <li key={href} role="none">
                <Link
                  href={href}
                  role="menuitem"
                  className={`nav-link px-3.5 py-2 rounded-lg text-sm ${
                    active ? 'text-jain-red active' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Apply Now CTA ── */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            href="/admissions"
            className="inline-flex items-center px-5 py-2.5 bg-jain-red hover:bg-red-800 text-white text-sm font-bold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-red-200"
          >
            Apply Now: 2026–27
          </Link>
        </div>

        {/* ── Hamburger ── */}
        <button
          className="md:hidden p-2 rounded-lg text-jain-navy hover:bg-jain-slate transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        id="mobile-nav"
        className={`md:hidden border-t-2 border-jain-red overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-white px-4 pt-3 pb-6 space-y-1" role="menu">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href} role="none">
              <Link
                href={href}
                role="menuitem"
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-jain-navy hover:text-jain-red hover:bg-jain-slate transition-all duration-150 border-b border-gray-50 last:border-0"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link
              href="/admissions"
              className="block w-full text-center py-3.5 bg-jain-red hover:bg-red-800 text-white text-sm font-bold rounded-xl transition-colors"
            >
              Apply Now: 2026–27
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
