import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className="fixed top-5 right-5">
      <ModeToggle />
    </div>
  );
}
