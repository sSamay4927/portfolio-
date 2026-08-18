import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Trophy, GraduationCap, Award, BookOpen, ExternalLink, Flame, Shield, CheckCircle2 } from 'lucide-react';

export const LogbookSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 space-y-6">
      {/* Header */}
      <div className="border-b border-[#C5A059]/30 pb-4">
        <div className="text-xs font-cinzel tracking-[0.3em] text-[#C5A059] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
          04 LOGBOOK & CHRONICLES
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D6] via-[#E0BA6D] to-[#C5A059]">
          ALGORITHMIC RECORD
        </h2>
      </div>

      {/* Competitive Programming & Honors */}
      <div className="space-y-3">
        <div className="text-xs font-cinzel text-[#C5A059] font-bold tracking-wider flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[#C5A059]" />
          COMPETITIVE PROGRAMMING DISTINCTIONS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {RESUME_DATA.achievements.map((ach, idx) => (
            <div
              key={idx}
              className="backdrop-blur-md bg-black/40 border border-[#C5A059]/30 rounded-xl p-4 flex flex-col justify-between hover:border-[#C5A059] transition-all shadow-[0_0_20px_rgba(0,0,0,0.4)] group hud-notch"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C5A059]/15 text-[#E0BA6D] border border-[#C5A059]/30">
                    {ach.badge}
                  </span>
                  <Flame className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#F3E5AB]">
                  {ach.link ? (
                    <a href={ach.link} target="_blank" rel="noreferrer" className="hover:text-[#C5A059] hover:underline transition-colors flex items-center gap-1.5">
                      {ach.title}
                    </a>
                  ) : (
                    ach.title
                  )}
                </h3>
                <div className="text-xs font-mono text-[#E0BA6D] font-bold mt-1">
                  {ach.rating}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {ach.stat}
                </div>
                <p className="text-xs text-slate-300 font-sans mt-2.5 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Timeline */}
      <div className="space-y-3">
        <div className="text-xs font-cinzel text-[#C5A059] font-bold tracking-wider flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[#C5A059]" />
          ACADEMIC VOYAGE
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RESUME_DATA.education.map((edu, idx) => (
            <div
              key={idx}
              className="backdrop-blur-md bg-black/40 border border-[#C5A059]/25 rounded-xl p-4 space-y-2 hover:border-[#C5A059]/50 transition-all hud-notch"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-[#E0BA6D] px-2 py-0.5 rounded bg-[#C5A059]/10 border border-[#C5A059]/20">
                  {edu.period}
                </span>
                <span className="text-xs font-mono text-[#F3E5AB] font-bold">
                  {edu.score}
                </span>
              </div>
              <h3 className="font-cinzel text-sm font-bold text-white">
                {edu.institution}
              </h3>
              <p className="text-xs text-[#E0BA6D] font-mono">
                {edu.degree}
              </p>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Coursework Matrix */}
      <div className="backdrop-blur-md bg-black/40 border border-[#C5A059]/30 rounded-xl p-4 space-y-3 hud-notch">
        <div className="text-xs font-cinzel text-[#C5A059] font-bold tracking-wider flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#C5A059]" />
          CORE COMPUTER SCIENCE FOUNDATIONS
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {RESUME_DATA.coursework.map((course, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-black/30 border border-[#C5A059]/20 text-xs font-sans text-slate-300"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span>{course}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
