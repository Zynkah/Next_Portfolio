import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed bottom-0 right-0 w-full bg-slate-500 py-12">
      <div className="flex flex-row justify-center items-center mx-24 text-xl gap-10">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Contact Me</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogCancel>X</AlertDialogCancel>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Follow my links to contact me
              </AlertDialogTitle>
              <AlertDialogDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex flow-row gap-1 justify-end">
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
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
