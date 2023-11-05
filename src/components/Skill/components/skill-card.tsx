'use client'

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

type SkillCardProps = {
  name: string;
  years: number;
  image: string;
  description: string;
  index: number;
};

export const SkillCard = ({
  name,
  years,
  image,
  description,
  index,
}: SkillCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const imageVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const animationDelay = 0.3;

  const checkIconSize = () => {
    if (name === "Mongo") return 20;
    if (name === "Prisma") return 32;
    return 40;
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col px-8 pt-6 pb-9  relative before:bg-zinc-500 before:absolute before:top-20 before:w-[1px] before:h-4 before:left-0"
    >
      <Image
        src={image}
        width={checkIconSize()}
        height={checkIconSize()}
        alt="stack"
        className="mb-5"
      />
      <span className="mb-1 text-gray-100 font-light">{`${name} - ${years}y`}</span>
      <span className=" text-gray-300">{description}</span>
    </motion.div>
  );
};
