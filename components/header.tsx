import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className="z-20 fixed top-0 right-0 w-full bg-slate-800 py-2">
      <div className="relative justify-center items-center mx-24 text-xl">
        <span className="mr-auto text-4xl text-white font-thin">
         <Link href='/'>Zena Creps</Link> 
        </span>
        <div className="fixed top-2 right-5">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
