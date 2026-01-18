import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/layout/Header";

import { CustomCursor } from "@/components/ui/CustomCursor";
import { LiquidFilter } from "@/components/ui/LiquidFilter";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nam Nguyen | Portfolio",
  description: "Software Engineer & Vibe Coder. Specializing in Android, Kotlin, and Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          archivo.variable,
          spaceGrotesk.variable,
          "antialiased min-h-screen font-body flex flex-col bg-background text-foreground cursor-none" // Hide default cursor
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <LanguageProvider>
            <CustomCursor />
            <LiquidFilter />
            <SmoothScroll>
              <Header />
              <div className="flex-grow flex flex-col">
                {children}
              </div>
            </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}

