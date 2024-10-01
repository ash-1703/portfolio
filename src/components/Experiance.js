import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
//experiences data
const experiences = [
  
  {
    name: "Research Assistant",
    description:
      "Leveraged ChatGPT to improve brainstorming and classification processes",
    dates: "Jul 2024 - Present",
  },
  {
    name: "",
    description: "",
    dates: "",
  },
  {
    name: "Software Development Intern",
    description: "Built user-friendly navigation and interactive features",
    dates: "June 2021 - June 2022",
  },
  {
    name: "",
    description: "",
    dates: "",
  },
];

const experiences1 = [
  {
    name: "",
    description: "",
    dates: "",
  },
  {
    name: "Graduate Teaching Assistant",
    description:
      "Assisted students in an in-depth study of 23 software design patterns ",
    dates: "Aug 2023 - May 2024",
  },
  {
    name: "",
    description: " ",
    dates: "",
  },
  {
    name: "Google Developer Students Club",
    description:
      "Developed Google Lens Clone using Google Vision API, achieving 90% accuracy in object detection and text recognition",
    dates: "Aug 2021 - Aug 2022",
  },
];

const Experience = () => {
  return (
    <section className="py-10" id="experiance">
      <div className="container mx-auto mt-5 text-center">
        <h2 className="h2 text-accent">My Experience.</h2>
        <div className="flex flex-col lg:flex-row ">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 lg:mb-0"
          >
            <div>
              {experiences.map((experience, index) => {
                //destructure experiance
                const { name, description, dates } = experience;

                return (
                  <div
                    className="border-b border-white/20 h-[146px] flex items-center "
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 text-gradient">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight mb-2">
                        {description}
                      </p>
                      <p className="font-secondary leading-tight ">{dates}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* experiences */}

          <div className="border-r border-white/20 h-[584px] ml-16"></div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* experiences list */}
            <div className="pl-14">
              {experiences1.map((experiences1, index) => {
                //destructure experiance
                const { name, description, dates } = experiences1;

                return (
                  <div
                    className="border-b border-white/20 h-[146px] flex items-center "
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 text-gradient">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight mb-2">
                        {description}
                      </p>
                      <p className="font-secondary leading-tight ">{dates}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
