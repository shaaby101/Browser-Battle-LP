export default function CTAStrip() {
  return (
    <section
      className="bg-gradient-to-r from-theme-red to-red-800 py-16"
      id="campus"
      aria-label="Campus life call to action"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Experience Life Beyond the Classroom
            </h2>
            <p className="text-red-100 text-base max-w-xl">
              Sports, clubs, fests, international exchange programs, and a vibrant student community across all campuses.
            </p>
          </div>
          <a
            href="#"
            id="campus-life-btn"
            className="flex-shrink-0 inline-flex items-center px-8 py-3.5 bg-white text-theme-red font-bold rounded-xl hover:bg-red-50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Explore Campus Life →
          </a>
        </div>
      </div>
    </section>
  );
}
