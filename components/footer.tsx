import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed bottom-0 right-0 w-full bg-slate-500 py-8">
      <div className="flex flex-row mx-24 text-xl gap-10 justify-end">
                <Link
          href="https://www.twtich.tv/Zynkah"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline" })}
        >Watch me code</Link><Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Contact Me</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Follow my links to contact me</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex flow-row gap-1 justify-end">
              <Link
                href="https://github.com/Zynkah"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline" })}
              >
                GitHub
              </Link>
              <br />
              <Link
                href="https://www.linkedin.com/in/zena-creps-ba3631232/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline" })}
              >
                LinkedIn
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
