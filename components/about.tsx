import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  return (
    <Card className="flex lg:flex-row flex-col overflow-hidden">
      <div className="lg:flex-2 flex-1 z-10">
        <CardHeader>
          <CardTitle>Junior Software Engineer</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
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
              React, React Native, Bootstrap, MaterialUI, NextUI, Next.js,
              Prisma, Node.js, Express, TailwindCSS
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
      </div>
      <div className="flex-0">
        <Image
          src="https://fastly.picsum.photos/id/841/200/200.jpg?hmac=jAPzaXgN_B37gVuIQvmtuRCmYEC0lJP86OZexH1yam4"
          width={400}
          height={400}
          alt="Picture of the author"
          className="lg:rounded-bl-full lg:top-0 lg:right-0  hidden lg:block"
        />
      </div>
    </Card>
  );
}
