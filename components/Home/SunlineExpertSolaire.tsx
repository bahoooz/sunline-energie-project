import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";

export default function SunlineExpertSolaire() {
  return (
    <div className="my-32 xl:my-44">
      <div className="xl:flex xl:flex-row-reverse xl:justify-center xl:gap-24 2xl:gap-32">
        <Image
          src={"/assets/sunline-expert-solaire-img.png"}
          width={792}
          height={792}
          alt="image panneaux solaires"
          className="h-[200px] sm:h-[300px] object-cover object-center rounded-3xl xl:rounded-none sm:w-[600px] lg:w-[800px] xl:w-[400px] 2xl:w-[500px] xl:h-[400px] 2xl:h-[500px] sm:mx-auto xl:mx-0"
        />
        <div className="text-center xl:text-start mt-12 xl:mt-0">
          <h2 className="text-2xl lg:text-3xl font-bold px-8 xl:px-0">
            Sunline ; l’expert du Solaire <br className="hidden xl:block" /> en
            Nouvelle-Aquitaine
          </h2>
          <div className="flex justify-center xl:justify-start">
            <p className="px-8 sm:px-0 sm:max-w-[600px] xl:max-w-[500px] mt-10">
              Sunline est une entreprise de référence dans le milieu de solaire
              et dans les énergies renouvelables. Sunline s’est donné pour
              objectif de rendre le solaire accessible à tous, en offrant le
              meilleur compromis entre prix, rentabilité et performance.
            </p>
          </div>
          <Button className="mt-10 2xl:mt-20 bg-[#FBAC18] text-white px-7 py-6 rounded-full text-base">
            Découvrez notre entreprise
          </Button>
        </div>
      </div>
      <div className="mt-20 xl:mt-28 2xl:mt-40 xl:flex xl:justify-center  xl:gap-10">
        <div className="h-40 2xl:h-48 bg-[#F4F4F4] flex flex-col justify-center items-center gap-2 xl:px-10 2xl:px-16">
          <span className="text-5xl">4</span>
          <p className="text-center">
            ans d’expertise <br /> solaire
          </p>
        </div>
        <div className="h-40 2xl:h-48 flex flex-col justify-center items-center gap-2 xl:px-10 2xl:px-16">
          <span className="text-5xl">319</span>
          <p className="text-center">
            installation solaires <br /> réalisées
          </p>
        </div>
        <div className="h-40 2xl:h-48 bg-[#F4F4F4] flex flex-col justify-center items-center gap-2 xl:px-10 2xl:px-16">
          <span className="text-5xl">1261</span>
          <p className="text-center">
            panneaux solaires <br /> installés
          </p>
        </div>
        <div className="h-40 2xl:h-48 flex flex-col justify-center items-center gap-2 xl:px-10 2xl:px-16">
          <span className="text-5xl">1</span>
          <p className="text-center">
            MW installés en <br /> Nouvelle-Aquitaine
          </p>
        </div>
      </div>
    </div>
  );
}
