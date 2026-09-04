"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { 
  ArrowUpRight, 
  Sparkles, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Globe, 
  Copy, 
  Check, 
  ArrowRight,
  Phone,
  Compass,
  ShieldCheck,
  Cpu
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  background: linear-gradient(180deg, #071F1B 0%, #051613 40%, #030D0B 100%);
  color: #F8FAF9;
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.35; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.75; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 35s linear infinite;
}

/* Organic Grid Background */
.footer-bg-grid {
  background-size: 50px 50px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
}

/* Emerald & Teal Aurora Glow */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(78, 168, 64, 0.30) 0%, 
    rgba(21, 115, 107, 0.22) 45%, 
    transparent 70%
  );
}

/* Glass Pill Theming */
.footer-glass-pill {
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 
      0 10px 30px -10px rgba(0, 0, 0, 0.5), 
      inset 0 1px 1px rgba(255, 255, 255, 0.2), 
      inset 0 -1px 2px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(78, 168, 64, 0.5);
  box-shadow: 
      0 20px 40px -10px rgba(78, 168, 64, 0.25), 
      inset 0 1px 1px rgba(255, 255, 255, 0.4);
  color: #FFFFFF;
}

/* Giant Bottom Half-Cut Horizon Brand Name (Full Edge-to-Edge, 50% Vertical Crop) */
.footer-half-cut-container {
  width: 100%;
  height: clamp(3rem, 9.5vw, 10.5vw);
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  pointer-events: none;
  user-select: none;
  margin-top: 0.5rem;
}

