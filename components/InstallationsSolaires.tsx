"use client";

import React from "react";
import SliderInstallationsSolaires from "./SliderInstallationsSolaire";

export default function InstallationsSolaires() {
  return (
    <div
      className="text-center my-20 md:my-28 2xl:my-32 py-12 sm:py-20 lg:py-28 bg-[#F9F9F9]"
      id="installations-solaires"
    >
      <h2 className="text-2xl lg:text-3xl font-bold px-7 mb-12 lg:mb-24">
        Déjà plus de 380 installations solaires réalisées partout en{" "}
        <br className="hidden md:block" />
        Nouvelle-Aquitaine
      </h2>
      <div className="flex justify-center">
        <SliderInstallationsSolaires />
      </div>
    </div>
  );
}
