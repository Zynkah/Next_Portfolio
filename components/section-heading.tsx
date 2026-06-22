export function SectionHeading({
  index,
  label,
  square = "var(--a2)",
  blink = false,
}: {
  index: string;
  label: string;
  square?: string;
  blink?: boolean;
}) {
  return (
    <div className="mb-9 flex items-center gap-3.5">
      <div
        className="h-3.5 w-3.5 shrink-0"
        style={{
          background: square,
          animation: blink ? "blink 1.2s steps(1) infinite" : undefined,
        }}
      />
      <div className="font-mono text-[13px] tracking-[2px] text-retro-a1">
        {index} · {label}
      </div>
      <div className="h-px flex-1 bg-retro-line" />
    </div>
  );
}
