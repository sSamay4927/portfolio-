import React from 'react';
import { ShipWheel } from 'lucide-react';

interface LoadingScreenProps {
  progress: number;
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background radial gradient for cinematic effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a2012] via-black to-black opacity-90" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Spinning Pirate Wheel */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#C5A059] blur-[30px] opacity-20 rounded-full animate-pulse" />
          <ShipWheel className="w-20 h-20 text-[#C5A059] animate-[spin_4s_linear_infinite]" strokeWidth={1} />
        </div>

        {/* Loading Text & Percentage */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-cinzel text-2xl tracking-[0.4em] text-[#F3E5AB]">
            EMBARKING
          </h2>
          <div className="font-mono text-[#E0BA6D] text-base tracking-[0.2em]">
            {progress}%
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden rounded-full mt-4">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#C5A059]/20 via-[#E0BA6D] to-[#F3E5AB] transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
