import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bioData } from "@/data/BioData";

export default function Bio() {
  return (
    <Card className="h-[400px] min-w-[340px] max-w-full bg-card/80 border border-accent shadow-lg backdrop-blur-md rounded-xl flex flex-col justify-between overflow-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-3xl font-bold tracking-tight text-primary drop-shadow-md">
          {bioData.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-pretty flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-accent text-lg font-semibold mb-1">Summary</h3>
          <p className="mb-3 text-muted-foreground text-base">
            {bioData.summary}
          </p>
        </div>
        <div>
          <h3 className="text-accent text-lg font-semibold mb-1">Experience</h3>
          <ul className="space-y-2 list-disc ml-4">
            {bioData.experience.map((exp, idx) => (
              <li key={idx}>
                <span className="font-bold text-primary">
                  {exp.company}, {exp.title} ({exp.period})
                </span>
                <br />
                <span className="text-muted-foreground text-sm">
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
