import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles, Globe, Mail, Check, Copy } from 'lucide-react';
import Velaris from '@/components/ui/velaris';
import MagicButton from '@/components/ui/MagicButton';

export default function CTASection() {
  const [copied, setCopied] = useState(false);
  const email = "glmobility@congrata.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="engage" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_80px_rgba(8,145,178,0.2)]"
        >
          {/* WebGL Velaris Living Gradient Shader Background */}
          <Velaris
            bg="#070A11"
            colors={["#22D3EE", "#0891B2", "#0D9488", "#1E3A8A"]}
            speed={1.5}
            grain={0.22}
            height="auto"
            className="p-8 sm:p-14 lg:p-20 text-center"
          >
            {/* Subtle Glassmorphic Overlay for optimal text contrast */}
            <div className="absolute inset-0 bg-[#070A11]/60 backdrop-blur-[2px] pointer-events-none -z-0" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-6 border border-cyan-400/30 shadow-lg">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Engage with Us • Call to Action</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight font-heading">
                Shape the Future of <br className="hidden sm:inline" />
                <span className="text-gradient-cyan">Scientific Discovery</span>
              </h2>

              <p className="text-base sm:text-xl text-slate-200 font-light leading-relaxed mb-8 max-w-2xl">
                Your support empowers tomorrow's scientists and leaders to create solutions that improve lives across communities, nations, and generations.
              </p>

              {/* Official Application Email Callout Box */}
              <div className="mb-10 w-full max-w-xl glass-panel rounded-2xl p-4 sm:p-5 border border-cyan-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-cyan-300 uppercase tracking-wider font-mono">
                      Send CV & Inquiries
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-mono font-semibold text-slate-200 bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/15 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Magic Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
                <MagicButton href={`mailto:${email}?subject=Application%20for%20Scholar%20Global%20Mobility`} variant="primary" icon={ArrowRight}>
                  Become a Scholar
                </MagicButton>

                <MagicButton href={`mailto:${email}?subject=Institutional%20Partnership%20Inquiry`} variant="secondary" icon={ArrowUpRight}>
                  Partner with Us
                </MagicButton>

                <MagicButton href={`mailto:${email}?subject=Support%20Our%20Mission`} variant="amber" icon={Sparkles}>
                  Support Our Mission
                </MagicButton>
              </div>
            </div>
          </Velaris>
        </motion.div>
      </div>
    </section>
  );
}
