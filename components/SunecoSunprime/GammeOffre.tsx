import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import React, { ReactElement, ReactFragment } from "react";

interface GammeOffre {
  title: string;
  desc: string;
  price: string | number;
  list: ReactElement;
}

export default function GammeOffre({ title, desc, price, list }: GammeOffre) {
  return (
    <div className="py-12 lg:py-20 bg-[#F5F8F9]">
      <p className="pl-5 sm:pl-8 lg:pl-16 2xl:pl-24 mb-8 sm:mb-12 lg:mb-20 2xl:mb-24">
        <Link href="/" className="text-black underline">
          Accueil
        </Link>{" "}
        » Offres Panneaux solaires pour les particuliers
      </p>
      <div className="flex flex-col xl:flex-row xl:justify-center xl:px-12 text-center gap-8 xl:gap-16">
        <div className="xl:w-[600px] 2xl:w-[650px]">
          <div className="xl:text-start">
            <h1 className="text-2xl font-bold mb-5">Gamme {title}</h1>
            <p className="px-7 xl:px-0">{desc}</p>
          </div>
          <Image
            src={"/assets/SunPower_P7_Tier1_6-400x397_sans_garantie.png"}
            width={675}
            height={785}
            alt="image flash black"
            className="w-[80%] mx-auto mt-8 md:w-[600px] xl:w-full"
          />
        </div>
        <div className="bg-white w-[80%] md:w-[600px] xl:w-[500px] mx-auto xl:mx-0 text-start px-5 xl:px-8 py-8 xl:py-12 xl:h-[750px]">
          <div className="mb-8">
            <h3 className="text-2xl font-bold xl:mb-2">
              À partir de {price} €
            </h3>
            <span className="text-lg">TVA incluse</span>
          </div>
          <p className="font-semibold mb-8">
            Livrée et posée - Prime à l&apos;autoconsommation déduite
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
            <h2 className="text-2xl font-bold mb-8">Avantages</h2>
            <ul className="flex flex-col gap-3">{list}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
