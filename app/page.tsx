import { SiteHeader } from "@/components/Navbar/site-header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Showcase } from "@/components/showcase";
import { TechStack } from "@/components/tech-stack";
import { Trophies } from "@/components/trophies";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-[90] mix-blend-multiply" />
      <SiteHeader />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Showcase />
        </Reveal>
        <Reveal>
          <TechStack />
        </Reveal>
        <Reveal>
          <Trophies />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
