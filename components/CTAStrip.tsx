export default function CTAStrip() {
  return (
    <section
      className="bg-gradient-to-r from-theme-red via-red-700 to-red-800 py-20"
      id="campus-life"
      aria-label="Campus life call to action"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
              Experience Life Beyond the Classroom
            </h2>
            <p className="text-red-100 text-base sm:text-lg max-w-xl leading-relaxed">
              Sports, clubs, fests, international exchange programs, and a vibrant student community across all campuses.
            </p>
          </div>
          <a
            href="#"
            id="campus-life-btn"
            className="flex-shrink-0 inline-flex items-center px-8 py-4 bg-white text-theme-red font-bold text-base rounded-xl
                       transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-red-50 hover:shadow-2xl
                       focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Explore Campus Life →
          </a>
        </div>
      </div>
    </section>
  );
}
