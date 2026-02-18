"use client";

import { useState } from "react";

const navLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex w-full items-center justify-between px-6 md:px-10 py-4">
          {/* Logo */}
          <a href="#" className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-pulse-red absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" />
              </div>
              <h1 className="font-black tracking-tighter text-lg md:text-xl uppercase leading-none">
                MOLEVENT.TECH
              </h1>
            </div>
            <div className="font-mono text-[10px] text-gray-400 tracking-widest pl-6">
              SYSTEM.ARCHITECTURE.INTERFACE
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-widest text-gray-600 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-black bg-white hover:bg-black hover:text-white transition-colors duration-200 px-5 py-2 font-bold text-sm tracking-wide"
            >
              GET IN TOUCH
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden group flex items-center gap-2 border border-black bg-white hover:bg-black hover:text-white transition-colors duration-200 px-4 py-2"
          >
            <span className="font-bold text-sm tracking-wide">
              {menuOpen ? "CLOSE" : "MENU"}
            </span>
            <span className="font-mono text-sm group-hover:text-primary transition-colors">
              {menuOpen ? "[×]" : "[+]"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 pt-20">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-black text-4xl tracking-tighter hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-200 px-8 py-3 font-bold text-lg tracking-wide"
          >
            GET IN TOUCH
          </a>
          <div className="absolute bottom-10 font-mono text-[10px] text-gray-400 tracking-widest">
            MOLEVENT.TECH // V.1.0
          </div>
        </div>
      )}
    </>
  );
}
