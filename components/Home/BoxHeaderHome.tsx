/* eslint-disable prettier/prettier */
import Link from "next/link";
import React from "react";

interface BoxHeaderHome {
  title: string;
  desc: string;
  link_tag: string;
  link: string;
}

export default function BoxHeaderHome({
  title,
  desc,
  link_tag,
  link,
}: BoxHeaderHome) {
  return (
    <div className="bg-white px-5 py-8 w-[320px] shadow-lg md:pt-6 md:h-[350px] md:py-0">
      <h3 className="font-bold text-xl mb-8 text-center">{title}</h3>
      <p className="mb-8 text-gray-900">{desc}</p>
      <Link className="font-semibold underline underline-offset-8 decoration-2 decoration-[#F6BB06]" href={link}>
        {link_tag}
      </Link>
    </div>
  );
}
