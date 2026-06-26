interface ContactButtonProps {
    blip: (arg: number) => void;
    label: string;
    href: string;
}


export const ContactButton = ({ blip, label, href }: ContactButtonProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => blip(640)}
        className="border-2 border-retro-line px-6 py-[13px] font-mono text-sm text-retro-text no-underline transition-colors hover:border-retro-a2 hover:text-retro-a2"
      >
            {label}
      </a>
    );
}