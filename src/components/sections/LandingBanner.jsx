import React from "react";

export default function LandingBanner() {
  return (
    <section>
    <div className="flex flex-wrap h-[350px] relative">
      <div className="md:w-[50%] bg-[#eff3f9] flex items-center justify-center">
        <img
          // width="350px"
          className="md:w-[200px] lg:w-[350px]"
          src="/assets/salesloft-logo.png"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="md:w-[50%] bg-[#130046] flex items-center justify-center">
        <img
          // width="350px"
          className="md:w-[200px] lg:w-[350px]"
          src="/assets/outreach-logo.png"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="hidden lg:block absolute top-[50%] left-[48%] translate-x-[-50%] translate-y-[-50%] h-[110px] w-[62px] rounded-tl-full rounded-bl-full bg-[#0c1af1] border-8 border-[#3a54f5] border-r-transparent "/>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {/* <div className="border-[8px] border-[#1120f2] border-r-transparent rounded-full ring-[10px] ring-primary"/> */}
           <div className=" bg-primary h-[60px] md:h-[85px] w-[60px] md:w-[90px] rounded-full flex items-center justify-center">
            <h2 className="text-white">VS</h2>
          {/* </div>  */}
        </div>
      </div>
      <h4 className="p-4 w-full text-white text-center absolute -bottom-14 md:bottom-4 bg-gradient-to-r from-[#c0c6e3] via-[#354ae8] to-[#1b116b]">
        An in-depth comparsion to find your ideal sales solution
      </h4>
    </div>
    </section>
  );
}
