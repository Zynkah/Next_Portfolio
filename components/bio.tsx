import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bioData } from "@/data/BioData";

export default function Bio() {
  return (
    <Card className="min-w-[340px] max-w-full bg-card/80 border border-accent shadow-lg backdrop-blur-md rounded-xl flex flex-col justify-between overflow-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-4xl font-extrabold tracking-wide text-primary drop-shadow-lg leading-tight">
          {bioData.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-pretty flex-1 flex flex-col justify-between">
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
      </CardContent>
    </Card>
  );
}
