"use client";

import { slideInFromBottom, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center w-full h-full mt-20 -z-10">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop()}
          className="mt-10 text-3xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-violet-500"
        >
          Segurance and Encryption
        </motion.div>
        <motion.p
          variants={slideInFromBottom()}
          className="text-sm text-gray-300 mt-3 max-w-2xl text-center md:text"
        >
          I&apos;ve always been concerned about security and encryption,
          I&apos;ve been studying and researching this for a long time, and all
          my projects pay special attention to this issue.
        </motion.p>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-20 w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/images/LockTop.png"
            alt="LockTop"
            width={50}
            height={50}
            className="w-12 translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/images/LockMain.png"
            alt="LockMain"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <motion.div
          variants={slideInFromTop()}
          className="Welcome-box py-1 px-4 border my-5 border-[#7042f88b] opacity-90"
        >
          <span className="Welcome-text text-xs">Security</span>
        </motion.div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};
