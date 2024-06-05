import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
<h1 className='font-["Neue_Montreal"] text-6xl leading-[4vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
</h1>
<div className='w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#a1b562]'>
    <div className='w-1/2'>
        <h1 className='text-7xl'>our approach:</h1>
        <button className=' flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-8'> read more
        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
    </div>
    <div className='w-[70vw] h-[70vh] ml-10'>
      <img className='rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
    </div>
</div>
    </div>
  )
}

export default About