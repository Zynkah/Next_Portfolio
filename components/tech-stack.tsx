import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TechStack() {
  return (
    <Card className="min-w-[220px]">
      <CardHeader>
        <CardTitle>My Tech Stack</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 text-pretty">
          <li>
            <span className="text-muted-foreground">
              Programming Languages:
            </span>
            <br />
            HTML, CSS, JavaScript, Typescript, Python, SQL
          </li>
          <li>
            <span className="text-muted-foreground">
              Frameworks and Libraries:
            </span>
            <br />
            React, React Native, Bootstrap, MaterialUI, NextUI, Next.js, Prisma,
            Node.js, Express, TailwindCSS
          </li>
          <li>
            <span className="text-muted-foreground">Databases:</span>
            <br /> MongoDB, PostgreSQL, NeonDB, Drizzle ORM
          </li>
          <li>
            <span className="text-muted-foreground">DevOps:</span>
            <br /> AWS, Google Cloud, Microsoft Azure
          </li>
          <li>
            <span className="text-muted-foreground">Tools:</span>
            <br />
            Git, GitHub, Visual Studio Code, Docker, Postman, Insomnia
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
