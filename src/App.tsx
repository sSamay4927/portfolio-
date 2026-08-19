import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  Anchor,
  Shield,
  Compass,
  BookOpen,
  Radio,
  Menu,
  FileText,
  Volume2,
  VolumeX,
  Mail,
  Linkedin,
  Github,
  Mouse,
} from 'lucide-react';
import { StaticGrainOverlay } from './components/StaticGrainOverlay';
import { ResumeModal } from './components/ResumeModal';
import { QuickMenuDrawer } from './components/QuickMenuDrawer';
import { ArsenalSection } from './components/ArsenalSection';
import { VoyagesSection } from './components/VoyagesSection';
import { LogbookSection } from './components/LogbookSection';
import { DispatchSection } from './components/DispatchSection';
import { useScrollSequence } from './hooks/useScrollSequence';
import { useScrollSpy } from './hooks/useScrollSpy';
import { RESUME_DATA } from './data/portfolioData';
import { seaAmbience } from './utils/audioAmbience';

// Custom LeetCode Icon
const LeetCodeIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.795l3.86-4.133 5.364-5.743c.532-.57.49-1.455-.08-1.986A1.387 1.387 0 0 0 13.483 0zm-2.88 7.218a1.382 1.382 0 0 0-.397.978v.014c.005.76.623 1.377 1.383 1.377h7.828c.763 0 1.382-.619 1.382-1.382 0-.763-.619-1.382-1.382-1.382h-7.828a1.38 1.38 0 0 0-.986.395z" />
  </svg>
);

import LoadingScreen from './components/LoadingScreen';

const SECTION_IDS = ['harbor', 'arsenal', 'voyages', 'logbook', 'dispatch'];

