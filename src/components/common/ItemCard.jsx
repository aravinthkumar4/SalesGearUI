import React from "react";

export default function ItemCard({
  title = "",
  id = "",
  activeTab = "",
  handleClick = () => {},
}) {
  return (
    <div
      className={`cursor-pointer border ${
        id === activeTab ? "bg-[#c0c6e3]/30 text-primary" : "border-lightgrey"
      } hover:bg-[#c0c6e3]/30 p-3 rounded-md text-[16px] md:text-[18px] mb-2`}
      onClick={() => handleClick(id)}
    >
      {title}
    </div>
  );
}
