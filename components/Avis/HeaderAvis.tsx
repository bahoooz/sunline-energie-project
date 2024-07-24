import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeaderAvis() {
  return (
    <div>
      <div className="lg:flex lg:h-[500px]">
        <Image
          src={"/assets/img-avis.png"}
          width={1037}
          height={692}
          alt="image maison"
          className="h-40 sm:h-60 lg:h-full lg:max-w-[40%] object-cover object-bottom"
        />
        <div className="bg-[#EA4335] text-white text-center px-7 lg:px-16 2xl:px-44 py-12 flex flex-col gap-8 sm:gap-10 lg:justify-center lg:text-start lg:w-full">
          <h1 className="text-2xl lg:text-3xl font-bold">
            300 clients heureux d’être devenus{" "}
            <br className="hidden lg:block" /> producteurs d’énergie
          </h1>
          <p>
            Depuis 2019, Sunline s’est engagé à faire profiter sans risque à
            tous du meilleur de la technologie solaire,{" "}
            <br className="hidden lg:block" /> pour la production d’énergie
            locale et en circuit court. Nous remercions nos 3000 clients de leur
            confiance !
          </p>
        </div>
      </div>
    </div>
  );
}
