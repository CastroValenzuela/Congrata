import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles, Globe, Mail, Check, Copy, Phone, MapPin } from 'lucide-react';
import Velaris from '@/components/ui/velaris';

export default function CTASection() {
  const [copied, setCopied] = useState(false);
  const email = "glmobility@congrata.com";
  const contactEmail = "info@congrata.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="engage" 
      className="py-28 relative overflow-hidden bg-[#071917] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4.5rem] -mt-12 sm:-mt-16 z-50 border-t border-emerald-500/25 shadow-[0_-30px_70px_rgba(0,0,0,0.35)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl shadow-emerald-950/10"
        >
          {/* WebGL Velaris Living Gradient Shader Background in Brand Greens */}
          <Velaris
            bg="#0D3B36"
            colors={["#4EA840", "#15736B", "#2DD4BF", "#F5B942"]}
            speed={1.5}
            grain={0.2}
            height="auto"
            className="p-8 sm:p-14 lg:p-20 text-center"
          >
            {/* Glassmorphic Overlay for optimal text contrast */}
            <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-[2px] pointer-events-none -z-0" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-6 border border-emerald-400/30 shadow-lg backdrop-blur-md">
                <Globe className="w-4 h-4 text-[#4EA840]" />
                <span>Engage with Us • Call to Action</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight font-heading">
                Shape the Future of <br className="hidden sm:inline" />
                <span className="text-emerald-300">Green Scientific Discovery</span>
              </h2>

              <p className="text-base sm:text-xl text-emerald-100/90 font-light leading-relaxed mb-8 max-w-2xl">
                Your support empowers tomorrow's scientists and leaders to create solutions that improve lives across communities, ecosystems, and generations.
              </p>

              {/* Official Application Email & Contact Box */}
              <div className="mb-10 w-full max-w-xl bg-white/95 rounded-2xl p-4 sm:p-5 border border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[#15736B] flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#4EA840]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#15736B] uppercase tracking-wider font-mono">
                      Send CV & Research Inquiries
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#15736B] transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-mono font-bold text-[#15736B] bg-emerald-50 hover:bg-emerald-100 transition-all flex items-center justify-center gap-2 border border-emerald-200 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4EA840]" />
                      <span className="text-[#4EA840]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons in Sunny Gold and Brand Green */}
              <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href={`mailto:${email}?subject=Application%20for%20Scholar%20Global%20Mobility`}
                  className="px-6 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-[#F5B942] hover:bg-[#E5A830] shadow-xl shadow-amber-500/25 transition-all flex items-center gap-2"
                >
                  <span>Become a Scholar</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${contactEmail}?subject=Institutional%20Partnership%20Inquiry`}
                  className="px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#15736B] hover:bg-[#0F5852] border border-emerald-400/40 shadow-xl transition-all flex items-center gap-2"
                >
                  <span>Partner with Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${contactEmail}?subject=Support%20Our%20Mission`}
                  className="px-6 py-3.5 rounded-full text-sm font-bold text-emerald-950 bg-white hover:bg-emerald-50 shadow-xl transition-all flex items-center gap-2"
                >
                  <span>Support Our Mission</span>
                  <Sparkles className="w-4 h-4 text-[#4EA840]" />
                </a>
              </div>
            </div>
          </Velaris>
        </motion.div>
      </div>
    </section>
  );
}
