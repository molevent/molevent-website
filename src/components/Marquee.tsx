export default function Marquee() {
  const items = [
    "SYSTEM DESIGN",
    "WEB DEVELOPMENT",
    "CLOUD ARCHITECTURE",
    "UI/UX ENGINEERING",
    "API INTEGRATION",
    "DIGITAL INFRASTRUCTURE",
    "AI & LLM SOLUTIONS",
    "RAG SYSTEMS",
    "MENTAL HEALTH APP",
  ];

  return (
    <div className="relative z-10 w-full bg-black text-white py-4 overflow-hidden border-y border-black">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 font-black text-lg md:text-2xl tracking-tighter">
            {item}
            <span className="text-primary ml-8">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
