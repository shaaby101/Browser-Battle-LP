import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden"
      aria-label="Hero banner"
      id="about"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/jain university.jpg"
          alt="JAIN University campus"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 30%' }}
          sizes="100vw"
        />
        {/* Stronger overlay so white text always pops */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-52 md:pb-60 flex flex-col items-start justify-center min-h-[90vh]">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 bg-white/10 backdrop-blur-md border border-white/25 rounded-full text-white text-xs sm:text-sm font-semibold tracking-wider">
          <span aria-hidden="true">🏆</span>
          NAAC A++ Graded University
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-black text-white leading-[1.08] max-w-3xl mb-6 drop-shadow-lg">
          Shape Your Future at{' '}
          <span className="text-theme-gold drop-shadow-[0_0_28px_rgba(245,166,35,0.55)]">
            JAIN
          </span>{' '}
          <span className="block sm:inline">(Deemed-to-be University)</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
          <strong className="text-white">NAAC A++ Graded</strong> | Empowering minds across{' '}
          <strong className="text-white">10+ thriving campuses.</strong>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#academics"
            className="inline-flex items-center px-8 py-4 bg-theme-red hover:bg-red-800 text-white font-bold text-base rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-red-900/50 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            id="explore-programs-btn"
          >
            Explore Programs
          </a>
          <a
            href="#campus-life"
            className="inline-flex items-center px-8 py-4 bg-white text-theme-red font-bold text-base rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-red-50 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            id="campus-tour-btn"
          >
            Take a Campus Tour
          </a>
        </div>
      </div>
    </section>
  );
}
