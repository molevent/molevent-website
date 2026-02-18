"use client";

const stats = [
  { value: "50+", label: "PROJECTS DELIVERED" },
  { value: "99.9%", label: "UPTIME GUARANTEE" },
  { value: "24/7", label: "SYSTEM MONITORING" },
  { value: "2026", label: "YEAR ESTABLISHED" },
];

const principles = [
  {
    id: "01",
    title: "PRECISION ENGINEERING",
    description: "Every line of code is intentional. We don't ship bloat — we ship systems.",
  },
  {
    id: "02",
    title: "SCALABLE BY DEFAULT",
    description: "Architecture designed to handle 10x growth without redesign.",
  },
  {
    id: "03",
    title: "SECURITY FIRST",
    description: "Zero-trust architecture. Every endpoint authenticated, every data stream encrypted.",
  },
  {
    id: "04",
    title: "OPEN STANDARDS",
    description: "We build on open protocols and standards. No vendor lock-in, ever.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-bg-dark text-white py-20 md:py-32">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 border-b border-gray-700 pb-6">
          <div>
            <div className="font-mono text-[10px] text-gray-500 tracking-widest mb-2">
              SECTION_003 // IDENTITY
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.9]">
              <span className="text-primary">/</span>ABOUT
            </h2>
          </div>
          <p className="font-mono text-sm text-gray-400 max-w-md">
            We are system architects. We build the digital infrastructure that
            powers tomorrow.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-20 border border-gray-700">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-gray-700 p-6 md:p-8 text-center group hover:bg-primary transition-colors duration-300"
            >
              <div className="text-3xl md:text-5xl font-black tracking-tighter mb-2 group-hover:text-bg-dark">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] md:text-xs text-gray-500 group-hover:text-bg-dark tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Description */}
          <div>
            <div className="font-mono text-[10px] text-primary tracking-widest mb-4">
              MANIFEST.TXT
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              <span className="text-white font-bold">Molevent Tech</span> is a
              digital systems company specializing in web development, cloud
              architecture, and interface design. We approach every project as a
              system — interconnected, efficient, and built to last.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
              Our team combines engineering rigor with creative precision. We
              don&apos;t just build websites — we architect digital experiences
              that operate at the intersection of technology and design.
            </p>
            {/* Headquarters & Active Nodes */}
            <div className="mt-8 border border-gray-700 p-6">
              <div className="font-mono text-[10px] text-primary tracking-widest mb-4">
                NETWORK_TOPOLOGY.MAP
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* HQ */}
                <div>
                  <div className="font-mono text-[10px] text-gray-500 tracking-widest mb-2">
                    HEADQUARTERS (CORE):
                  </div>
                  <div className="font-bold text-lg mb-1">CHIANG MAI, TH</div>
                  <div className="font-mono text-xs text-gray-400">
                    18.7883° N, 98.9853° E
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-2 bg-primary" />
                    <span className="font-mono text-[10px] text-primary tracking-widest">
                      ONLINE
                    </span>
                  </div>
                </div>
                {/* Active Nodes */}
                <div>
                  <div className="font-mono text-[10px] text-gray-500 tracking-widest mb-2">
                    ACTIVE NODES:
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {["BANGKOK", "SINGAPORE", "TAIPEI", "TOKYO", "FRANKFURT", "LOS ANGELES"].map((node) => (
                      <div key={node} className="flex items-center gap-2 font-mono text-xs text-gray-300">
                        <span className="text-gray-600">—</span>
                        <span>{node}</span>
                        <span className="w-1.5 h-1.5 bg-primary ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Principles */}
          <div>
            <div className="font-mono text-[10px] text-primary tracking-widest mb-4">
              CORE_PRINCIPLES.SYS
            </div>
            <div className="flex flex-col gap-0">
              {principles.map((p) => (
                <div
                  key={p.id}
                  className="border-t border-gray-700 py-6 group hover:pl-4 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[10px] text-gray-600 mt-1">
                      [{p.id}]
                    </span>
                    <div>
                      <h3 className="font-black text-lg tracking-tight mb-1 group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <p className="font-mono text-xs text-gray-500 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
