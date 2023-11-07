import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StarCanvas from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "carlosdevv",
  description: "Personal website Carlos Lopes",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <StarCanvas />
      {children}
    </div>
  );
}
