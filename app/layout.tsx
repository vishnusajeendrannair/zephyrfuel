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
  metadataBase: new URL("https://zephyrfuel.energy"),
  title: {
    default: "ZephyrFuel | Onsite hydrogen infrastructure",
    template: "%s | ZephyrFuel",
  },
  description:
    "ZephyrFuel Inc. develops, finances, owns, and operates onsite hydrogen infrastructure for mobility, industrial facilities, and emerging AI data center demand.",
  openGraph: {
    title: "ZephyrFuel | Onsite hydrogen infrastructure",
    description:
      "Reliable hydrogen, produced where you use it—for mobility operations, industrial facilities, and emerging AI data center demand.",
    url: "https://zephyrfuel.energy",
    siteName: "ZephyrFuel",
    type: "website",
    images: [{ url: "/images/hero-transit-depot.png", width: 1672, height: 941 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZephyrFuel | Onsite hydrogen infrastructure",
    description:
      "Reliable hydrogen, produced where you use it—for mobility operations, industrial facilities, and emerging AI data center demand.",
    images: ["/images/hero-transit-depot.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
