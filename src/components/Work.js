import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//img
import img1 from "../assets/portfolio-img1.jpg";
import img2 from "../assets/portfolio-img2.jpg";
import img3 from "../assets/portfolio-img3.jpg";
import img4 from "../assets/portfolio-img4.jpg";
import img5 from "../assets/portfolio-img5.jpg";
import img6 from "../assets/portfolio-img6.jpg";


const Work = () => {
  return (
    <section className="py-20" name="work">
      <div class="container px-5 py-8 mx-auto">
        <div class="text-center mb-10">
          <h2 className="h2 leading-tight text-accent">
            My Latest Work.
          </h2>
          <p class="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ">
            Witness the transformation of ideas into tangible solutions. Click, explore, and
            experience the diverse range of solutions I've crafted!
          </p>
         
        </div>

        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className=" group relative overflow-hidden border-2 border/white/50 rounded-xl" >
            <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
              
              <a href="https://www.tupeskinclinic.com/" target="_blank">
              <img
                className="group-hover:scale-125 transition-all duration-500 border-2 border/white/50 rounded-xl "
                src={img2}
                alt=""
              />
              </a>
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl ">Web Dev - React</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className=" text-white text-lg font-bold">Dr Tupe Skin and Hair Clinic</span>
              </div>
            </div>

            <div class="flex-grow">   
              <p class="leading-relaxed text-lg pt-6 ">
              "From internship insights to pixel perfection" <br/>
              - bridging the digital-health gap -
              </p>
            </div>
          </div>

          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className=" group relative overflow-hidden border-2 border/white/50 rounded-xl" >
            <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
              <a href="https://github.com/ash-1703/Expense-Manager/tree/master" target="_blank">
              <img
                className="group-hover:scale-125 transition-all duration-500 border-2 border/white/50 rounded-xl "
                src={img1}
                alt=""
              />
              </a>
              
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">Android Dev</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-lg text-white font-bold">Expense Manager Application</span>
              </div>
            </div>

            <div class="flex-grow">
              <p class="leading-relaxed text-lg pt-6">
              "Collaborative brilliance at work!" <br/>
              - bringing financial clarity to every click -
              </p>

            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className=" group relative overflow-hidden border-2 border/white/50 rounded-xl" >
            <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
              <a href="#">
              <img
                className="group-hover:scale-125 transition-all duration-500 border-2 border/white/50 rounded-xl "
                src={img3}
                alt=""
              />
              </a>
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">Data Science</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-lg text-white font-bold">Impact of Covid-19 on Airport Traffic</span>
              </div>
            </div>


            <div class="flex-grow">
              {/* <h2 class="text-lg title-font font-medium mb-3">
                Online Hostel Management System
              </h2> */}
              <p class="leading-relaxed text-lg pt-6">
              "Navigating the skies through turbulence!" <br/> - decoding COVID-19's impact on airport traffic -
              </p>
              
            </div>
          </div>
        </div>


        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <a href="https://github.com/ash-1703/googlelensclone" target="_blank">
            <div className=" group relative overflow-hidden border-2 border/white/50 rounded-xl" >
            <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
 
              <img
                className="group-hover:scale-125 transition-all duration-500 border-2 border/white/50 rounded-xl "
                src={img4}
                alt=""
              />
              
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl ">Android Dev</span>
              </div>
              {/* title */}
              
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className=" text-white text-lg font-bold">Google Lens Clone</span>
              
              </div>
              
            </div>
            </a>
            <div class="flex-grow">
              
              <p class="leading-relaxed text-lg pt-6 ">
              "Demonstrated the magic of image recognition" <br/>
              - unlocking a world of visual wonders -
              </p>
            </div>
          </div>

          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className=" group relative overflow-hidden border-2 border/white/50 rounded-xl" >
            <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
              <a href="https://github.com/ash-1703/Expense-Manager/tree/master" target="_blank">
              <img
                className="group-hover:scale-125 transition-all duration-500 border-2 border/white/50 rounded-xl "
                src={img5}
                alt=""
              />
              </a>
              
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">Data Analytics</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-lg text-white font-bold">JSON Based Inventory System</span>
              </div>
            </div>

            <div class="flex-grow">
              <p class="leading-relaxed text-lg pt-6">
              Collaborative brilliance at work! <br/>
              -bringing financial clarity to every click-
              </p>

            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className=" group relative overflow-hidden border-2 border/white/50 rounded-xl" >
            <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
              <a href="#">
              <img
                className="group-hover:scale-125 transition-all duration-500 border-2 border/white/50 rounded-xl "
                src={img6}
                alt=""
              />
              </a>
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">Web Dev - Django</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-lg text-white font-bold">Abhiyaan College Fest</span>
              </div>
            </div>


            <div class="flex-grow">
              {/* <h2 class="text-lg title-font font-medium mb-3">
                Online Hostel Management System
              </h2> */}
              <p class="leading-relaxed text-base pt-6">
              Navigating the skies through turbulence! <br/> -decoding COVID-19's impact on airport traffic-
              </p>
              
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Work;
