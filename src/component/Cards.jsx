// import React from 'react'

// const Cards = () => {
//   return (
//     <div className='w-full h-screen  bg-zinc-900 flex items-center gap-5 px-32'>
// <div className=' cardcontainer h-1/2 w-full'>
//     <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
//         <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
//         <button className='absolute left-10 px-5 rounded-full py-1 border-2 bottom-10'>&copy;2019-2022</button>
//     </div>
// </div>

// <div className=' cardcontainer flex gap-5 h-[50vh]'></div>
// <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-1/2  bg-[#192826]'>
// <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
//         <button className='absolute left-10 px-5 rounded-full py-1 border-2 bottom-10'>RATING5.0 ON CLUTCH</button>
// </div>
// <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-1/2 bg-[#192826]'>
// <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
//         <button className='absolute left-10 px-5 rounded-full py-1 border-2 bottom-10'>BUSINESS BOOTCAMP</button>
// </div>

//     </div>
//   )
// }

// export default Cards


import React from 'react';

const Cards = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 flex flex-col lg:flex-row items-center gap-5 px-5 md:px-20 lg:px-32 py-10'>
      <div className='cardcontainer h-1/2 w-full lg:w-1/3'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
          <img className='w-16 md:w-24 lg:w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo 1" />
          <button className='absolute left-5 md:left-8 lg:left-10 px-3 md:px-4 lg:px-5 rounded-full py-1 border-2 bottom-5 md:bottom-8 lg:bottom-10'>&copy;2019-2022</button>
        </div>
      </div>

      <div className='cardcontainer flex flex-col md:flex-row gap-5 h-[50vh] w-full lg:w-2/3'>
        <div className='card relative flex items-center justify-center rounded-xl w-full md:w-1/2 h-1/2 md:h-full bg-[#192826]'>
          <img className='w-16 md:w-24 lg:w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Logo 2" />
          <button className='absolute left-5 md:left-8 lg:left-10 px-3 md:px-4 lg:px-5 rounded-full py-1 border-2 bottom-5 md:bottom-8 lg:bottom-10'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative flex items-center justify-center rounded-xl w-full md:w-1/2 h-1/2 md:h-full bg-[#192826]'>
          <img className='w-16 md:w-24 lg:w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Logo 3" />
          <button className='absolute left-5 md:left-8 lg:left-10 px-3 md:px-4 lg:px-5 rounded-full py-1 border-2 bottom-5 md:bottom-8 lg:bottom-10'>BUSINESS BOOTCAMP</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;










