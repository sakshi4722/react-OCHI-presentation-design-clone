// import { motion } from "framer-motion";
// import React from "react";
// import { FaArrowDownLong } from "react-icons/fa6";

// const LandingPage = () => {
//   motion;

//   return (
//     <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
//       <div className="textstructure mt-40 px-20 ">
//         {["we create", "eye opening", "presentations"].map((item, index) => {
//           return (
//             <div className="masker">
//               <div className=" w-fit flex items-end overflow-hidden">
//                 {index === 1 && (
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: "9vw" }}
//                     transition={{ ease: [0.76, 0, 0.24, 1], duration:1 }}
//                     className="mr-[1vw] w-[8vw] rounded-md  h-[5.7vw] top-[1vw]  relative bg-yellow-400"
//                   ></motion.div>
//                 )}
//                 <h1 className=" pt-[1vw] uppercase leading-[.85] text-8xl font-[' Text Founders Grotesk X-Cond SmBd'] font-semibold">
//                   {item}
//                 </h1>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className=" border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-4 px-20">
//         {[
//           "For public and private companies",
//           "Form the first pitch to IPO",
//         ].map((item, index) => {
//           return (
//             <p className="text-md font-light tracking-tight leading-none">
//               {item}
//             </p>
//           );
//         })}
//         <div className="start flex gap-x-1">
//           <div className=" px-5 py-2 border-[2px] border-zinc-400 font-light text-md uppercase rounded-full">
//             start the project
//           </div>
//           <div className="w-10 h-10 flex justify-center items-center  rounded-full border-[1px] border-zinc-400">
//             <span className="rotate-[240deg]">
//               <FaArrowDownLong />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React from "react";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-40 px-6 md:px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-[1vw] md:mr-[1rem] w-[8vw] md:w-[8rem] rounded-md h-[5.7vw] md:h-[5.7rem] top-[1vw] md:top-[1rem] relative bg-yellow-400"
                ></motion.div>
              )}
              <h1 className="pt-[1vw] md:pt-[1rem] uppercase leading-[.85] md:text-8xl font-[' Text Founders Grotesk X-Cond SmBd'] font-semibold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-base md:text-md font-light tracking-tight leading-none mb-2 md:mb-0"
          >
            {item}
          </p>
        ))}
        <div className="start flex gap-x-1 mt-4 md:mt-0">
          <div className="px-4 py-2 md:px-5 md:py-2 border-[2px] border-zinc-400 font-light text-base md:text-md uppercase rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex justify-center items-center rounded-full border-[1px] border-zinc-400">
            <span className="rotate-[240deg]">
              <FaArrowDownLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
