import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Copy, Check, Mail, Phone, MapPin, Download, ExternalLink, Radio, Wifi, Clock } from 'lucide-react';

/**
 * The "Harbor Dispatch & Signal Deck" — a terminal-style contact section
 * with HUD aesthetics. Replaces generic contact forms with a tactile
 * command-deck interface.
 */
export const DispatchSection: React.FC<{ onOpenResume: () => void }> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcOffset = '+05:30';
      const timeStr = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Kolkata',
      });
      setCurrentTime(`${timeStr} IST (UTC ${utcOffset})`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyPacket = () => {
    const packet = `Samay Shankar Dubey\nEmail: ${RESUME_DATA.personal.email}\nGitHub: ${RESUME_DATA.personal.github}\nLinkedIn: ${RESUME_DATA.personal.linkedin}`;
    navigator.clipboard.writeText(packet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleDirectFrequency = () => {
    window.location.href = `mailto:${RESUME_DATA.personal.email}?subject=${encodeURIComponent('[Inquiry] SDE Opportunity / Collaboration')}&body=${encodeURIComponent('Hello Samay,\n\nI came across your portfolio and would like to discuss...\n\n')}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 sm:px-8">
      {/* Section Header */}
      <div className="border-b border-[#C5A059]/30 pb-4 mb-8">
        <div className="text-xs font-cinzel tracking-[0.3em] text-[#C5A059] flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
          05 DISPATCH & SIGNAL DECK
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D6] via-[#E0BA6D] to-[#C5A059]">
          TRANSMISSION DECK
        </h2>
      </div>

      {/* Status Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/40">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
          <span className="text-[11px] font-mono text-emerald-300 tracking-wider font-semibold">
            SYSTEM ONLINE
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
          <Radio className="w-3 h-3 text-[#E0BA6D]" />
          <span className="text-[11px] font-mono text-[#F3E5AB] tracking-wider">
            ACCEPTING SDE INQUIRIES & ROLES
          </span>
        </div>
      </div>

      {/* Main Dispatch Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Copy Transmission Packet */}
        <button
          onClick={handleCopyPacket}
          className="group relative overflow-hidden p-5 rounded-xl bg-black/60 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-300 text-left cursor-pointer hover:shadow-[0_0_30px_rgba(197,160,89,0.2)]"
        >
          {/* Corner notch decoration */}
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#C5A059]/50"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#C5A059]/50"></div>

          <div className="flex items-center gap-3 mb-3">
            {copied ? (
              <Check className="w-5 h-5 text-emerald-400" />
            ) : (
              <Copy className="w-5 h-5 text-[#C5A059] group-hover:text-[#F3E5AB] transition-colors" />
            )}
            <span className="text-xs font-cinzel tracking-[0.15em] text-[#F3E5AB] font-bold">
              {copied ? 'PACKET TRANSMITTED ✓' : 'COPY TRANSMISSION PACKET'}
            </span>
          </div>
          <p className="text-[11px] font-mono text-slate-400 leading-relaxed">
            Copies full contact credentials (email, GitHub, LinkedIn) to clipboard in one action.
          </p>

          {/* Ripple effect indicator */}
          {copied && (
            <div className="absolute inset-0 bg-emerald-500/10 animate-pulse rounded-xl pointer-events-none"></div>
          )}
        </button>

        {/* Initiate Direct Frequency */}
        <button
          onClick={handleDirectFrequency}
          className="group relative overflow-hidden p-5 rounded-xl bg-black/60 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-300 text-left cursor-pointer hover:shadow-[0_0_30px_rgba(197,160,89,0.2)]"
        >
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#C5A059]/50"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#C5A059]/50"></div>

          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-5 h-5 text-[#C5A059] group-hover:text-[#F3E5AB] transition-colors" />
            <span className="text-xs font-cinzel tracking-[0.15em] text-[#F3E5AB] font-bold">
              INITIATE DIRECT FREQUENCY
            </span>
          </div>
          <p className="text-[11px] font-mono text-slate-400 leading-relaxed">
            Opens native mail client with pre-filled subject: <span className="text-[#E0BA6D]">[Inquiry] SDE Opportunity / Collaboration</span>
          </p>
        </button>

        {/* Download CV / Dossier */}
        <button
          onClick={onOpenResume}
          className="group relative overflow-hidden p-5 rounded-xl bg-black/60 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-300 text-left cursor-pointer hover:shadow-[0_0_30px_rgba(197,160,89,0.2)]"
        >
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#C5A059]/50"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#C5A059]/50"></div>

          <div className="flex items-center gap-3 mb-3">
            <Download className="w-5 h-5 text-[#C5A059] group-hover:text-[#F3E5AB] transition-colors" />
            <span className="text-xs font-cinzel tracking-[0.15em] text-[#F3E5AB] font-bold">
              DOWNLOAD CV / DOSSIER
            </span>
          </div>
          <p className="text-[11px] font-mono text-slate-400 leading-relaxed">
            Open full curriculum vitae with complete project breakdowns, technical stack, and academic record.
          </p>
        </button>

        {/* Copy Email Standalone */}
        <button
          onClick={handleCopyEmail}
          className="group relative overflow-hidden p-5 rounded-xl bg-black/60 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-300 text-left cursor-pointer hover:shadow-[0_0_30px_rgba(197,160,89,0.2)]"
        >
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#C5A059]/50"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#C5A059]/50"></div>

          <div className="flex items-center gap-3 mb-3">
            {emailCopied ? (
              <Check className="w-5 h-5 text-emerald-400" />
            ) : (
              <Wifi className="w-5 h-5 text-[#C5A059] group-hover:text-[#F3E5AB] transition-colors" />
            )}
            <span className="text-xs font-cinzel tracking-[0.15em] text-[#F3E5AB] font-bold">
              {emailCopied ? 'FREQUENCY LOCKED ✓' : 'COPY DIRECT FREQUENCY'}
            </span>
          </div>
          <p className="text-[11px] font-mono text-slate-400 leading-relaxed">
            <span className="text-[#E0BA6D]">{RESUME_DATA.personal.email}</span>
          </p>

          {emailCopied && (
            <div className="absolute inset-0 bg-emerald-500/10 animate-pulse rounded-xl pointer-events-none"></div>
          )}
        </button>
      </div>

      {/* Telemetry Footer */}
      <div className="backdrop-blur-md bg-black/50 border border-[#C5A059]/25 rounded-xl p-5 space-y-4">
        {/* Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-[#C5A059]/15">
            <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
            <div>
              <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">Email Frequency</div>
              <a href={`mailto:${RESUME_DATA.personal.email}`} className="text-xs font-mono text-[#E0BA6D] hover:text-[#F3E5AB] transition-colors">
                {RESUME_DATA.personal.email}
              </a>
            </div>
          </div>



          <div className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-[#C5A059]/15">
            <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
            <div>
              <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">Base Station</div>
              <span className="text-xs font-mono text-[#E0BA6D]">
                IIIT NAGPUR, INDIA
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-[#C5A059]/15">
            <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
            <div>
              <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">Local Time</div>
              <span className="text-xs font-mono text-[#E0BA6D]">
                {currentTime || 'Loading...'}
              </span>
            </div>
          </div>
        </div>

        {/* Coordinates */}
        <div className="flex flex-wrap items-center justify-between pt-3 border-t border-[#C5A059]/15">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-slate-500">
              <span className="text-[#C5A059]">LAT</span> 21.1458° N
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              <span className="text-[#C5A059]">LON</span> 79.0882° E
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              <span className="text-[#C5A059]">UTC</span> +05:30
            </span>
          </div>

          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-slate-400 hover:text-[#F3E5AB] transition-colors flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" /> GitHub
            </a>
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-slate-400 hover:text-[#F3E5AB] transition-colors flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Signature */}
      <div className="text-center mt-8 pb-4">
        <div className="text-[10px] font-mono text-slate-600 tracking-wider">
          DESIGNED & ENGINEERED BY SAMAY DUBEY • {new Date().getFullYear()}
        </div>
        <div className="text-[9px] font-mono text-slate-700 mt-1">
          BUILT WITH REACT • TYPESCRIPT • VITE • TAILWIND CSS
        </div>
      </div>
    </div>
  );
};
