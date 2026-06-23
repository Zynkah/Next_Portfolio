"use client";

import Image from "next/image";
import { useSound } from "./sound-provider";
import { SynthwaveFloor } from "./synthwave-floor";
import { FloatingShapes } from "./floating-shapes";

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
        <div className="min-w-[320px] flex-1">
          <div className="mb-7 inline-block border border-retro-a1 px-3.5 py-[7px] font-mono text-xs tracking-[2px] text-retro-a1">
            SOFTWARE ENGINEER · @ZYNKAH
          </div>
          <h1 className="m-0 text-[clamp(40px,6vw,60px)] font-bold leading-[1.06] tracking-[-1.5px] text-retro-text">
            Building playful, <span className="text-retro-a2">scalable</span>{" "}
            interfaces for web &amp;{" "}
            <span className="text-retro-a1">mobile</span>.
          </h1>
          <p className="mt-6 max-w-[560px] text-lg leading-[1.65] text-retro-muted">
            I&apos;m <strong className="text-retro-text">Zena Creps</strong> — a
            front-end focused engineer in React, Next.js &amp; Three.js, with
            hands-on blockchain integration and a Twitch dev community I build
            with live.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              onMouseEnter={() => blip(640)}
              className="bg-retro-a1 px-[26px] py-[15px] font-mono text-sm font-bold no-underline transition-transform hover:translate-x-[2px] hover:translate-y-[2px]"
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

        {/* featured card */}
        <div className="w-[380px] max-w-full flex-none">
          <div
            className="rounded border border-retro-line bg-retro-surface p-4"
            style={{ boxShadow: "0 0 40px var(--glow)" }}
          >
            <div className="mb-3.5 flex items-center gap-2 font-mono text-[11px] text-retro-a1">
              <span
                className="inline-block h-2 w-2 rounded-full bg-retro-a1"
                style={{ animation: "blink 1.4s steps(1) infinite" }}
              />
              FEATURED BUILD
            </div>
            <div className="relative h-[200px] w-full overflow-hidden border border-retro-line bg-retro-surface2">
              <Image
                src="/image/FFX.png"
                alt="Final Fantasy X Site"
                fill
                sizes="380px"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-3.5 font-sans text-[17px] font-bold text-retro-text">
              Final Fantasy X Site
            </div>
            <div className="mt-1.5 font-mono text-[11px] text-retro-muted">
              Next.js · Tailwind · Framer Motion
            </div>
            <a
              href="https://ffx-v2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => blip(640)}
              className="mt-3.5 inline-block font-mono text-xs text-retro-a2 no-underline hover:underline"
            >
              PLAY DEMO →
            </a>
          </div>
          <div className="mt-4 flex justify-end">
            <div
              className="h-6 w-6 bg-retro-a2"
              style={{
                animation: "bob 1.6s ease-in-out infinite",
                boxShadow: "0 0 14px var(--glow)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
