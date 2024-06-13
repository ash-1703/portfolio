import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
//experiances data
const experiances = [
  {
    name: "Graduate Teaching Assistant",
    description:
      "Mentored 60+ students for Software Design Patterns (CSE 5322) course",
    dates: "Aug 2023 - May 2024",
  },
  {
    name: "",
    description: "",
    dates: "",
  },
  {
    name: "Google Developer Students Club",
    description:
      "Showcased a live project before 50+ students on Google Lens clone application, integrating Firebase and the SerpAPI ",
    dates: "Aug 2021 - Aug 2022",
  },
  {
    name: "",
    description: "",
    dates: "",
  },
];

const experiances1 = [
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
    description: " ",
    dates: "",
  },
  {
    name: "Pie Infocomm Pvt Ltd",
    description:
      "Built the project entitled - Impact of Covid-19 on Airport Traffic",
    dates: "July 2021 - August 2021",
  },
];

const Experiance = () => {
  return (
    <section className="py-10" id="experiance">
      <div className="container mx-auto mt-5 text-center">
        <h2 className="h2 text-accent">My Experiance.</h2>
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
              {experiances.map((experiance, index) => {
                //destructure experiance
                const { name, description, dates } = experiance;

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
          {/* experiances */}

          <div className="border-r border-white/20 h-[584px] ml-16"></div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* experiances list */}
            <div className="pl-14">
              {experiances1.map((experiances1, index) => {
                //destructure experiance
                const { name, description, dates } = experiances1;

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

export default Experiance;
