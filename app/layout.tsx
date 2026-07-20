import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexalinx — AI-First Product Engineering Partner for USA & Europe",
  description:
    "Nexalinx helps USA and European founders, SMEs and agencies turn ideas, prototypes and manual workflows into reliable AI-powered web and mobile products. Senior-led delivery, weekly demos, production-ready engineering.",
  keywords: [
    "AI development",
    "web application development",
    "mobile app development",
    "MVP development",
    "SaaS development",
    "white-label development",
    "product engineering",
  ],
  openGraph: {
    title: "Nexalinx — AI-First Product Engineering Partner",
    description:
      "Build AI-powered web and mobile products without the risk of hiring the wrong team.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
