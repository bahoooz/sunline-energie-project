import Image from "next/image";
import React from "react";

interface BoxExpertise {
  icon: string;
  number: number;
  title: string;
  desc: string;
  width: number;
  height: number;
}

export default function BoxExpertise({
  icon,
  number,
  title,
  desc,
  width,
  height,
}: BoxExpertise) {
  return (
    <div className="flex flex-col items-center text-center px-10 z-10">
      <div className="bg-white rounded-[40%] px-4 py-6">
        <Image
          className="w-14"
          src={icon}
          alt={title}
          width={width}
          height={height}
        />
      </div>
      <div className="bg-[#FFC715] py-2 px-4 rounded-full text-white mt-1 mb-8">
        <span>{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="max-w-[400px] 2xl:max-w-[320px]">{desc}</p>
    </div>
  );
}
