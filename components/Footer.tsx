import Link from 'next/link';
import Image from 'next/image';
import {
  GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube,
  Phone, Mail, MapPin, ChevronRight
} from 'lucide-react';

const RECENT_POSTS = [
  { label: 'Direct Admission to B.Tech Aerospace Engineering', href: '/academics' },
  { label: 'Apply for Computer Science & Artificial Intelligence', href: '/academics' },
  { label: 'Global Campus Kanakapura Infrastructure Tour', href: '/campus-life' },
  { label: 'Placement Records & Top Recruiters', href: '/research' },
  { label: 'JAIN University Scholarships 2026–27', href: '/admissions' },
];

const SOCIAL = [
  { icon: Facebook,  label: 'Facebook',  href: 'https://www.facebook.com/JAINDeemedtobeUniversityOfficial/' },
  { icon: Twitter,   label: 'Twitter',   href: 'https://x.com/jaincollege' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/jainuniversityofficial?igsh=ajNucmF0N2Y4aXQ0' },
  { icon: Linkedin,  label: 'LinkedIn',  href: 'https://www.linkedin.com/school/jaindeemedtobeuniversity/' },
  { icon: Youtube,   label: 'YouTube',   href: 'https://youtube.com/@jaindeemedtobeuniversity?si=-KTQSxBCKf4qlLc1' },
];

export default function Footer() {
  return (
    <footer className="bg-[#2a305e] text-gray-300 font-sans border-t-[6px] border-jain-red" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-12">
          
          {/* Col 1 – Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-block" aria-label="JAIN Global Campus">
              <Image
                src="https://www.jainuniversity.ac.in/jain/home/assets/images/jain-logo.png"
                alt="JAIN (Deemed-to-be University) logo"
                width={200}
                height={70}
                className="h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-300">
              JAIN (Deemed-to-be University) provides world-class education with dedicated B.Tech programs, state-of-the-art infrastructure, and continuous global placements through our specialized management quota seats and merit admissions.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-jain-red text-white flex items-center justify-center transition-colors duration-300"
                >
                  <Icon size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 – GET IN TOUCH */}
          <div>
            <h3 className="text-white font-extrabold text-base tracking-widest uppercase mb-8">
              GET IN TOUCH
            </h3>
            <div className="space-y-6">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=JCVR%2B27P+Karnataka+562112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-start group cursor-pointer"
              >
                <MapPin size={18} className="text-white mt-1 flex-shrink-0 group-hover:text-jain-red transition-colors" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-gray-300 group-hover:text-white transition-colors">
                  <strong className="text-white block mb-1 tracking-wider text-xs">ADDRESS :</strong>
                  JAIN Global Campus, Jakkasandra Post,<br />
                  Kanakapura Road, Ramanagara District,<br />
                  Bengaluru, Karnataka - 562112
                </p>
              </a>
              <div className="flex gap-4 items-center">
                <Phone size={18} className="text-white flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919766989091" className="text-sm text-gray-300 hover:text-white transition-colors">
                  080-28437600, +91 97669 89091
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <Mail size={18} className="text-white flex-shrink-0" aria-hidden="true" />
                <a href="mailto:admissions@jainuniversity.ac.in" className="text-sm text-gray-300 hover:text-white transition-colors">
                  admissions@jainuniversity.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 3 – DISCLAIMER */}
          <div>
            <h3 className="text-white font-extrabold text-base tracking-widest uppercase mb-8">
              DISCLAIMER
            </h3>
            <p className="text-sm leading-relaxed text-gray-300 text-justify">
              This portal is regarding the guidance of admissions through management and merit quota in the prestigious engineering and business programs. 
              The infrastructure listed is fully authentic and represents the Kanakapura Campus. Visitors may seek out information from this portal that they find agreeable, 
              either from the viewpoint of having content that matches an individual's needs. It is the decision of the viewer to contact us for further admission proceedings.
            </p>
          </div>

          {/* Col 4 – RECENT POST / QUICK LINKS */}
          <div>
            <h3 className="text-white font-extrabold text-base tracking-widest uppercase mb-8">
              RECENT POST
            </h3>
            <ul className="flex flex-col">
              {RECENT_POSTS.map(({ label, href }, i) => (
                <li key={label} className={`py-3.5 ${i !== RECENT_POSTS.length - 1 ? 'border-b border-dashed border-white/20' : ''}`}>
                  <Link href={href} className="group flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                    <ChevronRight size={14} className="text-white mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="leading-snug">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-xs text-gray-400">
          <p>© 2026 JAIN (Deemed-to-be University). All Rights Reserved.</p>
          <div className="flex gap-4 font-medium uppercase tracking-wider">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <span aria-hidden="true">|</span>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
