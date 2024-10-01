import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//link
import { Link } from "react-scroll";
//services data
const services = [
  {
    name: "Full-Stack Development",
    description: "React, Node.js, Express.js, MongoDB",
  },
  {
    name: "Android Development",
    description: "Java, Android Studio, Firebase",
  },
  {
    name: "Data Analytics",
    description: "SQL, Python, MS Excel, Tableau, Power BI",
  },
  {
    name: "Cloud Computing",
    description: "AWS, Docker",
  },
];

const Services = () => {
  return (
    <section className="py-20" name="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h4 className="h4 max-w-[455px] mb-16">
            💡 I am passionate about using my technical expertise to develop impactful software solutions. With hands-on experience in both front-end and back-end development, I have a proven track record of creating user-friendly applications and solving real-world problems.
            </h4>
            <Link
              to="work"
              activeClass="active"
              smooth={true}
              spy={true}
              className="btn btn-sm py-3"
            >
              See my work
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div className="pl-10">
              {services.map((service, index) => {
                //destructure service
                const { name, description } = service;

                return (
                  <div
                    className="border-b border-white/20 h-[146px]  flex items-center "
                    key={index}
                  >
                    <div className="max-w-[476px] ">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-3 text-gradient">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight ">
                        {description}
                      </p>
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

export default Services;
