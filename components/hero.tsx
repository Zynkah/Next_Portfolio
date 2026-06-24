"use client";

import { useSound } from "./sound-provider";
import { SynthwaveFloor } from "./synthwave-floor";
import { FloatingShapes } from "./floating-shapes";
import { HeroFeaturedSection } from "./hero-featured-section";
import { HeroMainContent } from "./hero-main-content";

export function Hero() {
  const { blip } = useSound();

  return (
    <section
      data-screen-label="Hero"
      className="relative mx-auto max-w-[1240px] overflow-hidden px-8 pb-24 pt-[72px]"
    >
      <SynthwaveFloor />
      <FloatingShapes />

      <div className="relative z-[2] flex flex-wrap items-center gap-14">
        {/* featured main content */}
        <HeroMainContent blip={blip} />
        {/* featured image card */}
        <HeroFeaturedSection blip={blip} />
      </div>
    </section>
  );
}
