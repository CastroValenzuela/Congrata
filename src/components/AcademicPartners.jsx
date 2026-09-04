'use client';

import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { GraduationCap, Sparkles } from 'lucide-react';

export default function AcademicPartners() {
  const partners = [
    { name: "University of California", type: "Key Founding Partner", tag: "UC System" },
    { name: "UNAM Mexico", type: "GREP Network", tag: "Latin America" },
    { name: "MIT Innovation Lab", type: "Research Fellowships", tag: "STEM Exchange" },
    { name: "Stanford Bio-X", type: "Stewardship Program", tag: "California" },
    { name: "Harvard STEM Hub", type: "Interdisciplinary Research", tag: "Scholars Network" },
    { name: "CERN Geneva", type: "Transnational Physics", tag: "European Lab" },
    { name: "Oxford University", type: "Global Mobility", tag: "UK Fellowships" },
    { name: "Tec de Monterrey", type: "Social Entrepreneurship", tag: "Innovation Hub" },
  ];

  return (
    <section className="relative py-8 sm:py-10 mb-4 sm:mb-6 border-y border-emerald-900/10 bg-[#F8FAF9]/80 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          
          {/* Label / Badge */}
          <div className="flex-shrink-0 flex items-center gap-3 md:border-r md:border-slate-200/90 md:pr-8">
            <div className="w-9 h-9 rounded-xl bg-emerald-100/90 border border-emerald-300/80 flex items-center justify-center text-[#15736B] shadow-sm">
              <GraduationCap className="w-4 h-4 text-[#4EA840]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 font-heading">
                  Institutional Allies
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4EA840] animate-pulse" />
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                10+ Years of Transnational Mobility
              </span>
            </div>
          </div>

          {/* Infinite Marquee Slider with Clean Light Edge Fades */}
          <div className="relative w-full overflow-hidden py-1">
            <InfiniteSlider speed={35} speedOnHover={15} gap={28}>
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-[#4EA840] hover:shadow-md transition-all duration-300 group cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-[#4EA840] group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-bold text-slate-800 group-hover:text-[#15736B] transition-colors tracking-tight whitespace-nowrap font-heading">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#15736B] border border-emerald-200/80 whitespace-nowrap font-semibold">
                    {partner.tag}
                  </span>
                </div>
              ))}
            </InfiniteSlider>

            {/* Seamless Light Theme Edge Fades (Zero Dark Halos) */}
            <ProgressiveBlur
              direction="left"
              color="#F8FAF9"
              blurIntensity={0.5}
              className="left-0 top-0 h-full w-16 sm:w-28 z-10 pointer-events-none"
            />
            <ProgressiveBlur
              direction="right"
              color="#F8FAF9"
              blurIntensity={0.5}
              className="right-0 top-0 h-full w-16 sm:w-28 z-10 pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
