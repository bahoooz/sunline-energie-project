import React from "react";

interface OffreSolairePerformante {
  percent: number;
  kwh: string | number;
}

export default function OffreSolairePerformante({
  percent,
  kwh,
}: OffreSolairePerformante) {
  return (
    <div className="mt-20">
      <div className="lg:flex lg:px-12 lg:gap-10 xl:gap-20 2xl:gap-32 lg:justify-center">
        <div className="lg:w-[650px]">
          <h2 className="text-2xl font-bold text-center lg:text-start px-7 lg:px-0 lg:mt-3">
            L’offre solaire performante et flexible{" "}
            <br className="hidden lg:block" /> qui optimise votre réduction de
            facture
          </h2>
          <div className="flex flex-col md:flex-row w-[90%] sm:w-[450px] md:w-[90%] lg:w-full mx-auto lg:mx-0 gap-5 md:gap-8 my-12 md:my-16 lg:my-8 ">
            <div className="bg-[#F9F9F9] flex items-center justify-center gap-5 md:gap-8 py-10 lg:w-[60%] xl:w-fit">
              <span className="text-xl">{percent}%</span>
              <p className="w-1/2 font-bold">
                max. de réduction immédiate de facture d’électricité
              </p>
            </div>
            <div className="bg-[#F9F9F9] flex items-center justify-center gap-5 md:gap-8 py-10">
              <span className="text-xl">{kwh} kWh</span>
              <p className="w-1/2 font-bold">
                max. de production avec votre centrale solaire
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] sm:w-[400px] xl:w-[350px] mx-auto lg:mx-0 bg-gradient-to-br from-[#114B68] from-60% via-[#274051] via-75% to-[#38373F] py-10 px-8 lg:px-0 text-white rounded-3xl font-bold">
          <h3 className="text-center text-xl mb-12 lg:px-8">
            Accompagnement Zéro Tracas
          </h3>
          <span className="text-5xl lg:pl-8">5 ans</span>
          <p className="text-3xl mt-10 w-4/5 lg:w-full lg:pl-8">
            de maintenances <br className="hidden lg:block" /> offerte sur votre{" "}
            <br className="hidden lg:block" />
            centrale solaire
          </p>
        </div>
      </div>
    </div>
  );
}
