import type { Metadata } from "next";
import { Quantico } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AnimatedLayout from "@/components/animated-layout";
import { Analytics } from "@vercel/analytics/next";

const quantico = Quantico({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Zynkah portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quantico.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <Header />
          <AnimatedLayout>{children}</AnimatedLayout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
