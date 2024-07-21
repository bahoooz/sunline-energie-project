import Image from "next/image";
import React from "react";

interface DescriptifTechnique {
  title: string;
  year: number;
}

export default function DescriptifTechnique({
  title,
  year,
}: DescriptifTechnique) {
  return (
    <div className="my-20 lg:my-28">
      <h2 className="mb-12 md:mb-16 xl:mb-20 px-7 text-center text-2xl lg:text-3xl font-bold">
        Descriptif technique détaillé pour la gamme {title}
      </h2>
      <div className="xl:flex xl:gap-12 2xl:gap-20 xl:justify-center xl:items-start">
        <table className="border-collapse min-w-[320px] xl:min-w-[700px] mx-auto xl:mx-0">
          <thead>
            <tr className="bg-[#f1f1f1]">
              <th className="py-3 px-4 border border-[#ddd]"></th>
              <th className="py-3 px-4 border border-[#ddd]">{title}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-[#ddd]">
              <td className="py-3 px-4 border border-[#ddd]">
                Panneaux / Garantie fabricant / Garantie performance
              </td>
              <td className="py-3 px-4 border border-[#ddd]">
                500 Wc / 30 ans  / 30 ans
              </td>
            </tr>
            <tr className="border border-[#ddd] bg-[#f1f1f1]">
              <td className="py-3 px-4 border border-[#ddd]">
                Gestionnaire d’énergie intelligent
              </td>
              <td className="py-3 px-4 border border-[#ddd]">Inclus</td>
            </tr>
            <tr className="border border-[#ddd]">
              <td className="py-3 px-4 border border-[#ddd]">
                Onduleur / Garantie fabricant
              </td>
              <td className="py-3 px-4 border border-[#ddd]">
                Micro-Onduleurs {year} ans
              </td>
            </tr>
            <tr className="border border-[#ddd] bg-[#f1f1f1]">
              <td className="py-3 px-4 border border-[#ddd]">
                Optimisation de production si ombrage
              </td>
              <td className="py-3 px-4 border border-[#ddd]">Oui</td>
            </tr>
            <tr className="border border-[#ddd]">
              <td className="py-3 px-4 border border-[#ddd]">
                Batterie de stockage
              </td>
              <td className="py-3 px-4 border border-[#ddd]">En option</td>
            </tr>
            <tr className="border border-[#ddd] bg-[#f1f1f1]">
              <td className="py-3 px-4 border border-[#ddd]">
                Type maison adaptée
              </td>
              <td className="py-3 px-4 border border-[#ddd]">Tous types</td>
            </tr>
            <tr className="border border-[#ddd]">
              <td className="py-3 px-4 border border-[#ddd]">Type de pose</td>
              <td className="py-3 px-4 border border-[#ddd]">
                Sur toiture en imposition
              </td>
            </tr>
            <tr className="border border-[#ddd] bg-[#f1f1f1]">
              <td className="py-3 px-4 border border-[#ddd]">
                Accompagnement Zéro Tracas
              </td>
              <td className="py-3 px-4 border border-[#ddd]">5 ans</td>
            </tr>
            <tr className="border border-[#ddd]">
              <td className="py-3 px-4 border border-[#ddd]">
                Garantie de réduction de facture
              </td>
              <td className="py-3 px-4 border border-[#ddd]">10 ans</td>
            </tr>
            <tr className="border border-[#ddd] bg-[#f1f1f1]">
              <td className="py-3 px-4 border border-[#ddd]">
                Garantie décennale du technicien poseur
              </td>
              <td className="py-3 px-4 border border-[#ddd]">Incluse</td>
            </tr>
          </tbody>
        </table>
        <Image
          src={"/assets/img_descriptif_technique.png"}
          width={576}
          height={797}
          alt="panneaux solaires"
          className="mt-12 xl:mt-0 h-[192px] xl:h-[540px] rounded-xl object-cover object-center mx-auto w-full max-w-[632px] xl:w-[400px] xl:mx-0  xl:rounded-none"
        />
      </div>
    </div>
  );
}
