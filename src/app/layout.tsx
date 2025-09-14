import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MCP Creator Studio - Register to get early access",
  description:
    "Register now to be among the first to experience MCP Creator Studio, the ultimate AI-powered tool for content creators. Sign up today and unlock your creative potential!",
  creator: "MCP Studio",
  keywords: [
    "MCP Creator Studio",
    "AI Content Creation",
    "Early Access",
    "Content Creators",
    "AI-Powered Tools",
    "Sign Up",
    "Creative Potential",
    "MCP Studio",
    "AI Tools for Creators",
    "Content Creation Platform",
    "Model Context Protocol",
    "AI for Content Creators",
    "Join Waitlist",
    "Content Creation Software",
    "AI Creativity Tools",
    "MCP Creator Studio Registration",
    "Get Early Access",
    "AI-Driven Content Creation",
    "Content Creation Solutions",
    "MCP Studio AI Tools",
    "Innovative Content Creation",
    "AI Content Platform",
    "Next-Gen Content Creation",
    "MCP Creator Studio Sign Up",
    "AI Tools for Creators",
  ],
  authors: [{ name: "MCP Studio", url: "mcpcreatorstudio.com" }],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_METADATA_BASE ?? "http://localhost:3000"
  ),
  openGraph: {
    title: "MCP Creator Studio - Register to get early access",
    description:
      "Register now to be among the first to experience MCP Creator Studio, the ultimate AI-powered tool for content creators. Sign up today and unlock your creative potential!",
    url: "https://mcpcreatorstudio.com",
    siteName: "MCP Creator Studio",
    images: [
      {
        url:
          (process.env.NEXT_PUBLIC_METADATA_BASE ?? "http://localhost:3000") +
          "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Creator Studio - Register to get early access",
    description:
      "Register now to be among the first to experience MCP Creator Studio, the ultimate AI-powered tool for content creators. Sign up today and unlock your creative potential!",
    images: [
      (process.env.NEXT_PUBLIC_METADATA_BASE ?? "http://localhost:3000") +
        "/logo.png",
    ],
    creator: "@mcp_studio",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
