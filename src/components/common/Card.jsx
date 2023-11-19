import React from "react";

export default function Card({ title = "", data,color='blue' }) {
    const borderColor={
        blue:'border-4 border-t-primary rounded-md hover:border-primary',
        lightgreen:'border-4 border-t-[#1eb9d5] rounded-md hover:border-[#1eb9d5]',
        green:'border-4 border-t-[#00a358] rounded-md hover:border-[#00a358]',
        darkgray:'border-4 border-t-[#261d56] rounded-md hover:border-[#261d56]',
        orange:'border-4 border-t-[#f59064] rounded-md hover:border-[#f59064]',

    }
    const StarColor={
      blue:'#3953fb',
      lightgreen:'#1eb9d5',
      green:'#00a358',
      darkgray:'#261d56',
      orange:'#f59064'
    }
  return (
    <>
      <div
        className={` ${borderColor[color]} p-2`}
      >
        <p className="font-semibold">{title}</p>
        {data?.map((i, idx) => (
          <div className="flex gap-1 my-4" key={idx}>
            <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke={StarColor[color]}
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            </div>
            <p>{i?.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
