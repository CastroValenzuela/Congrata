'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  GraduationCap, 
  Building2, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  Globe2, 
  Send,
  ShieldCheck,
  Cpu,
  Sprout,
  HeartPulse
} from 'lucide-react';

interface ScholarModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: string;
}

export default function ScholarIntakeModal({ isOpen, onClose, defaultType = 'scholar' }: ScholarModalProps) {
  const [step, setStep] = useState(1);
  const [profileType, setProfileType] = useState(defaultType);
  const [researchTrack, setResearchTrack] = useState('healthcare');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    field: '',
    note: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSubmitted(false);
      if (defaultType) setProfileType(defaultType);
    }
  }, [isOpen, defaultType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with Heavy Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#030D0B]/80 backdrop-blur-xl transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-2xl bg-[#071917]/95 border border-emerald-500/30 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_40px_rgba(78,168,64,0.15)] backdrop-blur-2xl p-6 sm:p-10 text-white overflow-hidden my-8"
          >
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Top Bar / Close */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4EA840] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  CONGRATA Transnational Intake Protocol
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {isSubmitted ? (
              /* Success Screen */
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-[#4EA840] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(78,168,64,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Transmission Acknowledged
                  </h3>
                  <p className="text-sm text-emerald-100/70 max-w-md mx-auto leading-relaxed">
                    Your preliminary profile has been logged into the CONGRATA Transnational Corridor registry under reference <strong className="text-emerald-300 font-mono">#CNG-{Math.floor(10000 + Math.random() * 90000)}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0C2421] border border-emerald-500/30 text-xs text-left font-mono space-y-1.5 max-w-md mx-auto">
                  <div className="text-slate-400">TARGET: <span className="text-white">{formData.email || 'glmobility@congrata.com'}</span></div>
                  <div className="text-slate-400">AFFILIATION: <span className="text-white">{formData.institution || 'Recognized Graduate Program'}</span></div>
                  <div className="text-slate-400">TRACK: <span className="text-[#4EA840] uppercase">{researchTrack}</span></div>
                </div>

                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4EA840] to-[#15736B] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-emerald-500/25 transition-all"
                >
                  Return to Exploration
                </button>
              </div>
            ) : (
              /* Multi-step Form */
              <div>
                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                          step === s
                            ? 'bg-[#4EA840] text-slate-950 shadow-[0_0_15px_rgba(78,168,64,0.5)]'
                            : step > s
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                            : 'bg-white/5 text-slate-500 border border-white/10'
                        }`}
                      >
                        {step > s ? '✓' : s}
                      </div>
                      <span className={`text-xs font-mono hidden sm:inline ${step === s ? 'text-white font-bold' : 'text-slate-500'}`}>
                        {s === 1 ? 'Affiliation' : s === 2 ? 'Research Focus' : 'Credentials'}
                      </span>
                      {s < 3 && <div className="w-8 sm:w-16 h-[1px] bg-white/10 mx-2" />}
                    </div>
                  ))}
                </div>

                {/* Step 1: Affiliation Type */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white mb-2">
                        Select Your Institutional Engagement
                      </h3>
                      <p className="text-sm text-slate-400 font-light">
                        Specify how you intend to interact with the CONGRATA global consortium.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {[
                        {
                          id: 'scholar',
                          title: 'STEM Scholar',
                          subtitle: 'Master’s / PhD candidate',
                          icon: GraduationCap,
                        },
                        {
                          id: 'institution',
                          title: 'University / Lab',
                          subtitle: 'Institutional Partner',
                          icon: Building2,
                        },
                        {
                          id: 'endowment',
                          title: 'Philanthropy',
                          subtitle: 'Endowments & Grants',
                          icon: HeartHandshake,
                        },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = profileType === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setProfileType(item.id)}
                            className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all min-h-[120px] ${
                              isSelected
                                ? 'bg-emerald-950/80 border-[#4EA840] shadow-[0_0_20px_rgba(78,168,64,0.2)] ring-1 ring-[#4EA840]'
                                : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                            }`}
                          >
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-[#4EA840]' : 'text-slate-400'}`} />
                            <div>
                              <div className="text-sm font-bold text-white">{item.title}</div>
                              <div className="text-[11px] text-slate-400">{item.subtitle}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4EA840] to-[#15736B] text-white text-xs font-bold font-mono tracking-wider hover:brightness-110 shadow-lg"
                      >
                        <span>PROCEED TO TRACKS</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Research Domain */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white mb-2">
                        Primary Scientific Domain
                      </h3>
                      <p className="text-sm text-slate-400 font-light">
                        Select the primary field of investigation for cross-border collaboration.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          id: 'healthcare',
                          title: 'Track 01 • Healthcare & Biomedical Phenomics',
                          desc: 'Micro-sensing, equitable therapeutics, and diagnostic biomarkers.',
                          icon: HeartPulse,
                        },
                        {
                          id: 'energy',
                          title: 'Track 02 • Smart Energy & AI Grid Management',
                          desc: 'Clean solar distribution, storage physics, and algorithmic grid balancing.',
                          icon: Cpu,
                        },
                        {
                          id: 'agro',
                          title: 'Track 03 • Sustainable Agriculture & Soil Bio-Tech',
                          desc: 'Rhizosphere microbiology, drought resilience, and regional food security.',
                          icon: Sprout,
                        },
                      ].map((track) => {
                        const Icon = track.icon;
                        const isSelected = researchTrack === track.id;
                        return (
                          <button
                            key={track.id}
                            type="button"
                            onClick={() => setResearchTrack(track.id)}
                            className={`w-full p-4 rounded-2xl border text-left flex items-start gap-4 transition-all ${
                              isSelected
                                ? 'bg-emerald-950/80 border-[#4EA840] shadow-[0_0_20px_rgba(78,168,64,0.2)] ring-1 ring-[#4EA840]'
                                : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                            }`}
                          >
                            <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[#4EA840] text-slate-950' : 'bg-white/10 text-slate-400'}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white">{track.title}</div>
                              <div className="text-xs text-slate-400 font-light mt-0.5">{track.desc}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-mono text-slate-400 hover:text-white"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4EA840] to-[#15736B] text-white text-xs font-bold font-mono tracking-wider hover:brightness-110 shadow-lg"
                      >
                        <span>PROCEED TO DETAILS</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Fast Intake Details */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white mb-1">
                        Candidate & Institution Credentials
                      </h3>
                      <p className="text-xs text-slate-400 font-light">
                        Our admissions and mobility review committee responds within 3 business days.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dr. Maria Gonzalez"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4EA840] focus:ring-1 focus:ring-[#4EA840]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                          Official Institutional Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@university.edu"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4EA840] focus:ring-1 focus:ring-[#4EA840]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                        Current Institution or Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="e.g. UC Irvine / UNAM / MIT / Stanford"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4EA840] focus:ring-1 focus:ring-[#4EA840]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                        Proposed Research Objective or Inquiry
                      </label>
                      <textarea
                        rows={3}
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        placeholder="Brief summary of research focus or partnership scope..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4EA840] focus:ring-1 focus:ring-[#4EA840] resize-none"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-xs font-mono text-slate-400 hover:text-white"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#4EA840] to-[#15736B] text-white text-xs font-bold font-mono tracking-wider hover:brightness-110 shadow-lg shadow-emerald-950"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>SUBMIT DOSSIER</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
