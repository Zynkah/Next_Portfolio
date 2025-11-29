"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Github, Twitch, LinkedinIcon, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="fixed bottom-0 right-0 w-full bg-primary py-2">
      <div className="flex flex-row mx-24 text-xl md:gap-10 gap-6 md:justify-end justify-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <Link
            href="https://www.twitch.tv/Zynkah"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({
              variant: "outline",
            })} hover:bg-foreground hover:text-primary-foreground`}
          >
            See Me Code
          </Link>
        </motion.div>
        <Dialog>
          <DialogTrigger asChild>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Button
                variant="outline"
                className="hover:bg-foreground hover:text-primary-foreground"
              >
                Contact Me
              </Button>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="flex h-[275px]">
            <div className="basis-1/2 my-auto">
              <DialogHeader>
                <DialogTitle className="text-4xl font-thin">
                  Zena Creps
                </DialogTitle>
                <DialogDescription>Software Engineer</DialogDescription>
              </DialogHeader>
            </div>
            <Separator orientation="vertical" className="font-bold h-auto" />
            <div className="basis-1/2 my-auto">
              <div className="flex flex-col items-center">
                <Link
                  href="https://github.com/Zynkah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  <Github className="mr-2" /> GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/zena-creps-ba3631232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  <LinkedinIcon className="mr-2" /> LinkedIn
                </Link>
                <Link
                  href="https://www.twitch.tv/zynkah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  <Twitch className="mr-2" /> Twitch
                </Link>
                <Link
                  href="/contact-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  <Mail className="mr-2" /> Email
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
