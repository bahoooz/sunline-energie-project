"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { SquarePlus } from "lucide-react";
import Image from "next/image";

export default function FAQ() {
  return (
    <div className="my-20 sm:my-24 lg:mb-36">
      <div className="flex flex-col items-center text-center mb-12 sm:mb-20 lg:mb-24 2xl:mb-28 gap-5">
        <Image
          src={"/assets/bulle-200x195.png"}
          width={180}
          height={177}
          alt="bulle texte"
          className="w-24"
        />
        <h2 className="text-2xl px-7 font-bold leading-loose">
          Nos experts solaire répondent à vos{" "}
          <span className="bg-[#00ACC2] py-2 px-2 text-white">questions</span>
        </h2>
      </div>
      <Accordion variant="splitted">
        <AccordionItem
          title="Quelle est la durée de vie d’un panneau photovoltaïque ?"
          indicator={<SquarePlus color="white" fill="#FBAC18" size={32} />}
          className="px-5 mb-3 sm:w-[90%] sm:mx-auto xl:w-[1100px]"
        >
          <p>
            Les panneaux photovoltaïques ont une durée de vie moyenne de 25 à 30
            ans. Cette durée peut varier en fonction de plusieurs facteurs tels
            que la qualité du panneau, les conditions d’installation,
            l’entretien et les conditions climatiques. En général, les panneaux
            conservent une bonne efficacité même après des décennies
            d’utilisation, avec une diminution de performance graduelle. <br />{" "}
            <br /> La marque DualSun <br /> <br /> DualSun, un fabricant reconnu
            dans l’industrie des panneaux photovoltaïques, propose des garanties
            impressionnantes sur ses produits. Les panneaux DualSun sont
            garantis pour une durée de 30 ans, ce qui est au-dessus de la
            moyenne du marché. Cette garantie couvre non seulement les défauts
            de fabrication mais assure également une performance élevée sur le
            long terme. Après 30 ans, les panneaux DualSun sont garantis pour
            conserver au moins 87 % de leur capacité initiale de production.{" "}
            <br /> <br /> Cette garantie est un gage de la confiance que DualSun
            a en la durabilité et la fiabilité de ses produits, rendant leurs
            panneaux photovoltaïques un choix judicieux pour les investissements
            à long terme dans les énergies renouvelables.
          </p>
        </AccordionItem>
        <AccordionItem
          title="Pourquoi est-il si important de bien dimensionner la taille de sa centrale solaire ?"
          indicator={<SquarePlus color="white" fill="#FBAC18" size={32} />}
          className="px-5 mb-3 sm:w-[90%] sm:mx-auto xl:w-[1100px]"
        >
          <p>
            Le dimensionnement de la taille de votre centrale solaire est
            crucial pour assurer une performance optimale et une rentabilité
            maximale. Une installation correctement dimensionnée maximise la
            production d’énergie en fonction de vos besoins réels, évitant les
            surplus inutiles ou les déficits énergétiques. Cela permet
            d’optimiser les coûts d’installation et d’exploitation, tout en
            assurant un meilleur retour sur investissement. <br /> <br /> Une
            centrale bien dimensionnée réduit les besoins de maintenance,
            prolongeant ainsi la durée de vie des composants. Elle équilibre les
            coûts d’installation avec les économies réalisées sur les factures
            d’électricité, permettant de récupérer l’investissement initial plus
            rapidement. <br /> <br />
            Pour garantir un dimensionnement optimal, nous réalisons une étude
            personnalisée pour chaque client. Cette étude prend en compte vos
            besoins énergétiques actuels et futurs, les caractéristiques
            spécifiques de votre site, comme l’ensoleillement et l’orientation
            du toit, ainsi que les possibles ombrages. Grâce à cette analyse
            détaillée, nous vous proposons une solution sur mesure qui assure la
            performance maximale de votre centrale solaire et un investissement
            rentable.
          </p>
        </AccordionItem>
        <AccordionItem
          title="L’autoconsommation c’est quoi ?"
          indicator={<SquarePlus color="white" fill="#FBAC18" size={32} />}
          className="px-5 sm:w-[90%] sm:mx-auto xl:w-[1100px]"
        >
          <p>
            L’autoconsommation désigne le fait de consommer l’énergie que l’on
            produit, généralement à partir de sources renouvelables comme les
            panneaux photovoltaïques. Plutôt que d’acheter toute l’électricité
            auprès d’un fournisseur, vous utilisez l’énergie générée par votre
            installation pour alimenter vos appareils domestiques ou
            professionnels. <br /> <br /> Cela permet de réduire les coûts
            énergétiques en diminuant la dépendance vis-à-vis du réseau et en
            réduisant vos factures d’électricité. De plus, l’autoconsommation
            contribue à la transition énergétique en favorisant l’utilisation
            des énergies renouvelables. <br /> <br /> En France, pour encourager
            cette pratique, EDF propose une prime à l’autoconsommation. Cette
            prime est versée à la fin de la première année d’installation et son
            montant est en fonction de la puissance de l’installation. Cette
            aide financière rend l’autoconsommation encore plus attrayante et
            accessible. <br /> <br /> En outre, lorsque votre installation
            produit plus d’énergie que vous n’en consommez, vous pouvez vendre
            le surplus d’électricité à EDF. Ce mécanisme de revente permet non
            seulement de rentabiliser davantage votre installation mais aussi de
            contribuer à l’approvisionnement en énergie renouvelable du réseau
            national.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
