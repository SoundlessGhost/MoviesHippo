import { Inter as FontSans } from "next/font/google";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { NextAuthProvider } from "@/components/Providers/NextAuthProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          `min-h-screen bg-background font-sans antialiased`,
          fontSans.variable
        )}
      >
        <NextAuthProvider>
          <ThemeProvider defaultTheme="system" attribute="class">
            <Toaster />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
