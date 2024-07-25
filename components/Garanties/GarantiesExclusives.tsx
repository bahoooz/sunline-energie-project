import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GarantiesExclusives() {
  return (
    <div className="bg-[#F5F6F7] py-16 lg:py-24 mt-20 lg:my-32">
      <div className="flex flex-col gap-12 px-7">
        <h2 className="text-center text-2xl font-bold">
          Des garanties exclusives Sunline <br className="hidden sm:block" />{" "}
          pour produire sereinement son énergie solaire
        </h2>
        <p className="text-center">
          Pendant les 5 à 10 prochaines années, votre installation solaire
          sur-mesure vous permettra de réduire à coup sûr votre facture
          d’électricité.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center items-center mt-16 gap-10 md:px-12">
        <div className="bg-white text-center flex flex-col items-center justify-center rounded-3xl w-[90%] sm:w-[450px] md:w-[350px] shadow-sm px-5 h-[750px]">
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-xl mb-2">
              Garantie de réduction de facture
            </h4>
            <p className="mb-8">Vos économies sont garanties ou remboursées</p>
            <p className="text-sm mb-3">Jusqu&apos;à</p>
            <span className="text-5xl font-bold">10 ans</span>
            <Image
              width={300}
              height={490}
              src={"/assets/Maxeon-SunPower_P7-200x326.png.webp.png"}
              alt="image panneau solaire"
              className="h-40 lg:h-48 w-auto my-12"
            />
            <p>
              Pendant 10 ans, si vous ne faites pas les économies promises par
              notre étude, on vous rembourse la différence. Pour en savoir plus,
              prenez RDV avec l’un de nos experts.
            </p>
            <Button
              className="bg-[#FBAC18] text-white px-7 rounded-full py-7 mt-8 text-base"
              as={Link}
              href="/contact"
            >
              Je prends RDV <ChevronRight />
            </Button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#114B68] from-60% via-[#274051] via-75% to-[#38373F] text-white rounded-3xl h-[750px] relative flex items-center w-[90%] sm:w-[450px] md:w-[350px] shadow-sm">
          <h4 className="absolute top-8 text-center w-full text-xl font-bold">
            Accompagnement <br /> Zéro Tracas
          </h4>
          <div className="px-12 md:px-8">
            <p className="text-xs mb-2">Jusqu&apos;à</p>
            <span className="text-5xl font-bold">5 ans</span>
            <p className="text-3xl mt-8">
              de maintenance offerte sur votre centrale solaire
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
