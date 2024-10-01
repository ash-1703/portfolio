// import React from "react";
// //motion
// import { motion } from "framer-motion";
// //variants
// import { fadeIn } from "../variants";
// //img
// import img1 from "../assets/portfolio-img1.jpg";
// import img2 from "../assets/portfolio-img2.jpg";
// import img3 from "../assets/portfolio-img3.jpg";
// import img4 from "../assets/portfolio-img4.jpg";
// import img5 from "../assets/portfolio-img5.jpg";
// import img6 from "../assets/portfolio-img6.jpg";

// const Work = () => {
//   return (
//     <section className="py-20" name="work">
//       <div class="container px-5 py-8 mx-auto">
//         <motion.div
//           variants={fadeIn("right", 0.3)}
//           initial="hidden"
//           whileInView={"show"}
//           viewport={{ once: false, amount: 0.3 }}
//           class="text-center mb-10"
//         >
//           <h2 className="h2 leading-tight text-accent">My Latest Work.</h2>
//           <p class="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ">
//             Click, explore, and experience the diverse range of solutions I've crafted!
//           </p>
//         </motion.div>

//         <motion.div
//           variants={fadeIn("left", 0.3)}
//           initial="hidden"
//           whileInView={"show"}
//           viewport={{ once: false, amount: 0.3 }}
//           class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
//         >
//           <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
//             <a href="https://www.tupeskinclinic.com/" target="_blank">
//               <div className=" group relative overflow-hidden border-2 border/white/50 rounded-xl">
//                 <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
//                 <img
//                   className="group-hover:scale-125 transition-all duration-500 border-2 border/white/50 rounded-xl "
//                   src={img2}
//                   alt=""
//                 />

//                 {/* pretitle */}
//                 <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                   <span className="text-gradient text-2xl ">
//                     Web Dev - React
//                   </span>
//                 </div>
//                 {/* title */}
//                 <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                   <span className=" text-white text-lg font-bold">
//                     Dr Tupe Skin and Hair Clinic
//                   </span>
//                 </div>
//               </div>
//             </a>
//             <div class="flex-grow">
//               <p class="leading-relaxed text-lg pt-6 ">
//                 "From internship insights to pixel perfection" <br />- bridging
//                 the digital-health gap -
//               </p>
//             </div>
//           </div>

//           <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
//             <a
//               href="https://github.com/ash-1703/Expense-Manager/tree/master"
//               target="_blank"
//             >
//               <div className=" group relative overflow-hidden border-2 border/white/50 rounded-xl">
//                 <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>

//                 <img
//                   className="group-hover:scale-125 transition-all duration-500 border-2 border/white/50 rounded-xl "
//                   src={img1}
//                   alt=""
//                 />
//                 {/* pretitle */}
//                 <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                   <span className="text-gradient text-2xl">Android Dev</span>
//                 </div>
//                 {/* title */}
//                 <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                   <span className="text-lg text-white font-bold">
//                     Expense Manager Application
//                   </span>
//                 </div>
//               </div>
//             </a>
//             <div class="flex-grow">
//               <p class="leading-relaxed text-lg pt-6">
//                 "Collaborative brilliance at work!" <br />- bringing financial
//                 clarity to every click -
//               </p>
//             </div>
//           </div>

//           {/* <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
//             <a
//               href="https://github.com/ash-1703/Impact-of-Covid-19-on-Airport-Traffic"
//               target="_blank"
//             >
//               <div className=" group relative overflow-hidden border-2 border/white/50 rounded-xl">
//                 <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>

//                 <img
//                   className="group-hover:scale-125 transition-all duration-500 border-2 border/white/50 rounded-xl "
//                   src={img3}
//                   alt=""
//                 />

//                 //pretitle 
//                 <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                   <span className="text-gradient text-2xl">Data Science</span>
//                 </div>
//                 // title 
//                 <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                   <span className="text-lg text-white font-bold">
//                     Impact of Covid-19 on Airport Traffic
//                   </span>
//                 </div>
//               </div>
//             </a>
//             <div class="flex-grow">
//               <p class="leading-relaxed text-lg pt-6">
//                 "Navigating the skies through turbulence!" <br /> - decoding
//                 COVID-19's impact on airport traffic -
//               </p>
//             </div>
//           </div> */}
//         </motion.div>

//         <motion.div
//           variants={fadeIn("right", 0.3)}
//           initial="hidden"
//           whileInView={"show"}
//           viewport={{ once: false, amount: 0.3 }}
//           class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
//         >
//           <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
//             <a
//               href="https://github.com/ash-1703/googlelensclone"
//               target="_blank"
//             >
//               <div className=" group relative overflow-hidden border-2 border/white/50 rounded-xl">
//                 <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>

//                 <img
//                   className="group-hover:scale-125 transition-all duration-500 border-2 border/white/50 rounded-xl "
//                   src={img4}
//                   alt=""
//                 />

//                 {/* pretitle */}
//                 <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                   <span className="text-gradient text-2xl ">Android Dev</span>
//                 </div>
//                 {/* title */}

