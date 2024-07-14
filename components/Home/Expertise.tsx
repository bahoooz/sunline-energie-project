import React from "react";
import BoxExpertise from "./BoxExpertise";
import { Button } from "@nextui-org/button";

export default function Expertise() {
  return (
    <div className="bg-[#F5F6F7] mt-24 py-10">
      <h2 className="text-center text-2xl px-5 font-bold mb-10 lg:mb-20">
        Reposez-vous sur notre expertise
      </h2>
      <div className="flex flex-col gap-20 lg:flex-row lg:flex-wrap lg:justify-center relative">
        <div className="hidden 2xl:flex absolute h-[2px] w-[1300px] x-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[35.5%] bg-black"></div>
        <BoxExpertise
          icon="/assets/icon_dimensionnement.png"
          number={1}
          title="Dimensionnement"
          desc="Nous prenons en compte la surface, l'inclinaison
          et l’ensoleillement de votre toiture, ainsi que
          votre consommation d’électricité pour calculer
          le nombre optimal de panneaux pour votre toit."
          width={84}
          height={84}
        />
        <BoxExpertise
          icon="/assets/icon_rentabilité.png"
          number={2}
          title="Rentabilité"
          desc="Avec notre étude, évaluez avec précision la
          rentabilité de vos panneaux solaires, garantis
          pendant 30 ans. Une fois votre installation
          amortie, vous profitez d’une source d’énergie
          gratuite et durable."
          width={85}
          height={84}
        />
        <BoxExpertise
          icon="/assets/icon_conseiller.png"
          number={3}
          title="Un conseiller aux petits soins"
          desc="Un expert solaire Sunline vous accompagne
          du début à la fin de votre projet :
          dimensionnement, démarches administratives et
          suivi de votre installation, pendant toute sa vie
          de production. À vous le soleil !"
          width={85}
          height={84}
        />
      </div>
      <Button>Demander un devis personnalisé</Button>
    </div>
  );
}
