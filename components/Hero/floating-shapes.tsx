export const FloatingShapes = () => {
    return (
      <div
        className="h-6 w-6 bg-retro-a2"
        style={{
          animation: "bob 1.6s ease-in-out infinite",
          boxShadow: "0 0 14px var(--glow)",
          background: "var(--a2)",
        }}
      />
    );
}