"use client";

import { Icons } from "@/components/Icons";
import { slideInFromBottom, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";

export const ContactHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        variants={slideInFromTop()}
        className="Welcome-box py-1 px-4 border my-5 border-[#7042f88b] opacity-90"
      >
        <Icons.bolt className="text-[#b49bff] mr-3 h-5 w-5" />
        <span className="Welcome-text text-xs">Contact</span>
      </motion.div>
      <motion.div
        variants={slideInFromBottom()}
        className="text-3xl mt-2 font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-300"
      >
        Let&apos;s make something great together!
      </motion.div>
      <motion.p
        variants={slideInFromBottom()}
        className="z-20 text-sm text-gray-400 mt-3 max-w-2xl text-center md:text"
      >
        I&apos;m always open to discussing product design work or partnership
        opportunities.
        <br />
        You can contact me directly at{" "}
        <a
          href="mailto:carloslopessf@gmail.com"
          className="text-zinc-300 underline"
        >
          carloslopessf@gmail.com
        </a>{" "}
        or fill out the form.
      </motion.p>
    </div>
  );
};
