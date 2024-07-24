import React from "react";

export default function EquipeEngagée() {
  return (
    <div
      id="equipe-engagee"
      className="text-white py-16 px-7 md:px-[10vw] 2xl:px-56 mt-24 lg:mt-32"
    >
      <div className="flex flex-col gap-12">
        <h2 className="text-2xl lg:text-3xl font-bold">
          Une équipe engagée dédiée à votre projet
        </h2>
        <p className="text-justify md:max-w-[600px]">
          Tout au long du projet, vous êtes accompagnés par un expert en énergie
          solaire et un responsable des démarches administratives. Notre mission
          sera la réalisation de votre installation photovoltaïque.
        </p>
        <div className="bg-[rgba(255,255,255,0.85)] text-black p-5 md:p-8 lg:px-12 md:max-w-[700px] lg:max-w-[90%] 2xl:max-w-[1100px]">
          <h4 className="mb-5 font-semibold underline">
            Nous nous engageons par contrat à :
          </h4>
          <p>
            Obtenir toutes les autorisations administratives nécessaires à la
            réalisation de votre installation.
            <br /> <br />
            Vous fournir une installation photovoltaïque impeccable.
            <br /> <br />
            Assurer le raccordement des panneaux solaires.
            <br /> <br />A renseigner la déclaration attestant de l’achèvement
            et de la conformité de l’installation.
          </p>
        </div>
      </div>
    </div>
  );
}
