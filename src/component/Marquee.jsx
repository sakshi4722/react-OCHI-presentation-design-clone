// import {motion} from 'framer-motion'
// import React from 'react'

// const Marquee = () => {
//   return (
//     <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
// <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
// <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:10}} className=' leading-none text-[25vw] font-["Text Founders Grotesk X-Cond SmBd"] font-semibold uppercase -mb-[2vw] pr-20'>we are ochi</motion.h1> 
// <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:10}} className=' leading-none text-[25vw] font-["Text Founders Grotesk X-Cond SmBd"] font-semibold uppercase -mb-[2vw] pr-20'>we are ochi</motion.h1>
// <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:10}} className=' leading-none text-[25vw] font-["Text Founders Grotesk X-Cond SmBd"] font-semibold uppercase -mb-[2vw]'>we are ochi</motion.h1> 
// </div>

//     </div>
//   )
// }

// export default Marquee

import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-10 md:py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        {Array(3).fill().map((_, index) => (
          <motion.h1
            key={index}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 * (index + 1) }}
            className={`leading-none text-[${15 + index * 5}vw] md:text-[${20 + index * 5}vw] lg:text-[${25 + index * 5}vw] font-['Text Founders Grotesk X-Cond SmBd'] font-semibold uppercase -mb-[${2 + index * 2}vw] ${index === 2 ? "" : "pr-20"}`}
          >
            we are ochi
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
