"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useSound } from "./sound-provider";
import { SectionHeading } from "./section-heading";

export function Showcase() {
  const [sel, setSel] = useState(0);
  const { blip } = useSound();
  const p = projects[sel];

  return (
    <section
      id="work"
      data-screen-label="Showcase"
      className="border-y border-retro-line bg-retro-surface"
    >
      <div className="mx-auto max-w-[1240px] px-8 py-[88px]">
        <SectionHeading index="03" label="ARCADE" square="var(--a2)" blink />
        <h2 className="m-0 mb-2 font-pixel text-2xl text-retro-text">
          SELECT YOUR GAME
        </h2>
        <p className="m-0 mb-10 font-mono text-[13px] text-retro-muted">
          ▲ ▼ pick a build to inspect · hover for sound
        </p>

        <div className="flex flex-wrap items-stretch gap-9">
          {/* menu */}
          <div className="min-w-[320px] flex-1 self-start overflow-hidden rounded border border-retro-line bg-retro-bg">
            {projects.map((proj, i) => {
              const on = i === sel;
              return (
                <button
                  type="button"
                  key={proj.title}
                  onClick={() => {
                    blip(640);
                    setSel(i);
                  }}
                  onMouseEnter={() => blip(820)}
                  className="flex w-full cursor-pointer items-center gap-3.5 px-4 py-3.5 text-left transition-all"
                  style={{
                    borderLeft: `3px solid ${on ? "var(--a1)" : "transparent"}`,
                    background: on ? "var(--surface2)" : "transparent",
                  }}
                >
                  <span
                    className="min-w-[22px] font-mono text-xs"
                    style={{ color: on ? "var(--a1)" : "var(--muted2)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex-1 font-sans text-base font-semibold"
                    style={{ color: on ? "var(--text)" : "var(--muted2)" }}
                  >
                    {proj.title}
                  </span>
                  <span
                    className="font-mono text-[10px] tracking-[1px]"
                    style={{ color: on ? "var(--a2)" : "var(--muted2)" }}
                  >
                    {proj.genre}
                  </span>
                  <span
                    className="text-[13px] text-retro-a1 transition-opacity"
                    style={{ opacity: on ? 1 : 0 }}
                  >
                    ▶
                  </span>
                </button>
              );
            })}
            <div className="border-t border-retro-line px-4 py-3.5 font-mono text-[11px] text-retro-muted">
              CREDITS: ∞ · 6 GAMES AVAILABLE
            </div>
          </div>

          {/* detail */}
          <div
            className="min-w-[340px] flex-[1.25] rounded border border-retro-line bg-retro-bg p-[18px]"
            style={{ boxShadow: "0 0 40px var(--glow)" }}
          >
            <div className="relative h-[300px] w-full overflow-hidden border border-retro-line bg-retro-surface2">
              <Image
                key={p.image}
                src={p.image}
                alt={p.image_alt}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover object-top"
              />
              <div className="absolute left-0 top-0 bg-black/70 px-2.5 py-[7px] font-pixel text-[9px] text-retro-a1">
                {p.genre}
              </div>
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, rgba(0,0,0,0.14) 0px, rgba(0,0,0,0.14) 1px, transparent 1px, transparent 3px)",
                }}
              />
            </div>
            <h3 className="mb-2 mt-5 font-sans text-[26px] font-bold text-retro-text">
              {p.title}
            </h3>
            <div className="mb-3.5 font-mono text-xs text-retro-a2">
              {p.tech.join("  ·  ")}
            </div>
            <p className="m-0 mb-[22px] font-sans text-[15px] leading-[1.7] text-retro-muted">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-3.5">
              {p.hasLive && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => blip(640)}
                  className="bg-retro-a1 px-[22px] py-[13px] font-mono text-[13px] font-bold text-[#06121d] no-underline transition-transform hover:translate-x-[2px] hover:translate-y-[2px]"
                  style={{ boxShadow: "4px 4px 0 var(--a3)" }}
                >
                  ▶ PLAY
                </a>
              )}
              <a
                href={p.git_hub_link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => blip(640)}
                className="border-2 border-retro-line px-[22px] py-[11px] font-mono text-[13px] text-retro-text no-underline transition-colors hover:border-retro-a2 hover:text-retro-a2"
              >
                ⌥ SOURCE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
