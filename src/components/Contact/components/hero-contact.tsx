"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { ContactForm } from "./contact-form";
import { slideInFromRight } from "@/utils/motion";

export const HeroContact = () => {
  return (
    <div className="grid grid-cols-2 w-full mt-24">
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
        />
      </motion.div>
    </div>
  );
};
