import React from "react";
import { Button } from "@nextui-org/button";
import BoxHeaderHome from "./BoxHeaderHome";
import Link from "next/link";

export default function HeaderHome() {
  return (
    <div>
      <div id="header-home" className="h-[70vh]">
        <div className="text-center lg:text-start flex flex-col gap-10 pt-18 2xl:pt-18 px-6 lg:px-16 2xl:px-24">
          <h1 className="text-white text-3xl lg:text-5xl font-semibold">
            Votre énergie solaire, <br className="hidden lg:block" /> notre
            engagement durable
          </h1>
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center">
            <Button
              as={Link}
              href="#page-simulateur"
              className="bg-[#292929] text-white text-base px-8 py-6 w-fit"
            >
              Simulez votre installation Solaire
            </Button>
            <p className="text-white text-sm lg:mt-2">
              Recevez immédiatement l'étude détaillée
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
