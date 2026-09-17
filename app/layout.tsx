import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Albiyan Dikha Chandra | Pengembang Web Full-Stack",
  description:
    "Portofolio Albiyan Dikha Chandra, mahasiswa Sistem Informasi dan pengembang web full-stack berbasis di Bandung.",
  icons: {
    icon: "/adc.png",
    shortcut: "/adc.png",
    apple: "/adc.png",
  },
  keywords: [
    "web developer",
    "portfolio",
    "information systems",
    "Next.js",
    "React",
    "Laravel",
    "PHP",
    "MySQL",
    "Indonesia",
  ],
  authors: [{ name: "Albiyan Dikha Chandra" }],
  openGraph: {
    title: "Albiyan Dikha Chandra | Pengembang Web Full-Stack",
    description:
      "Portofolio Albiyan Dikha Chandra, mahasiswa Sistem Informasi dan pengembang web full-stack berbasis di Bandung.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
