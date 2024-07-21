import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeaderGaranties() {
  return (
    <div>
      <div className="lg:flex lg:h-[500px]">
        <Image
          src={"/assets/img-header-garanties.png"}
          width={1037}
          height={699}
          alt="image maison"
          className="h-40 sm:h-60 lg:h-full lg:max-w-[40%] object-cover"
        />
        <div className="bg-[#34A853] text-white text-center px-7 lg:px-16 2xl:px-44 py-12 flex flex-col gap-8 sm:gap-10 lg:justify-center lg:text-start lg:w-full">
          <h1 className="text-2xl lg:text-3xl font-bold">
            Des garanties uniques <br className="hidden lg:block" /> & des
            engagements forts
          </h1>
          <p>
            Afin de vous assurer une sérénité qui dure dans le temps, vous
            bénéficiez de <br className="hidden lg:block" /> garanties étendues
            exclusives Sunline pour votre installation sur-mesure de panneaux
            solaires en autoconsommation
          </p>
          <Button
            as={Link}
            href="/contact"
            className="bg-black text-white py-7 rounded-full sm:w-[340px] sm:text-base mx-auto lg:m-0"
          >
            Je demande un RDV avec un conseiller
          </Button>
        </div>
      </div>
    </div>
  );
}
