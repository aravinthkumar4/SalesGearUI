import React from 'react'

export default function PromotionBanner() {
  return (
    <section className="relative h-[200px] bg-[#384ed5] overflow-hidden">
    <div className="h-full flex flex-col items-center justify-center p-4 md:p-0 z-20">
      <img
        width="300px"
        className="z-20"
        src="/assets/logo-white.png"
        alt=""
        loading="lazy"
      />
      <h4 className="text-white mt-4 z-20">
        A better and effective path to your outreach success
      </h4>
    </div>
    <div className="hidden md:block absolute z-10 -top-6 -left-16 border-none bg-[#062a7a]/30 rounded-[50px] h-[300px] w-[300px] rotate-45"></div>
  <div className="hidden md:block absolute -top-[100px] -left-[50px] border-none bg-[#160a81]/10 rounded-[50px] h-[300px] w-[300px] -rotate-45"></div>

  <div className="hidden md:block absolute z-10 -top-6 -right-16 border-none bg-[#0912ee]/50  rounded-[50px] h-[300px] w-[300px] rotate-45"></div>
  <div className="hidden md:block absolute -top-[100px] -right-[50px] border-none bg-[#0d51e9] rounded-[50px] h-[300px] w-[300px] -rotate-45"></div>


  </section>
  )
}
