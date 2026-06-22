import { SectionHeading } from "./section-heading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      data-screen-label="Experience"
      className="mx-auto max-w-[1240px] px-8 pb-[88px] pt-8"
    >
      <SectionHeading index="02" label="QUEST LOG" square="var(--a1)" />
      <h2 className="m-0 mb-9 font-pixel text-2xl text-retro-text">
        EXPERIENCE
      </h2>

      <div className="flex flex-col gap-[18px]">
        {experience.map((job) => (
          <div
            key={job.company}
            className="rounded border border-retro-line bg-retro-surface px-[26px] py-6 transition-all hover:-translate-y-0.5 hover:border-retro-a1"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="font-sans text-[21px] font-bold text-retro-text">
                {job.company}{" "}
                <span className="text-[15px] font-medium text-retro-a1">
                  · {job.title}
                </span>
              </div>
              <div className="font-mono text-xs text-retro-a2">
                {job.period}
              </div>
            </div>
            <p className="my-3.5 text-pretty font-sans text-[15px] leading-[1.7] text-retro-muted">
              {job.details}
            </p>
            <div className="flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="border border-retro-line px-2.5 py-1 font-mono text-[11px] text-retro-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
