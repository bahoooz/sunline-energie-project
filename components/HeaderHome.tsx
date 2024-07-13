/* eslint-disable prettier/prettier */
import React from "react";
import { Button } from "@nextui-org/button";
import SliderHomeHeader from "./SliderHomeHeader";

export default function HeaderHome() {
  return (
    <div id="header-home" className="min-h-[600px]">
      <div className="text-center flex flex-col gap-10 pt-12 px-6">
        <h1 className="text-white text-3xl font-semibold">
          Votre énergie solaire, notre engagement durable
        </h1>
        <div>
          <Button className="bg-[#292929] text-white text-base px-8 py-6">
            Découvrez nos offres
          </Button>
          <p className="text-white mt-5 text-sm">Expert solaire en Nouvelle Aquitaine</p>
        </div>
      </div>
      <SliderHomeHeader />
    </div>
  );
}
