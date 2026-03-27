'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Search, Cpu, Briefcase, Calculator, FlaskConical, Palette, BookOpen, Scale, HeartPulse, Monitor } from 'lucide-react';

const TOP_LINKS = [
  { label: 'AY 25-26', href: '#' },
  { label: 'International Admissions', href: '#', hasDropdown: true },
  { label: 'Alumni', href: '#' },
  { label: 'Current Students', href: '#' },
  { label: 'Blogs', href: '#' },
];

const MAIN_LINKS = [
  { label: 'ABOUT US', href: '/about', hasDropdown: false },
  { label: 'ADMISSIONS', href: '/admissions', hasDropdown: false },
  { label: 'ACADEMICS', href: '/academics', hasDropdown: true },
  { label: 'PROGRAMS', href: '/programs', hasDropdown: false },
  { label: 'RESEARCH', href: '/research', hasDropdown: false },
  { label: 'PLACEMENTS', href: '#', hasDropdown: false },
  { label: 'CAMPUS LIFE', href: '/campus-life', hasDropdown: false },
  { label: 'CONTACT US', href: '/contact-us', hasDropdown: false },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      
      {/* Top Blue Strip */}
      <div className="hidden lg:flex bg-[#12366b] text-white h-[34px] items-center justify-end px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-[11px] font-medium tracking-wide">
          {TOP_LINKS.map((link, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Link href={link.href} className="flex items-center gap-1 hover:text-red-300 transition-colors">
                {link.label}
                {link.hasDropdown && <ChevronDown size={12} />}
              </Link>
              {idx < TOP_LINKS.length - 1 && <span className="opacity-40">|</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white px-4 sm:px-6 lg:px-8 h-[78px] flex items-center justify-between" aria-label="Main navigation">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group outline-none" aria-label="JAIN Homepage">
          <div className="relative w-14 h-14 bg-[#12366b] rounded-full flex flex-col items-center justify-center border-2 border-[#12366b] group-hover:shadow-md transition-shadow">
            <span className="text-white font-black text-xl leading-none tracking-tighter">JG<span className="text-[#f9b233] text-sm">i</span></span>
          </div>
          <div className="flex flex-col justify-center translate-y-1">
            <span className="text-[#231f20] font-[900] text-[2.1rem] leading-[0.8] tracking-[-0.03em]">JAIN</span>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-5 h-[3px] bg-[#231f20]" />
              <span className="text-gray-500 text-[8px] font-bold tracking-[0.1em] uppercase">DEEMED-TO-BE UNIVERSITY</span>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-5 xl:gap-6" role="menubar">
            {MAIN_LINKS.map(({ label, href, hasDropdown }) => {
              const active = pathname === href || pathname.startsWith(href + '/');
              
              if (hasDropdown) {
                return (
                  <li
                    key={label}
                    role="none"
                    className="relative group"
                    onMouseEnter={() => setAcademicsOpen(true)}
                    onMouseLeave={() => setAcademicsOpen(false)}
                  >
                    <Link
                      href={href}
                      role="menuitem"
                      className={`flex items-center gap-1 text-[13px] font-bold tracking-[0.05em] uppercase transition-colors py-2 ${
                        active ? 'text-[#12366b]' : 'text-gray-500 hover:text-[#12366b]'
                      }`}
                    >
                      {label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${academicsOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    <div className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#12366b] to-[#f9b233] transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />

                    {/* Dropdown */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                      academicsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-[320px]">
                        <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Faculties</span>
                          <Link href="/academics" className="text-xs font-bold text-[#12366b] hover:text-red-700 transition-colors">
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
                              <span className="text-sm font-medium text-gray-700 group-hover:text-[#12366b] transition-colors">
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
                <li key={label} role="none" className="group relative">
                  <Link
                    href={href}
                    role="menuitem"
                    className={`flex items-center gap-1 text-[13px] font-bold tracking-[0.05em] uppercase transition-colors py-2 ${
                      active ? 'text-[#12366b]' : 'text-gray-500 hover:text-[#12366b]'
                    }`}
                  >
                    {label}
                  </Link>
                  <div className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#12366b] to-[#f9b233] transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </li>
              );
            })}
          </ul>

          <button className="w-9 h-9 bg-[#12366b] hover:bg-[#0c2347] rounded-full flex items-center justify-center text-white transition-colors ml-2 shadow-sm" aria-label="Search">
            <Search size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-4">
          <button className="w-8 h-8 bg-[#12366b] rounded-full flex items-center justify-center text-white" aria-label="Search">
            <Search size={14} strokeWidth={2.5} />
          </button>
          <button
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav"
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 shadow-xl ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-4 py-4 space-y-1 overflow-y-auto max-h-[60vh]">
          {MAIN_LINKS.map(({ label, href, hasDropdown }) => (
            <li key={label}>
              {hasDropdown ? (
                <div>
                  <div className="flex items-center">
                    <Link href={href} className="flex-1 px-4 py-3 rounded-xl text-sm font-bold text-gray-700 hover:text-[#12366b] hover:bg-blue-50 transition-all uppercase">
                      {label}
                    </Link>
                    <button
                      onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
                      className="p-3 rounded-xl hover:bg-blue-50 transition-colors"
                      aria-label="Toggle academics menu"
                    >
                      <ChevronDown size={18} className={`text-gray-500 transition-transform duration-200 ${mobileAcademicsOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileAcademicsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 pr-2 py-2 space-y-1">
                      {ACADEMIC_CATEGORIES.map(({ icon: Icon, label, href, color, bg }) => (
                        <Link key={href} href={href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
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
                <Link href={href} className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold text-gray-700 hover:text-[#12366b] hover:bg-blue-50 transition-all border-b border-gray-50 last:border-0 uppercase">
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="px-4 py-4 bg-gray-50 border-t border-gray-100 grid grid-cols-2 gap-2">
          {TOP_LINKS.map((link, idx) => (
            <Link key={idx} href={link.href} className="text-xs font-semibold text-gray-600 p-2 hover:text-[#12366b]">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}