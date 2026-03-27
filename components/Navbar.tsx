'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About Us',    href: '#about'       },
  { label: 'Academics',   href: '#academics'   },
  { label: 'Admissions',  href: '#admissions'  },
  { label: 'Research',    href: '#research'    },
  { label: 'Campus Life', href: '#campus-life' },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  /* Smooth-scroll to section, accounting for sticky nav height */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      const offset = 72; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm border-b border-gray-100'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0 focus-visible:outline-2 focus-visible:outline-theme-red focus-visible:rounded"
          aria-label="JAIN University home"
        >
          <span className="w-10 h-10 bg-gradient-to-br from-theme-red to-red-800 text-white font-black text-xl flex items-center justify-center rounded-lg shadow-sm flex-shrink-0">
            J
          </span>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-theme-red font-extrabold text-base tracking-wide">JAIN</span>
            <span className="text-gray-500 text-[9px] font-medium tracking-wider">DEEMED-TO-BE UNIVERSITY</span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center" role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link px-3 py-2 rounded-md text-sm font-medium"
                role="menuitem"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA Button ── */}
        <div className="hidden md:block flex-shrink-0">
          <a
            href="#admissions"
            onClick={(e) => handleNavClick(e, '#admissions')}
            className="inline-flex items-center px-4 py-2 bg-theme-red hover:bg-red-800 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-red-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-red"
          >
            Apply Now: 2026–27
          </a>
        </div>

        {/* ── Hamburger ── */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-theme-red"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t-2 border-theme-red ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-white px-4 pt-3 pb-6 flex flex-col gap-1" role="menu">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-theme-red hover:bg-red-50 transition-colors border-b border-gray-100 last:border-0"
                role="menuitem"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3">
            <a
              href="#admissions"
              onClick={(e) => handleNavClick(e, '#admissions')}
              className="block w-full text-center px-4 py-3 bg-theme-red hover:bg-red-800 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Apply Now: 2026–27
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
