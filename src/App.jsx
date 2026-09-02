import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DNAHero from './components/DNAHero';
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
import { Video, Image as ImageIcon, Sparkles, Dna, ArrowRight, ArrowUpRight } from 'lucide-react';
import MagicButton from './components/ui/MagicButton';

export default function App() {
  const [heroType, setHeroType] = useState('scroll-expand'); // 'scroll-expand' | 'dna'
  const [mediaType, setMediaType] = useState('image'); // 'video' | 'image'

  const mediaContent = {
    video: {
      src: 'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1',
      poster: 'https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg',
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2560&auto=format&fit=crop',
      title: 'CONGRATA GLOBAL',
      date: 'TRANSNATIONAL MOBILITY',
      scrollToExpand: 'Scroll down to expand',
    },
    image: {
      src: '/images/hero-scholars.jpg',
      bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2560&auto=format&fit=crop',
      title: 'CONGRATA SCHOLARS',
      date: 'FIRST-GEN STEM LEADERSHIP',
      scrollToExpand: 'Scroll down to expand',
    },
  };

  const currentMedia = mediaContent[mediaType];

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation Header */}
      <Navbar />

      {/* Floating Mode Switcher Bar */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-1.5 rounded-2xl glass-panel shadow-2xl border border-white/15 backdrop-blur-2xl">
        <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1">
          <button
            onClick={() => {
              setHeroType('scroll-expand');
              setMediaType('image');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              heroType === 'scroll-expand' && mediaType === 'image'
                ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Image Expand</span>
          </button>

          <button
            onClick={() => {
              setHeroType('scroll-expand');
              setMediaType('video');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              heroType === 'scroll-expand' && mediaType === 'video'
                ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Video Expand</span>
          </button>

          <button
            onClick={() => setHeroType('dna')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              heroType === 'dna'
                ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Dna className="w-3.5 h-3.5" />
            <span>DNA Video Hero</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {heroType === 'scroll-expand' ? (
          <ScrollExpandMedia
            key={mediaType}
            mediaType={mediaType}
            mediaSrc={currentMedia.src}
            posterSrc={currentMedia.poster}
            bgImageSrc={currentMedia.bgImage}
            title={currentMedia.title}
            date={currentMedia.date}
            scrollToExpand={currentMedia.scrollToExpand}
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
        ) : (
          <>
            <DNAHero />
            <AboutSection />
            <ProgramsSection />
            <PillarsBento />
            <FoundersStory />
            <Impact />
            <GraduateExperiences />
            <CredibilitySnapshot />
            <TeamSection />
            <CTASection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
