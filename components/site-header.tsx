"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useSound } from "./sound-provider";

const links: [string, string][] = [
  ["work", "#work"],
  ["about", "#about"],
  ["stack", "#stack"],
  ["trophies", "#trophies"],
  ["contact", "#contact"],
];

export function SiteHeader() {
  const { theme, setTheme } = useTheme();
  const { enabled, toggle, blip } = useSound();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header
      className="sticky top-0 z-[80] border-b border-retro-line backdrop-blur-md"
      style={{ background: "var(--navbg)" }}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-8 py-4">
        {/* logo */}
        <div className="flex items-center gap-3">
          <div
            className="h-4 w-4 bg-retro-a1"
            style={{ boxShadow: "0 0 12px var(--glow)" }}
          />
          <div>
            <div className="font-pixel text-[13px] text-retro-text">ZYNKAH</div>
            <div className="mt-[3px] font-mono text-[10px] tracking-[1px] text-retro-muted">
              ZENA CREPS
            </div>
          </div>
        </div>

        {/* nav */}
        <nav className="hidden gap-7 font-mono text-[13px] text-retro-muted md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onMouseEnter={() => blip(820)}
              className="cursor-pointer no-underline transition-colors hover:text-retro-a1"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* toggles */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => {
              toggle();
              blip(700);
            }}
            className="cursor-pointer select-none border border-retro-line px-2.5 py-[7px] font-mono text-[11px] text-retro-muted transition-colors hover:border-retro-a2 hover:text-retro-a2"
          >
            {enabled ? "♪ ON" : "♪ OFF"}
          </button>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => {
              blip(400);
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            className="cursor-pointer select-none border border-retro-line px-3 py-1.5 font-mono text-[13px] text-retro-text transition-colors hover:border-retro-a1 hover:text-retro-a1"
          >
            {mounted ? (theme === "dark" ? "☀" : "☾") : "☀"} / ☾
          </button>
        </div>
      </div>
    </header>
  );
}
