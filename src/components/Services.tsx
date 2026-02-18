"use client";

const services = [
  {
    id: "001",
    icon: "code",
    title: "WEB DEVELOPMENT",
    description:
      "Full-stack web applications built with modern frameworks. From landing pages to complex platforms — engineered for performance.",
    tags: ["NEXT.JS", "REACT", "NODE.JS", "TYPESCRIPT"],
  },
  {
    id: "002",
    icon: "cloud",
    title: "CLOUD ARCHITECTURE",
    description:
      "Scalable cloud infrastructure design and deployment. We architect systems that grow with your business.",
    tags: ["AWS", "GCP", "DOCKER", "KUBERNETES"],
  },
  {
    id: "003",
    icon: "design_services",
    title: "UI/UX DESIGN",
    description:
      "Interface design that balances aesthetics with usability. Every pixel serves a purpose in the system.",
    tags: ["FIGMA", "PROTOTYPING", "DESIGN SYSTEM", "A11Y"],
  },
  {
    id: "004",
    icon: "api",
    title: "API & INTEGRATION",
    description:
      "Seamless system integration and API development. Connect your digital ecosystem with reliable data pipelines.",
    tags: ["REST", "GRAPHQL", "WEBHOOKS", "MICROSERVICES"],
  },
  {
    id: "005",
    icon: "psychology",
    title: "AI & LLM SOLUTIONS",
    description:
      "Custom AI-powered applications leveraging Large Language Models with Retrieval-Augmented Generation (RAG). From intelligent chatbots to knowledge-base systems — we bring AI into your workflow.",
    tags: ["LLM", "RAG", "LANGCHAIN", "VECTOR DB"],
  },
  {
    id: "006",
    icon: "health_and_safety",
    title: "MENTAL HEALTH APP",
    description:
      "AI-driven mental health platform combining therapeutic frameworks with LLM technology. Mood tracking, guided journaling, and personalized support — designed with empathy and precision.",
    tags: ["HEALTHTECH", "AI THERAPY", "NLP", "WELLNESS"],
  },
  {
    id: "007",
    icon: "medication",
    title: "TELEMEDICINE & SMART PHARMACY",
    description:
      "Smart medicine kiosk and online pharmacist consultation platform. Connect patients with pharmacists in real-time with automated dispensing systems — accessible healthcare, anywhere.",
    tags: ["TELEMEDICINE", "SMART KIOSK", "E-PHARMACY", "IOT"],
  },
  {
    id: "008",
    icon: "security",
    title: "CYBERSECURITY",
    description:
      "Security-first approach to every system we build. Penetration testing, audits, and secure architecture design.",
    tags: ["AUDIT", "PENTEST", "ENCRYPTION", "COMPLIANCE"],
  },
  {
    id: "009",
    icon: "analytics",
    title: "DATA & ANALYTICS",
    description:
      "Transform raw data into actionable insights. Custom dashboards, reporting systems, and data pipelines.",
    tags: ["DASHBOARD", "ETL", "VISUALIZATION", "ML"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-white py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 border-b border-black pb-6">
          <div>
            <div className="font-mono text-[10px] text-gray-400 tracking-widest mb-2">
              SECTION_002 // CAPABILITIES
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.9]">
              <span className="text-primary">/</span>SERVICES
            </h2>
          </div>
          <p className="font-mono text-sm text-gray-500 max-w-md">
            End-to-end digital solutions. Each service is a module in your
            system architecture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group border border-gray-200 p-6 md:p-8 hover:bg-black hover:text-white transition-all duration-300 cursor-default relative"
            >
              {/* Service Number */}
              <div className="font-mono text-[10px] text-gray-400 group-hover:text-gray-500 tracking-widest mb-6">
                SRV_{service.id}
              </div>

              {/* Icon */}
              <span className="material-symbols-outlined text-4xl mb-4 group-hover:text-primary transition-colors">
                {service.icon}
              </span>

              {/* Title */}
              <h3 className="font-black text-xl tracking-tight mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-xs text-gray-500 group-hover:text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] border border-gray-300 group-hover:border-gray-600 px-2 py-1 tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-primary font-bold text-lg">[→]</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
