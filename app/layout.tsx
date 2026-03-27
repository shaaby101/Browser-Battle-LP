import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'JAIN Global Campus, Kanakapura | JAIN (Deemed-to-be University)',
  description:
    'JAIN Global Campus, Kanakapura — a 300+ acre NAAC A++ campus with world-class infrastructure, top B.Tech & MBA programs, Sprintoor Indoor Stadium, and The Oval cricket ground.',
  keywords: ['JAIN University', 'Kanakapura Campus', 'NAAC A++', 'Aerospace Engineering', 'Sprintoor Stadium'],
  openGraph: {
    title: 'JAIN Global Campus, Kanakapura',
    description: 'Excellence Lives Here. 300+ acres of world-class education & sports infrastructure.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans bg-white text-jain-navy overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
