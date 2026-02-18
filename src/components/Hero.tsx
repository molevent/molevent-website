"use client";

import dynamic from "next/dynamic";

const HeroMap = dynamic(() => import("./HeroMap"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between p-6 md:p-10 pt-24 md:pt-28"
    >
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 bg-grid pointer-events-none opacity-80" />

      {/* Border frame */}
      <div className="absolute inset-3 md:inset-6 border border-gray-200 pointer-events-none z-0" />

      {/* Center Content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full relative z-10">
        {/* Vertical decorative lines */}
        <div className="absolute h-full w-px bg-gray-200 left-10 hidden md:block" />
        <div className="absolute h-full w-px bg-gray-200 right-10 hidden md:block" />

        <div className="max-w-[1400px] w-full px-4 md:px-20 text-center md:text-left relative">
          {/* Decorative Top Bracket */}
          <div className="hidden md:flex justify-between w-full border-t border-black mb-4 pt-1 opacity-30">
            <span className="text-[10px] font-mono">X: 001</span>
            <span className="text-[10px] font-mono">Y: 001</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-[-0.04em] leading-[0.9] text-black">
            <span className="block hover:text-primary transition-colors duration-500 cursor-default hover-glitch">
              SYSTEM.
            </span>
            <span className="block md:pl-20 hover:text-primary transition-colors duration-500 cursor-default hover-glitch">
              ARCHITECTURE.
            </span>
            <span className="block md:pl-40 hover:text-primary transition-colors duration-500 cursor-default hover-glitch">
              INTERFACE.
            </span>
          </h2>

          {/* Decorative Bottom Bracket */}
          <div className="hidden md:flex justify-between w-full border-b border-black mt-8 pb-1 opacity-30">
            <span className="text-[10px] font-mono">W: 100%</span>
            <span className="text-[10px] font-mono">H: AUTO</span>
          </div>

          {/* Subtitle */}
          <p className="mt-8 font-mono text-sm md:text-base text-gray-500 max-w-xl">
            We design and engineer digital systems that power modern businesses.
            From architecture to interface — precision at every layer.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="border-2 border-black bg-black text-white hover:bg-primary hover:border-primary transition-colors duration-200 px-8 py-3 font-bold text-sm tracking-wide text-center"
            >
              EXPLORE SERVICES
            </a>
            <a
              href="#projects"
              className="border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 px-8 py-3 font-bold text-sm tracking-wide text-center"
            >
              VIEW PROJECTS
            </a>
          </div>
        </div>

        {/* Floating Data Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-64 border-l border-black bg-white/90 p-4 z-10">
          <div className="w-full aspect-square bg-gray-100 border border-gray-200 mb-2 overflow-hidden relative">
            <HeroMap />
          </div>
          <div className="flex justify-between text-[10px] font-mono border-t border-black pt-2 mt-2">
            <span>HQ:</span>
            <span>CHIANG MAI, TH</span>
          </div>
          <div className="flex justify-between text-[10px] font-mono">
            <span>COORD:</span>
            <span>18.7883° N</span>
          </div>
          <div className="flex justify-between text-[10px] font-mono">
            <span></span>
            <span>98.9853° E</span>
          </div>
          <div className="flex justify-between text-[10px] font-mono">
            <span>STATUS:</span>
            <span className="text-primary">ONLINE</span>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-300">
            <div className="text-[10px] font-mono text-gray-400 mb-1">ACTIVE NODES:</div>
            {["BANGKOK", "SINGAPORE", "TAIPEI", "TOKYO", "FRANKFURT", "LOS ANGELES"].map((node) => (
              <div key={node} className="flex items-center gap-1.5 text-[10px] font-mono">
                <span className="w-1.5 h-1.5 bg-primary" />
                <span>{node}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Bar */}
      <footer className="relative z-10 flex flex-col md:flex-row w-full items-end md:items-center justify-between gap-4 md:gap-0 font-mono text-xs md:text-sm pt-6 border-t border-gray-100">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-gray-600 md:items-center w-full md:w-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-base">memory</span>
            <span className="tracking-widest">EST. 2026</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary" />
            <span className="tracking-widest">OPERATING SYSTEM: V.1.0</span>
          </div>
        </div>
        <a
          href="#services"
          className="w-full md:w-auto border border-black md:border-0 p-2 md:p-0 text-center md:text-right hover:bg-gray-50 transition-colors cursor-pointer group"
        >
          <span className="tracking-widest font-bold group-hover:text-primary transition-colors">
            SCROLL TO INITIALIZE
          </span>
          <span className="ml-2 font-bold">[↓]</span>
        </a>
      </footer>
    </section>
  );
}
