import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
