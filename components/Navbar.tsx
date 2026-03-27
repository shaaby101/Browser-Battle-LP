'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, Search, Cpu, Briefcase, Calculator, FlaskConical, Palette, BookOpen, Scale, HeartPulse, Monitor, GraduationCap, Home, Phone, FlaskRound, Building, Users, Award } from 'lucide-react';

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
  { label: 'ACADEMICS', href: '/academics', hasDropdown: false },
  { label: 'DEPARTMENTS', href: '/departments', hasDropdown: true },
  { label: 'RESEARCH', href: '/research', hasDropdown: false },
  { label: 'PLACEMENTS', href: '/placements', hasDropdown: false },
  { label: 'CAMPUS LIFE', href: '/campus-life', hasDropdown: false },
  { label: 'CONTACT US', href: '/contact-us', hasDropdown: false },
];

const DEPARTMENT_CATEGORIES = [
  { icon: Cpu, label: 'Engineering & Technology', href: '/departments/engineering', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Briefcase, label: 'Management', href: '/departments/management', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: Calculator, label: 'Commerce', href: '/departments/commerce', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: FlaskConical, label: 'Sciences', href: '/departments/sciences', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Palette, label: 'Creative Arts & Design', href: '/departments/creative-arts', color: 'text-pink-600', bg: 'bg-pink-50' },
  { icon: BookOpen, label: 'Humanities & Social Sciences', href: '/departments/humanities', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Scale, label: 'Law', href: '/departments/law', color: 'text-slate-600', bg: 'bg-slate-100' },
  { icon: HeartPulse, label: 'Allied Healthcare', href: '/departments/healthcare', color: 'text-red-600', bg: 'bg-red-50' },
  { icon: Monitor, label: 'Applied Computing', href: '/departments/computing', color: 'text-cyan-600', bg: 'bg-cyan-50' },
];

