import React from "react";
import GammeOffre from "./GammeOffre";
import OffreSolairePerformante from "./OffreSolairePerformante";
import SelectionExperts from "./SelectionExperts";
import ProduitsSuneco from "@/components/ProduitsSuneco";
import ProduitsSunprime from "@/components/ProduitsSunprime";
import BaisseFacture from "./BaisseFacture";
import DescriptifTechnique from "./DescriptifTechnique";
import SunlineAccompagne from "./SunlineAccompagne";
import Etapes from "./Etapes";
import InstallationsSolaires from "@/components/InstallationsSolaires";

interface PageProps {
  titleGammeOffre: string;
  descGammeOffre: string;
  priceGammeOffre: string | number;
  listGammeOffre: React.ReactElement;
  imgGammeOffre: HTMLDivElement | any;
  percentOffreSolairePerformante: number;
  kwhOffreSolairePerformante: string | number;
  titleSelectionExperts: string;
  descSelectionExperts: string;
  titleDescriptifTechnique: string;
  yearDescriptionTechnique: number;
}

export default function PageSunecoSunprime({
  titleGammeOffre,
  descGammeOffre,
  priceGammeOffre,
  listGammeOffre,
  imgGammeOffre,
  percentOffreSolairePerformante,
  kwhOffreSolairePerformante,
  titleSelectionExperts,
  descSelectionExperts,
  titleDescriptifTechnique,
  yearDescriptionTechnique,
}: PageProps) {
  const isSuneco = titleGammeOffre.toLowerCase().includes("suneco");

  return (
    <>
      <GammeOffre
        title={titleGammeOffre}
        desc={descGammeOffre}
        price={priceGammeOffre}
        list={listGammeOffre}
        img={imgGammeOffre}
      />
      <OffreSolairePerformante
        percent={percentOffreSolairePerformante}
        kwh={kwhOffreSolairePerformante}
      />
      <SelectionExperts
        title={titleSelectionExperts}
        desc={descSelectionExperts}
      />
      {isSuneco ? <ProduitsSuneco /> : <ProduitsSunprime />}
      <BaisseFacture />
      <DescriptifTechnique
        title={titleDescriptifTechnique}
        year={yearDescriptionTechnique}
      />
      <SunlineAccompagne />
      <Etapes />
      <InstallationsSolaires />
    </>
  );
}