.footer-giant-half-text {
  font-size: clamp(4.5rem, 19vw, 19vw);
  line-height: 0.82;
  font-weight: 900;
  letter-spacing: -0.04em;
  font-family: 'Outfit', sans-serif;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.16);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(78, 168, 64, 0.22) 50%, transparent 90%);
  -webkit-background-clip: text;
  background-clip: text;
  white-space: nowrap;
  width: 100vw;
  text-align: center;
  display: block;
  user-select: none;
  pointer-events: none;
  transform: translateY(-4%);
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.75) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 30px rgba(78, 168, 64, 0.25));
  font-family: 'Outfit', sans-serif;
}
`;

export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.3,
            y: y * 0.3,
            rotationX: -y * 0.1,
            rotationY: x * 0.1,
            scale: 1.03,
            ease: "power2.out",
            duration: 0.35,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
  <div className="flex items-center space-x-10 px-6">
    <span>Transnational Mobility</span> <span className="text-[#4EA840]">✦</span>
    <span>Early Career STEM</span> <span className="text-[#F5B942]">✦</span>
    <span>Meaningful Stewardship</span> <span className="text-[#4EA840]">✦</span>
    <span>Ecological Innovation</span> <span className="text-[#F5B942]">✦</span>
    <span>Social Entrepreneurship</span> <span className="text-[#4EA840]">✦</span>
    <span>UC System Alliance</span> <span className="text-[#F5B942]">✦</span>
  </div>
);

export function CinematicFooter() {
  const [copied, setCopied] = useState(false);
  const email = "luisa@congrata.com";
  const contactEmail = "luisa@congrata.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      {/* 
        ── THE GRAND FINALE (Unified CTA & Cinematic Institutional Footer) ──
        Renders in natural document flow with rounded top sheet corners,
        glowing specular rim, and zero jarring gaps.
      */}
      <section
        id="engage"
        className="relative w-full overflow-hidden cinematic-footer-wrapper rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4.5rem] -mt-12 sm:-mt-16 z-50 border-t border-emerald-500/30 shadow-[0_-35px_80px_rgba(0,0,0,0.45)] before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-emerald-400/40 before:to-transparent"
      >
        {/* Ambient Aurora Light & Grid */}
        <div className="footer-aurora absolute left-1/2 top-1/4 h-[35vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
        <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

        {/* ── PART 1: THE HEROIC CALL TO ACTION (Compact & Punchy) ── */}
        <div className="relative z-10 pt-10 sm:pt-14 pb-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-300 mb-3 border border-emerald-500/30 shadow-md backdrop-blur-md">
            <Globe className="w-3.5 h-3.5 text-[#4EA840]" />
            <span>Engage with Us • Transnational Stewardship</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 leading-tight font-heading footer-text-glow max-w-3xl mx-auto">
            Shape the Future of <br className="hidden sm:inline" />
            <span className="text-[#4EA840]">Green Scientific Discovery</span>
          </h2>

          <p className="text-sm sm:text-base text-emerald-100/80 font-light leading-relaxed mb-6 max-w-xl mx-auto">
            Your support empowers tomorrow's scientists and leaders to create solutions that improve lives across communities, ecosystems, and generations.
          </p>

          {/* High-Conversion Fast Email Copy Capsule */}
          <div 
            data-cursor="COPY"
            onClick={handleCopyEmail}
            className="mb-6 w-full max-w-lg mx-auto bg-[#0C2421]/90 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl cursor-pointer hover:border-emerald-400 transition-colors"
          >
            <div className="flex items-center gap-3 text-left px-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-[#4EA840] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Direct Inquiries & CV Submissions
                </div>
                <div className="text-xs sm:text-sm font-bold text-white hover:text-emerald-300 transition-colors">
                  {email}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleCopyEmail();
              }}
              className="w-full sm:w-auto px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold text-white bg-emerald-900/60 hover:bg-emerald-800/80 transition-all flex items-center justify-center gap-1.5 border border-emerald-500/30 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#4EA840]" />
                  <span className="text-[#4EA840]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Action Button Capsules with Intake Protocol Modal Triggers */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              as="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-scholar-modal', { detail: { type: 'scholar' } }));
                }
              }}
              className="px-6 py-2.5 rounded-full bg-[#F5B942] hover:bg-[#E5A830] text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/25 flex items-center gap-2 border border-amber-300/40 transition-all cursor-pointer"
            >
              <span>Become a Scholar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>

            <MagneticButton
              as="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-scholar-modal', { detail: { type: 'institution' } }));
                }
              }}
              className="footer-glass-pill px-6 py-2.5 rounded-full text-white font-bold text-xs sm:text-sm flex items-center gap-2 group cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-300 group-hover:text-white transition-colors" />
              <span>Partner with Us</span>
            </MagneticButton>

            <MagneticButton
              as="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-scholar-modal', { detail: { type: 'endowment' } }));
                }
              }}
              className="footer-glass-pill px-5 py-2.5 rounded-full text-emerald-200 font-semibold text-xs sm:text-sm flex items-center gap-2 hover:text-white cursor-pointer"
            >
              <span>Support Mission</span>
              <Sparkles className="w-3.5 h-3.5 text-[#F5B942]" />
            </MagneticButton>
          </div>

        </div>

        {/* ── PART 2: ANIMATED MARQUEE TICKER (Tighter Vertical Footprint) ── */}
        <div className="relative w-full overflow-hidden border-y border-white/10 bg-black/40 backdrop-blur-md py-2.5 my-3 shadow-xl">
          <div className="flex w-max animate-footer-scroll-marquee text-xs font-bold tracking-[0.2em] text-emerald-100/80 uppercase font-mono">
            <MarqueeItem />
            <MarqueeItem />
          </div>
        </div>

        {/* ── PART 3: 4-COLUMN INSTITUTIONAL FOOTER (Compact & Airy) ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-white/10">
            
            {/* Col 1: Brand & Mandate (Span 4) */}
            <div className="lg:col-span-4 space-y-2">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="CONGRATA Official Logo"
                  className="h-8 w-auto object-contain brightness-110 drop-shadow-md"
                />
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light max-w-sm">
                Consortium for Green Research and Technology Advancement. Cultivating early-career scientific leaders to cross boundaries and create lasting impact.
              </p>

              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4EA840] animate-pulse" />
                <span>ACTIVE TRANSNATIONAL CORRIDOR</span>
              </div>
            </div>

            {/* Col 2: Navigation Links (Span 2) */}
            <div className="lg:col-span-2 space-y-2">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                [01] Navigation
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-light">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#pillars" className="hover:text-white transition-colors">Strategic Pillars</a></li>
                <li><a href="#founder" className="hover:text-white transition-colors">Founder's Story</a></li>
                <li><a href="#impact" className="hover:text-white transition-colors">Impact & Globe</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Leadership</a></li>
              </ul>
            </div>

            {/* Col 3: Research Focus (Span 3) */}
            <div className="lg:col-span-3 space-y-2">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                [02] Research Focus
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-light">
                <li className="flex items-center gap-1.5">
                  <span className="text-[#4EA840] text-xs">›</span>
                  <span>Healthcare & Phenomics</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#4EA840] text-xs">›</span>
                  <span>Smart Energy & AI Grids</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#4EA840] text-xs">›</span>
                  <span>Sustainable AgroTech & Soil</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#4EA840] text-xs">›</span>
                  <span>60-Day Global Mobility</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Office (Span 3) */}
            <div className="lg:col-span-3 space-y-2">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                [03] Headquarters
              </h4>
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-light">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#4EA840] shrink-0 mt-0.5" />
                  <span>Corona Del Mar, CA 92625 • P.O. Box 1197</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#4EA840] shrink-0" />
                  <a href="tel:9492449268" className="hover:text-white transition-colors">
                    (949) 244-9268
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#4EA840] shrink-0" />
                  <a href="mailto:luisa@congrata.com" className="hover:text-white transition-colors">
                    luisa@congrata.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ── PART 4: BOTTOM LEGAL & BACK TO TOP ── */}
          <div className="pt-3 pb-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono border-t border-white/5 mt-2">
            <div>
              © CONGRATA. All rights reserved. • UC System Academic Alliance
            </div>

            <div className="flex items-center gap-4">
              <span className="text-slate-500 hidden sm:inline">Global Science & Technology Advancement</span>
              <MagneticButton
                as="button"
                onClick={scrollToTop}
                className="w-9 h-9 rounded-full footer-glass-pill flex items-center justify-center text-slate-300 hover:text-white group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform duration-300" />
              </MagneticButton>
            </div>
          </div>

        </div>

        {/* ── PART 5: MONUMENTAL FULL-BLEED HORIZON WORDMARK (Edge-to-Edge, 50% Vertical Crop) ── */}
        <div className="footer-half-cut-container">
          <div className="footer-giant-half-text">
            CONGRATA
          </div>
        </div>

      </section>
    </>
  );
}

export default CinematicFooter;
