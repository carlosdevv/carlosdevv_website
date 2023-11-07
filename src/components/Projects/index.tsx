"use client";

import { slideInFromBottom, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import { Icons } from "@/components/Icons";
import Link from "next/link";
import { ProjectSlider } from "./components/project-slider";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center"
    >
      <motion.div
        variants={slideInFromTop()}
        className="Welcome-box py-1 px-4 border my-5 border-[#7042f88b] opacity-90"
      >
        <Icons.bolt className="text-[#b49bff] mr-3 h-5 w-5" />
        <span className="Welcome-text text-xs">Portfolio</span>
      </motion.div>
      <motion.div
        variants={slideInFromBottom()}
        className="text-3xl mt-2 font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-300"
      >
        Principal projects that I am proud to present.
      </motion.div>
      <motion.p
        variants={slideInFromBottom()}
        className="z-20 mt-2 text-sm text-gray-400 max-w-2xl text-center md:text"
      >
        Some projects still are working in progress. If you wish, you can see
        more in my{" "}
        <Link
          href="https://github.com/carlosdevv"
          className="font-medium text-violet-500"
        >
          Github.
        </Link>
      </motion.p>
      
      <ProjectSlider />
    </section>
  );
};
