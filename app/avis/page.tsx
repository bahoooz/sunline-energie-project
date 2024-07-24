/* eslint-disable prettier/prettier */
import HeaderAvis from "@/components/Avis/HeaderAvis";
import InstallationsSolaires from "@/components/InstallationsSolaires";
import { Star, StarOff } from "lucide-react";
import React from "react";

export default function Avis() {
  return (
    <div>
      <HeaderAvis />
      <div className="mt-20">
        <h2 className="text-center font-bold text-2xl lg:text-3xl px-7">
          Ils ont été installés par Sunline
        </h2>
        <div className="flex flex-col items-center mt-12 gap-12">
          <div className="flex items-end gap-3">
            <div className="flex">
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
              <StarOff fill="#FEB50B" strokeWidth={0} size={32} />
            </div>
            <span className="font-bold text-2xl">4,6</span>
          </div>
          <p className="text-xl lg:text-2xl">2241 avis Google et Facebook</p>
        </div>
      </div>
      <InstallationsSolaires />
    </div>
  );
}
