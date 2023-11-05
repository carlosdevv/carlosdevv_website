import { Encryption } from "@/components/Encryption";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skill } from "@/components/Skill";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="container flex flex-col gap-20">
        <Hero />
        <Skill />
        <Encryption />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
