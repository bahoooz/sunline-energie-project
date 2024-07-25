import Image from "next/image";
import React from "react";

export default function TechnicienSection() {
  return (
    <div className="my-24 lg:my-32">
      <div className="mb-20 lg:mb-32 2xl:mb-40 lg:flex lg:items-center lg:justify-center lg:gap-[5vw] xl:gap-24 2xl:gap-32">
        <div className="text-center lg:text-start px-7 lg:px-0 mb-16 lg:mb-0 lg:w-[400px]">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">
            Des techniciens agréés audités et évalués après chaque intervention
          </h2>
          <p>
            Nos techniciens locaux agréées interviennent partout en
            Nouvelle-Aquitaine, avec les meilleures garanties de prestation de
            pose.
          </p>
        </div>
        <Image
          src={"/assets/img_technicien.png"}
          width={936}
          height={936}
          alt="techniciens & panneaux solaires"
          className="sm:w-[500px] sm:mx-auto lg:mx-0"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center items-center text-center gap-16 lg:gap-8">
        <div className="px-7 flex flex-col items-center gap-8 sm:w-[450px]">
          <Image
            src={"/assets/logo_rge.png"}
            width={196}
            height={58}
            alt="logo RGE"
            className="h-[50px] w-auto"
          />
          <h3 className="text-lg font-bold">Certification RGE</h3>
          <p>
            Tous nos techniciens détiennent la  certification RGE  afin de vous
            faire bénéficier des aides d’Etat et de vous offrir la meilleure
            qualité de pose possible
          </p>{" "}
        </div>
        <div className="px-7 flex flex-col items-center gap-8 sm:w-[450px]">
          <Image
            src={"/assets/assurance_icon.png"}
            width={54}
            height={65}
            alt="logo RGE"
            className="h-[55px] w-auto"
          />
          <h3 className="text-lg font-bold">Assurance décennale</h3>
          <p>
            Pendant les 10 années suivant l’installation, seront réparés tous
            dommages qui n’étaient pas décelables lors de la réception des
            travaux et qui compromettraient la solidité du bâti ou qui le
            rendraient inhabitable ou impropre à son usage
          </p>{" "}
        </div>
        <div className="px-7 flex flex-col items-center gap-8 sm:w-[450px]">
          <Image
            src={"/assets/visite_controle_icon.png"}
            width={64}
            height={64}
            alt="logo RGE"
            className="h-[50px] w-auto"
          />
          <h3 className="text-lg font-bold">Visites de contrôle</h3>
          <p>
            Nos équipes contrôlent aléatoirement la qualité des installations
            réalisées et interrogent systématiquement les clients 1 mois après
            la mise en service pour connaître leur satisfaction.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
