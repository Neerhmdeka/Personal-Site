import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neerhdeka.com"),
  title: {
    default: "Neerh Deka - Design Engineer",
    template: "%s | Neerh Deka",
  },
  description: "Design Engineer based in Rotterdam. I help you envision the future and create steps to reach it. Specializing in Framer, Webflow, digital product design, and design systems.",
  keywords: ["design engineer", "product designer", "software engineer", "Rotterdam", "Framer", "Webflow", "design systems", "digital product design", "UI/UX design"],
  authors: [{ name: "Neerh Deka" }],
  creator: "Neerh Deka",
  publisher: "Neerh Deka",
  alternates: {
    canonical: "https://neerhdeka.com",
  },
  openGraph: {
    title: "Neerh Deka - Design Engineer",
    description: "Design Engineer based in Rotterdam. I help you envision the future and create steps to reach it. Specializing in Framer, Webflow, digital product design, and design systems.",
    url: "https://neerhdeka.com",
    siteName: "Neerh Deka",
    images: [
      {
        url: "/Preview.png",
        width: 1200,
        height: 630,
        alt: "Neerh Deka - Design Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neerh Deka - Design Engineer",
    description: "Design Engineer based in Rotterdam. I help you envision the future and create steps to reach it.",
    images: ["/Preview.png"],
    creator: "@neerhdeka",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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
        className={`${spaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
