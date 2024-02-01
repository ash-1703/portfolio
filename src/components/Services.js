import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//services data
const services = [
  {
    name: "Full-Stack Development",
    description: 'React, Node.js, Express.js, MongoDB',
    link: "Learn more",
  },
  {
    name: "Android Development",
    description:
      "Java, Android Studio, Firebase",
    link: "Learn more",
  },
  {
    name: "Data Engineering",
    description:
      "Apache Hadoop, Apache Spark, AWS, Git ",
    link: "Learn more",
  },
  {
    name: "Cloud Computing",
    description:
      "Apache Hadoop, Apache Spark, AWS, Git ",
    link: "Learn more",
  },
  
];

const Services = () => {
  return (
    <section className="py-20" name="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text & image */}
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amoount:0.3}}
          className="flex-1 mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a new graduate software developer with 6 months of internship
              experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amoount:0.3}}
          className="flex-1">
            {/* services list */}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service;

                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight ">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
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
