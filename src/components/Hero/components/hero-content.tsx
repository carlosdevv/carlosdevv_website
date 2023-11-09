"use client";

import { Icons } from "@/components/Icons";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";

export const HeroContent = () => {
  const yearsOfExperience = new Date().getFullYear() - 2018;
  return (
    <motion.div
      initial
      animate="visible"
      className="flex flex-col mt-16 md:mt-80 px-4 md:px-20 w-full z-20"
    >
      <div className="h-full flex flex-col gap-4 items-center m-auto text-center md:text-start">
        <motion.a
          href="https://github.com/carlosdevv"
          variants={slideInFromTop()}
          className="absolute md:top-[-6rem] md:m-0 mt-12 mb-4 Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90"
        >
          <Icons.github className="text-[#b49bff] mr-3 h-5 w-5" />
          <h1 className="Welcome-text text-sm">carlosdevv</h1>
        </motion.a>

        <motion.div
          variants={slideInFromTop()}
          className="flex flex-col text-3xl md:text-6xl text-bold text-white w-full"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-violet-500 text-center">
            Full Stack Developer Javascript
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromTop()}
          className="text-lg text-gray-200 my-5 max-w-2xl text-center"
        >
          Hello, I&apos;m Carlos Lopes. I&apos;ve {yearsOfExperience} years of
          experience as a full-stack developer. Born in Brazil, I have been
          changing and making a difference in the world and in people&apos;s
          lives with my work.
        </motion.p>
      </div>
    </motion.div>
  );
};
