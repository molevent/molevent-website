export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-white text-black border-t border-gray-200">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-80" />
      {/* Main Footer */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-pulse-red absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" />
              </div>
              <h2 className="font-black tracking-tighter text-xl uppercase leading-none">
                MOLEVENT.TECH
              </h2>
            </div>
            <p className="font-mono text-xs text-gray-600 leading-relaxed max-w-sm mb-6">
              System architects building digital infrastructure for the modern
              web. Precision engineering meets creative design.
            </p>
            <div className="flex items-center gap-4 font-mono text-[10px] text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary" />
                ALL SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-[10px] text-primary tracking-widest mb-4">
              NAVIGATION
            </h3>
            <div className="flex flex-col gap-3">
              {["SERVICES", "ABOUT", "PROJECTS", "CONTACT"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-mono text-xs text-black hover:text-primary transition-colors tracking-widest"
                >
                  /{link}
                </a>
              ))}
            </div>
          </div>

          {/* System Info */}
          <div>
            <h3 className="font-mono text-[10px] text-primary tracking-widest mb-4">
              SYSTEM_INFO
            </h3>
            <div className="flex flex-col gap-3 font-mono text-xs text-black">
              <div className="flex justify-between">
                <span>VERSION:</span>
                <span>1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span>BUILD:</span>
                <span>2026.02</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="text-primary">ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span>UPTIME:</span>
                <span>99.99%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="font-mono text-[10px] text-gray-500 tracking-widest">
            © 2026 MOLEVENT.TECH // ALL RIGHTS RESERVED
          </div>
          <div className="font-mono text-[10px] text-gray-500 tracking-widest">
            DESIGNED & ENGINEERED WITH PRECISION
          </div>
        </div>
      </div>
    </footer>
  );
}
