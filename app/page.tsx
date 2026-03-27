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
 * All components are Server Components by default (pure SSR).
 * Only Navbar uses "use client" for hamburger menu interactivity.
 */
export default function HomePage() {
  return (
    <>
      {/* Sticky header */}
      <Navbar />

      <main>
        {/* 1. Hero – full-width campus photo with overlay & CTAs */}
        <HeroSection />

        {/* 2. Quick Stats banner – floats over hero bottom via negative margin */}
        <QuickStats />

        {/* 3. Spacer so content below clears the stats banner */}
        <div className="h-12 bg-white" aria-hidden="true" />

        {/* 4. News & Announcements (light-grey bg) */}
        <NewsTicker />

        {/* 5. Programs Grid (white bg) */}
        <ProgramsGrid />

        {/* 6. Campus Life CTA strip (gradient red) */}
        <CTAStrip />
      </main>

      {/* 7. Dark footer */}
      <Footer />

      {/* Scroll-to-top (pure CSS + anchor trick) */}
      <a
        href="#hero"
        id="scroll-top-btn"
        className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-theme-red hover:bg-red-800 text-white flex items-center justify-center rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-white"
        aria-label="Back to top"
        title="Scroll to top"
      >
        ↑
      </a>
    </>
  );
}
