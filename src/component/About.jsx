import React from 'react';

const About = () => {
  return (
    <div className='w-full p-8 md:p-16 lg:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-[4vw] tracking-tight'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className='w-full flex flex-col md:flex-row gap-5 border-t-[2px] pt-10 mt-10 md:mt-20 border-[#a1b562]'>
        <div className='w-full md:w-1/2'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl'>our approach:</h1>
          <button className='flex uppercase gap-2 md:gap-10 items-center px-6 md:px-10 py-4 md:py-6 bg-zinc-900 rounded-full text-white mt-6 md:mt-8'>
            read more
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-full md:w-[70vw] h-[50vh] md:h-[70vh] ml-0 md:ml-10 mt-10 md:mt-0'>
          <img className='rounded-lg w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="Ochi" />
        </div>
      </div>
    </div>
  );
};

export default About;
