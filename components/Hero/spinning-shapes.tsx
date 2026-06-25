export const SpinningShapes = () => {
  return (
    <>
      <div
        className="pointer-events-none absolute right-[46%] top-[120px] h-[18px] w-[18px] "
        style={{
          animation: "float1 5s ease-in-out infinite",
          background: "var(--a2)",
        }}
      />
      <div
        className="pointer-events-none absolute right-[8%] top-[300px] h-[14px] w-[14px]"
        style={{
          animation: "float2 6s ease-in-out infinite",
          background: "var(--a1)",
        }}
      />
    </>
  );
};
