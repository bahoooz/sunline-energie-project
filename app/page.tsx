import Expertise from "@/components/Home/Expertise";
import GarantiesComplementaires from "@/components/Home/GarantiesComplementaires";
import HeaderHome from "@/components/Home/HeaderHome";
import OffresPanneauxSolaires from "@/components/OffresPanneauxSolaires";
import Partenaires from "@/components/Home/Partenaires";
import SunlineExpertSolaire from "@/components/Home/SunlineExpertSolaire";
import InstallationsSolaires from "@/components/InstallationsSolaires";

/* eslint-disable prettier/prettier */
// HomePage
export default function Home() {
  return (
    <>
      <HeaderHome />
      <Partenaires />
      <Expertise />
      <OffresPanneauxSolaires />
      <GarantiesComplementaires />
      <SunlineExpertSolaire />
      <InstallationsSolaires />
    </>
  );
}
