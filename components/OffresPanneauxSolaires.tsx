import React from "react";
import SliderOffres from "./Home/SliderOffres";

export default function OffresPanneauxSolaires() {
  return (
    <div className="mt-20" id="offres-panneaux-solaires">
      <div className="text-center">
        <p className="text-[#425A9E] font-semibold mb-5">
          A chacun son offre clé en main
        </p>
        <h2 className="text-2xl font-bold px-8 md:text-3xl">
          Des offres de panneaux solaires qui s’adaptent à vos{" "}
          <br className="hidden md:block" /> besoins et à votre budget
        </h2>
        <div className="flex justify-center">
          <p className="px-8 mt-10 md:max-w-[1000px]">
            Sunline vous accompagne tout au long de votre projet d’installation
            de panneaux solaires : dimensionnement de l’installation,
            négociation des prix, sélection des meilleurs professionnels RGE,
            contrôle qualité de l’installation. On s’occupe même des démarches
            administratives pour vous faire bénéficier des aides panneau solaire
            accordées par l’Etat !
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <SliderOffres />
      </div>
    </div>
  );
}
