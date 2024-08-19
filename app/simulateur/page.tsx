/* eslint-disable prettier/prettier */
import PageSimulateur from "@/components/Simulateur/PageSimulateur";
import FAQ from "@/components/FAQ";
import EquipeEngagée from "@/components/Garanties/EquipeEngagée";
import GarantiesExclusives from "@/components/Garanties/GarantiesExclusives";
import HeaderHome2 from "@/components/Home/HeaderHome2";
import Partenaires from "@/components/Home/Partenaires";
import InstallationsSolaires from "@/components/InstallationsSolaires";
import MeilleursProduits from "@/components/MeilleursProduits";

import React from "react";

export default function Garanties() {
  return (
    <>
      <HeaderHome2 />
      <PageSimulateur />
      <GarantiesExclusives />
      <MeilleursProduits />
      <Partenaires />
      <EquipeEngagée />
      <InstallationsSolaires />
      <FAQ />
    </>
  );
}
