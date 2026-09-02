'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { ChevronRight, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';
import MagicButton from '@/components/ui/MagicButton';

export function DNAHero() {
  const partners = [
    { name: "University of California", tag: "UC System" },
    { name: "UNAM Mexico", tag: "GREP Network" },
    { name: "MIT Innovation Lab", tag: "STEM Fellowships" },
    { name: "Stanford Bio-X", tag: "Stewardship" },
    { name: "Harvard STEM Hub", tag: "Research" },
    { name: "CERN Geneva", tag: "Physics Lab" },
    { name: "Oxford University", tag: "UK Exchange" },
  ];

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24">
      {/* Background DNA Molecular Video with Glassmorphic Border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl sm:rounded-[3rem] overflow-hidden border border-white/10 bg-[#070A11] shadow-2xl p-8 sm:p-14 lg:p-20 min-h-[560px] flex flex-col justify-between">
          {/* Background Video */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-25 dark:opacity-40"
              src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090D16] via-[#090D16]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-[#090D16]/50" />
          </div>

          {/* Foreground Hero Content */}
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-6 border border-cyan-400/30">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Transnational STEM Discovery & Innovation</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1] font-heading">
              CONGRATA <span className="text-gradient-cyan">FOUNDATION</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed mb-6">
              "The world’s greatest challenges won’t be solved by one discipline, one region, or one perspective."
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-10">
              CONGRATA empowers trailblazers to cross boundaries, build connections, and create lasting economic, cultural, and community impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <MagicButton href="#engage" variant="primary" icon={ArrowRight}>
                Become a Scholar
              </MagicButton>

              <MagicButton href="#engage" variant="secondary" icon={ArrowUpRight}>
                Partner with Us
              </MagicButton>

              <MagicButton href="#engage" variant="amber" icon={Sparkles}>
                Support Our Mission
              </MagicButton>
            </div>
          </div>
        </div>

        {/* Infinite Marquee Slider below the Video Card */}
        <div className="mt-8 rounded-2xl glass-panel p-4 border border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:max-w-48 md:border-r md:border-white/10 md:pr-6 flex-shrink-0">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                Institutional Allies
              </p>
              <p className="text-[11px] text-cyan-400">10+ Years with UC</p>
            </div>

            <div className="relative w-full overflow-hidden py-1">
              <InfiniteSlider speed={30} speedOnHover={12} gap={40}>
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap hover:border-cyan-400/40 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>{partner.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {partner.tag}
                    </span>
                  </div>
                ))}
              </InfiniteSlider>

              <ProgressiveBlur
                direction="left"
                blurIntensity={1}
                className="left-0 top-0 h-full w-16 sm:w-24"
              />
              <ProgressiveBlur
                direction="right"
                blurIntensity={1}
                className="right-0 top-0 h-full w-16 sm:w-24"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DNAHero;
