interface NavLinksProps { 
    blip: (arg: number) => void;
}

const links: [string, string][] = [
  ["work", "#work"],
  ["about", "#about"],
  ["stack", "#stack"],
  ["trophies", "#trophies"],
  ["contact", "#contact"],
];

export const NavLinks = ({ blip}: NavLinksProps) => {
  return (
    <nav className="hidden gap-7 font-mono text-[13px] text-retro-muted md:flex">
      {links.map(([label, href]) => (
        <a
          key={href}
          href={href}
          onMouseEnter={() => blip(820)}
          className="cursor-pointer no-underline transition-colors hover:text-retro-a1"
        >
          {label}
        </a>
      ))}
    </nav>
  );
};