//                 <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                   <span className=" text-white text-lg font-bold">
//                     Google Lens Clone
//                   </span>
//                 </div>
//               </div>
//             </a>
//             <div class="flex-grow">
//               <p class="leading-relaxed text-lg pt-6 ">
//                 "Demonstrated the magic of image recognition" <br />- unlocking
//                 a world of visual wonders -
//               </p>
//             </div>
//           </div>

//           <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
//             <a
//               href="https://github.com/ash-1703/Inventory-Management-System/tree/master"
//               target="_blank"
//             >
//               <div className=" group relative overflow-hidden border-2 border/white/50 rounded-xl">
//                 <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>

//                 <img
//                   className="group-hover:scale-125 transition-all duration-500 border-2 border/white/50 rounded-xl "
//                   src={img5}
//                   alt=""
//                 />

//                 {/* pretitle */}
//                 <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                   <span className="text-gradient text-2xl">Data Analytics</span>
//                 </div>
//                 {/* title */}
//                 <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                   <span className="text-lg text-white font-bold">
//                     JSON Based Inventory System
//                   </span>
//                 </div>
//               </div>
//             </a>
//             <div class="flex-grow">
//               <p class="leading-relaxed text-lg pt-6">
//                 "Simplifying management, maximizing control" <br />
//                 -Streamlined, Smart, Seamless!-
//               </p>
//             </div>
//           </div>
//           {/* 
//           <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
//             <a href="https://github.com/ash-1703/abhiyaan-" target="_blank">
//               <img
//                 className="group-hover:scale-125 transition-all duration-500 border-2 border/white/50 rounded-xl "
//                 src={img6}
//                 alt=""
//               />
//               <div className=" group relative overflow-hidden border-2 border/white/50 rounded-xl">
//                 <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>

//                 // pretitle 
//                 <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                   <span className="text-gradient text-2xl">
//                     Web Dev - Django
//                   </span>
//                 </div>
//                 // title *
//                 <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                   <span className="text-lg text-white font-bold">
//                     Abhiyaan College Fest
//                   </span>
//                 </div>
//               </div>
//             </a>
//             <div class="flex-grow">
//               <p class="leading-relaxed text-lg pt-6">
//                 "Unleashing Creativity and Unity" <br /> -where Teamwork
//                 Transforms Ideas into Spectacular Realities! -
//               </p>
//             </div>
//           </div>
//           */}
          
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Work;
import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// images
import img1 from "../assets/portfolio-img1.jpg";
import img2 from "../assets/portfolio-img2.jpg";
import img3 from "../assets/portfolio-img3.jpg";
import img4 from "../assets/portfolio-img4.jpg";

const Work = () => {
  return (
    <section className="py-20" name="work">
      <div className="container px-5 py-8 mx-auto">
        {/* Heading Section */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-accent leading-tight mb-4">
            My Latest Work
          </h2>
          <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Click, explore, and experience the diverse range of solutions I've crafted!
          </p>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10" // Using grid layout with 2 columns on medium screens
        >
          {/* Project 1 */}
          <div className="p-4 flex flex-col text-center items-center">
            <a href="https://www.tupeskinclinic.com/" target="_blank" rel="noopener noreferrer">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-6 w-[400px] h-[300px]">
                <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                  src={img2}
                  alt="Dr. Tupe Skin and Hair Clinic"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient text-2xl">Web Dev - React</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-white text-lg font-bold">Dr Tupe Skin and Hair Clinic</span>
                </div>
              </div>
            </a>
            <p className="leading-relaxed text-lg">
              "From internship insights to pixel perfection" <br /> - bridging the digital-health gap -
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-4 flex flex-col text-center items-center">
            <a href="https://github.com/ash-1703/Expense-Manager/tree/master" target="_blank" rel="noopener noreferrer">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-6 w-[400px] h-[300px]">
                <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                  src={img1}
                  alt="Expense Manager Application"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient text-2xl">Android Dev</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-white text-lg font-bold">Expense Manager Application</span>
                </div>
              </div>
            </a>
            <p className="leading-relaxed text-lg">
              "Collaborative brilliance at work!" <br /> - bringing financial clarity to every click -
            </p>
          </div>

          {/* Project 3 */}
          <div className="p-4 flex flex-col text-center items-center">
            <a href="https://github.com/ash-1703/googlelensclone" target="_blank" rel="noopener noreferrer">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-6 w-[400px] h-[300px]">
                <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                  src={img4}
                  alt="Google Lens Clone"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient text-2xl">Android Dev</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-white text-lg font-bold">Google Lens Clone</span>
                </div>
              </div>
            </a>
            <p className="leading-relaxed text-lg">
              "Demonstrated the magic of image recognition" <br /> - unlocking a world of visual wonders -
            </p>
          </div>

          {/* Project 4 */}
          <div className="p-4 flex flex-col text-center items-center">
            <a href="https://github.com/ash-1703/Inventory-Management-System/tree/master" target="_blank" rel="noopener noreferrer">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-6 w-[400px] h-[300px]">
                <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                  src={img3}
                  alt="JSON Based Inventory System"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient text-2xl">Data Analytics</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-white text-lg font-bold">JSON Based Inventory System</span>
                </div>
              </div>
            </a>
            <p className="leading-relaxed text-lg">
              "Simplifying management, maximizing control" <br /> - Streamlined, Smart, Seamless! -
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
