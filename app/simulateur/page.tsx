/* eslint-disable prettier/prettier */
import FAQ from "@/components/FAQ";
import EquipeEngagée from "@/components/Garanties/EquipeEngagée";
import GarantiesExclusives from "@/components/Garanties/GarantiesExclusives";
import HeaderGaranties from "@/components/Garanties/HeaderGaranties";
import TechnicienSection from "@/components/Garanties/TechnicienSection";
import InstallationsSolaires from "@/components/InstallationsSolaires";
import MeilleursProduits from "@/components/MeilleursProduits";
import React from "react";

export default function Garanties() {
  return (
    <>
      <HeaderGaranties />
      <TechnicienSection />
      <GarantiesExclusives />
      <MeilleursProduits />
      <EquipeEngagée />
      <InstallationsSolaires />
      <FAQ />
    </>
  );
}
