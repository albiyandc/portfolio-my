import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Albiyan Dikha Chandra - Web Developer",
  description:
    "Portfolio Albiyan Dikha Chandra: Web Developer berbasis di Indonesia. Spesialisasi Next.js, React, Laravel, dan desain antarmuka yang bersih.",
  keywords: [
    "web developer",
    "portfolio",
    "Next.js",
    "React",
    "Laravel",
    "Indonesia",
  ],
  authors: [{ name: "Albiyan Dikha Chandra" }],
  openGraph: {
    title: "Albiyan Dikha Chandra - Web Developer",
    description:
      "Portfolio Albiyan Dikha Chandra: Web Developer berbasis di Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
