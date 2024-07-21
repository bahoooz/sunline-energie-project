import Image from "next/image";
import React from "react";

export default function Etapes() {
  return (
    <div className="mb-20 lg:mb-36">
      <div className="grid grid-rows-3 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 w-[90%] sm:w-[450px] lg:w-[90%] xl:w-[1100px] 2xl:w-[1300px] gap-20 lg:gap-10 xl:gap-16 2xl:gap-20 mx-auto">
        <div>
          <div className="relative">
            <span className="absolute font-bold text-[#0B68A4] -top-9 left-2">
              Etape
            </span>
            <div className="absolute w-24 lg:w-20 h-20 lg:h-16 bg-[rgba(255,255,255,0.7)] flex justify-center items-center">
              <span className=" text-[#0B68A4] text-3xl font-bold">1</span>
            </div>
            <Image
              src={"/assets/img_etape_1.png"}
              width={553}
              height={370}
              alt="étape 1"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-bold mb-3">
              Votre devis solaire en 48 heures chrono
            </h3>
            <p className="text-justify">
              Votre expert solaire dédié vous conseille et dimensionne votre
              centrale solaire pour vous proposer le prix le plus juste par
              rapport à vos besoins.
            </p>
          </div>
        </div>
        <div className="relative">
          <span className="absolute font-bold text-[#0B68A4] -top-9 left-2">
            Etape
          </span>
          <div className="absolute w-24 lg:w-20 h-20 lg:h-16 bg-[rgba(255,255,255,0.7)] flex justify-center items-center">
            <span className=" text-[#0B68A4] text-3xl font-bold">2</span>
          </div>
          <div>
            <Image
              src={"/assets/img_etape_2.png"}
              width={553}
              height={370}
              alt="étape 2"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-bold mb-3">
              Démarches administratives
            </h3>
            <p className="text-justify">
              Notre équipe administrative se charge de demander les
              autorisations administratives nécessaires à la réalisation de
              votre projet solaire.
            </p>
          </div>
        </div>
        <div className="relative">
          <span className="absolute font-bold text-[#0B68A4] -top-9 left-2">
            Etape
          </span>
          <div className="absolute w-24 lg:w-20 h-20 lg:h-16 bg-[rgba(255,255,255,0.7)] flex justify-center items-center">
            <span className=" text-[#0B68A4] text-3xl font-bold">3</span>
          </div>
          <div>
            <Image
              src={"/assets/img_etape_3.png"}
              width={553}
              height={370}
              alt="étape 3"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-bold mb-3">
              Installation & Raccordement au réseau public
            </h3>
            <p className="text-justify">
              Nous faisons réaliser vos travaux par l’un den nos techniciens
              locaux RGE agréé, pour vous garantir une installation de qualité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
