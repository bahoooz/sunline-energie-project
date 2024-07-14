import Expertise from "@/components/Home/Expertise";
import GarantiesComplementaires from "@/components/Home/GarantiesComplementaires";
import HeaderHome from "@/components/Home/HeaderHome";
import OffresPanneauxSolaires from "@/components/Home/OffresPanneauxSolaires";
import Partenaires from "@/components/Home/Partenaires";

/* eslint-disable prettier/prettier */
export default function Home() {
  return (
    <>
    <HeaderHome />
    <Partenaires />
    <Expertise />
    <OffresPanneauxSolaires />
    <GarantiesComplementaires />
    </>
  );
}
