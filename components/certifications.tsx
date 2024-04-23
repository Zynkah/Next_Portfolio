import {
  Card,
} from "@/components/ui/card";
import { certifications } from "@/data/certifications";
import Image from "next/image";

export default function Certifications() {
  return (
    <div className="flex lg:flex-row flex-col gap-4">
      {certifications.map((certification, index) => (
        <Card key={index}>
          <Image
            src={certification.image}
            width={certification.image_width}
            height={certification.image_height}
            alt={certification.image_alt}
            priority
            className="rounded-lg"
          />
        </Card>
      ))}
    </div>
  );
}
