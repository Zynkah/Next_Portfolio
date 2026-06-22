import Image from "next/image";
import { SectionHeading } from "./section-heading";
import { trophies } from "@/data/trophies";

export function Trophies() {
  return (
    <section
      id="trophies"
      data-screen-label="Trophies"
      className="border-y border-retro-line bg-retro-surface"
    >
      <div className="mx-auto max-w-[1240px] px-8 py-[88px]">
        <SectionHeading index="05" label="TROPHY ROOM" square="var(--a2)" />
        <h2 className="m-0 mb-2 font-pixel text-2xl text-retro-text">
          ACHIEVEMENTS UNLOCKED
        </h2>
        <p className="m-0 mb-9 font-mono text-[13px] text-retro-muted">
          2 certifications · 8 achievements
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {trophies.map((t) => {
            const isCert = t.kind === "CERTIFICATION";
            return (
              <div
                key={t.title}
                className="overflow-hidden rounded border bg-retro-bg transition-all hover:-translate-y-[3px]"
                style={{
                  borderColor: isCert ? "var(--a1)" : "var(--line)",
                }}
              >
                <div className="relative h-[140px] w-full border-b border-retro-line">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3.5">
                  <div
                    className="font-mono text-[9px] tracking-[1px]"
                    style={{ color: isCert ? "var(--a1)" : "var(--a2)" }}
                  >
                    {isCert ? "★ CERTIFICATION" : "◆ ACHIEVEMENT"}
                  </div>
                  <div className="mt-1.5 font-sans text-sm font-semibold text-retro-text">
                    {t.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
