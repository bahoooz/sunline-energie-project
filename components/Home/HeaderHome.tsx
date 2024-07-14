import React from "react";
import { Button } from "@nextui-org/button";
import BoxHeaderHome from "./BoxHeaderHome";

export default function HeaderHome() {
  return (
    <div>
      <div id="header-home" className="h-[70vh]">
        <div className="text-center lg:text-start flex flex-col gap-10 pt-24 2xl:pt-32 px-6 lg:px-24 2xl:px-48">
          <h1 className="text-white text-3xl lg:text-5xl font-semibold">
            Votre énergie solaire, <br className="hidden lg:block" /> notre
            engagement durable
          </h1>
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center">
            <Button className="bg-[#292929] text-white text-base px-8 py-6 w-fit">
              Découvrez nos offres
            </Button>
            <p className="text-white text-sm lg:mt-2">
              Expert solaire en Nouvelle Aquitaine
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-14 xl:gap-20 -mt-20 lg:-mt-32 md:flex-row md:flex-wrap md:justify-center sm:px-12">
        <BoxHeaderHome
          title="Autoconsommation"
          desc="L’autoconsommation solaire permet de produire et consommer sa propre électricité à partir du soleil. C’est une solution durable qui réduit les factures d’énergie, en optant pour l’énergie solaire, vous contribuez activement à la transition énergétique."
          link_tag="Nos offres"
          link=""
        />
        <BoxHeaderHome
          title="Qualité"
          desc="Nous nous engageons à fournir des produits et des services de la plus haute qualité. Nous travaillons avec des fabricants réputés et nous assurons que nos installations répondent aux normes les plus élevées."
          link_tag="Nos réalisations"
          link=""
        />
        <BoxHeaderHome
          title="Service Client"
          desc="Nous accordons une grande importance à la satisfaction de nos clients.
Pendant 10 ans, si vous ne faites pas les
économies promises, on vous rembourse la
différence. Nous vous offrons également la maintenance de votre installation pendant 5ans."
          link_tag="Nos garanties"
          link=""
        />
      </div>
    </div>
  );
}
