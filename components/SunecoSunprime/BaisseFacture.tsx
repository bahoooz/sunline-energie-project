import Image from "next/image";
import React from "react";

export default function BaisseFacture() {
  return (
    <div className="mt-20 bg-gradient-to-br from-[#FBAC18] from-10% to-[#ffce65] to-80% py-12 xl:py-20 lg:flex lg:items-center lg:justify-center lg:gap-16 xl:gap-20">
      <Image
        src={"/assets/couple-happy-e1675955799648-800x533.jpeg.png"}
        width={794}
        height={634}
        alt="image bannière"
        className="w-[90%] sm:w-3/4 md:w-[600px] lg:w-[450px] lg:max-w-[450px] mx-auto lg:mx-0 h-48 sm:h-64 lg:h-80 object-cover rounded-xl"
      />
      <div className="text-white text-center lg:text-start mt-8 lg:mt-0 px-7 lg:px-0 lg:w-[450px]">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          On vous garantit votre baisse de facture pendant 10 ans
        </h2>
        <p className="text-lg">
          Avec la garantie de conformité d’estimation de production, si votre
          production solaire annuelle est inférieure durant les 10 premières
          années à 85 % de ce que nous avons prévu lors de notre étude
          personnalisée, on vous rembourse la différence.
        </p>
      </div>
    </div>
  );
}
