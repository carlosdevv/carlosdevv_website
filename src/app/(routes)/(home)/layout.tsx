import StarCanvas from "@/components/StarBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "carlosdevv",
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
