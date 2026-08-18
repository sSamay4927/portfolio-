import React, { useState } from 'react';
import { RESUME_DATA, ProjectData } from '../data/portfolioData';
import { ExternalLink, Layers, ArrowUpRight, Activity, GitBranch, Cpu, CheckCircle2 } from 'lucide-react';

export const VoyagesSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData>(RESUME_DATA.projects[0]);

  return (
    <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 space-y-6">
      {/* Section Header */}
      <div className="border-b border-[#C5A059]/30 pb-4">
        <div className="text-xs font-cinzel tracking-[0.3em] text-[#C5A059] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
          03 VOYAGES & SYSTEM BUILDS
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D6] via-[#E0BA6D] to-[#C5A059]">
          FLAGSHIP EXPEDITIONS
        </h2>
      </div>

      {/* Project Selector Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {RESUME_DATA.projects.map((proj) => (
          <button
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
              selectedProject.id === proj.id
                ? 'bg-black/80 border-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.3)]'
                : 'bg-black/30 border-[#C5A059]/20 hover:border-[#C5A059]/50 hover:bg-black/50'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059]">
                {proj.category}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C5A059]/15 text-[#F3E5AB] border border-[#C5A059]/30">
                {proj.badge}
              </span>
            </div>
            <div className="font-cinzel text-base font-bold text-white tracking-wider">
              {proj.title}
            </div>
            <div className="text-[11px] text-slate-400 font-sans truncate">
              {proj.subtitle}
            </div>
          </button>
        ))}
      </div>

      {/* Active Project Deep Dive Card */}
      <div className="backdrop-blur-md bg-black/50 border border-[#C5A059]/40 rounded-2xl p-6 space-y-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] hud-notch">
        {/* Title and Links */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-[#C5A059]/20 pb-4">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-cinzel text-2xl font-bold text-[#F3E5AB] tracking-wide">
                {selectedProject.title}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#C5A059]/20 text-[#E0BA6D] border border-[#C5A059]/40">
                {selectedProject.badge}
              </span>
            </div>
            <p className="text-xs text-slate-300 font-sans mt-1">
              {selectedProject.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-cinzel tracking-wider text-[#F3E5AB] bg-[#0E121B] hover:bg-[#161C28] border border-[#C5A059] rounded-lg transition-all shadow-[0_0_15px_rgba(197,160,89,0.2)] hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]"
            >
              <span>SOURCE CODE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </a>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {selectedProject.metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-black/40 p-3 rounded-lg border border-[#C5A059]/20 text-center"
            >
              <div className="text-[10px] font-mono text-slate-400 uppercase">
                {m.label}
              </div>
              <div className="text-base font-cinzel font-bold text-[#E0BA6D] mt-0.5">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div>
          <div className="text-xs font-cinzel text-[#C5A059] font-semibold mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNOLOGY STACK</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedProject.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono bg-[#090D15] border border-[#C5A059]/30 text-[#F3E5AB] rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* System Architecture Highlights */}
        <div>
          <div className="text-xs font-cinzel text-[#C5A059] font-semibold mb-2.5 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" />
            <span>CORE ARCHITECTURAL HIGHLIGHTS</span>
          </div>
          <div className="space-y-2.5">
            {selectedProject.highlights.map((h, hIdx) => (
              <div
                key={hIdx}
                className="flex items-start gap-3 bg-black/25 p-3 rounded-lg border border-[#C5A059]/15 text-xs text-slate-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Note */}
        <div className="p-3 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 text-xs text-slate-300 flex items-center gap-3">
          <Cpu className="w-5 h-5 text-[#E0BA6D] shrink-0" />
          <div className="font-mono text-[11px]">
            <span className="text-[#E0BA6D] font-bold">System Blueprint: </span>
            {selectedProject.architectureNotes}
          </div>
        </div>
      </div>
    </div>
  );
};
