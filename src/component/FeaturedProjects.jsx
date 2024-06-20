// import { motion, useAnimation } from "framer-motion";

// const FeaturedProjects = () => {
//   const cards = [useAnimation(), useAnimation()]; //from framer-motion hook animate anything
//   const handleHover = (index) => {
//     cards[index].start({ y: "0" }); //card k 0 index se animate ko start kro  nd this animation reflect to the span tags
//   };
//   const handlHoverEnd=(index)=>{
//     cards[index].start({ y: "100%" });
//   };

//   motion;
//   return (
//     <div className="w-full py-20">
//       <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-14">
//         <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight '>
//           Featured Projects
//         </h1>
//       </div>
//       <div className="px-20">
//         <div className="cards w-full flex gap-10 mt-10">
//           <motion.div
//             onHoverStart={() => handleHover(0)}
//             onHoverEnd={() =>handlHoverEnd(0)}
//             className="cardcontainer relative w-1/2 h-[70vh] "
//           >
//             {/* <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 Z-[9] text-5xl font-[' Text Founders Grotesk X-Cond SmBd'] tracking-tight leading-none font-semibold"> */}

//             <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-0 translate-x-1/2 top-1/2 -translate-y-1/2 Z-[9] text-5xl font-[' Text Founders Grotesk X-Cond SmBd'] tracking-tighthleading-none font-semibold">
//               {" "}
//               {"FYDE".split("").map((item, index) => (
//                 <motion.span
//                   initial={{ y: "100%" }}
//                   animate={cards[0]}
//                   transition={{ease:[0.22, 1, 0.36, 1], delay:index*.05}}
//                   className=" inline-block"
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//             {/* </h1> */}
//             <div className=" card rounded-xl w-full h-full overflow-hidden">
//               <img
//                 className="w-full h-full bg-cover"
//                 src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
//                 alt=""
//               />
//             </div>
//           </motion.div>
//           <motion.div 
//            onHoverStart={() => handleHover(1)}
//            onHoverEnd={() =>handlHoverEnd(1)}
//           className="cardcontainer relative w-1/2 h-[70vh] ">
//             <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 Z-[9] text-5xl font-[' Text Founders Grotesk X-Cond SmBd'] tracking-tight leading-none font-semibold">
//               {" "}
//               {"VISE".split("").map((item, index) => (
//  <motion.span
//  initial={{ y: "100%" }}
//  animate={cards[1]}
//  transition={{ease:[0.22, 1, 0.36, 1], delay:index*.05}}
//  className=" inline-block"
// >
//  {item}
// </motion.span>              ))}
//             </h1>
//             <div className=" card rounded-xl w-full h-full overflow-hidden bg-zinc-300">
//               <img
//                 className="w-full h-full bg-cover"
//                 src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
//                 alt=""
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProjects;


import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const FeaturedProjects = () => {
  const cards = [useAnimation(), useAnimation()];
  
  const handleHover = (index) => {
    cards[index].start({ y: '0' });
  };
  
  const handleHoverEnd = (index) => {
    cards[index].start({ y: '100%' });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-5 md:px-10 lg:px-20 border-b-[1px] border-zinc-700 pb-14">
        <h1 className='text-4xl md:text-5xl lg:text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-5 md:px-10 lg:px-20">
        <div className="cards w-full flex flex-col lg:flex-row gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-1/2 transform translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-3xl md:text-4xl lg:text-5xl font-['Text Founders Grotesk X-Cond SmBd'] tracking-tight leading-none font-semibold">
              {'FYDE'.split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-xl w-full h-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="FYDE"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-1/2 transform translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-3xl md:text-4xl lg:text-5xl font-['Text Founders Grotesk X-Cond SmBd'] tracking-tight leading-none font-semibold">
              {'VISE'.split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-xl w-full h-full overflow-hidden bg-zinc-300">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="VISE"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
