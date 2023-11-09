"use client";

import { Icons } from "@/components/Icons";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";

export const SkillHeader = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop()}
        className="absolute top-0 Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90"
      >
        <Icons.spark className="text-[#b49bff] mr-3 h-5 w-5" />
        <h1 className="Welcome-text text-sm">made with next.js</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-3xl text-white font-medium mt-6 text-center mb-4"
      >
        That&apos;s the technologies I&apos;m working with today
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-xl text-gray-200 font-medium mt-3 text-center mb-10"
      >
        Making softwares with passion
      </motion.div>
    </div>
  );
};
