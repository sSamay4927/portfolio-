import React, { useState } from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Terminal, Database, Cpu, Globe, Server, Layers, ShieldCheck, Sparkles } from 'lucide-react';

export const ArsenalSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'frontend' | 'backend' | 'databases' | 'devops'>('all');

  const categories = [
    { key: 'all', label: 'ALL WEAPONS' },
    { key: 'languages', label: 'LANGUAGES' },
    { key: 'frontend', label: 'FRONTEND & UI' },
    { key: 'backend', label: 'BACKEND & DISTRIBUTED' },
    { key: 'databases', label: 'DATABASES & ORM' },
    { key: 'devops', label: 'DEVOPS & CLOUD' },
  ] as const;

  return (
    <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 space-y-6">
      {/* Header */}
      <div className="border-b border-[#C5A059]/30 pb-4">
        <div className="text-xs font-cinzel tracking-[0.3em] text-[#C5A059] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
          02 ARSENAL & SYSTEMS ENGINEERING
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D6] via-[#E0BA6D] to-[#C5A059]">
          TECHNICAL ARSENAL
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveTab(cat.key as any)}
            className={`px-3 py-1.5 text-xs font-cinzel tracking-wider rounded-lg transition-all cursor-pointer ${
              activeTab === cat.key
                ? 'bg-[#C5A059]/20 border border-[#C5A059] text-[#FFF5D6] shadow-[0_0_12px_rgba(197,160,89,0.3)]'
                : 'bg-black/30 border border-[#C5A059]/20 text-slate-400 hover:text-white hover:border-[#C5A059]/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Tech Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Languages */}
        {(activeTab === 'all' || activeTab === 'languages') && (
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 space-y-3 hover:border-[#C5A059] transition-all hud-notch">
            <div className="flex items-center gap-2.5 text-white font-cinzel font-semibold text-sm">
              <Terminal className="w-4 h-4 text-[#C5A059]" />
              <h3>CORE LANGUAGES</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.languages.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-black/60 border border-[#C5A059]/25 text-[#E0BA6D] flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-sans">
              Algorithmic problem solving in C++, data processing & NLP pipeline integration in Python, type-safe full-stack in TypeScript.
            </p>
          </div>
        )}

        {/* Frontend */}
        {(activeTab === 'all' || activeTab === 'frontend') && (
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 space-y-3 hover:border-[#C5A059] transition-all hud-notch">
            <div className="flex items-center gap-2.5 text-white font-cinzel font-semibold text-sm">
              <Globe className="w-4 h-4 text-[#C5A059]" />
              <h3>FRONTEND ARCHITECTURE</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-black/60 border border-[#C5A059]/25 text-[#E0BA6D] flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-sans">
              High frame rate UI rendering (Canvas/GSAP), reactive state trees (Redux Toolkit), and fluid spatial motion design.
            </p>
          </div>
        )}

        {/* Backend & Distributed */}
        {(activeTab === 'all' || activeTab === 'backend') && (
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 space-y-3 hover:border-[#C5A059] transition-all hud-notch">
            <div className="flex items-center gap-2.5 text-white font-cinzel font-semibold text-sm">
              <Server className="w-4 h-4 text-[#C5A059]" />
              <h3>BACKEND & REAL-TIME</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-black/60 border border-[#C5A059]/25 text-[#E0BA6D] flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-sans">
              Multi-namespace WebSockets with &lt;80ms latency, HTTP-only JWT security chains, and Python subprocess bridges.
            </p>
          </div>
        )}

        {/* Databases & Storage */}
        {(activeTab === 'all' || activeTab === 'databases') && (
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 space-y-3 hover:border-[#C5A059] transition-all hud-notch">
            <div className="flex items-center gap-2.5 text-white font-cinzel font-semibold text-sm">
              <Database className="w-4 h-4 text-[#C5A059]" />
              <h3>DATA PERSISTENCE & INDEXING</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.databases.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-black/60 border border-[#C5A059]/25 text-[#E0BA6D] flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-sans">
              Composite B-Tree query indexing (&lt;200ms across 1,440+ records), window-function aggregations, and multi-collection Mongoose models.
            </p>
          </div>
        )}

        {/* DevOps & Tools */}
        {(activeTab === 'all' || activeTab === 'devops') && (
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 space-y-3 hover:border-[#C5A059] transition-all md:col-span-2 hud-notch">
            <div className="flex items-center gap-2.5 text-white font-cinzel font-semibold text-sm">
              <Cpu className="w-4 h-4 text-[#C5A059]" />
              <h3>DEVOPS, CLOUD & LINUX TOOLING</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.devops.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-black/60 border border-[#C5A059]/25 text-[#E0BA6D] flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  {skill}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-black/40 p-3 rounded border border-white/5">
                <div className="text-[11px] font-cinzel text-[#C5A059] font-bold">SECURITY FIRST</div>
                <div className="text-[11px] text-white/50">Helmet, CORS, rate-limit, bcrypt salting, refresh tokens</div>
              </div>
              <div className="bg-black/40 p-3 rounded border border-white/5">
                <div className="text-[11px] font-cinzel text-[#C5A059] font-bold">AUTOMATION & ETL</div>
                <div className="text-[11px] text-white/50">node-cron scheduled ingestion pipelines & Reddit/Binance APIs</div>
              </div>
              <div className="bg-black/40 p-3 rounded border border-white/5">
                <div className="text-[11px] font-cinzel text-[#C5A059] font-bold">MEDIA PROCESSING</div>
                <div className="text-[11px] text-white/50">MediaPipe AI Pose estimation & Cloudinary/Multer asset pipelines</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
