import React from 'react';
import { X, Download, Copy, Check, ExternalLink, Mail, Phone, MapPin, GraduationCap, Code2, Trophy, Layers } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };



  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0A0A0A]/95 border border-[#C5A059]/40 rounded-2xl shadow-[0_0_50px_rgba(197,160,89,0.2)] overflow-hidden z-10">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#C5A059] flex items-center justify-center bg-black text-[#C5A059]">
              <span className="font-cinzel text-xs font-bold">SD</span>
            </div>
            <div>
              <h2 className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wider">
                CURRICULUM VITAE
              </h2>
              <p className="text-[11px] text-white/50 font-sans">Samay Shankar Dubey • IIIT Nagpur</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans text-white/90 bg-[#111] hover:bg-[#C5A059] hover:text-black border border-white/15 hover:border-[#C5A059] rounded-full transition-all"
              title="Copy Email"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Email'}</span>
            </button>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans text-white/90 bg-[#111] hover:bg-[#C5A059] hover:text-black border border-white/15 hover:border-[#C5A059] rounded-full transition-all"
              title="Print / Save PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </a>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-[#C5A059] hover:bg-[#111] transition-all ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-200">
          {/* Header Info */}
          <div className="border-b border-[#C5A059]/20 pb-6 text-center space-y-2">
            <h1 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D6] via-[#E0BA6D] to-[#C5A059]">
              {RESUME_DATA.personal.name}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-slate-300 font-sans">
              <a href={`mailto:${RESUME_DATA.personal.email}`} className="flex items-center gap-1 hover:text-[#E0BA6D] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                {RESUME_DATA.personal.email}
              </a>
              <span>•</span>
              <a href={RESUME_DATA.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#E0BA6D] transition-colors">
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                GitHub
              </a>
              <span>•</span>
              <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#E0BA6D] transition-colors">
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 border-b border-[#C5A059]/30 pb-1.5 mb-3">
              <GraduationCap className="w-4 h-4 text-[#C5A059]" />
              <h3 className="font-cinzel text-sm font-bold text-[#F3E5AB] tracking-wider uppercase">
                Education
              </h3>
            </div>
            <div className="space-y-4">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-start text-xs sm:text-sm">
                  <div>
                    <h4 className="font-semibold text-white">{edu.institution}</h4>
                    <p className="text-[#E0BA6D] font-mono text-xs">{edu.degree}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{edu.details}</p>
                  </div>
                  <div className="text-left sm:text-right mt-1 sm:mt-0 font-mono text-xs text-slate-300">
                    <div>{edu.period}</div>
                    <div className="text-[#F3E5AB] font-semibold">{edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 border-b border-[#C5A059]/30 pb-1.5 mb-3">
              <Code2 className="w-4 h-4 text-[#C5A059]" />
              <h3 className="font-cinzel text-sm font-bold text-[#F3E5AB] tracking-wider uppercase">
                Technical Skills
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-black/30 p-3 rounded-lg border border-[#C5A059]/20">
                <span className="text-[#E0BA6D] font-semibold block mb-1">Languages</span>
                <span className="text-slate-300">{RESUME_DATA.skills.languages.join(', ')}</span>
              </div>
              <div className="bg-black/30 p-3 rounded-lg border border-[#C5A059]/20">
                <span className="text-[#E0BA6D] font-semibold block mb-1">Frontend Development</span>
                <span className="text-slate-300">{RESUME_DATA.skills.frontend.join(', ')}</span>
              </div>
              <div className="bg-black/30 p-3 rounded-lg border border-[#C5A059]/20">
                <span className="text-[#E0BA6D] font-semibold block mb-1">Backend & Real-time</span>
                <span className="text-slate-300">{RESUME_DATA.skills.backend.join(', ')}</span>
              </div>
              <div className="bg-black/30 p-3 rounded-lg border border-[#C5A059]/20">
                <span className="text-[#E0BA6D] font-semibold block mb-1">Databases & Cloud / Tools</span>
                <span className="text-slate-300">
                  {[...RESUME_DATA.skills.databases, ...RESUME_DATA.skills.devops].join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <div className="flex items-center gap-2 border-b border-[#C5A059]/30 pb-1.5 mb-3">
              <Layers className="w-4 h-4 text-[#C5A059]" />
              <h3 className="font-cinzel text-sm font-bold text-[#F3E5AB] tracking-wider uppercase">
                Projects
              </h3>
            </div>
            <div className="space-y-6">
              {RESUME_DATA.projects.map((project) => (
                <div key={project.id} className="bg-black/20 p-4 rounded-xl border border-[#C5A059]/20 hover:border-[#C5A059]/40 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1 mb-1.5">
                    <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#F3E5AB] flex items-center gap-2">
                      {project.title} <span className="font-sans font-normal text-xs text-slate-300">— {project.subtitle}</span>
                    </h4>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#E0BA6D] hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" /> GitHub
                    </a>
                  </div>
                  <p className="text-[11px] font-mono text-[#C5A059] mb-2.5">
                    <strong className="text-slate-400">Tech Stack:</strong> {project.techStack.join(', ')}
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-slate-300 leading-relaxed">
                    {project.highlights.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Coursework */}
          <div>
            <div className="flex items-center gap-2 border-b border-[#C5A059]/30 pb-1.5 mb-3">
              <Trophy className="w-4 h-4 text-[#C5A059]" />
              <h3 className="font-cinzel text-sm font-bold text-[#F3E5AB] tracking-wider uppercase">
                Achievements & Coursework
              </h3>
            </div>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-[#E0BA6D] font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-white"><a href={RESUME_DATA.achievements[0].link} target="_blank" rel="noreferrer" className="hover:text-[#E0BA6D] transition-colors hover:underline">Codeforces</a>:</strong> Specialist (Rating: 1550) — solved 550+ problems;{' '}
                  <strong className="text-white"><a href={RESUME_DATA.achievements[1].link} target="_blank" rel="noreferrer" className="hover:text-[#E0BA6D] transition-colors hover:underline">LeetCode</a>:</strong> Knight (Rating: 1858) — solved 240+ problems.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#E0BA6D] font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-white">ICPC Online Prelims 2025:</strong> Secured Rank 738 (nationwide) as part of a 3-member team in the ICPC Online Qualifier round.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#E0BA6D] font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-white">Coursework:</strong> {RESUME_DATA.coursework.join(', ')}.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#C5A059]/30 bg-black/60 flex justify-between items-center text-[11px] text-slate-400">
          <span>Indian Institute of Information Technology, Nagpur</span>
          <button
            onClick={onClose}
            className="text-[#E0BA6D] hover:underline font-cinzel tracking-wider"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