// Search data - all searchable items on the website
const SEARCH_DATA = [
  // Main Pages
  { title: 'Home', description: 'JAIN University Homepage', href: '/', category: 'Pages', icon: Home },
  { title: 'About Us', description: 'Learn about JAIN University', href: '/about', category: 'Pages', icon: Building },
  { title: 'Admissions', description: 'Apply for admission', href: '/admissions', category: 'Pages', icon: GraduationCap },
  { title: 'Academics', description: 'Academic programs overview', href: '/academics', category: 'Pages', icon: BookOpen },
  { title: 'Departments', description: 'Browse all departments', href: '/departments', category: 'Pages', icon: Building },
  { title: 'Research', description: 'Research initiatives', href: '/research', category: 'Pages', icon: FlaskRound },
  { title: 'Placements', description: 'Career services & placements', href: '/placements', category: 'Pages', icon: Briefcase },
  { title: 'Campus Life', description: 'Student life at JAIN', href: '/campus-life', category: 'Pages', icon: Users },
  { title: 'Contact Us', description: 'Get in touch', href: '/contact-us', category: 'Pages', icon: Phone },
  
  // Departments
  { title: 'Engineering & Technology', description: 'B.Tech, M.Tech programs', href: '/departments/engineering', category: 'Departments', icon: Cpu },
  { title: 'Management', description: 'BBA, MBA programs', href: '/departments/management', category: 'Departments', icon: Briefcase },
  { title: 'Commerce', description: 'B.Com, M.Com programs', href: '/departments/commerce', category: 'Departments', icon: Calculator },
  { title: 'Sciences', description: 'B.Sc, M.Sc programs', href: '/departments/sciences', category: 'Departments', icon: FlaskConical },
  { title: 'Creative Arts & Design', description: 'Design & Media programs', href: '/departments/creative-arts', category: 'Departments', icon: Palette },
  { title: 'Humanities & Social Sciences', description: 'BA, MA programs', href: '/departments/humanities', category: 'Departments', icon: BookOpen },
  { title: 'Law', description: 'LLB, LLM programs', href: '/departments/law', category: 'Departments', icon: Scale },
  { title: 'Allied Healthcare', description: 'Healthcare programs', href: '/departments/healthcare', category: 'Departments', icon: HeartPulse },
  { title: 'Applied Computing', description: 'BCA, MCA programs', href: '/departments/computing', category: 'Departments', icon: Monitor },
  
  // Programs
  { title: 'B.Tech Computer Science', description: 'AI, ML, Cybersecurity', href: '/departments/engineering', category: 'Programs', icon: Cpu },
  { title: 'B.Tech Aerospace Engineering', description: 'Aeronautical studies', href: '/departments/engineering', category: 'Programs', icon: Cpu },
  { title: 'MBA Finance', description: 'Management postgraduate', href: '/departments/management', category: 'Programs', icon: Briefcase },
  { title: 'MBA Marketing', description: 'Marketing specialization', href: '/departments/management', category: 'Programs', icon: Briefcase },
  { title: 'BBA Corporate Management', description: 'Undergraduate business', href: '/departments/management', category: 'Programs', icon: Briefcase },
  { title: 'B.Com Professional', description: 'CA, CMA integrated', href: '/departments/commerce', category: 'Programs', icon: Calculator },
  { title: 'B.Sc Biotechnology', description: 'Life sciences', href: '/departments/sciences', category: 'Programs', icon: FlaskConical },
  { title: 'BCA Artificial Intelligence', description: 'Computer applications', href: '/departments/computing', category: 'Programs', icon: Monitor },
  { title: 'BA LLB', description: 'Integrated law program', href: '/departments/law', category: 'Programs', icon: Scale },
  { title: 'B.Des Communication Design', description: 'Design program', href: '/departments/creative-arts', category: 'Programs', icon: Palette },
  
  // Quick Links
  { title: 'Apply Now', description: 'Start your application', href: '/admissions', category: 'Quick Links', icon: GraduationCap },
  { title: 'Placement Statistics', description: '93%+ placement rate', href: '/placements', category: 'Quick Links', icon: Award },
  { title: 'Campus Tour', description: 'Explore our campus', href: '/campus-life', category: 'Quick Links', icon: Building },
  { title: 'Fee Structure', description: 'Course fees information', href: '/admissions', category: 'Quick Links', icon: Calculator },
  { title: 'Scholarships', description: 'Financial aid options', href: '/admissions', category: 'Quick Links', icon: Award },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [mobileDepartmentsOpen, setMobileDepartmentsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof SEARCH_DATA>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDepartmentsOpen(false);
    setMobileDepartmentsOpen(false);
    setSearchOpen(false);
    setSearchQuery('');
  }, [pathname]);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Handle escape key to close search
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    if (searchOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [searchOpen]);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered = SEARCH_DATA.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    ).slice(0, 8);
    
    setSearchResults(filtered);
  }, [searchQuery]);

  const handleSearchSelect = (href: string) => {
    setSearchOpen(false);
    setSearchQuery('');
    router.push(href);
  };

  const groupedResults = searchResults.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof SEARCH_DATA>);

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
                    onMouseEnter={() => setDepartmentsOpen(true)}
                    onMouseLeave={() => setDepartmentsOpen(false)}
                  >
                    <Link
                      href={href}
                      role="menuitem"
                      className={`flex items-center gap-1 text-[13px] font-bold tracking-[0.05em] uppercase transition-colors py-2 ${
                        active ? 'text-[#12366b]' : 'text-gray-500 hover:text-[#12366b]'
                      }`}
                    >
                      {label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${departmentsOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    <div className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#12366b] to-[#f9b233] transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />

                    {/* Dropdown */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                      departmentsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-[320px]">
                        <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Departments</span>
                          <Link href="/departments" className="text-xs font-bold text-[#12366b] hover:text-red-700 transition-colors">
                            View All →
                          </Link>
                        </div>
                        <div className="space-y-1">
                          {DEPARTMENT_CATEGORIES.map(({ icon: Icon, label, href, color, bg }) => (
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

          <button 
            onClick={() => setSearchOpen(true)}
            className="w-9 h-9 bg-[#12366b] hover:bg-[#0c2347] rounded-full flex items-center justify-center text-white transition-colors ml-2 shadow-sm" 
            aria-label="Search"
          >
            <Search size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setSearchOpen(true)}
            className="w-8 h-8 bg-[#12366b] rounded-full flex items-center justify-center text-white" 
            aria-label="Search"
          >
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
                      onClick={() => setMobileDepartmentsOpen(!mobileDepartmentsOpen)}
                      className="p-3 rounded-xl hover:bg-blue-50 transition-colors"
                      aria-label="Toggle departments menu"
                    >
                      <ChevronDown size={18} className={`text-gray-500 transition-transform duration-200 ${mobileDepartmentsOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileDepartmentsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 pr-2 py-2 space-y-1">
                      {DEPARTMENT_CATEGORIES.map(({ icon: Icon, label, href, color, bg }) => (
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

      {/* Search Modal */}
      {searchOpen && (
        <div 
          className="fixed inset-0 z-[99999] flex items-start justify-center pt-[15vh] sm:pt-[10vh] px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSearchOpen(false);
              setSearchQuery('');
            }
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Modal */}
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100">
              <Search className="text-gray-400 flex-shrink-0" size={20} />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages, departments..."
                className="flex-1 text-base sm:text-lg text-gray-800 placeholder-gray-400 outline-none bg-transparent"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <button 
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 -mr-2"
                aria-label="Close search"
              >
                <X size={22} />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
              {searchQuery.trim() === '' ? (
                // Quick Links when empty
                <div className="p-4 sm:p-6">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Quick Links</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SEARCH_DATA.filter(item => item.category === 'Pages').slice(0, 6).map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.href}
                          onClick={() => handleSearchSelect(item.href)}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors text-left"
                        >
                          <div className="w-10 h-10 bg-[#12366b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon size={18} className="text-[#12366b]" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                            <p className="text-xs text-gray-500 truncate">{item.description}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                // No results
                <div className="p-8 sm:p-10 text-center">
                  <Search className="mx-auto text-gray-300 mb-3" size={36} />
                  <p className="text-gray-500 font-medium">No results found</p>
                  <p className="text-sm text-gray-400 mt-1">Try searching for pages, departments, or programs</p>
                </div>
              ) : (
                // Show results grouped by category
                <div className="p-3 sm:p-4">
                  {Object.entries(groupedResults).map(([category, items]) => (
                    <div key={category} className="mb-4">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 mb-2">{category}</h3>
                      <div className="space-y-1">
                        {items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={`${item.href}-${item.title}`}
                              onClick={() => handleSearchSelect(item.href)}
                              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 active:bg-blue-100 transition-colors text-left group"
                            >
                              <div className="w-10 h-10 bg-gray-100 group-hover:bg-[#12366b]/10 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                                <Icon size={18} className="text-gray-500 group-hover:text-[#12366b] transition-colors" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#12366b] transition-colors">{item.title}</p>
                                <p className="text-xs text-gray-500 truncate">{item.description}</p>
                              </div>
                              <ChevronDown size={16} className="text-gray-300 -rotate-90 group-hover:text-[#12366b] transition-colors flex-shrink-0" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-gray-600 font-mono">ESC</kbd> to close</span>
              <span className="sm:hidden">Tap outside to close</span>
              <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-gray-600 font-mono">↵</kbd> to select</span>
              <span className="sm:hidden">Tap to select</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}