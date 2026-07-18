import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const coolvetica = localFont({
  src: '../public/fonts/CoolveticaRg.otf',
  variable: '--font-coolvetica',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-nextjs-thuxgns-projects.vercel.app"),
  title: "@thuxgn",
  description: "COMMISSION OPEN!",
  authors: [{ name: "@thuxgn" }],
  openGraph: {
    title: "@thuxgn",
    description: "COMMISSION OPEN!",
    url: "https://portfolio-nextjs-thuxgns-projects.vercel.app", 
    siteName: "@thuxgn",
    images: [
      {
        url: "/favicon.ico", 
        width: 1000,
        height: 1000,
        alt: "favicon",
      },
    ],
    locale: "vi-VN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="font-coolvetica">{children}</body>
      
    </html>
  );
}
