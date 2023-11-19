import React from 'react'

export default function Testimonials() {
  return (
    <section className="bg-[#eff3f9] section px-[20px] md:px-[104px] py-[40px] md:py-[150px] ">
    <div className="text-[20px] md:text-[24px] leading-[30px] md:leading-[50px] text-center">
      "I've used probably close to 10 different sales engagement platforms
      and prospecting tools since beginning my career. Salesgear is one of
      the easiest tools to use, hands down! It's super user friendly and
      makes it easy to use with all in one platform."
    </div>
    <div className="flex items-center gap-4 justify-center my-8">
      <img
        className="w-16 h-16 rounded-full object-cover"
        src="/assets/profile.jpg"
        alt=""
      />
      <div>
        <div className="text-[20px] font-bold">Andrew Block</div>
        <div className="text-sm text-[16px] font-medium ">
          Founder at RevFuel
        </div>
      </div>
    </div>
  </section>
  )
}
