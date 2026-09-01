import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, Sparkles, GraduationCap, Building, ExternalLink } from 'lucide-react';

export default function CredibilitySnapshot() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4 border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Legacy & Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Credibility <span className="text-gradient-amber">Snapshot</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            A decade-long commitment to advancing first-generation and women STEM scholars in partnership with leading global institutions.
          </p>
        </div>

        {/* 2-Column Split: Narrative on Left, High-Impact Quote on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Narrative Card with University Campus Backdrop (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-white/10 relative overflow-hidden group min-h-[440px]"
          >
            {/* Background Photographic Image with Subtle Gradient */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
                alt="University of California Partnership"
                className="w-full h-full object-cover object-center opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/90 to-[#090D16]/40" />
            </div>

            <div className="relative z-10 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 text-xs font-semibold backdrop-blur-md">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>University of California Partnership</span>
              </div>
              
              <p className="text-slate-200 font-normal">
                For over a decade, <span className="text-white font-semibold">CONGRATA</span> partnering with the <span className="text-cyan-300 font-medium">University of California</span> has advanced opportunities for first-generation STEM scholars, particularly women.
              </p>
              
              <p className="text-slate-300 text-sm sm:text-base">
                As the founder of CONGRATA and co-founder of the Mexico Graduate Research and Education Program, have consistently witnessed the importance of fostering science scholars to enrich and expand their pathways toward scientific excellence.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm">
                Through international mobility, they have explored new viewpoints, gaining experience in different research environments, broadening their perspectives beyond institutional boundaries. Returning refreshed and inspired, with new ideas, amplifying connections, and renewed enthusiasm to continue their demanding academic journeys to pursue new and meaningful opportunities for research and scientific excellence.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-extrabold text-sm shadow-md">
                  UC
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-white">University of California</div>
                  <div className="text-[11px] text-slate-400">Collaborative Research Partner</div>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-xl border border-cyan-500/25">
                10+ Years of Impact
              </span>
            </div>
          </motion.div>

          {/* Featured Testimonial Quote Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-amber-500/20 bg-amber-500/[0.02] relative overflow-hidden group shadow-2xl min-h-[440px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 shadow-md group-hover:scale-105 transition-transform">
                <Quote className="w-6 h-6" />
              </div>

              <blockquote className="text-lg sm:text-xl font-light text-slate-100 italic leading-relaxed mb-6">
                "The experiences of our graduates speak to the transformative power of scientific mobility. Their stories offer a firsthand perspective on how working and learning across borders can shape not only their research, but also their confidence, aspirations, vision for their scientific careers."
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 p-0.5 shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-[#0B0F19] rounded-full flex items-center justify-center text-amber-300 font-bold text-sm">
                  CG
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">CONGRATA Leadership</h4>
                <p className="text-xs text-amber-300/80">Founder & Academic Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
