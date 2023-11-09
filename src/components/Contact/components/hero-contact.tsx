"use client";

import { slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { ContactForm } from "./contact-form";

export const HeroContact = () => {
  return (
    <div className="grid md:grid-cols-2 md:justify-normal justify-center w-full mt-24">
      <ContactForm />
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/images/mainIcons.svg"
          alt="icons"
          width={450}
          height={450}
          className="hidden md:block"
        />
      </motion.div>
    </div>
  );
};
