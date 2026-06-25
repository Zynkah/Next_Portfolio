import React from "react";

interface HeroMainContentProps {
  blip: (arg: number) => void;
}

export const HeroMainContent = ({ blip }: HeroMainContentProps) => {
  return (
    <div className="min-w-[320px] flex-1">
      <div className="mb-7 inline-block border border-retro-a1 px-3.5 py-[7px] font-mono text-xs tracking-[2px] text-retro-a1">
        SOFTWARE ENGINEER · @ZYNKAH
      </div>
      <h1 className="m-0 text-[clamp(40px,6vw,60px)] font-bold leading-[1.06] tracking-[-1.5px] text-retro-text">
        Building playful, <span className="text-retro-a2">scalable</span>{" "}
        interfaces for web &amp; <span className="text-retro-a1">mobile</span>.
      </h1>
      <p className="mt-6 max-w-[560px] text-lg leading-[1.65] text-retro-muted">
        I&apos;m <strong className="text-retro-text">Zena Creps</strong> — a
        front-end focused engineer in React, Next.js &amp; Three.js, with
        hands-on blockchain integration and a Twitch dev community I build with
        live.
      </p>
      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#work"
          onMouseEnter={() => blip(640)}
          className="px-[26px] py-[15px] font-mono text-sm font-bold no-underline transition-transform hover:translate-x-[2px] hover:translate-y-[2px] text-black bg-retro-a1"
          style={{ boxShadow: "5px 5px 0 var(--a3)" }}
        >
          ▶ VIEW WORK
        </a>
        <a
          href="#contact"
          onMouseEnter={() => blip(640)}
          className="border-2 border-retro-line px-[26px] py-[13px] font-mono text-sm text-retro-text no-underline transition-colors hover:border-retro-a2 hover:text-retro-a2"
        >
          CONTACT
        </a>
      </div>
      <div className="mt-10 flex gap-7 font-mono text-xs text-retro-muted">
        <div>
          <span className="text-xl font-bold text-retro-a2">6</span>
          <br />
          projects shipped
        </div>
        <div>
          <span className="text-xl font-bold text-retro-a1">3+</span>
          <br />
          years building
        </div>
        <div>
          <span className="text-xl font-bold text-retro-a3">∞</span>
          <br />
          streams &amp; coffee
        </div>
      </div>
    </div>
  );
};
