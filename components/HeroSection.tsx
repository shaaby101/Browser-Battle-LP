import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden"
      aria-label="Hero banner"
      id="hero"
    >
      {/* ── Background Image with dark overlay ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&auto=format&fit=crop&q=80"
          alt="Vibrant university campus with students"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay: dark left → tinted-red right */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-red-950/50" />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48 md:pb-56">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-semibold tracking-wider animate-pulse-slow">
          <span aria-hidden="true">🏆</span>
          NAAC A++ Graded University
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] max-w-3xl mb-5">
          Shape Your Future at{' '}
          <span className="text-theme-gold drop-shadow-[0_0_20px_rgba(245,166,35,0.5)]">
            JAIN
          </span>{' '}
          <span className="block sm:inline">(Deemed-to-be University)</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-xl mb-8 leading-relaxed">
          <strong className="text-white">NAAC A++ Graded</strong> | Empowering minds across{' '}
          <strong className="text-white">10+ thriving campuses.</strong>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#programs"
            className="inline-flex items-center px-7 py-3.5 bg-theme-red hover:bg-red-800 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/40 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            id="explore-programs-btn"
          >
            Explore Programs
          </a>
          <a
            href="#campus"
            className="inline-flex items-center px-7 py-3.5 bg-transparent border-2 border-white text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            id="campus-tour-btn"
          >
            Take a Campus Tour
          </a>
        </div>
      </div>
    </section>
  );
}
