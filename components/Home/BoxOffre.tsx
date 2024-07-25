import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

interface BoxOffre {
  title: string;
  price: string;
  desc: string;
  list: ReactElement;
  option?: HTMLDivElement | any;
  link?: string | any;
}

export default function BoxOffre({
  title,
  price,
  desc,
  list,
  option,
  link,
}: BoxOffre) {
  return (
    <div className="py-5 px-5 bg-[#F9F9F9]">
      <div className="text-center">
        <p className="text-sm font-semibold mb-5">{title}</p>
        <h3 className="text-2xl font-bold">
          A partir de <span className="text-4xl">{price}€</span>
        </h3>
        <p className="text-sm text-[#425A9E] font-semibold mt-2">
          Livrée et posée - Aides <br /> déduites
        </p>
        <p className="mt-5">{desc}</p>
      </div>
      <Image
        src={"/assets/SunPower_P7_Tier1_6-400x397.png.png"}
        width={477}
        height={525}
        alt="image offre"
        className="mt-12 w-[300px] mx-auto"
      />
      <Button
        as={Link}
        href={link}
        className="bg-[rgb(251,172,24,0.8)] text-white w-full rounded-full text-base py-6 mt-5"
      >
        Découvrir l&apos;offre
      </Button>
      <ul className="flex flex-col gap-3 mt-12 text-sm font-semibold">
        {list}
      </ul>
      {option}
    </div>
  );
}
