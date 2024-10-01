import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const Info = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section  className="py-20" name="info" ref={ref}>
        <div>
            <p className="justify-center">
            <img className="bg-info bg-contain bg-no-repeat mix-blend-lighten lg:flex justify-center w-full h-[370px]"/>
            </p>
        </div>
      
    </section>
  );
};

export default Info;
