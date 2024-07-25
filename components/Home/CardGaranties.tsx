import React from "react";

interface CardGaranties {
  title: string;
  desc: string;
}

export default function CardGaranties({ title, desc }: CardGaranties) {
  return (
    <div className="bg-white text-center min-h-72 w-4/5 sm:w-[400px] flex flex-col justify-center px-8 py-8 gap-5 rounded-xl">
      <h4 className="text-xl font-bold">{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
