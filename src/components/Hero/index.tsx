import { HeroContent } from "./components/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col w-full">
      <video
        autoPlay
        muted
        loop
        className="absolute left-0 z-1 w-full h-auto object-cover opacity-40"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};
