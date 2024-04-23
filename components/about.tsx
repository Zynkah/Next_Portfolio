import Bio from "./bio";
import TechStack from "./tech-stack";

export default function About() {
  return (
    <div className="flex lg:flex-row flex-col gap-4">
      <Bio />
      <TechStack />
    </div>
  );
}
