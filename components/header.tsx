import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className="z-10 fixed top-0 right-0 w-full bg-slate-500 py-8">
      <div className="flex flex-row justify-center items-center mx-24 text-xl">
        <span className="mr-auto text-7xl text-white font-thin">Zena Creps</span>
        <ModeToggle />
      </div>
    </div>
  );
}
