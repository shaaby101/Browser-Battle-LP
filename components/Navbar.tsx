'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, ChevronDown, Search } from 'lucide-react';

const TOP_LINKS = [
  { label: 'AY 25-26', href: '#' },
  { label: 'International Admissions', href: '#', hasDropdown: true },
  { label: 'Alumni', href: '#' },
  { label: 'Current Students', href: '#' },
  { label: 'Blogs', href: '#' },
];

const MAIN_LINKS = [
  { label: 'ABOUT US', href: '/about', hasDropdown: true },
  { label: 'ADMISSIONS', href: '/admissions', hasDropdown: true },
  { label: 'ACADEMICS', href: '/academics', hasDropdown: true },
  { label: 'PROGRAMS', href: '/programs', hasDropdown: true },
  { label: 'RESEARCH', href: '/research', hasDropdown: false },
  { label: 'PLACEMENTS', href: '#', hasDropdown: false },
  { label: 'CAMPUS LIFE', href: '/campus-life', hasDropdown: false },
  { label: 'CONTACT US', href: '/contact-us', hasDropdown: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
        scrolled ? 'shadow-md' : ''
      }`}
    >
      {/* ── Top Blue Strip ── */}
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

      {/* ── Main Navigation Bar ── */}
      <nav
        className="bg-white px-4 sm:px-6 lg:px-8 h-[78px] flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo Section */}
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
          <Link
            href="/"
            className="text-gray-500 hover:text-[#12366b] transition-colors p-1"
            aria-label="Home"
          >
            <Home size={18} />
          </Link>
          
          <ul className="flex items-center gap-5 xl:gap-6" role="menubar">
            {MAIN_LINKS.map(({ label, href, hasDropdown }) => {
              const active = pathname === href || pathname.startsWith(href + '/');
              return (
                <li key={label} role="none" className="group relative">
                  <Link
                    href={href}
                    role="menuitem"
                    className={`nav-link flex items-center gap-1 text-[13px] font-bold tracking-[0.05em] uppercase transition-colors py-2 ${
                      active ? 'text-[#12366b]' : 'text-gray-500 hover:text-[#12366b]'
                    }`}
                  >
                    {label}
                    {hasDropdown && <ChevronDown size={14} className={active ? 'text-[#12366b]' : 'text-gray-400 group-hover:text-[#12366b] transition-colors'} />}
                  </Link>
                  <div className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#12366b] to-[#f9b233] transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </li>
              );
            })}
          </ul>

          <button className="w-9 h-9 bg-[#12366b] hover:bg-[#0c2347] rounded-full flex items-center justify-center text-white transition-colors ml-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#12366b]" aria-label="Search">
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

      {/* ── Mobile Drawer ── */}
      <div
        id="mobile-nav"
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 shadow-xl ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-4 py-4 space-y-1 overflow-y-auto max-h-[60vh]">
          {MAIN_LINKS.map(({ label, href, hasDropdown }) => (
            <li key={label}>
              <Link
                href={href}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold text-gray-700 hover:text-[#12366b] hover:bg-blue-50 transition-all border-b border-gray-50 last:border-0 uppercase"
              >
                {label}
                {hasDropdown && <ChevronDown size={16} className="text-gray-400" />}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Top Links */}
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
