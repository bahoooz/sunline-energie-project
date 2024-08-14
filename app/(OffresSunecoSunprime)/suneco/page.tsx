/* eslint-disable prettier/prettier */
import PageSunecoSunprime from "@/components/SunecoSunprime/PageSunecoSunprime";
import { Check, Star } from "lucide-react";
import Image from "next/image";
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
              Installation de qualité par nos techniciens RGE Sunline
            </span>
          </li>
        </>
      }
      imgGammeOffre={
        <div>
          <Image
            src={"/assets/SunPower_P7_Tier1_6-400x397_sans_garantie.png"}
            width={675}
            height={785}
            alt="image flash black"
            className="w-[80%] mx-auto mt-8 md:w-[600px] xl:w-full"
          />
        </div>
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
      stars_rating_3_SelectionExperts={
        <div className="flex">
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
        </div>
      }
      note_rating_1_SelectionExperts={4}
      note_rating_2_SelectionExperts={4}
      note_rating_3_SelectionExperts={5}
      descSelectionExperts="Recyclable à 95%, cette sélection de panneaux solaires allie
performance, durabilité et esthétisme."
      year_1_SelectionExperts={30}
      year_info_1_SelectionExperts="de garantie fabricant"
      year_2_SelectionExperts={30}
      year_info_2_SelectionExperts="de garantie de performance à 87%"
      title_2_SelectionExperts="Micro-onduleurs APSYSTEM DS3 avec pilotage selon votre situation"
      stars_rating_4_SelectionExperts={
        <div className="flex">
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
        </div>
      }
      stars_rating_5_SelectionExperts={
        <div className="flex">
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#444444" stroke="0" />
        </div>
      }
      stars_rating_6_SelectionExperts={
        <div className="flex">
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
        </div>
      }
      note_rating_4_SelectionExperts={5}
      note_rating_5_SelectionExperts={4}
      note_rating_6_SelectionExperts={5}
      desc_2_SelectionExperts="Ce micro onduleur dans sa version DS3 et d'une puissance de sortie
de 960VA rassemble toutes les innovations des générations précédentes."
      year_3_SelectionExperts={20}
      year_info_3_SelectionExperts="de garantie fabricant pour les
micro-onduleurs"
      year_4_SelectionExperts={5}
      year_info_4_SelectionExperts="de garantie fabricant pour la passerelle de communication"
      durability_rating_SelectionExperts={4}
      titleDescriptifTechnique="SunEco"
      yearDescriptionTechnique={20}
      logoApsystemsDescriptionTechnique={
        <div>
          <Image
            src={"/assets/apsystems-logo-1.png"}
            width={301}
            height={97}
            alt="logo apsystem"
            className="w-[270px] hover:scale-110 transition-all"
          />
        </div>
      }
    />
  );
}
