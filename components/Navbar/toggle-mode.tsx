interface ToggleModeProps {
  blip: (args: number) => void;
  enabled: boolean;
  theme: string | undefined;
  toggle: () => void;
  setTheme: (arg: string) => void;
  mounted: boolean;
}

export const ToggleMode = ({
  blip,
  enabled,
  theme,
  toggle,
  setTheme,
  mounted,
}: ToggleModeProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <button
        type="button"
        onClick={() => {
          toggle();
          blip(700);
        }}
        className="cursor-pointer select-none border border-retro-line px-2.5 py-[7px] font-mono text-[11px] text-retro-muted transition-colors hover:border-retro-a2 hover:text-retro-a2"
      >
        {enabled ? "♪ ON" : "♪ OFF"}
      </button>
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={() => {
          blip(400);
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className="cursor-pointer select-none border border-retro-line px-3 py-1.5 font-mono text-[13px] text-retro-text transition-colors hover:border-retro-a1 hover:text-retro-a1"
      >
        {mounted ? (theme === "dark" ? "☀" : "☾") : "☀"} / ☾
      </button>
    </div>
  );
};
