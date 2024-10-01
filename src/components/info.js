// import React from "react";
// //countup
// import CountUp from "react-countup";
// //intersection observer hook
// import { useInView } from "react-intersection-observer";
// //motion
// import { motion } from "framer-motion";
// //variant
// import { fadeIn } from "../variants";

// const Info = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.5,
//   });
//   return (
//     <section  className="py-20" name="info" ref={ref}>
//         <div>
//             <p className="justify-center">
//             <img className="bg-info bg-contain bg-no-repeat mix-blend-lighten lg:flex justify-center w-full h-[370px]"/>
//             </p>
//         </div>

//     </section>
//   );
// };






// // export default Info;
// import React from "react";
// // countup
// import CountUp from "react-countup";
// // intersection observer hook
// import { useInView } from "react-intersection-observer";
// // motion
// import { motion } from "framer-motion";
// // variant (assuming you have defined the fadeIn variant in ../variants)
// import { fadeIn } from "../variants";

// const Info = () => {
//   // Setting up intersection observer
//   const [ref, inView] = useInView({
//     threshold: 0.5,
//   });

//   return (
//     <section className="py-20" name="info" ref={ref}>
//       <motion.div
//         variants={fadeIn("right", 0.3)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//       >
//         <div>
//           <p className="justify-center">
//             <img className="bg-info bg-contain bg-no-repeat mix-blend-lighten lg:flex justify-center w-full h-[370px]" />
//           </p>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Info;

import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// Import the new scaleUp variant
import { scaleUp } from "../variants";

const Info = () => {
  // Setting up intersection observer
  const [ref, inView] = useInView({
    threshold: 0.5, // Start animation when 50% of the component is in view
  });

  return (
    <section className="py-20" name="info" ref={ref}>
      {/* Apply the scaleUp variant */}
      <motion.div
        variants={scaleUp(0.6)} // Use the scaleUp variant with a 0.3s delay
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Trigger animation when inView is true
        viewport={{ once: false, amount: 0.3 }} // Repeat animation when component re-enters view
      >
        <div>
          <p className="justify-center">
            <img
              className="bg-info bg-contain bg-no-repeat mix-blend-lighten lg:flex justify-center w-full h-[370px]"
            
            />
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Info;
