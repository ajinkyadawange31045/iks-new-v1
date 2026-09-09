"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const navigation = [
  { name: 'About Us', href: '/about' },
  { name: 'Knowledge Center', href: '/knowledge-centre' },
  { name: 'Education', href: '/education' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Join Us', href: '/join-us' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background page scroll when the mobile menu is open
  useEffect(() => {
    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevTouchAction = body.style.touchAction;

    if (mobileMenuOpen) {
      body.style.overflow = 'hidden';
      body.style.touchAction = 'none';
    } else {
      body.style.overflow = prevOverflow || '';
      body.style.touchAction = prevTouchAction || '';
    }

    return () => {
      body.style.overflow = prevOverflow || '';
      body.style.touchAction = prevTouchAction || '';
    };
  }, [mobileMenuOpen]);


  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: isScrolled ? 'rgba(245, 241, 232, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <nav className="mx-auto flex w-full items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 gap-4 min-h-[70px] sm:min-h-[80px]">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="-m-2 p-1">
            <div className="flex gap-3 items-center">
              <img
                src="/svu-logo.png"
                alt="Logo"
                width={140}
                height={50}
                className="object-contain h-10 sm:h-12 md:h-14"
              />
            </div>
          </Link>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex flex-1 justify-end space-x-6 md:space-x-8 xl:space-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-base sm:text-lg font-serif-body font-semibold leading-6 transition-colors whitespace-nowrap ${
                isScrolled
                  ? 'text-[#5c3a2a] hover:text-[#8b4a3c]'
                  : 'text-[#5c3a2a] hover:text-[#8b4a3c]'
              } ${pathname === item.href ? 'text-[#8b4a3c]' : ''}`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#8b4a3c] rounded-full"
                  layoutId="navbar-indicator"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#5c3a2a]`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto paper-card px-6 py-6"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">IKS Centre</span>
                  <div className="flex items-center">
                    <Image
                      src="/svu-logo.png"
                      alt="Logo"
                      width={150}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-[#5c3a2a]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-[#8b6f5e]/20">
                  <div className="space-y-3 py-6 flex flex-col items-center w-full">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block rounded-full px-5 py-3 text-lg font-serif-body font-semibold leading-7 w-full text-center ${
                          pathname === item.href
                            ? 'text-[#8b4a3c] underline underline-offset-4 decoration-2 decoration-[#8b4a3c] bg-[#f5f1e8]'
                            : 'text-[#5c3a2a] hover:text-[#8b4a3c] hover:bg-[#faf8f3]'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}




