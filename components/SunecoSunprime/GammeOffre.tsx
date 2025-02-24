/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ChevronsRight } from "lucide-react";
import React, { ReactElement } from "react";

interface GammeOffre {
  title: string;
  desc: string;
  price: string | number;
  list: ReactElement;
  img: HTMLDivElement | any;
}

export default function GammeOffre({
  title,
  desc,
  price,
  list,
  img,
}: GammeOffre) {
  return (
    <div className="py-12 lg:py-20 bg-[#F5F8F9]">
      <p className="pl-5 mb-8 sm:pl-8 lg:pl-16 2xl:pl-24 sm:mb-12 lg:mb-20 2xl:mb-24">
        <Link href="/" className="text-black underline">
          Accueil
        </Link>
        <span> » Offres Panneaux solaires pour les particuliers</span>
      </p>
      <div className="flex flex-col gap-8 text-center xl:flex-row xl:justify-center xl:px-12 xl:gap-16">
        <div className="xl:w-[600px] 2xl:w-[650px]">
          <div className="xl:text-start">
            <h1 className="mb-5 text-2xl font-bold">Gamme {title}</h1>
            <p className="px-7 xl:px-0">{desc}</p>
          </div>
          {img}
        </div>
        <div className="bg-white w-[80%] md:w-[600px] xl:w-[500px] mx-auto xl:mx-0 text-start px-5 xl:px-8 py-8 xl:py-12 xl:h-[750px]">
          <div className="mb-8">
            <h3 className="text-2xl font-bold xl:mb-2">
              À partir de {price} €
            </h3>
            <span className="text-lg">TVA incluse</span>
          </div>
          <p className="mb-8 font-semibold">
            Livré et posé - Prime à l&apos;autoconsommation non déduite
          </p>
          <Button
            as={Link}
            href="/contact"
            className="w-full bg-[#FBAC18] text-white py-6 rounded-none text-base mb-2"
          >
            <ChevronsRight /> Demander un devis
          </Button>
          <br />
          <p className="text-center text-sm text-[#0B68A4] mb-12">
            Être gratuitement rappelé
          </p>
          <div>
            <h2 className="mb-8 text-2xl font-bold">Avantages</h2>
            <ul className="flex flex-col gap-3">{list}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
