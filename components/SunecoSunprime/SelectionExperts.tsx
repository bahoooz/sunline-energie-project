import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SelectionExperts {
  title: string;
  stars_rating_1: HTMLDivElement | any;
  stars_rating_2: HTMLDivElement | any;
  desc: string;
  year_1: number;
  year_info_1: string;
  year_2: number;
  year_info_2: string;
  title_2: string;
  stars_rating_3: HTMLDivElement | any;
  stars_rating_4: HTMLDivElement | any;
  desc_2: string;
  year_3: number;
  year_info_3: string;
  year_4: number;
  year_info_4: string;
  durability_rating?: number;
}

export default function SelectionExperts({
  title,
  stars_rating_1,
  stars_rating_2,
  desc,
  year_1,
  year_info_1,
  year_2,
  year_info_2,

  title_2,
  stars_rating_3,
  stars_rating_4,
  desc_2,
  year_3,
  year_info_3,
  year_4,
  year_info_4,
  durability_rating,
}: SelectionExperts) {
  return (
    <div className="mt-20 sm:mt-24 lg:mt-32">
      <div className="text-center px-7">
        <h2 className="text-2xl font-bold mb-5 lg:text-3xl">
          La sélection de nos experts en énergie
        </h2>
        <p>Les meilleures technologies du moment au meilleur prix</p>
      </div>
      <div className="flex flex-col xl:flex-row sm:items-center xl:justify-center mt-8 md:mt-12 gap-8 2xl:gap-16">
        <div className="bg-[#F5F6F7] py-8 sm:w-[500px] xl:h-[500px] xl:px-8">
          <h3 className="text-center xl:text-start px-7 xl:px-0 font-bold">
            {title}
          </h3>
          <div className="flex flex-col items-center xl:items-start mt-8">
            <div className="flex gap-3 w-[280px] justify-between">
              <span>Performance</span>{" "}
              <div className="flex gap-2">
                {stars_rating_1} <p>4 / 5</p>
              </div>
            </div>
            <div className="flex gap-3 w-[280px] justify-between">
              <span>Durabilité</span>{" "}
              <div className="flex gap-2">
                {stars_rating_2} <p>4 / 5</p>
              </div>
            </div>
            <div className="flex gap-3 w-[280px] justify-between">
              <span>Esthétisme</span>
              <div className="flex gap-2">
                <div className="flex">
                  <Star fill="#FFBB00" stroke="0" />
                  <Star fill="#FFBB00" stroke="0" />
                  <Star fill="#FFBB00" stroke="0" />
                  <Star fill="#FFBB00" stroke="0" />
                  <Star fill="#FFBB00" stroke="0" />
                </div>
                <p>5 / 5</p>
              </div>
            </div>
          </div>
          <p className="mt-8 px-7 xl:px-0 text-center xl:text-start">{desc}</p>
          <div>
            <div className="flex justify-center xl:justify-start gap-[150px] xl:gap-[225px] mt-8">
              <div className="h-1 w-5 bg-[#2BA0B5] "></div>
              <div className="h-1 w-5 bg-[#2BA0B5] "></div>
            </div>
            <div className="flex justify-center xl:justify-start gap-5 xl:gap-24 px-7 xl:px-0 mt-8">
              <div className="text-center xl:text-start">
                <span className="font-bold">{year_1} ans</span>
                <p className="w-[150px]">{year_info_1}</p>
              </div>
              <div className="text-center xl:text-start">
                <span className="font-bold">{year_2} ans</span>
                <p className="w-[150px]">{year_info_2}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F6F7] py-8 sm:w-[500px] xl:h-[500px] xl:px-8">
          <h3 className="text-center xl:text-start px-7 xl:px-0 font-bold">
            {title_2}
          </h3>
          <div className="flex flex-col items-center xl:items-start mt-8">
            <div className="flex gap-3 w-[280px] justify-between">
              <span>Performance</span>{" "}
              <div className="flex gap-2">
                {stars_rating_3} <p>5 / 5</p>
              </div>
            </div>
            <div className="flex gap-3 w-[280px] justify-between">
              <span>Durabilité</span>{" "}
              <div className="flex gap-2">
                {stars_rating_4} <p>{durability_rating} / 5</p>
              </div>
            </div>
            <div className="flex gap-3 w-[280px] justify-between">
              <span>Esthétisme</span>
              <div className="flex gap-2">
                <div className="flex">
                  <Star fill="#FFBB00" stroke="0" />
                  <Star fill="#FFBB00" stroke="0" />
                  <Star fill="#FFBB00" stroke="0" />
                  <Star fill="#FFBB00" stroke="0" />
                  <Star fill="#FFBB00" stroke="0" />
                </div>
                <p>5 / 5</p>
              </div>
            </div>
          </div>
          <p className="mt-8 px-7 xl:px-0 text-center xl:text-start">
            {desc_2}
          </p>
          <div>
            <div className="flex justify-center xl:justify-start gap-[150px] xl:gap-[225px] mt-8">
              <div className="h-1 w-5 bg-[#2BA0B5] "></div>
              <div className="h-1 w-5 bg-[#2BA0B5] "></div>
            </div>
            <div className="flex justify-center xl:justify-start gap-5 xl:gap-24 px-7 xl:px-0 mt-8">
              <div className="text-center xl:text-start">
                <span className="font-bold">{year_3} ans</span>
                <p className="w-[150px]">{year_info_3}</p>
              </div>
              <div className="text-center xl:text-start">
                <span className="font-bold">{year_4} ans</span>
                <p className="w-[150px]">{year_info_4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center items-center mt-20 gap-5 md:gap-12 lg:gap-32 xl:gap-48">
        <Image
          src={"/assets/dualsun_logo.png"}
          width={322}
          height={82}
          alt="logo dualsun"
          className="w-[270px] hover:scale-110 transition-all"
        />
        <Image
          src={"/assets/enphase_logo.png"}
          width={301}
          height={55}
          alt="logo enphase"
          className="w-[250px] hover:scale-110 transition-all"
        />
      </div>
    </div>
  );
}
