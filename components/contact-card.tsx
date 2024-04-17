import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ContactCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact</CardTitle>
        <CardDescription>You can contact me at:</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href="https://github.com/Zynkah"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
              </Link>
              <br />
               <Link
          href="https://www.linkedin.com/in/zena-creps-ba3631232/"
          target="_blank"
          rel="noopener noreferrer"
        >LinkedIn</Link>
      </CardContent>
      <CardFooter>
        Talk to you soon :)
      </CardFooter>
    </Card>
  );
}
