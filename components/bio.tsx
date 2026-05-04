import { bioData } from "@/data/BioData";
import { CardContainer } from "./card-container";

export default function Bio() {
  return (
    <CardContainer title="Bio">
        <div>
          <h3 className="text-accent text-xl font-semibold mb-1 tracking-wide">
            Summary
          </h3>
          <p className="mb-3 text-muted-foreground text-lg leading-relaxed">
            {bioData.summary}
          </p>
        </div>
        <div>
          <h3 className="text-accent text-xl font-semibold mb-1 tracking-wide">
            Experience
          </h3>
          <ul className="space-y-2 list-disc ml-4">
            {bioData.experience.map((exp, idx) => (
              <li key={idx}>
                <span className="font-bold text-primary text-base tracking-wide">
                  {exp.company}, {exp.title} ({exp.period})
                </span>
                <br />
                <span className="text-muted-foreground text-base leading-relaxed">
                  {exp.details}
                </span>
              </li>
            ))}
          </ul>
        </div>
    </CardContainer>
  );
}
