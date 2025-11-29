import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-md border-b border-accent flex items-center justify-between px-8 py-3">
      <nav className="flex items-center gap-6">
        <Link
          href="https://github.com/Zynkah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-primary drop-shadow-md hover:text-accent transition-colors duration-200"
        >
          Zynkah
        </Link>
        {/* Add more navigation links here if needed */}
      </nav>
      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>
    </header>
  );
}
