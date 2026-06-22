import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section
      id="about"
      data-screen-label="About"
      className="mx-auto max-w-[1240px] px-8 py-[88px]"
    >
      <SectionHeading index="01" label="PLAYER BIO" square="var(--a2)" />
      <div className="flex flex-wrap items-start gap-14">
        <div className="min-w-[320px] flex-[1.4]">
          <h2 className="m-0 mb-6 font-pixel text-2xl leading-[1.5] text-retro-text">
            ABOUT ME
          </h2>
          <p className="m-0 text-pretty font-sans text-[19px] leading-[1.75] text-retro-muted">
            Front-end focused Software Engineer with experience building
            responsive, scalable web and mobile applications. Skilled in{" "}
            <span className="text-retro-text">React, Next.js</span>, and modern
            UI frameworks, with hands-on expertise in{" "}
            <span className="text-retro-text">
              blockchain integration and analytics
            </span>
            . Collaborative team member with a track record of shipping
            high-quality features and engaging user experiences.
          </p>
        </div>

        <div className="min-w-[280px] flex-1 rounded border border-retro-line bg-retro-surface p-6">
          <div className="mb-[18px] font-mono text-[11px] tracking-[2px] text-retro-a1">
            QUICK STATS
          </div>
          <div className="flex flex-col gap-3.5 font-mono text-[13px]">
            <Row k="CLASS" v="Front-End Mage" />
            <Divider />
            <Row k="BASE" v="React / Next.js" />
            <Divider />
            <Row k="SPECIAL" v="Web3 + Three.js" accent />
            <Divider />
            <Row k="GUILD" v="Twitch Affiliate" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-retro-muted">{k}</span>
      <span className={accent ? "text-retro-a2" : "text-retro-text"}>{v}</span>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-retro-line" />;
}
