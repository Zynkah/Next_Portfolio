import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechStack() {
  return (
    <Card className="h-[400px] min-w-[340px] max-w-full bg-card/80 border border-accent shadow-lg backdrop-blur-md rounded-xl flex flex-col justify-between overflow-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-3xl font-bold tracking-tight text-primary drop-shadow-md">
          Tech Stack
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <ul className="space-y-2 text-pretty text-base">
          <li>
            <span className="text-accent font-semibold">
              Programming Languages:
            </span>
            <br />
            <span className="text-muted-foreground">
              HTML, CSS, JavaScript, TypeScript, Python, SQL
            </span>
          </li>
          <li>
            <span className="text-accent font-semibold">Frameworks:</span>
            <br />
            <span className="text-muted-foreground">
              React.js, Next.js, Three.js, React Native, Node.js
            </span>
          </li>
          <li>
            <span className="text-accent font-semibold">Libraries:</span>
            <br />
            <span className="text-muted-foreground">
              Bootstrap, Material UI, Next UI, ShadCn, Daisy UI, Tailwind CSS
            </span>
          </li>
          <li>
            <span className="text-accent font-semibold">Databases:</span>
            <br />
            <span className="text-muted-foreground">
              MongoDB, PostgreSQL, NeonDB, Drizzle ORM, Prisma
            </span>
          </li>
          <li>
            <span className="text-accent font-semibold">DevOps:</span>
            <br />
            <span className="text-muted-foreground">
              AWS, Google Cloud, Microsoft Azure
            </span>
          </li>
          <li>
            <span className="text-accent font-semibold">Tools:</span>
            <br />
            <span className="text-muted-foreground">
              Git, GitHub, VS Code, Docker, Postman, Insomnia
            </span>
          </li>
          <li>
            <span className="text-accent font-semibold">
              Blockchain and Analytics:
            </span>
            <br />
            <span className="text-muted-foreground">
              Privy, WalletConnect, Biconomy, PostHog, Addressable
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
