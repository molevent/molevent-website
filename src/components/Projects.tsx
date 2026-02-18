"use client";

const projects = [
  {
    id: "PRJ_001",
    title: "E-COMMERCE PLATFORM",
    category: "WEB APPLICATION",
    year: "2026",
    description:
      "Full-stack e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.",
    tech: ["NEXT.JS", "STRIPE", "POSTGRESQL"],
    status: "DEPLOYED",
  },
  {
    id: "PRJ_002",
    title: "CLOUD MONITORING DASHBOARD",
    category: "SAAS PRODUCT",
    year: "2026",
    description:
      "Real-time infrastructure monitoring system with alerting, log aggregation, and performance metrics visualization.",
    tech: ["REACT", "GRAFANA", "AWS"],
    status: "LIVE",
  },
  {
    id: "PRJ_003",
    title: "FINTECH API GATEWAY",
    category: "API INFRASTRUCTURE",
    year: "2026",
    description:
      "High-throughput API gateway handling 10M+ daily transactions with sub-50ms latency and 99.99% uptime.",
    tech: ["GO", "KUBERNETES", "REDIS"],
    status: "OPERATIONAL",
  },
  {
    id: "PRJ_004",
    title: "HEALTHCARE DATA PLATFORM",
    category: "DATA ENGINEERING",
    year: "2026",
    description:
      "HIPAA-compliant data platform for healthcare analytics. Secure data pipelines processing patient records at scale.",
    tech: ["PYTHON", "SPARK", "GCP"],
    status: "DEPLOYED",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-white py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 border-b border-black pb-6">
          <div>
            <div className="font-mono text-[10px] text-gray-400 tracking-widest mb-2">
              SECTION_004 // PORTFOLIO
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.9]">
              <span className="text-primary">/</span>PROJECTS
            </h2>
          </div>
          <p className="font-mono text-sm text-gray-500 max-w-md">
            Selected case studies from our system architecture portfolio.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group border-b border-gray-200 py-8 md:py-12 hover:bg-gray-50 transition-colors duration-300 px-4 md:px-8 -mx-4 md:-mx-8 cursor-default"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left - ID & Category */}
                <div className="lg:col-span-2">
                  <div className="font-mono text-[10px] text-gray-400 tracking-widest">
                    {project.id}
                  </div>
                  <div className="font-mono text-[10px] text-primary tracking-widest mt-1">
                    {project.category}
                  </div>
                </div>

                {/* Center - Title & Description */}
                <div className="lg:col-span-6">
                  <h3 className="font-black text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-gray-500 leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                </div>

                {/* Right - Tech & Status */}
                <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] border border-gray-300 px-2 py-1 tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary" />
                    <span className="font-mono text-[10px] tracking-widest text-gray-500">
                      {project.status}
                    </span>
                    <span className="font-mono text-[10px] text-gray-400">
                      // {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border border-black p-6 md:p-8">
          <div>
            <h3 className="font-black text-xl md:text-2xl tracking-tight">
              HAVE A PROJECT IN MIND?
            </h3>
            <p className="font-mono text-xs text-gray-500 mt-1">
              Let&apos;s architect your next digital system together.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-4 md:mt-0 border-2 border-black bg-black text-white hover:bg-primary hover:border-primary transition-colors duration-200 px-8 py-3 font-bold text-sm tracking-wide"
          >
            START A PROJECT [→]
          </a>
        </div>
      </div>
    </section>
  );
}
