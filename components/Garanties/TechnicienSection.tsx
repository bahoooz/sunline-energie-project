import Image from "next/image";
import React from "react";

export default function TechnicienSection() {
  return (
    <div className="my-24">
      <div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Des techniciens agréés audités et évalués après chaque intervention
          </h2>
          <p>
            Nos techniciens locaux agréées interviennent partout en
            Nouvelle-Aquitaine, avec les meilleures garanties de prestation de
            pose
          </p>
        </div>
        <Image
          src={"/assets/img_technicien.png"}
          width={936}
          height={936}
          alt="techniciens & panneaux solaires"
        />
      </div>
      <div>
        <div>
          <Image
            src={"/assets/logo_rge.png"}
            width={196}
            height={58}
            alt="logo RGE"
          />
          <h3>Certification RGE</h3>
          <p>
            Tous nos techniciens détiennent la  certification RGE  afin de vous
            faire bénéficier des aides d’Etat et de vous offrir la meilleure
            qualité de pose possible
          </p>{" "}
        </div>
        <div>
          <Image
            src={"/assets/assurance_icon.png"}
            width={196}
            height={58}
            alt="logo RGE"
          />
          <h3>Assurance décennale</h3>
          <p>
            Pendant les 10 années suivant l’installation, seront réparés tous
            dommages qui n’étaient pas décelables lors de la réception des
            travaux et qui compromettraient la solidité du bâti ou qui le
            rendraient inhabitable ou impropre à son usage
          </p>{" "}
        </div>
        <div>
          <Image
            src={"/assets/visite_controle_icon.png"}
            width={196}
            height={58}
            alt="logo RGE"
          />
          <h3>Visites de contrôle</h3>
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
