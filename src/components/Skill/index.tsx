import { MainStacks } from "@/constants";
import { SkillCard } from "./components/skill-card";
import { SkillHeader } from "./components/skill-header";

export const Skill = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillHeader />
      <div className="flex flex-wrap max-w-6xl w-full">
        <div className="grid grid-cols-4">
          {MainStacks.map((stacks, index) => (
            <SkillCard
              key={stacks.name}
              name={stacks.name}
              years={stacks.years}
              image={stacks.image}
              description={stacks.description}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-70 absolute flex items-center mt-12 justify-center bg-cover">
          <video
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/skills-video.webm"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
