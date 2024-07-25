import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function SunlineAccompagne() {
  return (
    <div className="px-7 mb-20 sm:mb-28 xl:mb-36">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">
        Chez Sunline, quand on vous dit que l’on{" "}
        <br className="hidden sm:block" /> vous accompagne de A à Z,{" "}
        <span className="underline decoration-[#FFC800] decoration-8 underline-offset-4">
          on le fait !
        </span>
      </h2>
      <p className="text-center md:w-[650px] md:mx-auto">
        Nous avons à cœur de vous accompagner dans chacune des étapes de votre
        projet d’installation solaire. Grâce à notre expérience, nous serons à
        vos côtés dès la définition de votre projet et ce, jusqu’à la mise en
        service de votre installation.
      </p>
      <div className="mt-8 md:mt-12 text-center flex flex-col gap-5 md:gap-8">
        <p>Un expert conseil dédié pour répondre à vos questions</p>
        <p>
          Un chargé des démarches administrative dédié pour suivre l’avancée de
          votre dossier
        </p>
      </div>
      <div className="sm:flex sm:justify-center">
        <Button className="mt-12 md:mt-16 w-full sm:w-[300px] bg-[#FBAC18] py-7 text-base text-white rounded-full">
          Nos engagements <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
