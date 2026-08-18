import React from 'react';
import { X, Mail, Phone, ExternalLink, Compass, Shield, Anchor, BookOpen, FileText, Volume2, VolumeX, Radio } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface QuickMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onSelectSection: (section: string) => void;
  onOpenResume: () => void;
  isAudioOn: boolean;
  onToggleAudio: () => void;
}

export const QuickMenuDrawer: React.FC<QuickMenuDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
  onSelectSection,
  onOpenResume,
  isAudioOn,
  onToggleAudio,
}) => {
  if (!isOpen) return null;

  const navItems = [
    { id: 'harbor', num: '01', title: 'HARBOR', desc: 'Overview & Main Deck', icon: Anchor },
    { id: 'arsenal', num: '02', title: 'ARSENAL', desc: 'Full-Stack Weapons & Systems', icon: Shield },
    { id: 'voyages', num: '03', title: 'VOYAGES', desc: 'Featured Projects & Architectures', icon: Compass },
    { id: 'logbook', num: '04', title: 'LOGBOOK', desc: 'CP Ratings, ICPC & Academics', icon: BookOpen },
    { id: 'dispatch', num: '05', title: 'DISPATCH', desc: 'Transmission Deck & Contact', icon: Radio },
  ];

  const handleNavClick = (sectionId: string) => {
    onSelectSection(sectionId);
    onClose();
    // Smooth scroll to section
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="flex-1 cursor-pointer" onClick={onClose} />

      {/* Drawer content */}
      <div className="w-full max-w-md h-full bg-[#0A0A0A]/95 border-l border-white/15 shadow-[-10px_0_40px_rgba(0,0,0,0.8)] flex flex-col justify-between p-6 sm:p-8 animate-in slide-in-from-right duration-300 overflow-y-auto">
        {/* Top Header */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#C5A059] flex items-center justify-center bg-black text-[#C5A059]">
                <span className="font-cinzel text-xs font-bold">SD</span>
              </div>
              <div>
                <h3 className="font-cinzel text-sm font-bold text-white tracking-widest">
                  NAVIGATION DECK
                </h3>
                <p className="text-[10px] font-mono text-[#C5A059]">SAMAY S. DUBEY</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-[#C5A059] hover:bg-[#111] transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav List */}
          <div className="space-y-2">
            <div className="text-[10px] font-cinzel tracking-[0.25em] text-[#C5A059] uppercase px-1">
              Select Destination
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-4 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-black/70 border-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.2)] text-[#F3E5AB]'
                      : 'bg-black/20 border-transparent hover:border-[#C5A059]/30 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                      isActive
                        ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#F3E5AB]'
                        : 'bg-black/40 border-[#C5A059]/20 text-[#C5A059]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-cinzel text-xs font-bold tracking-wider">
                      {item.num} {item.title}
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans">{item.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="pt-2 space-y-2">
            <div className="text-[10px] font-cinzel tracking-[0.25em] text-[#C5A059] uppercase px-1">
              Quick Controls
            </div>

            <button
              onClick={() => {
                onOpenResume();
                onClose();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-[#0C111C] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#F3E5AB] transition-all group shadow-[0_0_15px_rgba(197,160,89,0.15)] cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#C5A059]" />
                <span className="font-cinzel text-xs font-semibold tracking-wider">
                  VIEW FULL RESUME / CV
                </span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onToggleAudio}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-black/30 border border-[#C5A059]/25 hover:border-[#C5A059]/50 text-slate-300 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {isAudioOn ? (
                  <Volume2 className="w-4 h-4 text-[#C5A059] animate-pulse" />
                ) : (
                  <VolumeX className="w-4 h-4 text-slate-500" />
                )}
                <span className="font-cinzel text-xs tracking-wider">
                  AMBIENT HARBOR SOUND: {isAudioOn ? 'ACTIVE' : 'MUTED'}
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#C5A059]">
                {isAudioOn ? 'ON' : 'OFF'}
              </span>
            </button>
          </div>
        </div>

        {/* Contact Deck Footer */}
        <div className="mt-6 pt-6 border-t border-[#C5A059]/25 space-y-3">
          <div className="text-[10px] font-cinzel tracking-[0.25em] text-[#C5A059] uppercase">
            Direct Transmission
          </div>
          <div className="space-y-2 text-xs font-sans text-slate-300">
            <a
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="flex items-center gap-2.5 hover:text-[#F3E5AB] transition-colors p-2 rounded bg-black/30 border border-[#C5A059]/20"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-mono text-[11px] truncate">{RESUME_DATA.personal.email}</span>
            </a>
          </div>

          <div className="pt-2 text-[10px] font-mono text-slate-500 text-center">
            IIIT Nagpur • Batch 2023-2027
          </div>
        </div>
      </div>
    </div>
  );
};
