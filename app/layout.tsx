import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const mulish = Mulish({ subsets: ["latin"] });

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
      <body className={mulish.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />   
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
