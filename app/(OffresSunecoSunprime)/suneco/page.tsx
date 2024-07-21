/* eslint-disable prettier/prettier */
import PageSunecoSunprime from "@/components/SunecoSunprime/PageSunecoSunprime";
import { Check, Star } from "lucide-react";
import React from "react";

export default function Suneco() {
  return (
    <PageSunecoSunprime
      titleGammeOffre="SunEco"
      descGammeOffre="Performance et flexibilité permettant d’optimiser la production et l’autoconsommation"
      priceGammeOffre={"5990"}
      listGammeOffre={
        <>
          <li className="flex items-center gap-5">
            <Check color="#00A06B" size={20} strokeWidth={3} />
            <span className="max-w-[80%]">
              Panneaux solaires à haut rendement de dernière génération
            </span>
          </li>
          <li className="flex items-center gap-5">
            <Check color="#00A06B" size={20} strokeWidth={3} />
            <span className="max-w-[80%]">
              Gestionnaire d’énergie intelligent inclus
            </span>
          </li>
          <li className="flex items-center gap-5">
            <Check color="#00A06B" size={20} strokeWidth={3} />
            <span className="max-w-[80%]">
              Compatible avec une batterie solaire
            </span>
          </li>
          <li className="flex items-center gap-5">
            <Check color="#00A06B" size={20} strokeWidth={3} />
            <span className="max-w-[80%]">Garanties d’économies de 10 ans</span>
          </li>
          <li className="flex items-center gap-5">
            <Check color="#00A06B" size={20} strokeWidth={3} />
            <span className="max-w-[80%]">
              Installation de qualité par technicien RGE Sunline
            </span>
          </li>
        </>
      }
      percentOffreSolairePerformante={50}
      kwhOffreSolairePerformante="3 400"
      titleSelectionExperts="Panneaux solaires 500Wc monocristallins dernière
génération avec technologie Half-Cut"
      stars_rating_1_SelectionExperts={
        <div className="flex">
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#444444" stroke="0" />
        </div>
      }
      stars_rating_2_SelectionExperts={
        <div className="flex">
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#444444" stroke="0" />
        </div>
      }
      descSelectionExperts="Recyclable à 95%, cette sélection de panneaux solaires allie
performance, durabilité et esthétisme."
      year_1_SelectionExperts={30}
      year_info_1_SelectionExperts="de garantie fabricant"
      year_2_SelectionExperts={30}
      year_info_2_SelectionExperts="de garantie de performance à 87%"
      title_2_SelectionExperts="Micro-onduleurs APSYSTEM avec optimiseur selon votre situation"
      stars_rating_3_SelectionExperts={
        <div className="flex">
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
        </div>
      }
      stars_rating_4_SelectionExperts={
        <div className="flex">
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#444444" stroke="0" />
        </div>
      }
      desc_2_SelectionExperts="Ce micro onduleur dans sa version DS3 et d'une puissance de sortie
de 880VA rassemble toutes les innovations des générations précédentes."
      year_3_SelectionExperts={20}
      year_info_3_SelectionExperts="de garantie fabricant pour les
micro-onduleurs"
      year_4_SelectionExperts={5}
      year_info_4_SelectionExperts="de garantie fabricant pour la passerelle de communication"
      durability_rating_SelectionExperts={4}
      titleDescriptifTechnique="SunEco"
      yearDescriptionTechnique={20}
    />
  );
}
