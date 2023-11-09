import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Carlos Lopes | Full Stack Developer",
    template: `%s | Carlos Lopes - Full Stack Developer`,
  },
  description:
    "Welcome to the personal site of Carlos Lopes, a Full Stack Developer with expertise in JavaScript, Next.js, React, and more.",
  keywords: [
    "Carlos Lopes",
    "Full Stack Developer",
    "JavaScript",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "TypeScript",
  ],
  authors: [
    {
      name: "Carlos Lopes",
      url: "https://carlosdev.me",
    },
  ],
  creator: "Carlos Lopes",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark bg-[#030014] overflow-y-scroll overflow-x-hidden
      `}
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