export default function App() {
  const [activeSection, setActiveSection] = useState('harbor');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getFramePath = useCallback((index: number) => {
    const formattedStr = index.toString().padStart(4, '0');
    // Added ?v=2 to bypass browser cache and force the new frames to load
    return `/assets/frames/frame_${formattedStr}.jpg?v=2`;
  }, []);

  const { loadedProgress } = useScrollSequence({
    canvasRef,
    frameCount: 192,
    framePath: getFramePath
  });

  // Scroll spy to track which section is active
  const handleSectionChange = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
  }, []);

  const sectionIds = useMemo(() => SECTION_IDS, []);
  useScrollSpy(sectionIds, handleSectionChange);

  const toggleAudio = () => {
    const newState = seaAmbience.toggle();
    setIsAudioOn(newState);
  };

  const navItems = [
    { id: 'harbor', num: '01', title: 'HARBOR', icon: Anchor },
    { id: 'arsenal', num: '02', title: 'ARSENAL', icon: Shield },
    { id: 'voyages', num: '03', title: 'VOYAGES', icon: Compass },
    { id: 'logbook', num: '04', title: 'LOGBOOK', icon: BookOpen },
    { id: 'dispatch', num: '05', title: 'DISPATCH', icon: Radio },
  ] as const;

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
        setIsMenuOpen(false);
      }
      if (e.key === '1') scrollToSection('harbor');
      if (e.key === '2') scrollToSection('arsenal');
      if (e.key === '3') scrollToSection('voyages');
      if (e.key === '4') scrollToSection('logbook');
      if (e.key === '5') scrollToSection('dispatch');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="relative bg-[#0A0A0A] font-sans text-white select-none">
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* LAYER 0: Fixed Background Canvas (z-0)                                    */}
      {/* ========================================================================= */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full object-cover z-0"
      />

      {/* ========================================================================= */}
      {/* LAYER 1: Static Grain + Vignette + Dark Scrim Overlay (z-10)              */}
      {/* ========================================================================= */}
      <StaticGrainOverlay />


      {/* ========================================================================= */}
      {/* LAYER 2: Loading Screen or Main UI                                        */}
      {/* ========================================================================= */}
      {loadedProgress < 1 ? (
        <LoadingScreen progress={Math.round(loadedProgress * 100)} />
      ) : (
        <>
          {/* Top Left Brand */}
          <header className="fixed top-6 left-6 sm:top-8 sm:left-8 z-50 flex flex-row items-center gap-4">
        <div
          onClick={() => scrollToSection('harbor')}
          className="cursor-pointer group w-12 h-12 rounded-full border border-[#C5A059] flex items-center justify-center bg-black/60 backdrop-blur-sm shadow-[0_0_15px_rgba(197,160,89,0.25)] hover:shadow-[0_0_25px_rgba(197,160,89,0.5)] hover:scale-105 transition-all duration-300"
          title="Return to Harbor"
        >
          <span className="font-cinzel text-[#C5A059] text-xl font-bold group-hover:scale-110 transition-transform">
            S
          </span>
        </div>

        <div className="flex flex-col cursor-pointer" onClick={() => scrollToSection('harbor')}>
          <span className="text-sm font-cinzel tracking-[0.2em] font-medium text-[#C5A059] uppercase">
            Samay Dubey
          </span>
          <span className="text-[10px] tracking-[0.15em] text-white/60 uppercase font-mono">
            Full-Stack Engineer
          </span>
        </div>
      </header>

      {/* Top Right Controls */}
      <nav className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 flex flex-row items-center gap-3 sm:gap-4" aria-label="Quick Controls">
        {/* Sound Ambient Toggle */}
        <button
          onClick={toggleAudio}
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-[#C5A059]/30 text-[10px] uppercase tracking-[0.1em] text-[#F3E5AB] hover:border-[#C5A059] hover:scale-105 transition-all cursor-pointer font-cinzel"
          title={isAudioOn ? 'Mute Ocean Breeze' : 'Play Ocean Breeze Ambience'}
        >
          {isAudioOn ? (
            <Volume2 className="w-3 h-3 text-[#E0BA6D] animate-pulse" />
          ) : (
            <VolumeX className="w-3 h-3 text-white/40" />
          )}
          <span className="font-mono">{isAudioOn ? 'SOUND ON' : 'SOUND OFF'}</span>
        </button>

        {/* Resume Button */}
        <button
          onClick={() => setIsResumeOpen(true)}
          className="px-6 sm:px-8 py-2 rounded-full bg-black/40 backdrop-blur-md border border-[#C5A059]/30 text-[11px] uppercase tracking-[0.1em] text-white font-cinzel hover:border-[#C5A059] hover:scale-105 hover:shadow-[0_0_20px_rgba(197,160,89,0.35)] transition-all cursor-pointer flex items-center gap-2"
        >
          <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Resume</span>
        </button>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Navigation Menu"
          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-[#C5A059]/30 flex flex-col items-center justify-center gap-1 hover:border-[#C5A059] hover:scale-105 transition-all cursor-pointer group"
        >
          <div className="w-4 h-[1px] bg-[#C5A059] group-hover:bg-[#FFF5D6] transition-colors"></div>
          <div className="w-4 h-[1px] bg-[#C5A059] group-hover:bg-[#FFF5D6] transition-colors"></div>
          <div className="w-4 h-[1px] bg-[#C5A059] group-hover:bg-[#FFF5D6] transition-colors"></div>
        </button>
      </nav>

      {/* Left Vertical Navigation */}
      <nav
        className="fixed left-6 sm:left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6"
        aria-label="Section Navigation"
      >
        {/* Continuous thin vertical line connecting items */}
        <div className="absolute left-[-1rem] top-0 bottom-0 w-px bg-white/10"></div>

        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          if (isActive) {
            return (
              <div
                key={item.id}
                className="relative flex items-center gap-4 group cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {/* Gold indicator dot on the rail */}
                <div className="absolute -left-[1.05rem] w-1.5 h-1.5 bg-[#C5A059] rounded-full shadow-[0_0_8px_#C5A059]"></div>
                {/* Active Expanded Container */}
                <div className="flex items-center gap-4 px-4 py-3 bg-black/70 backdrop-blur-sm border-l-4 border-[#C5A059] rounded-r-md min-w-[170px] shadow-[0_0_20px_rgba(197,160,89,0.15)]">
                  <span className="text-[10px] text-[#C5A059] font-mono font-bold">{item.num}</span>
                  <span className="text-xs font-bold tracking-widest font-cinzel text-white">{item.title}</span>
                </div>
              </div>
            );
          }

          return (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity cursor-pointer pl-4"
            >
              <span className="text-[10px] font-mono text-white/70">{item.num}</span>
              <span className="text-xs font-medium tracking-widest uppercase font-cinzel text-white/90">
                {item.title}
              </span>
            </div>
          );
        })}
      </nav>

      {/* Bottom Left Socials */}
      <div className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50 flex flex-row gap-3 sm:gap-4" aria-label="Social Profiles">
        <a
          href={RESUME_DATA.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-[#C5A059] hover:scale-110 hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all cursor-pointer text-white/80 hover:text-white"
          title="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>

        <a
          href={RESUME_DATA.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-[#C5A059] hover:scale-110 hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all cursor-pointer text-white/80 hover:text-white"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        <a
          href={`mailto:${RESUME_DATA.personal.email}`}
          aria-label="Send Email"
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-[#C5A059] hover:scale-110 hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all cursor-pointer text-white/80 hover:text-white"
          title={`Email: ${RESUME_DATA.personal.email}`}
        >
          <Mail className="w-4 h-4" />
        </a>

        <a
          href={RESUME_DATA.personal.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode Profile"
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-[#C5A059] hover:scale-110 hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all cursor-pointer text-white/80 hover:text-white"
          title="LeetCode Knight"
        >
          <LeetCodeIcon className="w-4 h-4" />
        </a>
      </div>



      {/* ========================================================================= */}
      {/* LAYER 3: Scrollable Content Chapters (z-20)                               */}
      {/* ========================================================================= */}
      <div className="relative z-20">
        {/* ===== CHAPTER 01: HARBOR (Hero / Arrival) ===== */}
        <section
          id="harbor"
          className="min-h-screen flex items-center justify-center px-6 sm:px-8"
        >
          <div className="flex flex-col items-start gap-4 max-w-3xl w-full animate-fade-in-up">
            {/* Subtitle */}
            <span className="text-[11px] font-medium tracking-[0.4em] text-[#C5A059] uppercase opacity-80 font-cinzel">
              Welcome To
            </span>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cinzel leading-none tracking-tight text-white mb-2">
              Samay S. <span className="text-[#C5A059] italic font-serif">Dubey</span>
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg font-light text-white/60 max-w-xl leading-relaxed mb-6 font-sans">
              B.Tech CS Student at IIIT Nagpur crafting high-performance full-stack architectures and real-time systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('voyages')}
                className="group flex items-center gap-6 px-8 sm:px-10 py-4 sm:py-5 bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#C5A059] text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:bg-[#C5A059] hover:text-black transition-all cursor-pointer shadow-[0_0_20px_rgba(197,160,89,0.2)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] font-cinzel"
              >
                <span>Explore Voyages</span>
                <span className="transform transition-transform group-hover:translate-x-2 text-[#C5A059] group-hover:text-black">
                  →
                </span>
              </button>

              <button
                onClick={() => scrollToSection('arsenal')}
                className="px-6 sm:px-8 py-4 sm:py-5 bg-black/40 backdrop-blur-md border border-white/15 hover:border-[#C5A059] text-[12px] font-medium tracking-[0.15em] uppercase text-white/80 hover:text-white transition-all cursor-pointer font-cinzel"
              >
                Arsenal Matrix
              </button>
            </div>

            {/* Scroll indicator */}
            <div
              onClick={() => scrollToSection('arsenal')}
              className="mt-12 flex flex-col items-center gap-3 cursor-pointer group self-center"
              title="Scroll to explore"
            >
              <div className="w-5 h-8 border border-white/30 rounded-full relative animate-bounce group-hover:border-[#C5A059] transition-colors">
                <div className="w-1 h-1 bg-[#C5A059] rounded-full absolute top-2 left-1/2 -translate-x-1/2"></div>
              </div>
              <span className="text-[9px] tracking-[0.3em] uppercase opacity-40 group-hover:opacity-90 font-cinzel text-white transition-opacity">
                Scroll to explore
              </span>
            </div>
          </div>
        </section>

        {/* ===== CHAPTER 02: ARSENAL ===== */}
        <section
          id="arsenal"
          className="min-h-screen flex items-center justify-center pt-24 pb-12 sm:pt-32 sm:pb-16"
        >
          <ArsenalSection />
        </section>

        {/* ===== CHAPTER 03: VOYAGES ===== */}
        <section
          id="voyages"
          className="flex items-center justify-center py-12 sm:py-16"
        >
          <VoyagesSection />
        </section>

        {/* ===== CHAPTER 04: LOGBOOK ===== */}
        <section
          id="logbook"
          className="flex items-center justify-center py-12 sm:py-16"
        >
          <LogbookSection />
        </section>

        {/* ===== CHAPTER 05: DISPATCH ===== */}
        <section
          id="dispatch"
          className="flex items-center justify-center pt-12 pb-24 sm:pt-16 sm:pb-32"
        >
          <DispatchSection onOpenResume={() => setIsResumeOpen(true)} />
        </section>
      </div>

      {/* ========================================================================= */}
      {/* MODALS & DRAWERS                                                          */}
      {/* ========================================================================= */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <QuickMenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
        onSelectSection={(sec) => setActiveSection(sec)}
        onOpenResume={() => setIsResumeOpen(true)}
        isAudioOn={isAudioOn}
        onToggleAudio={toggleAudio}
      />
        </>
      )}
    </main>
  );
}
