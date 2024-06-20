// import React, { useEffect, useState } from "react";

// const RoundedEyes = () => {
//   const [rotate, setRotate] = useState(0); //jab bhi mouse move hoga rotate ki value increase hogi or vo save hota jaega bcz od setrotate

//   useEffect(() => {
//     window.addEventListener("mousemove", (e) => {
//       let mouseX = e.clientX; // event -e - k undr clientx mouse ki screen x ki location hai ki mouse x axis pr kaha hai y pr kaha hai
//       let mouseY = e.clientY;

//       let deltaX = mouseX - window.innerWidth / 2; //difference between x and y
//       let deltaY = mouseY - window.innerHeight / 2;

//       var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); //center se distance convert radiance into degrees
//       setRotate(angle - 180);
//     });
//   });

//   return (
//     <div className="w-full h-screen overflow-hidden">
//       <div
//         data-scroll
//         data-scroll-speed="-.7"
//         className=' relative w-full h-full bg-cover bg-center  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'
//       >
//         <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
//           <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
//             <div className=" relative w-2/3 h-2/3  rounded-full bg-zinc-900 flex items-center justify-center">
//             <p className=" text-xl font-semibold font-[' Text Founders Grotesk X-Cond SmBd'] text-zinc-100">play</p>
//               <div
//                 style={{
//                   transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
//                 }}
//                 className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
//               >
//                 <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
//               </div>
//             </div>
//           </div>
//           <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
//             <div className=" relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
//             <p className=" text-xl font-semibold font-[' Text Founders Grotesk X-Cond SmBd'] text-zinc-100">play</p>

//               <div
//                 style={{
//                   transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
//                 }}
//                 className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
//               >
//                 <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoundedEyes;
import React, { useEffect, useState } from "react";

const RoundedEyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'
      >
        <div className="absolute flex flex-col md:flex-row gap-5 md:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {Array(2).fill(
            <div className="flex items-center justify-center w-[40vw] h-[40vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100">
              <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center">
                <p className="text-sm md:text-xl font-semibold font-['Text Founders Grotesk X-Cond SmBd'] text-zinc-100">
                  play
                </p>
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5 md:h-10"
                >
                  <div className="w-5 h-5 md:w-10 md:h-10 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoundedEyes;
