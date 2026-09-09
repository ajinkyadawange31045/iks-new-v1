import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#3b2f27] text-[#f7ead8] border-t-4 border-[#8b6f5e]/40 overflow-hidden">
      {/* Top wave transition */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg viewBox="0 0 1440 100" width="100%" height="100" preserveAspectRatio="none" className="fill-[#3b2f27]">
          <path d="M0,50 C360,10 720,90 1080,30 C1320,70 1440,50 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>

      {/* Paper folds texture overlay to keep the heritage vibe */}
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.08) 0px,
            transparent 1px,
            transparent 40px,
            rgba(255, 255, 255, 0.06) 41px,
            transparent 42px,
            transparent 80px,
            rgba(255, 255, 255, 0.05) 81px,
            transparent 82px,
            transparent 120px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.06) 0px,
            transparent 1px,
            transparent 2px,
            rgba(255, 255, 255, 0.05) 3px
          )`
        }}
      />

      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-serif-elegant font-semibold leading-6 text-[#e5bc83] mb-4">About Us</h3>
            <div className="mt-6 space-y-6 text-sm font-serif-body">
              <div className="flex items-center">
                <img
                  src="/svu-logo.png"
                  alt="Logo"
                  className="h-12 object-cover"
                />
              </div>
              <p className="text-[#f7ead8]/80 leading-relaxed">
                The IKS Maritime and Artistic Knowledge Centre is dedicated to exploring, preserving, and advancing India's rich maritime and artistic knowledge traditions.
              </p>
              <div className="flex justify-center sm:justify-start space-x-6 mt-4">
                <Link href="#" className="text-[#e5bc83] hover:text-[#4a9d9d] transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-[#e5bc83] hover:text-[#4a9d9d] transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-[#e5bc83] hover:text-[#4a9d9d] transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-[#e5bc83] hover:text-[#4a9d9d] transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-serif-elegant font-semibold leading-6 text-[#e5bc83] mb-4">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm font-serif-body text-center sm:text-left">
              <li>
                <Link href="/about" className="text-[#f7ead8]/80 hover:text-[#4a9d9d] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/knowledge-centre" className="text-[#f7ead8]/80 hover:text-[#4a9d9d] transition-colors">Knowledge Centre</Link>
              </li>
              <li>
                <Link href="/education" className="text-[#f7ead8]/80 hover:text-[#4a9d9d] transition-colors">Education</Link>
              </li>
              <li>
                <Link href="/events" className="text-[#f7ead8]/80 hover:text-[#4a9d9d] transition-colors">Events</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#f7ead8]/80 hover:text-[#4a9d9d] transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/join-us" className="text-[#f7ead8]/80 hover:text-[#4a9d9d] transition-colors">Join Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-serif-elegant font-semibold leading-6 text-[#e5bc83] mb-4">Resources</h3>
            <ul className="mt-6 space-y-3 text-sm font-serif-body text-center sm:text-left">
              <li>
                <Link href="/knowledge-centre" className="text-[#f7ead8]/80 hover:text-[#4a9d9d] transition-colors">Research Papers</Link>
              </li>
              <li>
                <Link href="/knowledge-centre" className="text-[#f7ead8]/80 hover:text-[#4a9d9d] transition-colors">Articles</Link>
              </li>
              <li>
                <Link href="/education" className="text-[#f7ead8]/80 hover:text-[#4a9d9d] transition-colors">Courses</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#f7ead8]/80 hover:text-[#4a9d9d] transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/education" className="text-[#f7ead8]/80 hover:text-[#4a9d9d] transition-colors">Workshops</Link>
              </li>
              <li>
                <Link href="/knowledge-centre" className="text-[#f7ead8]/80 hover:text-[#4a9d9d] transition-colors">Publications</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-serif-elegant font-semibold leading-6 text-[#e5bc83] mb-4">Contact Us</h3>
            <ul className="mt-6 space-y-3 text-sm font-serif-body text-center sm:text-left">
              <li className="flex flex-col items-center sm:flex-row sm:items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-[#4a9d9d]" />
                <span className="text-[#f7ead8]/80">IKS Maritime and Artistic Knowledge Centre<br/>Somaiya Vidyavihar University<br/>Vidyavihar East, Mumbai - 400077<br/>Maharashtra, India</span>
              </li>
              <li className="flex flex-col items-center sm:flex-row">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-[#4a9d9d]" />
                <span className="text-[#f7ead8]/80">+91-11-29581523 / 1004</span>
              </li>
              <li className="flex flex-col items-center sm:flex-row">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-[#4a9d9d]" />
                <span className="text-[#f7ead8]/80">chhaya.goswami@somaiya.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#f7ead8]/10 pt-6 sm:mt-16 lg:mt-20">
          <p className="text-center text-xs leading-5 font-serif-body text-[#f7ead8]/70">
            &copy; {currentYear} IKS Maritime and Artistic Knowledge Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
