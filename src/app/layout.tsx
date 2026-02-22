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
  title: "Saumya - Female Empowerment in Mumbai | Women Services & Support",
  description: "Discover opportunities, services, and support for females in Mumbai. Empowering women through resources, community, and career development.",
  keywords: "female in mumbai, women services, women empowerment, female entrepreneurs, women support",
  authors: [{ name: "Saumya" }],
  creator: "Saumya",
  openGraph: {
    type: "website",
    url: "https://saumya.example.com",
    title: "Saumya - Female Empowerment in Mumbai",
    description: "Empowering women through resources, community, and career development",
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
