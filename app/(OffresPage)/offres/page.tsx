/* eslint-disable prettier/prettier */
import FAQ from '@/components/FAQ'
import InstallationsSolaires from '@/components/InstallationsSolaires'
import MeilleursProduits from '@/components/MeilleursProduits'
import GarantiesExclusives from '@/components/Offres/GarantiesExclusives'
import HeaderOffres from '@/components/Offres/HeaderOffres'
import OffresPanneauxSolaires from '@/components/OffresPanneauxSolaires'
import React from 'react'

export default function Offres() {
  return (
    <>
      <HeaderOffres />
      <OffresPanneauxSolaires />
      <GarantiesExclusives />
      <MeilleursProduits />
      <InstallationsSolaires />
      <FAQ />
    </>
  )
}
