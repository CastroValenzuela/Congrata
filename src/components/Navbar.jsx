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
    { name: 'Engage', href: '#engage' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0F19]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 py-3 px-6'
            : 'bg-white/[0.03] backdrop-blur-md border border-white/5 py-3.5 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center">
              <img
                src="/images/logo.png"
                alt="CONGRATA Official Logo"
                className="h-8 sm:h-9 w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(45,212,191,0.25)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              2026
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white rounded-full transition-colors hover:bg-white/5 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#engage"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 active:scale-95"
            >
              <span>Become a Scholar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl lg:hidden text-slate-300 hover:text-white hover:bg-white/5 border border-white/5 transition-colors cursor-pointer"
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
              className="lg:hidden overflow-hidden border-t border-white/10 mt-3 pt-3 pb-2"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-2 flex flex-col gap-2 border-t border-white/5">
                  <a
                    href="#engage"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 shadow-lg shadow-cyan-500/20"
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
    </header>
  );
}
