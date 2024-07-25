import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeaderOffres() {
  return (
    <div>
      <div className="lg:flex lg:h-[500px]">
        <Image
          src={"/assets/header-offres-img.png"}
          width={1037}
          height={699}
          alt="image maison"
          className="h-40 sm:h-60 lg:h-full lg:max-w-[40%] object-cover"
        />
        <div className="bg-[#FBAC18] text-white text-center px-7 lg:px-16 2xl:px-44 py-12 flex flex-col gap-8 sm:gap-10 lg:justify-center lg:text-start lg:w-full">
          <h1 className="text-2xl lg:text-3xl font-bold">
            Le photovoltaïque au juste prix, <br className="hidden lg:block" />{" "}
            sans compromis sur la qualité
          </h1>
          <p>
            Avec les offres Sunline, vous bénéficiez du prix le plus juste pour{" "}
            <br className="hidden lg:block" />
            un matériel de qualité et des garanties étendues
          </p>
          <Button
            as={Link}
            href="/contact"
            className="bg-black text-white py-7 rounded-full sm:w-[340px] sm:text-base mx-auto lg:m-0"
          >
            Je demande un RDV avec un conseiller
          </Button>
        </div>
      </div>
      <div className="bg-[#F9F9F9] py-5 xl:py-8">
        <h2 className="text-2xl text-center font-bold">Nos offres pour vous</h2>
      </div>
    </div>
  );
}
