'use client';

import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { Sparkles, GraduationCap, Building2 } from 'lucide-react';

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
    <section className="relative py-12 border-y border-white/5 bg-[#070A11]/80 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Label / Badge */}
          <div className="flex-shrink-0 flex items-center gap-2.5 md:border-r md:border-white/10 md:pr-8">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                Institutional Allies
              </span>
              <span className="text-[10px] text-slate-400">
                10+ Years of Transnational Mobility
              </span>
            </div>
          </div>

          {/* Infinite Marquee Slider with Progressive Edge Blur */}
          <div className="relative w-full overflow-hidden py-1">
            <InfiniteSlider speed={35} speedOnHover={15} gap={48}>
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl glass-panel border border-white/5 hover:border-cyan-500/30 transition-colors group cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight whitespace-nowrap font-heading">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-cyan-300 border border-white/10 whitespace-nowrap">
                    {partner.tag}
                  </span>
                </div>
              ))}
            </InfiniteSlider>

            {/* Progressive Edge Blurs */}
            <ProgressiveBlur
              direction="left"
              blurIntensity={1}
              className="left-0 top-0 h-full w-16 sm:w-28"
            />
            <ProgressiveBlur
              direction="right"
              blurIntensity={1}
              className="right-0 top-0 h-full w-16 sm:w-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
