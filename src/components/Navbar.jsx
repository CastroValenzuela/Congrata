import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: "Founder's Story", href: '#founder' },
    { name: 'Impact', href: '#impact' },
    { name: 'Alumni Stories', href: '#experiences' },
    { name: 'Mentors & Leadership', href: '#team' },
    { name: 'Contact Us', href: '#engage' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* ── Official Brand Green Top Bar (from live site) ── */}
      <div className="bg-[#4EA840] text-white py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] sm:text-xs font-medium tracking-wide shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="tel:9492449268" 
              className="flex items-center gap-1.5 hover:text-emerald-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(949) 244-9268</span>
            </a>
            <a 
              href="mailto:info@congrata.com" 
              className="flex items-center gap-1.5 hover:text-emerald-100 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>info@congrata.com</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-emerald-100">
            <MapPin className="w-3.5 h-3.5" />
            <span>Corona Del Mar, CA • P.O. Box 1197</span>
          </div>
        </div>
      </div>

      {/* ── Floating Luminous Glass Navigation Bar ── */}
      <div className="px-4 sm:px-6 lg:px-8 pt-3">
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl border border-emerald-900/10 shadow-xl shadow-emerald-950/10 py-3 px-6'
              : 'bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md py-3.5 px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Official Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex items-center">
                <img
                  src="/images/logo.png"
                  alt="CONGRATA Official Logo"
                  className="h-8 sm:h-9 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-emerald-50/60 border border-emerald-900/5 rounded-full px-3 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#15736B] hover:bg-white rounded-full transition-all whitespace-nowrap shadow-none hover:shadow-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#engage"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide text-slate-950 bg-[#F5B942] hover:bg-[#E5A830] shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 active:scale-95"
              >
                <span>Become a Scholar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl lg:hidden text-slate-700 hover:text-[#15736B] hover:bg-emerald-50 border border-slate-200 transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="lg:hidden overflow-hidden border-t border-slate-100 mt-3 pt-3 pb-2"
              >
                <div className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#15736B] hover:bg-emerald-50 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="pt-2 flex flex-col gap-2 border-t border-slate-100">
                    <a
                      href="#engage"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#F5B942] shadow-md"
                    >
                      <span>Become a Scholar</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
