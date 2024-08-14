/* eslint-disable prettier/prettier */
import FAQ from "@/components/FAQ";
import EquipeEngagée from "@/components/Garanties/EquipeEngagée";
import GarantiesExclusives from "@/components/Garanties/GarantiesExclusives";
import HeaderOffres from "@/components/Offres/HeaderOffres";
import Partenaires from "@/components/Home/Partenaires";
import InstallationsSolaires from "@/components/InstallationsSolaires";
import MeilleursProduits from "@/components/MeilleursProduits";
import PageSimulateur from "@/components/Simulateur/PageSimulateur";
import React from "react";

export default function Garanties() {
  return (
    <>

      <HeaderOffres />
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
