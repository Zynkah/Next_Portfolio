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
import { Github, Twitch, LinkedinIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <div className="fixed bottom-0 right-0 w-full bg-slate-500 py-4">
      <div className="flex flex-row mx-24 text-xl md:gap-10 gap-6 md:justify-end justify-center">
        <Link
          href="https://www.twtich.tv/Zynkah"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline" })}
        >
          See Me Code
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Contact Me</Button>
          </DialogTrigger>
          <DialogContent className="flex h-[275px]">
            <div className="basis-1/2 my-auto">
              <DialogHeader>
                <DialogTitle className="text-4xl font-thin">
                  Zena Creps
                </DialogTitle>
                <DialogDescription>Web Developer</DialogDescription>
              </DialogHeader>
            </div>
            <Separator orientation="vertical" className="font-bold h-auto" />
            <div className="basis-1/2 my-auto">
              <div className="flex flex-col">
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
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
