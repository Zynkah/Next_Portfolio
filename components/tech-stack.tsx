import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechStack() {
  return (
    <Card className="min-w-[360px]">
      <CardHeader>
        <CardTitle>Tech Stack</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 text-pretty">
          <li>
            <span className="text-muted-foreground">
              Programming Languages:
            </span>
            <br />
            HTML, CSS, JavaScript, TypeScript, Python, SQL
          </li>
          <li>
            <span className="text-muted-foreground">Frameworks:</span>
            <br />
            React.js, Next.js, Three.js, React Native, Node.js
          </li>
          <li>
            <span className="text-muted-foreground">Libraries:</span>
            <br />
            Bootstrap, Material UI, Next UI, ShadCn, Daisy UI, Tailwind CSS
          </li>
          <li>
            <span className="text-muted-foreground">Databases:</span>
            <br />
            MongoDB, PostgreSQL, NeonDB, Drizzle ORM, Prisma
          </li>
          <li>
            <span className="text-muted-foreground">DevOps:</span>
            <br />
            AWS, Google Cloud, Microsoft Azure
          </li>
          <li>
            <span className="text-muted-foreground">Tools:</span>
            <br />
            Git, GitHub, VS Code, Docker, Postman, Insomnia
          </li>
          <li>
            <span className="text-muted-foreground">
              Blockchain and Analytics:
            </span>
            <br />
            Privy, WalletConnect, Biconomy, PostHog, Addressable
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
