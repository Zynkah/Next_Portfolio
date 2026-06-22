"use client";

import { useSound } from "./sound-provider";
import { ContactForm } from "./contact-form";

export function Contact() {
  const { blip } = useSound();

  return (
    <section
      id="contact"
      data-screen-label="Contact"
      className="relative mx-auto max-w-[1240px] overflow-hidden px-8 py-[104px]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] origin-bottom opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          transform: "perspective(320px) rotateX(62deg)",
        }}
      />
      <div className="relative z-[2] flex flex-wrap items-center gap-14">
        {/* left: pitch + socials */}
        <div className="min-w-[320px] flex-1">
          <div
            className="mb-6 font-pixel text-sm text-retro-a2"
            style={{ animation: "blink 1.1s steps(1) infinite" }}
          >
            ▶ INSERT COIN TO CONTINUE
          </div>
          <h2 className="m-0 mb-[18px] font-sans text-[clamp(32px,5vw,46px)] font-bold tracking-[-1px] text-retro-text">
            Let&apos;s build something fun.
          </h2>
          <p className="mb-[34px] max-w-[480px] font-sans text-lg text-retro-muted">
            Open to front-end &amp; full-stack roles, collabs, and stream
            cameos. Drop a message or find me below — I reply fast.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="https://www.twitch.tv/Zynkah"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => blip(640)}
              className="bg-retro-a3 px-6 py-[15px] font-mono text-sm font-bold text-white no-underline transition-transform hover:translate-x-[2px] hover:translate-y-[2px]"
              style={{ boxShadow: "5px 5px 0 var(--line)" }}
            >
              ▶ SEE ME CODE
            </a>
            <a
              href="https://github.com/Zynkah"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => blip(640)}
              className="border-2 border-retro-line px-6 py-[13px] font-mono text-sm text-retro-text no-underline transition-colors hover:border-retro-a1 hover:text-retro-a1"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/zena-creps-ba3631232/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => blip(640)}
              className="border-2 border-retro-line px-6 py-[13px] font-mono text-sm text-retro-text no-underline transition-colors hover:border-retro-a2 hover:text-retro-a2"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        {/* right: form */}
        <div className="w-[440px] max-w-full flex-none">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
