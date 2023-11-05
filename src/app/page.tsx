import { Encryption } from "@/components/Encryption";
import { Hero } from "@/components/Hero";
import { Skill } from "@/components/Skill";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="container flex flex-col gap-20">
        <Hero />
        <Skill />
        <Encryption />
      </div>
    </main>
  );
}
