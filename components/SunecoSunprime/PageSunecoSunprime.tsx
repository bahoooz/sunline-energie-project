import React, { ReactElement } from "react";
import GammeOffre from "./GammeOffre";
import OffreSolairePerformante from "./OffreSolairePerformante";
import SelectionExperts from "./SelectionExperts";
import BaisseFacture from "./BaisseFacture";
import DescriptifTechnique from "./DescriptifTechnique";
import SunlineAccompagne from "./SunlineAccompagne";
import Etapes from "./Etapes";

interface PageSunecoSunprime {
  titleGammeOffre: string;
  descGammeOffre: string;
  priceGammeOffre: string | number;
  listGammeOffre: ReactElement;
  percentOffreSolairePerformante: number;
  kwhOffreSolairePerformante: string | number;
  titleSelectionExperts: string;
  stars_rating_1_SelectionExperts: HTMLDivElement | any;
  stars_rating_2_SelectionExperts: HTMLDivElement | any;
  descSelectionExperts: string;
  year_1_SelectionExperts: number;
  year_2_SelectionExperts: number;
  year_info_1_SelectionExperts: string;
  year_info_2_SelectionExperts: string;
  title_2_SelectionExperts: string;
  stars_rating_3_SelectionExperts: HTMLDivElement | any;
  stars_rating_4_SelectionExperts: HTMLDivElement | any;
  desc_2_SelectionExperts: string;
  year_3_SelectionExperts: number;
  year_4_SelectionExperts: number;
  year_info_3_SelectionExperts: string;
  year_info_4_SelectionExperts: string;
  durability_rating_SelectionExperts?: number;
  titleDescriptifTechnique: string;
  yearDescriptionTechnique: number;
}

export default function PageSunecoSunprime({
  titleGammeOffre,
  descGammeOffre,
  priceGammeOffre,
  listGammeOffre,
  percentOffreSolairePerformante,
  kwhOffreSolairePerformante,
  titleSelectionExperts,
  stars_rating_1_SelectionExperts,
  stars_rating_2_SelectionExperts,
  descSelectionExperts,
  year_1_SelectionExperts,
  year_2_SelectionExperts,
  year_info_1_SelectionExperts,
  year_info_2_SelectionExperts,
  title_2_SelectionExperts,
  stars_rating_3_SelectionExperts,
  stars_rating_4_SelectionExperts,
  desc_2_SelectionExperts,
  year_3_SelectionExperts,
  year_4_SelectionExperts,
  year_info_3_SelectionExperts,
  year_info_4_SelectionExperts,
  durability_rating_SelectionExperts,
  titleDescriptifTechnique,
  yearDescriptionTechnique,
}: PageSunecoSunprime) {
  return (
    <>
      <GammeOffre
        title={titleGammeOffre}
        desc={descGammeOffre}
        price={priceGammeOffre}
        list={listGammeOffre}
      />
      <OffreSolairePerformante
        percent={percentOffreSolairePerformante}
        kwh={kwhOffreSolairePerformante}
      />
      <SelectionExperts
        title={titleSelectionExperts}
        stars_rating_1={stars_rating_1_SelectionExperts}
        stars_rating_2={stars_rating_2_SelectionExperts}
        desc={descSelectionExperts}
        year_1={year_1_SelectionExperts}
        year_info_1={year_info_1_SelectionExperts}
        year_2={year_2_SelectionExperts}
        year_info_2={year_info_2_SelectionExperts}
        title_2={title_2_SelectionExperts}
        stars_rating_3={stars_rating_3_SelectionExperts}
        stars_rating_4={stars_rating_4_SelectionExperts}
        desc_2={desc_2_SelectionExperts}
        year_3={year_3_SelectionExperts}
        year_info_3={year_info_3_SelectionExperts}
        year_4={year_4_SelectionExperts}
        year_info_4={year_info_4_SelectionExperts}
        durability_rating={durability_rating_SelectionExperts}
      />
      <BaisseFacture />
      <DescriptifTechnique
        title={titleDescriptifTechnique}
        year={yearDescriptionTechnique}
      />
      <SunlineAccompagne />
      <Etapes />
    </>
  );
}
