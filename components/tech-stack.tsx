import { SectionHeading } from "./section-heading";
import { techStack } from "@/data/tech-stack";

export function TechStack() {
  return (
    <section
      id="stack"
      data-screen-label="Tech Stack"
      className="mx-auto max-w-[1240px] px-8 py-[88px]"
    >
      <SectionHeading index="04" label="INVENTORY" square="var(--a3)" />
      <h2 className="m-0 mb-9 font-pixel text-2xl text-retro-text">
        TECH STACK
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[18px]">
        {techStack.map((group) => (
          <div
            key={group.label}
            className="rounded border border-retro-line bg-retro-surface p-[22px]"
          >
            <div className="mb-4 font-mono text-[11px] tracking-[2px] text-retro-a1">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border border-retro-line bg-retro-surface2 px-[11px] py-1.5 font-mono text-xs text-retro-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
