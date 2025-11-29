import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechStack() {
  return (
    <Card className="h-[400px] min-w-[340px] max-w-full bg-card/80 border border-accent shadow-lg backdrop-blur-md rounded-xl flex flex-col justify-between overflow-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-4xl font-extrabold tracking-wide text-primary drop-shadow-lg leading-tight font-mulish">
          Tech Stack
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <ul className="space-y-2 text-pretty text-lg font-mulish">
          <li>
            <span className="text-accent font-semibold tracking-wide">
              Programming Languages:
            </span>
            <br />
            <span className="text-muted-foreground">
              HTML, CSS, JavaScript, TypeScript, Python, SQL
            </span>
          </li>
          <li>
            <span className="text-accent font-semibold tracking-wide">
              Frameworks:
            </span>
            <br />
            <span className="text-muted-foreground">
              React.js, Next.js, Three.js, React Native, Node.js
            </span>
          </li>
          <li>
            <span className="text-accent font-semibold tracking-wide">
              Libraries:
            </span>
            <br />
            <span className="text-muted-foreground">
              Bootstrap, Material UI, Next UI, ShadCn, Daisy UI, Tailwind CSS
            </span>
          </li>
          <li>
            <span className="text-accent font-semibold tracking-wide">
              Databases:
            </span>
            <br />
            <span className="text-muted-foreground">
              MongoDB, PostgreSQL, NeonDB, Drizzle ORM, Prisma
            </span>
          </li>
          <li>
            <span className="text-accent font-semibold tracking-wide">
              DevOps:
            </span>
            <br />
            <span className="text-muted-foreground">
              AWS, Google Cloud, Microsoft Azure
            </span>
          </li>
          <li>
            <span className="text-accent font-semibold tracking-wide">
              Tools:
            </span>
            <br />
            <span className="text-muted-foreground">
              Git, GitHub, VS Code, Docker, Postman, Insomnia
            </span>
          </li>
          <li>
            <span className="text-accent font-semibold tracking-wide">
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
