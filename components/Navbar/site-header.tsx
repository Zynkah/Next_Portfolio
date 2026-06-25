"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useSound } from "../sound-provider";
import { FloatingBox } from "./floating-box";
import { ToggleMode } from "./toggle-mode";
import { NavLinks } from "./nav-links";

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
          <FloatingBox />
          <div>
            <div className="font-pixel text-[13px] text-retro-text">ZYNKAH</div>
            <div className="mt-[3px] font-mono text-[10px] tracking-[1px] text-retro-muted">
              ZENA CREPS
            </div>
          </div>
        </div>

        {/* nav */}
        <NavLinks blip={blip} />

        {/* toggles */}
        <ToggleMode
          blip={blip}
          enabled={enabled}
          theme={theme}
          toggle={toggle}
          setTheme={setTheme}
          mounted={mounted}
        />
      </div>
    </header>
  );
}
