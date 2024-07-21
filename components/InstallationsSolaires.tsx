import Image from "next/image";
import React from "react";

export default function InstallationsSolaires() {
  return (
    <div
      className="text-center my-20 md:my-28 2xl:my-32 py-12 sm:py-20 lg:py-28 bg-[#F9F9F9]"
      id="installations-solaires"
    >
      <h2 className="text-2xl lg:text-3xl font-bold px-7 mb-12 lg:mb-24">
        Déjà plus de 300 installations solaires réalisées partout en{" "}
        <br className="hidden md:block" />
        Nouvelle-Aquitaine
      </h2>
      <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-12 lg:gap-6 lg:px-8 2xl:w-fit 2xl:gap-12 2xl:mx-auto">
        <div className="w-[90%] md:w-[70%] mx-auto  lg:w-full 2xl:w-[450px]">
          <Image
            src={"/assets/installation-solaire-1.png"}
            width={742}
            height={451}
            alt="installation solaire 1"
            className="rounded-md mb-3"
          />
          <h4>Installation solaire - 6kWc - Angoulême</h4>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto lg:w-full 2xl:w-[450px]">
          <Image
            src={"/assets/installation-solaire-2.png"}
            width={742}
            height={451}
            alt="installation solaire 2"
            className="rounded-md mb-3"
          />
          <h4>Installation solaire - 9kWc - Deux-Sèvres</h4>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto lg:w-full 2xl:w-[450px]">
          <Image
            src={"/assets/installation-solaire-3.png"}
            width={742}
            height={451}
            alt="installation solaire 3"
            className="rounded-md mb-3"
          />
          <h4>Installation solaire - 9kWc - Vendée</h4>
        </div>
      </div>
    </div>
  );
}
