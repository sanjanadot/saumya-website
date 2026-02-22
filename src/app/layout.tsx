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
  title: "Escorts in Mumbai | Premium Escort Services & Companions",
  description: "Premium escort services in Mumbai. Professional, discreet, and reliable companions for events, dates, and companionship. Available 24/7.",
  keywords: "escorts in mumbai, call girls mumbai, companion services, escort agency, premium escorts, female companions",
  authors: [{ name: "Saumya" }],
  creator: "Saumya",
  openGraph: {
    type: "website",
    url: "https://saumya.example.com",
    title: "Escorts in Mumbai | Premium Escort Services",
    description: "Premium, professional, and discreet escort services in Mumbai",
    siteName: "Saumya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
