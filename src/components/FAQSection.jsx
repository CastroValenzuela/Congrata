'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  GraduationCap, 
  Building2, 
  HeartHandshake, 
  MapPin, 
  Phone, 
  Mail,
  ArrowUpRight
} from 'lucide-react';

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState('scholars');
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = {
    scholars: [
      {
        q: 'Who is eligible to apply for the 60-Day Global Mobility Fellowship?',
        a: 'The program is designed for first-generation early-career STEM researchers and women in science regularly enrolled in recognized Master’s and PhD programs. Applicants should demonstrate scientific dedication in one of our three priority domains: Healthcare & Phenomics, Smart Energy & AI Grids, or Sustainable AgroTech & Soil Regeneration.',
      },
      {
        q: 'What expenses are covered by the CONGRATA Fellowship?',
        a: 'The fellowship provides a comprehensive mobility package covering round-trip international airfare, a 60-day living and lodging stipend, international health insurance, and laboratory research consumable allowances at the host institution.',
      },
      {
        q: 'Can I apply if my home university does not currently have a signed MOU with CONGRATA?',
        a: 'Yes. Individual graduate researchers from accredited institutions can initiate an expression of interest. If selected, CONGRATA’s Academic Alliances office works with your graduate division and department chair to establish an expedited institutional exchange framework.',
      },
      {
        q: 'What is expected of scholars upon completion of their international stay?',
        a: 'Scholars submit a comprehensive research report evaluated by the joint academic advisory council. Many of these reports form the basis for peer-reviewed papers, international patent filings, or continuing multi-year postdoctoral pathways across borders.',
      },
    ],
    universities: [
      {
        q: 'How does a university establish a collaborative Memorandum of Understanding (MOU)?',
        a: 'Institutional leaders and department chairs can submit an alliance request via our intake protocol. Our executive committee reviews academic alignment, faculty co-mentorship capacity, and reciprocal student exchange commitments within 2–3 weeks.',
      },
      {
        q: 'How are intellectual property (IP) and research publications governed?',
        a: 'CONGRATA upholds academic co-authorship ethics. Intellectual property generated during the assignment remains with the participating researchers and their home/host institutions, governed by standard bilateral university agreements.',
      },
      {
        q: 'What is the role of the host faculty mentor?',
        a: 'Host mentors provide laboratory integration, specialized equipment access, and weekly scientific guidance during the 60-day stay, fostering enduring transnational research collaborations.',
      },
    ],
    donors: [
      {
        q: 'Are philanthropic contributions to CONGRATA tax-deductible in the United States?',
        a: 'Yes. CONGRATA is an exempt non-profit scientific organization under Section 501(c)(3) of the U.S. Internal Revenue Code. All contributions are tax-deductible to the fullest extent permitted by law.',
      },
      {
        q: 'How can a family foundation or corporation endow a Named Fellowship?',
        a: 'A Named Fellowship can be endowed with a gift of $15,000 USD (annual or multi-year endowment). The fellowship permanently carries the donor or foundation name, and the donor receives personalized research dossiers and direct briefings with the scholar.',
      },
      {
        q: 'Do you accept stock equities, wire transfers, and Donor-Advised Funds (DAFs)?',
        a: 'Yes. Our executive office in Corona Del Mar, CA provides direct banking routing and DTC transfer details for stock donations and DAF disbursements, allowing donors to avoid capital gains tax while maximizing research impact.',
      },
    ],
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="pt-24 pb-36 sm:pb-44 relative overflow-hidden bg-[#F8FAF9] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4.5rem] -mt-12 sm:-mt-16 relative z-30 border-t border-slate-200/80 shadow-[0_-30px_70px_rgba(0,0,0,0.12)] before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-emerald-500/30 before:to-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-xs font-bold uppercase tracking-wider text-[#15736B] mb-4 border border-emerald-300/50 shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-[#4EA840]" />
              <span>Consortium Clarity & Intelligence</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Frequently Asked <span className="text-gradient-green">Questions</span>
            </h2>

            <p className="text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed font-light mb-8">
              Essential answers on scientific eligibility, university MOUs, 60-day mobility grants, and 501(c)(3) philanthropic governance.
            </p>

            {/* 3 Audience Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm gap-1">
            <button
              type="button"
              onClick={() => {
                setActiveTab('scholars');
                setOpenIndex(0);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'scholars'
                  ? 'bg-[#15736B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>For Scholars</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('universities');
                setOpenIndex(0);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'universities'
                  ? 'bg-[#15736B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>For Universities & Labs</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('donors');
                setOpenIndex(0);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'donors'
                  ? 'bg-[#15736B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>For Donors & Governance</span>
            </button>
          </div>
        </div>
        </ScrollReveal>

        {/* Accordion Questions List */}
        <div className="space-y-4 max-w-4xl mx-auto mb-20">
          {faqData[activeTab].map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-emerald-500/40 shadow-lg shadow-emerald-950/5 ring-1 ring-emerald-500/20'
                    : 'bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4 font-heading">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-emerald-100 text-[#15736B] rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Subtle Institutional Contact Prompt */}
        <div className="max-w-xl mx-auto text-center pt-8 pb-4 border-t border-slate-200/80">
          <p className="text-slate-600 text-sm sm:text-base font-light mb-4">
            Have further questions about fellowships, university partnerships, or philanthropic endowments?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#15736B] hover:bg-[#0F5852] text-white text-xs font-bold transition-all shadow-md shadow-teal-900/15 cursor-pointer"
            >
              <span>Headquarters & Inquiries</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-scholar-modal', { detail: { type: 'institution' } }));
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-[#15736B] border border-emerald-200/80 text-xs font-bold transition-all cursor-pointer shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-[#4EA840]" />
              <span>Direct Intake Message</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
