import Image from "next/image";

interface HeroFeaturedSectionProps { 
    blip: (arg: number) => void;
}

export const HeroFeaturedSection = ({ blip}: HeroFeaturedSectionProps) => {

  return (
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
  );
};
