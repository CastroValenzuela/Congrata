import React from 'react';
import { Globe2, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070A11] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-600 flex items-center justify-center p-0.5 shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-[#090D16] rounded-[9px] flex items-center justify-center">
                  <Globe2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white font-heading">
                CONGRATA <span className="text-cyan-400 font-mono text-sm">2026</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Empowering trailblazers to cross boundaries, build global scientific connections, and create lasting economic, cultural, and community impact.
            </p>
            <div className="text-xs text-slate-500">
              Partnering with University of California & Global Research Institutions.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#programs" className="text-slate-400 hover:text-white transition-colors">
                  Three Pillars
                </a>
              </li>
              <li>
                <a href="#impact" className="text-slate-400 hover:text-white transition-colors">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#engage" className="text-slate-400 hover:text-white transition-colors">
                  Engage with Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Scholars */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#engage" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Become a Scholar <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#engage" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Partner with Us <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#engage" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1">
                  Support Our Mission <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} CONGRATA. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            Cultivating research excellence and scientific credibility.
          </div>
        </div>
      </div>
    </footer>
  );
}
