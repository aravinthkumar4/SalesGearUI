import React from "react";

export default function Directories() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <section className="max-w-screen-xl mx-auto my-[40px] md:py-[60px] p-4 md:mx-auto">
      <h3 className="font-semibold text-[#2e2567]">Browse Our Directories</h3>
      <div className="flex gap-4 md:gap-[37px] pt-8 flex-wrap">
        {alphabet?.map((i, idx) => (
          <p key={idx} className="font-medium text-[#2e2567]">
            {i}
          </p>
        ))}
      </div>
    </section>
  );
}
