import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Content Garden",
  description: "My beautiful content garden",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-6">
          Content Garden<h1></h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
