import React from 'react';
import Navbar from './components/Navbar';
import AcademicPartners from './components/AcademicPartners';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import PillarsBento from './components/PillarsBento';
import FoundersStory from './components/FoundersStory';
import Impact from './components/Impact';
import GraduateExperiences from './components/GraduateExperiences';
import CredibilitySnapshot from './components/CredibilitySnapshot';
import TeamSection from './components/TeamSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ScrollExpandMedia from './components/ui/scroll-expansion-hero';
import { Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';
import MagicButton from './components/ui/MagicButton';

export default function App() {
  const videoMedia = {
    src: 'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1',
    poster: 'https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg',
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2560&auto=format&fit=crop',
    title: 'CONGRATA GLOBAL',
    date: 'TRANSNATIONAL MOBILITY',
    scrollToExpand: 'Scroll down to expand',
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content: Exclusive Video Expand Hero */}
      <main>
        <ScrollExpandMedia
          mediaType="video"
          mediaSrc={videoMedia.src}
          posterSrc={videoMedia.poster}
          bgImageSrc={videoMedia.bgImage}
          title={videoMedia.title}
          date={videoMedia.date}
          scrollToExpand={videoMedia.scrollToExpand}
          textBlend={false}
        >
          {/* Action Bar that appears after media expands */}
          <div className="max-w-4xl mx-auto text-center pt-8 pb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs sm:text-sm font-medium text-cyan-300 mb-6 border border-cyan-400/30">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Empowering Global STEM Innovators & Trailblazers</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-light text-slate-100 mb-6 leading-relaxed">
              "The world’s greatest challenges won’t be solved by one discipline, one region, or one perspective."
            </h2>

            <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
              CONGRATA empowers trailblazers to cross boundaries, build connections, and create lasting economic, cultural, and community impact.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
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

          {/* Academic Partners Continuous Marquee Slider */}
          <AcademicPartners />

          {/* Structured Landing Page Sections */}
          <AboutSection />
          <ProgramsSection />
          <PillarsBento />
          <FoundersStory />
          <Impact />
          <GraduateExperiences />
          <CredibilitySnapshot />
          <TeamSection />
          <CTASection />
        </ScrollExpandMedia>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
