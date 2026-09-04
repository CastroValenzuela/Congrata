import React, { useState, useEffect } from 'react';
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
import PhilanthropySection from './components/PhilanthropySection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ScrollExpandMedia from './components/ui/scroll-expansion-hero';
import MetricIntroLoader from './components/ui/metric-intro-loader';
import SmoothScroll from './components/ui/smooth-scroll';
import FilmGrain from './components/ui/film-grain';
import CustomCursor from './components/ui/custom-cursor';
import ScholarIntakeModal from './components/ui/scholar-intake-modal';
import { Sparkles, ArrowRight, ArrowUpRight, Leaf } from 'lucide-react';
import MagicButton from './components/ui/MagicButton';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('scholar');
  const [modalNote, setModalNote] = useState('');

  useEffect(() => {
    const handleOpenModal = (e) => {
      setModalType(e.detail?.type || 'scholar');
      setModalNote(e.detail?.note || '');
      setIsModalOpen(true);
    };
    window.addEventListener('open-scholar-modal', handleOpenModal);
    return () => window.removeEventListener('open-scholar-modal', handleOpenModal);
  }, []);

  const videoMedia = {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4',
    poster: 'https://images.unsplash.com/photo-1546587348-d12660c30c50?q=80&w=1200&auto=format&fit=crop',
    bgImage: '/images/ban-gioc-falls.jpg',
    title: 'CONGRATA',
    subtitle: 'Consortium for Green Research and Technology Advancement',
    date: 'GREEN RESEARCH & MOBILITY',
    scrollToExpand: 'Scroll down to expand',
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#F8FAF9] text-slate-800 selection:bg-emerald-500/20 selection:text-emerald-900 relative">
        {/* Analog Film Grain Cinematic Texture */}
        <FilmGrain />

        {/* Dynamic Contextual Magnetic Cursor */}
        <CustomCursor />

        {/* Interactive Scholar & Institutional Intake Protocol Modal */}
        <ScholarIntakeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultType={modalType}
          defaultNote={modalNote}
        />

        {/* Metric-Style Signature Intro Transition */}
        <MetricIntroLoader
          videoSrc={videoMedia.src}
          posterSrc={videoMedia.poster}
          wordmark="CONGRATA"
        />

        {/* Navigation Header with Green Top Bar */}
        <Navbar />

        {/* Main Content: Exclusive Video Expand Hero */}
        <main>
          <ScrollExpandMedia
            mediaType="video"
            mediaSrc={videoMedia.src}
            posterSrc={videoMedia.poster}
            bgImageSrc={videoMedia.bgImage}
            title={videoMedia.title}
            subtitle={videoMedia.subtitle}
            date={videoMedia.date}
            scrollToExpand={videoMedia.scrollToExpand}
            textBlend={false}
          >
            {/* Action Bar that appears after media expands */}
            <div className="max-w-4xl mx-auto text-center pt-10 pb-12 px-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-xs sm:text-sm font-semibold text-[#15736B] mb-6 border border-emerald-500/20 shadow-sm">
                <Leaf className="w-4 h-4 text-[#4EA840]" />
                <span>Consortium for Green Research and Technology Advancement</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight font-heading">
                "The world’s greatest challenges won’t be solved by one discipline, one region, or one perspective."
              </h2>

              <p className="text-slate-600 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                CONGRATA empowers trailblazers to cross boundaries, build global scientific connections, and create lasting economic, cultural, and community impact.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setModalType('scholar');
                    setModalNote('');
                    setIsModalOpen(true);
                  }}
                  className="px-6 py-3 rounded-full text-sm font-bold text-slate-950 bg-[#F5B942] hover:bg-[#E5A830] shadow-md shadow-amber-500/25 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Become a Scholar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#programs"
                  className="px-6 py-3 rounded-full text-sm font-bold text-white bg-[#15736B] hover:bg-[#0F5852] shadow-md shadow-teal-900/20 transition-all flex items-center gap-2"
                >
                  <span>Explore Programs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setModalType('endowment');
                    setModalNote('Support Our Mission');
                    setIsModalOpen(true);
                  }}
                  className="px-6 py-3 rounded-full text-sm font-bold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-100 border border-emerald-300/60 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Support Our Mission</span>
                  <Sparkles className="w-4 h-4 text-[#4EA840]" />
                </button>
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
            <PhilanthropySection />
            <FAQSection />
            <Footer />
          </ScrollExpandMedia>
        </main>
      </div>
    </SmoothScroll>
  );
}
