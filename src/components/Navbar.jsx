import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

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
      {/* ── Ultra-Glassmorphic Floating Navigation Capsule ── */}
      <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div
          className={`max-w-7xl mx-auto rounded-3xl transition-all duration-400 ${
            scrolled
              ? 'glass-navbar py-2.5 px-6 shadow-2xl ring-1 ring-emerald-500/20'
              : 'glass-navbar py-3.5 px-6 shadow-xl ring-1 ring-white/60'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Official Brand Logo with Specular Glass Glow */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex items-center p-1 rounded-xl group-hover:bg-white/40 transition-colors">
                <img
                  src="/images/logo.png"
                  alt="CONGRATA Official Logo"
                  className="h-8 sm:h-9 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>

            {/* Desktop Frosted Navigation Capsule */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full px-3 py-1 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#15736B] hover:bg-white/90 rounded-full transition-all whitespace-nowrap shadow-none hover:shadow-sm hover:border hover:border-emerald-500/20"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action CTA & Mobile Toggle with Pro Shimmer */}
            <div className="flex items-center gap-3">
              <a
                href="#engage"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide text-slate-950 bg-[#F5B942] hover:bg-[#E5A830] shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 border border-white/40 transition-all duration-200 active:scale-95 group"
              >
                <span>Become a Scholar</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-2xl lg:hidden text-slate-700 hover:text-[#15736B] bg-white/60 backdrop-blur-md hover:bg-white border border-white/60 transition-colors cursor-pointer shadow-sm"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Glass Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="lg:hidden overflow-hidden border-t border-emerald-900/10 mt-3 pt-3 pb-2"
              >
                <div className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 hover:text-[#15736B] hover:bg-white/80 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="pt-2 flex flex-col gap-2 border-t border-slate-100">
                    <a
                      href="#engage"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#F5B942] shadow-md"
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
