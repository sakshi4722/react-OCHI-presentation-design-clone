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
    <div className='w-full h-screen bg-zinc-900 flex flex-col md:flex-row items-center justify-center gap-10 px-5 md:px-32'>
      <div className='cardcontainer w-full md:w-1/2 h-80 md:h-auto'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo 001" />
          <button className='absolute left-10 px-5 rounded-full py-1 border-2 bottom-10'>&copy;2019-2022</button>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-10 md:w-1/2'>
        <div className='card relative rounded-xl w-full h-80 bg-[#192826] flex items-center justify-center'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Logo 002" />
          <button className='absolute left-10 px-5 rounded-full py-1 border-2 bottom-10'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative rounded-xl w-full h-80 bg-[#192826] flex items-center justify-center'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Logo 003" />
          <button className='absolute left-10 px-5 rounded-full py-1 border-2 bottom-10'>BUSINESS BOOTCAMP</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
