import type { Metadata } from "next";
/* import { Inter } from 'next/font/google' */
import "./globals.css";

import Footer from "./components/Footer";
import SessionProvider from "./components/providers/SessionProvider";
import Topbar from "./components/Topbar";
import ThemeProvider from "./components/providers/ThemeProvider";

/* const inter = Inter({ subsets: ['latin'] }) */

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // suppressHydrationWarning -> suppress next-theme warning
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen relative theme-transition">
        <ThemeProvider>
          <SessionProvider>
            <Topbar />
            <main className="min-h-dvh">{children}</main>
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
