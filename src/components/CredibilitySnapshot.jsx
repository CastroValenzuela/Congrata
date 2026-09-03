import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, GraduationCap } from 'lucide-react';

export default function CredibilitySnapshot() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 text-xs font-bold uppercase tracking-wider text-amber-800 mb-4 border border-amber-300/50 shadow-sm">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Legacy & Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
            Credibility <span className="text-gradient-amber">Snapshot</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
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
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-emerald-900/10 shadow-xl shadow-emerald-950/5 relative overflow-hidden group min-h-[440px] hover:border-[#4EA840] transition-all"
          >
            <div className="relative z-10 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#15736B] border border-emerald-200 text-xs font-bold">
                <GraduationCap className="w-4 h-4 text-[#4EA840]" />
                <span>University of California Partnership</span>
              </div>
              
              <p className="text-slate-900 font-normal">
                For over a decade, <span className="font-bold text-[#15736B]">CONGRATA</span> partnering with the <span className="font-semibold text-[#4EA840]">University of California</span> has advanced opportunities for first-generation STEM scholars, particularly women.
              </p>
              
              <p className="text-slate-600 text-sm sm:text-base">
                As the founder of CONGRATA and co-founder of the Mexico Graduate Research and Education Program, have consistently witnessed the importance of fostering science scholars to enrich and expand their pathways toward scientific excellence.
              </p>

              <p className="text-slate-500 text-xs sm:text-sm">
                Through international mobility, they have explored new viewpoints, gaining experience in different research environments, broadening their perspectives beyond institutional boundaries. Returning refreshed and inspired, with new ideas, amplifying connections, and renewed enthusiasm to continue their demanding academic journeys.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[#15736B] font-extrabold text-sm shadow-sm">
                  UC
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">University of California</div>
                  <div className="text-[11px] text-slate-500">Collaborative Research Partner</div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#15736B] bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-200">
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
            className="lg:col-span-5 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40 rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-amber-300/80 shadow-xl shadow-amber-950/5 relative overflow-hidden group min-h-[440px]"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <Quote className="w-6 h-6 text-amber-600" />
              </div>

              <blockquote className="text-lg sm:text-xl font-light text-slate-800 italic leading-relaxed mb-6">
                "The experiences of our graduates speak to the transformative power of scientific mobility. Their stories offer a firsthand perspective on how working and learning across borders can shape not only their research, but also their confidence, aspirations, vision for their scientific careers."
              </blockquote>
            </div>

            <div className="pt-6 border-t border-amber-200/60 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F5B942] p-0.5 shadow-md shadow-amber-500/20">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-amber-800 font-extrabold text-sm">
                  CG
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">CONGRATA Leadership</h4>
                <p className="text-xs font-semibold text-amber-700">Founder & Academic Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
