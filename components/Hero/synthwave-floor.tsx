export const SynthwaveFloor = () => {
    return (
        <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] origin-bottom opacity-50"
            style={{
                backgroundImage:
                    "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
                transform: "perspective(320px) rotateX(62deg)",
            }}
        />
    )
}