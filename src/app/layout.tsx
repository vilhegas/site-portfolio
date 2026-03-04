import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caique Vilhegas | Full Stack Developer",
  description:
    "Portfólio de Caique Vilhegas, desenvolvedor Full Stack especializado em React, Next.js, TypeScript e aplicações web modernas.",

  keywords: [
    "Caique Vilhegas",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Portfolio Developer"
  ],

  authors: [{ name: "Caique Vilhegas" }],

  creator: "Caique Vilhegas",

  openGraph: {
    title: "Caique Vilhegas | Full Stack Developer",
    description:
      "Portfólio de Caique Vilhegas com projetos em React, Next.js e aplicações modernas.",
    url: "https://site-portfolio-sage.vercel.app",
    siteName: "Caique Vilhegas Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Caique Vilhegas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}