interface NewsItem {
  tag: string;
  icon: string;
  title: string;
  excerpt: string;
}

const newsItems: NewsItem[] = [
  {
    tag: 'Research',
    icon: '📰',
    title: 'JAIN University Signs MoU with Leading Tech Giants for AI Research',
    excerpt:
      'A landmark collaboration to advance artificial intelligence research and student internship opportunities across campuses.',
  },
  {
    tag: 'Achievement',
    icon: '🏆',
    title: 'JAIN Ranked Among Top 50 Universities in India by NIRF 2025',
    excerpt:
      'Recognized for excellence in academics, research output, and outstanding graduate outcomes nationwide.',
  },
  {
    tag: 'Events',
    icon: '🎉',
    title: 'Entrepreneurship Summit 2026: Innovation Meets Opportunity',
    excerpt:
      'Connect with industry leaders, startup founders, and investors at JAIN\'s annual flagship entrepreneurship fest.',
  },
];

export default function NewsTicker() {
  return (
    <section
      className="bg-theme-gray py-20 border-t border-gray-200"
      id="admissions"
      aria-label="News and Announcements"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            News &amp; Announcements
          </h2>
          <div className="w-14 h-1 bg-theme-red rounded-full mb-4" aria-hidden="true" />
          <p className="text-gray-500 text-base sm:text-lg max-w-xl">
            Stay updated with the latest from JAIN University.
          </p>
        </div>

        {/* Alert Badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          {/* Live badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-theme-red text-white text-sm font-semibold rounded-full shadow-sm"
            role="alert"
          >
            <span
              className="w-2 h-2 bg-white rounded-full pulse-dot flex-shrink-0"
              aria-hidden="true"
            />
            🚀 New Beta Website is Live!
          </div>

          {/* Admissions badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-800 text-sm font-semibold rounded-full border border-yellow-300 shadow-sm"
            role="alert"
          >
            <span aria-hidden="true">🎯</span>
            Admissions Open for B.Tech &amp; MBA – Session 2026–27
          </div>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              {/* Card image placeholder */}
              <div
                className="h-28 bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center text-4xl border-b border-gray-100"
                aria-hidden="true"
              >
                {item.icon}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className="inline-block px-2.5 py-0.5 bg-red-50 text-theme-red text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 self-start">
                  {item.tag}
                </span>
                <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2 flex-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="text-xs font-bold text-theme-red hover:underline self-start"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
