import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { certifications } from "@/data/certifications";
import Image from "next/image";

export default function Certifications() {
  return (
    <div className="flex md:flex-row flex-col gap-4">
      {certifications.map((certification, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{certification.title}</CardTitle>
            <CardDescription>{certification.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={certification.image}
              width={certification.image_width}
              height={certification.image_height}
              alt={certification.image_alt}
              layout="intrinsic"
              className="rounded-lg"
            />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      ))}
    </div>
  );
}
