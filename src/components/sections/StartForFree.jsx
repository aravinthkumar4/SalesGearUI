import React from "react";

export default function StartForFree() {
  return (
    <section>
      {/* <div className="border bg-green-100 rounded-3xl h-[300px] w-[300px] -rotate-45"></div> */}
      <div className="relative p-4 md:p-0 h-[350px] bg-[#3953fb] flex flex-col items-center justify-center mt-[50px] overflow-hidden">
        <h3 className="text-white mt-4 z-20 text-center">
          Get everything you need to drive revenue in one platform.
        </h3>
        <div className="z-20 flex items-center flex-wrap gap-4 my-6">
          <input
            type="email"
            className="py-[8px] px-4 w-full md:w-[300px]  bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary focus:border-primary block rounded-sm"
            placeholder="Your@email.com"
          />
          <button className="border border-white w-full md:w-auto px-[20px] py-[7px] text-white rounded-sm">
            Start For Free
          </button>
        </div>
      <div className="absolute z-10 right-[25%] border-none bg-[#2f42fb] rounded-[50px] h-[600px] w-[500px] rotate-45"></div>
      <div className="absolute  left-[20%] border-none bg-[#395dfb] rounded-[50px] h-[600px] w-[800px] rotate-45"></div>

      </div>

    </section>
  );
}
