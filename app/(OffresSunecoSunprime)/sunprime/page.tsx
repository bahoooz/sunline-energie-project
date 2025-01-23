/* eslint-disable prettier/prettier */
import PageSunecoSunprime from "@/components/SunecoSunprime/PageSunecoSunprime";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Sunprime() {
  return (
    <PageSunecoSunprime
      titleGammeOffre="SunPrime"
      descGammeOffre="Le solaire de dernière génération garantie 30 ans, à performances exceptionnelles et au design élégant"
      priceGammeOffre={"12 390"}
      listGammeOffre={
        <>
          <li className="flex items-center gap-5">
            <Check color="#00A06B" size={20} strokeWidth={3} />
            <span className="max-w-[80%]">
              Panneaux solaires de très haut rendement garantis 30 ans et avec
              puissance garantie à 91.8% à 30 ans
            </span>
          </li>
          <li className="flex items-center gap-5">
            <Check color="#00A06B" size={20} strokeWidth={3} />
            <span className="max-w-[80%]">
              Pilotage du ballon d'eau chaude 
            </span>
          </li>
          <li className="flex items-center gap-5">
            <Check color="#00A06B" size={20} strokeWidth={3} />
            <span className="max-w-[80%]">
              Technologie photovoltaïque “TOPCon” dernière génération
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
            src={"/assets/dual-pv.png"}
            width={675}
            height={785}
            alt="image 500wc flash black"
            className="w-[80%] mx-auto mt-8 md:w-[600px] xl:w-full"
          />
        </div>
      }
      percentOffreSolairePerformante={60}
      kwhOffreSolairePerformante="6 800"
      titleSelectionExperts="Panneaux solaires 500Wc monocristallins dernière
génération avec technologie Half-Cut Bi-Facial"
      stars_rating_1_SelectionExperts={
        <div className="flex">
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
        </div>
      }
      stars_rating_2_SelectionExperts={
        <div className="flex">
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
          <Star fill="#FFBB00" stroke="0" />
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
      note_rating_1_SelectionExperts={5}
      note_rating_2_SelectionExperts={5}
      note_rating_3_SelectionExperts={5}
      descSelectionExperts="Recyclable à 95%, cette sélection de panneaux solaires allie
performance, durabilité et esthétisme."
      year_1_SelectionExperts={30}
      year_info_1_SelectionExperts="de garantie fabricant"
      year_2_SelectionExperts={30}
      year_info_2_SelectionExperts="de garantie de performance à 91.8%"
      title_2_SelectionExperts="Micro-onduleurs ENPHASE avec interface de gestion"
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
          <Star fill="#FFBB00" stroke="0" />
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
      note_rating_5_SelectionExperts={5}
      note_rating_6_SelectionExperts={5}
      desc_2_SelectionExperts="Les micro-onduleurs IQ8P Enphase sont la dernière génération de micro-onduleurs. 
Ils sont conçus pour les modules photovoltaïques dernière génération à haut rendement."
      year_3_SelectionExperts={25}
      year_info_3_SelectionExperts="de garantie fabricant pour les
micro-onduleurs"
      year_4_SelectionExperts={5}
      year_info_4_SelectionExperts="de garantie fabricant pour la passerelle de communication"
      durability_rating_SelectionExperts={5}
      titleDescriptifTechnique="SunPrime"
      yearDescriptionTechnique={25}
      logoEnphaseDescriptionTechnique={
        <div>
          <Image
            src={"/assets/enphase_logo.png"}
            width={301}
            height={55}
            alt="logo enphase"
            className="w-[250px] hover:scale-110 transition-all"
          />
        </div>
      }
    />
  );
}
