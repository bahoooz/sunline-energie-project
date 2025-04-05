"use client";

import { categoryMap } from "@/lib/categoryMap";
import { Button } from "@heroui/react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface ArticleCardProps {
  title: string;
  category: string;
  image: string;
  id?: string;
  date?: string;
  created_at?: string | Date;
  isRow?: boolean;
}

export default function ArticleCard({
  title,
  category,
  image,
  created_at,
  isRow,
}: ArticleCardProps) {
  return (
    <div className={`flex ${isRow ? "flex-row items-start" : "flex-col w-40 xl:w-48"} gap-3 lg:gap-6`}>
      <div className="flex flex-col gap-3">
        <div className="relative w-40 h-40 xl:w-48 xl:h-48">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          )}
        </div>
        <div className="text-xs xl:text-sm flex gap-3 justify-between text-gray-500 lg:max-w-40 xl:max-w-48">
          <span className="truncate">{categoryMap[category]}</span>
          <span>
            {created_at &&
              format(new Date(created_at), "dd/MM/yy", { locale: fr })}
          </span>
        </div>
        <h3 className="break-words text-sm xl:text-base lg:max-w-40 xl:max-w-48">{title}</h3>
      </div>
      <div
        className={`flex justify-center gap-3 ${
          isRow ? "flex-col mt-2 xl:mt-3" : "flex-row"
        }`}
      >
        <Button
          isIconOnly
          variant="bordered"
          radius="full"
          aria-label="Voir l'article"
          className="border-dashboardBlue xl:h-12 xl:w-12"
        >
          <Eye color="#59A1FF" size={24} className="xl:size-7" />
        </Button>
        <Button
          isIconOnly
          variant="bordered"
          radius="full"
          aria-label="Voir l'article"
          className="border-primary xl:h-12 xl:w-12"
        >
          <Pencil color="#FBAC18" size={24} className="xl:size-7" />
        </Button>
        <Button
          isIconOnly
          variant="bordered"
          radius="full"
          aria-label="Voir l'article"
          className="border-dashboardRed xl:h-12 xl:w-12"
        >
          <Trash2 color="#CD5460" size={24} className="xl:size-7" />
        </Button>
      </div>
    </div>
  );
}
