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
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
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
                className="rounded-lg"
              />
            </CardContent>
            <CardFooter>
              {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}> */}
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href={certification.gitHub_url}
                aria-label={certification.image_alt}
              >
                GitHub Repo
              </Link>
              {/* </motion.div> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
