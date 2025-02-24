import { categoryMap } from "@/lib/categoryMap";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LastNewsArticleProps {
  slug: string;
  title: string;
  image: string;
  category: string;
}

export default function LastNewsArticle({
  slug,
  title,
  image,
  category,
}: LastNewsArticleProps) {
  return (
    <div
      key={slug}
      className="flex flex-col gap-5 max-w-[400px] md:w-[300px] lg:w-[250px] mx-auto md:mx-0"
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="w-full aspect-square object-cover"
      />
      <span className="text-[#0B68A4] font-semibold text-lg">
        {categoryMap[category]}
      </span>
      <h3 className="font-semibold text-lg">{title}</h3>
      <Link
        href={`/blog/${slug}`}
        className="font-semibold text-lg underline decoration-2 decoration-[#0B68A4] underline-offset-8 cursor-pointer hover:scale-[102%] transition-all duration-300"
      >
        Lire l&apos;article
      </Link>
    </div>
  );
}
