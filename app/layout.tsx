import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JAIN (Deemed-to-be University) | Shape Your Future',
  description:
    'JAIN (Deemed-to-be University) – NAAC A++ Graded. Explore 88 UG & 55 PG programs across Engineering, Management, Sciences, Design, and Law. Admissions open 2026–27.',
  keywords: ['JAIN University', 'NAAC A++', 'Deemed University', 'Bengaluru', 'Engineering', 'MBA'],
  openGraph: {
    title: 'JAIN (Deemed-to-be University)',
    description: 'Empowering minds across 10+ thriving campuses. Apply for 2026–27 admissions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
