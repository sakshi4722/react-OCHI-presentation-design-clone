import React, { useEffect, useState } from "react";

const ReadyToStart = () => {
  const [rotate, setRotate] = useState(0); //jab bhi mouse move hoga rotate ki value increase hogi or vo save hota jaega bcz od setrotate

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX; // event -e - k undr clientx mouse ki screen x ki location hai ki mouse x axis pr kaha hai y pr kaha hai
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2; //difference between x and y
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); //center se distance convert radiance into degrees
      setRotate(angle - 180);
    });
  });
  return (
    <div className=" relative w-full min-h-screen">
      <div
        className='  data-scroll
        data-scroll-speed="-.7" w-full min-h-screen flex items-center justify-center uppercase text-zinc-900 bg-[#CDEA68] text-[180px]  font-["Text Founders Grotesk X-Cond SmBd"] tracking-tight leading-none font-bold'
      >
        <p className=" text-center">
          {" "}
          ready <br />
          to start <br /> the project?
        </p>
      </div>
      <div className="absolute flex gap-10 top-[40%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className=" flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100">
          <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100">
          <div className=" relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
