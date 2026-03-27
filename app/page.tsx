import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import QuickStats from '@/components/QuickStats';
import NewsTicker from '@/components/NewsTicker';
import ProgramsGrid from '@/components/ProgramsGrid';
import CTAStrip from '@/components/CTAStrip';
import Footer from '@/components/Footer';

/**
 * JAIN University – Homepage
 *
 * Section ID → Nav link mapping:
 *  #about       ← Hero section
 *  #academics   ← Programs Offered
 *  #admissions  ← News & Announcements
 *  #campus-life ← Campus Life CTA strip
 *
 * Only Navbar is "use client" (hamburger interaction).
 * All other components are pure Server Components.
 */
export default function HomePage() {
  return (
    <>
      {/* Sticky navbar */}
      <Navbar />

      <main>
        {/* 1. Hero – full-width campus photo + overlay */}
        <HeroSection />

        {/* 2. QuickStats – floats over hero bottom via -mt-16 */}
        <QuickStats />

        {/* 3. Breathing space between stats and next section */}
        <div className="h-16 bg-white" aria-hidden="true" />

        {/* 4. News & Announcements – id="admissions" */}
        <NewsTicker />

        {/* 5. Programs Offered – id="academics" */}
        <ProgramsGrid />

        {/* 6. Campus Life CTA – id="campus-life" */}
        <CTAStrip />
      </main>

      {/* Dark footer */}
      <Footer />

      {/* Back-to-top button */}
      <a
        href="#about"
        id="scroll-top-btn"
        className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-theme-red hover:bg-red-800
                   text-white font-bold flex items-center justify-center rounded-xl shadow-lg
                   transition-all duration-200 hover:scale-110 active:scale-95
                   focus-visible:outline-2 focus-visible:outline-white"
        aria-label="Back to top"
        title="Scroll to top"
      >
        ↑
      </a>
    </>
  );
}
