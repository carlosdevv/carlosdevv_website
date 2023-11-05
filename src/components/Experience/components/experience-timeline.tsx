import { experienceData } from "@/constants";
import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const ExperienceTimeline = () => {
  return (
    <motion.div variants={slideInFromLeft(1)} className="mt-12 z-10">
      <VerticalTimeline lineColor="#090221">
        {experienceData.map((experience) => (
          <React.Fragment key={experience.index}>
            <VerticalTimelineElement
              visible
              contentArrowStyle={{ borderRight: "0.4rem solid #3A1B84" }}
              contentStyle={{
                padding: "0",
                background: "transparent",
                color: "#efedfdb3",
                textAlign: "left",
                boxShadow: "none",
              }}
              date={experience.date}
              dateClassName="text-gray-50"
              icon={experience.icon}
              iconStyle={{
                border: "0.2rem solid #090221",
                background: "#030014",
                color: "#8b5cf6",
                boxShadow: "none",
              }}
            >
              <div className="custom-card flex flex-col">
                <h3 className="font-semibold capitalize text-gray-100">
                  {experience.title}
                </h3>
                <p className="font-normal !mt-0 text-gray-300 !text-sm">
                  {experience.stacks}
                </p>
                <p className="!font-normal !mt-2 !text-sm">
                  {experience.description}
                </p>
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.div>
  );
};
