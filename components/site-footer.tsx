export function SiteFooter() {
  return (
    <footer
      className="border-t border-retro-line"
      style={{ background: "var(--navbg)" }}
    >
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-2.5 px-8 py-[18px] font-mono text-xs text-retro-muted">
        <span className="text-retro-a2">
          1UP <span className="text-retro-text">ZENA CREPS</span>
        </span>
        <span>© 2026 · BUILT WITH ▲ &amp; CAFFEINE</span>
        <span className="text-retro-a1">HI 999999</span>
      </div>
    </footer>
  );
}
