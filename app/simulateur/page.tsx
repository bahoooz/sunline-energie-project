/* eslint-disable prettier/prettier */
import FAQ from "@/components/FAQ";
import EquipeEngagée from "@/components/Garanties/EquipeEngagée";
import GarantiesExclusives from "@/components/Garanties/GarantiesExclusives";
import HeaderGaranties from "@/components/Garanties/HeaderGaranties";
import Partenaires from "@/components/Home/Partenaires";
import InstallationsSolaires from "@/components/InstallationsSolaires";
import MeilleursProduits from "@/components/MeilleursProduits";
import PageSimulateur from "@/components/Simulateur";
import React from "react";

export default function Garanties() {
  return (
    <>
      <HeaderGaranties />
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
