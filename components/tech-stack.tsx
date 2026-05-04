import { CardContainer } from "./card-container";

export default function TechStack() {
  return (
    <CardContainer title="Tech Stack">
        <ul className="space-y-2 text-pretty text-lg">
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
    </CardContainer>
  );
}
