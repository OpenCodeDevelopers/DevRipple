// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";
import type React from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { AppShell } from "@/components/providers/app-shell";
import { Suspense } from "react";
// 1. 🛑 IMPORT THE TOASTER COMPONENT
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "OpenCodeDev",
  description: "OpenCodeDeveloper society of nitkkr",
  // generator: "DevRipple.app",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <AppShell>
            {/* <ThemeProvider> */}
            {children}
            {/* </ThemeProvider> */}
          </AppShell>
        </Suspense>

        {/* 2. ✅ RENDER THE TOASTER COMPONENT */}
        <Toaster />

        <Analytics />
      </body>
    </html>
  );
}
