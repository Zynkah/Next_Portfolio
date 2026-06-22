"use client";

import { ThemeProvider } from "next-themes";
import { SoundProvider } from "./sound-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <SoundProvider>{children}</SoundProvider>
    </ThemeProvider>
  );
}
