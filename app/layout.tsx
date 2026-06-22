import type { Metadata } from "next";
import { Press_Start_2P, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});
const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zena Creps — Software Engineer",
  description:
    "Zynkah · Front-end focused Software Engineer. React, Next.js, Three.js & Web3.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${pixel.variable} ${grotesk.variable} ${mono.variable}`}
    >
      <body className="bg-retro-bg font-sans text-retro-text antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
