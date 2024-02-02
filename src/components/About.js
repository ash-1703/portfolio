import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="py-20" name="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[530px] mix-blend-lighten bg-top hidden lg:flex flex-1 max-w-[220px] lg:max-w-[382px] justify-center"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a new graduate software developer with 6 months of internship
              experience.
            </h3>
            <p className="mb-6">
              I am currently pursuing my Masters in Computer Science from the
              University of Texas at Arlington. I value collaboration, learning,
              and growth, and I seek to join a team that shares these values and
              provides opportunities for diverse perspectives and experiences.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={6} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Months of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={3.81} decimals={2} duration={2} />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">GPA</div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={60} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Students <br /> Mentored
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
