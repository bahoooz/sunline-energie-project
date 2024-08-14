import React from "react";
import { Button } from "@nextui-org/button";
import BoxHeaderHome from "./BoxHeaderHome";
import Link from "next/link";

export default function HeaderHome() {
  return (
    <div>
      <div id="header-home" className="h-[50vh]">
        <div className="text-center lg:text-start flex flex-col gap-10 pt-24 2xl:pt-32 px-6 lg:px-24 2xl:px-48">
          <h1 className="text-white text-3xl lg:text-5xl font-semibold">
            En quelques clics, <br className="hidden lg:block" /> simulez
            votre futur installation photovoltaïque
          </h1>
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center">
            <Button
              as={Link}
              href="#page-simulateur"
              className="bg-[#FBAC18] text-white text-base px-8 py-6 w-fit"
            >
              Simulez votre installation Solaire
            </Button>
            <p className="text-white text-sm lg:mt-2">
              Recevez immédiatement votre &eacute;tude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
