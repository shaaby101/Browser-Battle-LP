'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, GraduationCap, ChevronDown, Cpu, Briefcase, Calculator, FlaskConical, Palette, BookOpen, Scale, HeartPulse, Monitor } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',        href: '/'            },
  { label: 'About Us',    href: '/about'       },
  { label: 'Academics',   href: '/academics', hasDropdown: true },
  { label: 'Admissions',  href: '/admissions'  },
  { label: 'Research',    href: '/research'    },
  { label: 'Campus Life', href: '/campus-life' },
  { label: 'Contact Us',  href: '/contact-us'  },
];

const ACADEMIC_CATEGORIES = [
  { icon: Cpu, label: 'Engineering & Technology', href: '/academics#engineering', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Briefcase, label: 'Management', href: '/academics#management', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: Calculator, label: 'Commerce', href: '/academics#commerce', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: FlaskConical, label: 'Sciences', href: '/academics#sciences', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Palette, label: 'Creative Arts & Design', href: '/academics#creative-arts', color: 'text-pink-600', bg: 'bg-pink-50' },
  { icon: BookOpen, label: 'Humanities & Social Sciences', href: '/academics#humanities', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Scale, label: 'Law', href: '/academics#law', color: 'text-slate-600', bg: 'bg-slate-100' },
  { icon: HeartPulse, label: 'Allied Healthcare', href: '/academics#healthcare', color: 'text-red-600', bg: 'bg-red-50' },
  { icon: Monitor, label: 'Applied Computing', href: '/academics#computing', color: 'text-cyan-600', bg: 'bg-cyan-50' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { 
    setIsOpen(false); 
    setAcademicsOpen(false);
    setMobileAcademicsOpen(false);
  }, [pathname]);

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
          {NAV_LINKS.map(({ label, href, hasDropdown }) => {
            const active = pathname === href || pathname.startsWith(href + '/');
            
            if (hasDropdown) {
              return (
                <li 
                  key={href} 
                  role="none" 
                  className="relative"
                  onMouseEnter={() => setAcademicsOpen(true)}
                  onMouseLeave={() => setAcademicsOpen(false)}
                >
                  <Link
                    href={href}
                    role="menuitem"
                    className={`nav-link px-3.5 py-2 rounded-lg text-sm inline-flex items-center gap-1 ${
                      active ? 'text-jain-red active' : ''
                    }`}
                  >
                    {label}
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-200 ${academicsOpen ? 'rotate-180' : ''}`} 
                    />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                      academicsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-[320px]">
                      <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Faculties</span>
                        <Link 
                          href="/academics" 
                          className="text-xs font-bold text-jain-red hover:text-red-700 transition-colors"
                        >
                          View All →
                        </Link>
                      </div>
                      <div className="space-y-1">
                        {ACADEMIC_CATEGORIES.map(({ icon: Icon, label, href, color, bg }) => (
                          <Link
                            key={href}
                            href={href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                          >
                            <div className={`w-9 h-9 ${bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <Icon size={18} className={color} />
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-jain-navy transition-colors">
                              {label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              );
            }
            
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
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-white px-4 pt-3 pb-6 space-y-1" role="menu">
          {NAV_LINKS.map(({ label, href, hasDropdown }) => (
            <li key={href} role="none">
              {hasDropdown ? (
                <div>
                  <div className="flex items-center">
                    <Link
                      href={href}
                      role="menuitem"
                      className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold text-jain-navy hover:text-jain-red hover:bg-jain-slate transition-all duration-150"
                    >
                      {label}
                    </Link>
                    <button
                      onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
                      className="p-3 rounded-xl hover:bg-jain-slate transition-colors"
                      aria-label="Toggle academics menu"
                    >
                      <ChevronDown 
                        size={18} 
                        className={`text-gray-500 transition-transform duration-200 ${mobileAcademicsOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileAcademicsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 pr-2 py-2 space-y-1">
                      {ACADEMIC_CATEGORIES.map(({ icon: Icon, label, href, color, bg }) => (
                        <Link
                          key={href}
                          href={href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <Icon size={16} className={color} />
                          </div>
                          <span className="text-sm text-gray-600">{label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={href}
                  role="menuitem"
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-jain-navy hover:text-jain-red hover:bg-jain-slate transition-all duration-150 border-b border-gray-50 last:border-0"
                >
                  {label}
                </Link>
              )}
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
