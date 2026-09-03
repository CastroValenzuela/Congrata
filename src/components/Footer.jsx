import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/10 bg-[#0F2D28] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4EA840]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="CONGRATA Official Logo"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </div>
            
            <p className="text-sm font-semibold text-emerald-300 font-heading">
              Consortium for Green Research and Technology Advancement
            </p>

            <p className="text-sm text-emerald-100/80 max-w-md leading-relaxed font-light">
              Empowering trailblazers to cross boundaries, build global scientific connections, and create lasting economic, cultural, and community impact.
            </p>

            {/* Official Contact Info from Live Website */}
            <div className="pt-2 space-y-2 text-xs text-emerald-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#4EA840]" />
                <span>Corona Del Mar, CA • P.O. Box 1197</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#4EA840]" />
                <a href="tel:9492449268" className="hover:text-white transition-colors">
                  (949) 244-9268
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#4EA840]" />
                <a href="mailto:info@congrata.com" className="hover:text-white transition-colors">
                  info@congrata.com
                </a>
                <span>•</span>
                <a href="mailto:luisa@congrata.com" className="hover:text-white transition-colors">
                  luisa@congrata.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4 font-mono">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="text-emerald-100/80 hover:text-white transition-colors">
                  About Us & The Challenge
                </a>
              </li>
              <li>
                <a href="#programs" className="text-emerald-100/80 hover:text-white transition-colors">
                  Scholars Global Mobility
                </a>
              </li>
              <li>
                <a href="#founder" className="text-emerald-100/80 hover:text-white transition-colors">
                  Founder's Inspiration
                </a>
              </li>
              <li>
                <a href="#impact" className="text-emerald-100/80 hover:text-white transition-colors">
                  CONGRATA Impact
                </a>
              </li>
              <li>
                <a href="#experiences" className="text-emerald-100/80 hover:text-white transition-colors">
                  Alumni Experiences
                </a>
              </li>
              <li>
                <a href="#team" className="text-emerald-100/80 hover:text-white transition-colors">
                  Our Mentors & Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Scholars */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4 font-mono">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:glmobility@congrata.com?subject=Application%20for%20Scholar%20Global%20Mobility" className="text-emerald-100/80 hover:text-[#4EA840] transition-colors flex items-center gap-1">
                  Become a Scholar <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="mailto:info@congrata.com?subject=Institutional%20Partnership%20Inquiry" className="text-emerald-100/80 hover:text-[#4EA840] transition-colors flex items-center gap-1">
                  Partner with Us <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="mailto:luisa@congrata.com?subject=Support%20Our%20Mission" className="text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1 font-semibold">
                  Support Our Mission <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/80">
          <div>
            © {new Date().getFullYear()} CONGRATA Foundation. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-emerald-200">
            Cultivating green research excellence and scientific credibility.
          </div>
        </div>
      </div>
    </footer>
  );
}
