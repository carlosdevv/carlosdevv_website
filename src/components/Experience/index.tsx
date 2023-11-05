"use client";

import { Icons } from "@/components/Icons";
import { slideInFromBottom, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExperienceTimeline } from "./components/experience-timeline";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="mt-40 flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center justify-center">
        <Image src="/images/ring.png" alt="ring" width={800} height={432} />
        <div className="absolute top-72 flex flex-col items-center justify-center">
          <motion.div
            variants={slideInFromTop()}
            className=" Welcome-box py-1 px-4 border my-5 border-[#7042f88b] opacity-90"
          >
            <Icons.chip className="text-[#b49bff] mr-3 h-5 w-5" />
            <span className="Welcome-text text-xs">Experience</span>
          </motion.div>

          <motion.div
            variants={slideInFromBottom()}
            className="text-3xl mt-2 font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-300"
          >
            Main experiences in the last years of my career.
          </motion.div>
          <motion.p
            variants={slideInFromBottom()}
            className="z-50 text-sm text-gray-400 mt-3 max-w-2xl text-center md:text"
          >
            This is only principal experiences. Also, I have a lot of other
            experiences with other technologies. You can see more in{" "}
            <Link href="/about" className="font-medium text-violet-500">
              About me
            </Link>{" "}
            page.
          </motion.p>
        </div>
      </div>
      <ExperienceTimeline />
      <Image
        src="/images/ring.png"
        alt="ring"
        width={800}
        height={432}
        className="rotate-180 relative -top-10 opacity-80"
      />
    </section>
  );
};
