import React from "react";
import CardGaranties from "./CardGaranties";

export default function GarantiesComplementaires() {
  return (
    <div id="garanties-home" className="min-h-[600px] w-full mt-20 py-20 sm:py-28 xl:py-32">
      <h2 className="text-2xl sm:text-3xl xl:text-4xl text-white text-center px-5">
        Profitez de garanties complémentaires <br className="hidden sm:block" /> exclusives Sunline
      </h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-12 lg:gap-20 items-center mt-16 sm:mt-20 xl:mt-24 xl:px-12">
        <CardGaranties
          title="Jusqu’à 5 ans
de maintenance pour votre centrale solaire"
          desc="Nous vous offrons la maintenance de votre installation pendant 5 ans, nos techniciens se déplacent une fois par ans pour nettoyer et vérifier."
        />
        <CardGaranties
          title="Jusqu’à 10 ans de garantie
de réduction de facture
Satisfait ou Remboursé"
          desc="Nous vous remboursons la différence si
vous ne faites pas les économies
annoncées lors de l’étude d’une offre
sur-mesure"
        />
        <CardGaranties
          title="Garantie décennale contre
tout dommage à votre
maison"
          desc="Vous êtes intégralement couvert en cas
de dommage compromettant la solidité
du bâti ou qui le rendrait inhabitable ou
impropre à son usage"
        />
      </div>
    </div>
  );
}
