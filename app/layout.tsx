import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodeBroz — Engineering Software That Scales",
  description:
    "CodeBroz is a boutique software development studio building scalable web applications, AI-powered solutions, SaaS platforms, and automation tools for businesses worldwide.",
  keywords: [
    "software development",
    "web development",
    "AI integration",
    "SaaS development",
    "automation",
    "Next.js",
    "React",
    "CodeBroz",
  ],
  openGraph: {
    title: "CodeBroz — Engineering Software That Scales",
    description:
      "Boutique software studio building scalable web apps, AI solutions & SaaS platforms.",
    type: "website",
    siteName: "CodeBroz",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeBroz — Engineering Software That Scales",
    description:
      "Boutique software studio building scalable web apps, AI solutions & SaaS platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
