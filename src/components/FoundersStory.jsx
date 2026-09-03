import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

export default function FoundersStory() {
  return (
    <section id="founder" className="py-24 relative overflow-hidden bg-[#F8FAF9]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-xs font-bold uppercase tracking-wider text-[#15736B] mb-4 border border-emerald-300/50 shadow-sm">
            <Quote className="w-3.5 h-3.5 text-[#4EA840]" />
            <span>Origin & Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
            Founder’s <span className="text-gradient-green">Inspiration</span>
          </h2>
          <p className="text-[#15736B] text-lg sm:text-xl font-light italic max-w-2xl text-center">
            "Every meaningful mission begins with a personal journey. CONGRATA was born from mine."
          </p>
        </div>

        {/* Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 sm:p-14 border border-emerald-900/10 relative overflow-hidden shadow-xl shadow-emerald-950/5"
        >
          {/* Subtle Watermark Quote */}
          <Quote className="absolute -bottom-10 -right-10 w-64 h-64 text-emerald-500/[0.04] pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
            
            <p className="font-light">
              As an international female scholar in STEM, I experienced firsthand the excitement, uncertainty, and transformation that come with pursuing education beyond one's borders.
            </p>

            <p className="font-light">
              My journey began as a chemical engineering intern at <strong>Celanese de México</strong>, where I spent several summers discovering not only the technical foundations of engineering but also the possibilities of a career dedicated to innovation. Later, my work evaluating emerging technologies and patent applications at <strong>Mexico's National Council of Science and Technology (CONACYT)</strong> strengthened my conviction that scientific discovery has the power to impact society, becoming the inspiration to pursue graduate studies abroad.
            </p>

            {/* Pull Quote Box */}
            <div className="my-8 p-6 sm:p-8 rounded-2xl bg-emerald-50/80 border-l-4 border-[#4EA840] text-slate-900 font-normal italic text-lg sm:text-xl leading-relaxed shadow-sm">
              "Behind every international scholar is a story of courage. It is the resilience to navigate unfamiliar educational systems, overcome cultural barriers, confront self-doubt, and persevere through moments of profound isolation. These experiences are rarely reflected on a résumé, yet they shape the leaders, innovators, and changemakers our world needs."
            </div>

            <p className="font-light">
              Yet I soon discovered that succeeding in graduate school required far more than academic excellence. These experiences are transformational but also reveal a critical gap.
            </p>

            <p className="font-light">
              A thriving first generation of scholars has extraordinary passion, determination for change, and intellectual capacity—but often without the structured support needed to navigate the personal, cultural, and professional challenges of studying internationally. Too often, they face these obstacles alone.
            </p>

            {/* Conclusion Statement */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-1">
                  "What if every social entrepreneur and STEM scholar had access to the guidance, community, and tools needed not only to succeed academically abroad, but to truly flourish?"
                </p>
                <p className="text-[#15736B] font-bold text-lg mt-2">
                  That answer became CONGRATA.
                </p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-3 bg-emerald-50 px-5 py-3 rounded-2xl border border-emerald-200 shadow-sm">
                <Sparkles className="w-5 h-5 text-[#4EA840]" />
                <div className="text-xs">
                  <div className="text-slate-900 font-bold">CONGRATA Foundation</div>
                  <div className="text-slate-500">Co-Founder GREP / UC Partner</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
