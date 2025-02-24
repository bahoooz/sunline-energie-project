import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ArticleProps {
  title: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  isFirst?: boolean;
}

export default function Article({
  title,
  image,
  date,
  category,
  slug,
  isFirst,
}: ArticleProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={`flex gap-4 ${isFirst ? "flex-col max-w-[500px] md:min-w-[600px] md:max-w-[600px] xl:min-w-[800px] xl:max-w-[800px] md:flex-row md:items-center md:gap-8" : "flex-col"}`}
    >
      <Image className={`${isFirst ? "max-w-[500px] md:max-w-[350px]" : ""} w-full aspect-square object-cover`} src={image} alt={title} width={300} height={200} unoptimized />
      <div>
        <div className={`flex ${isFirst ? "flex-row justify-between" : "flex-col sm:flex-row sm:justify-between"} text-[#F6BB06] uppercase gap-2 mb-3 text-xs`}>
          <span>{category}</span>
          <span>
            {new Date(date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <h2 className={`font-light ${isFirst ? "text-lg sm:text-xl" : "text-sm sm:text-base lg:text-lg xl:text-base"}`}>{title}</h2>
      </div>
    </Link>
  );
}
