import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bioData } from "@/data/BioData";

export default function Bio() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{bioData.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-pretty">
        <h3 className="text-muted-foreground">Summary</h3>
        <p className="mt-2 mb-4">{bioData.summary}</p>

        <h3 className="text-muted-foreground">Experience</h3>
        <ul className="mt-2 space-y-2 list-disc ml-4 mb-4">
          {bioData.experience.map((exp, idx) => (
            <li key={idx}>
              <strong>
                {exp.company}, {exp.title} ({exp.period})
              </strong>
              <br />
              {exp.details}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
