import Image from "next/image";
import React from "react";

export default function MeilleursProduits() {
  return (
    <div className="mt-20 flex flex-col gap-16 xl:gap-24 lg:items-center">
      <div>
        <div className="text-center px-7 flex flex-col gap-5 sm:items-center">
          <h2 className="text-2xl font-bold sm:max-w-[600px]">
            Une installation solaire avec les meilleurs produits, la clef de la
            rentabilité de votre investissement
          </h2>
          <p className="sm:max-w-[600px]">
            D’un seul doigt, pilotez vos équipements  énergivores, suivez votre
            consommation d’énergie et optimisez votre production solaire
            d’énergie
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center mt-12 lg:mt-20 gap-10 lg:gap-12 xl:gap-24 2xl:gap-32">
          <Image
            src={"/assets/dualsun-flash-vue-regroupee-panneaux-1024x576 1.png"}
            width={592}
            height={508}
            alt="panneaux photovoltaïques"
            className="w-[250px] mx-auto lg:m-0 lg:w-[300px] xl:w-[350px] 2xl:w-[400px]"
          />
          <div className="bg-[#F5F6F7] text-center lg:text-start px-7 py-8 sm:flex sm:flex-col sm:items-center lg:items-start lg:w-[550px] xl:w-[600px]">
            <h3 className="font-bold text-xl mb-8 sm:w-[500px] md:w-[650px] lg:w-[450px] xl:w-[500px]">
              Des panneaux photovoltaïques dernière génération assemblé en
              France
            </h3>
            <p className="mb-8 sm:w-[500px] md:w-[650px] lg:w-[450px] xl:w-[500px]">
              Le panneau solaire FLASH Half-Cut Black de DualSun est conçu pour
              des projets d’autoconsommation sans compromis sur l’esthétisme
              afin de conserver toute l’élégance du bâtiment. Un panneau
              photovoltaïque à haut rendement et bas carbone. Dans des usines
              sélectionnées avec soin et strictement auditée, et suivant un
              cahier des charges conçu en Provence par des ingénieurs experts.
            </p>
            <div className="w-6 h-1 bg-[#2BA0B5] mx-auto lg:mx-0 mb-8"></div>
            <span className="text-lg font-bold">30 ans</span>
            <p className="mt-2">de garantie fabricant</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center px-7 flex flex-col gap-5 sm:items-center">
          <h2 className="text-2xl font-bold sm:max-w-[600px]">
            Une installation solaire qui vous protège des coupures de courant
          </h2>
          <p className="sm:max-w-[600px]">
            Une centrale solaire avec une solution de stockage intégrée
            permettant de se prémunir des coupures de courant
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center mt-12 lg:mt-20 gap-10 lg:gap-12 xl:gap-24 2xl:gap-32 xl:h-auto">
          <Image
            src={"/assets/IQ8-60-M-US_1 1.png"}
            width={573}
            height={673}
            alt="micro onduleur"
            className="w-[250px] mx-auto lg:m-0 lg:w-[300px] xl:w-[350px] 2xl:w-[400px] object-cover h-[230px] lg:h-[270px] xl:h-[320px] 2xl:h-[360px]"
          />
          <div className="bg-[#F5F6F7] text-center lg:text-start px-7 py-8 sm:flex sm:flex-col sm:items-center lg:items-start lg:w-[550px] xl:w-[600px]">
            <h3 className="font-bold text-xl mb-8 sm:w-[500px] md:w-[650px] lg:w-[450px] xl:w-[500px]">
              Une sélection de Micro-Onduleur(s) solaires fiables rigoureusement
              choisies par nos experts en énergie
            </h3>
            <p className="mb-8 sm:w-[500px] md:w-[650px] lg:w-[450px] xl:w-[500px]">
              Grâce à la puce intelligente des micro-onduleurs Enphase IQ8HC la
              distribution d&apos;électricité dans le logement peut être régulée
              en temps réel. En optimisant la production d&apos;énergie, vous
              réduisez les coûts d&apos;électricité..
            </p>
            <div className="w-6 h-1 bg-[#2BA0B5] mx-auto lg:mx-0 mb-8"></div>
            <span className="text-lg font-bold">25 ans</span>
            <p className="mt-2">de garantie fabricant</p>
          </div>
        </div>
      </div>
    </div>
  );
}
