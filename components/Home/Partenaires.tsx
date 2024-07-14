import Image from "next/image";
import React from "react";

export default function Partenaires() {
  return (
    <div className="mt-20 md:mt-28 lg:mt-32">
      <h2 className="text-center text-3xl px-7 font-bold">
        Nos partenaires leader mondial du solaire
      </h2>
      <div className="flex flex-col items-center mt-8 md:mt-16 gap-5 md:gap-20 lg:gap-36 md:flex-row md:justify-center">
        <Image
          className="w-[220px]"
          src={"/assets/dualsun_logo.png"}
          width={322}
          height={82}
          alt="logo dualsun"
        />
        <Image
          className="w-52"
          src={"/assets/enphase_logo.png"}
          width={301}
          height={55}
          alt="logo dualsun"
        />
      </div>
    </div>
  );
}
