"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BoxOffre from "./BoxOffre";
import { Check, CheckCheck } from "lucide-react";

export default function SliderOffres() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container w-[350px] sm:w-[500px] lg:w-[900px] overflow-hidden">
      <Slider {...settings}>
        <BoxOffre
          title="SunEco"
          price={"5 990"}
          desc="Le solaire abordable, performant et intelligent, rapidement rentable, avec
ou sans ombrage"
          link={"/suneco"}
          list={
            <>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">
                  Panneaux solaires de dernière génération
                </span>
              </li>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">Micro-onduleur(s)</span>
              </li>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">Suivi de production</span>
              </li>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">Suivi de consommation</span>
              </li>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">
                  Optimisation de production en cas d’ombrage
                </span>
              </li>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">
                  Optimisation des consommations en fonction de la production
                </span>
              </li>
            </>
          }
          option={
            <div className="text-center mt-12">
              <h4 className="font-semibold">Options disponibles sur demande</h4>
              <p className="text-start text-sm flex gap-3 mt-5">
                <CheckCheck size={20} strokeWidth={3} />{" "}
                <span className="max-w-[90%]">
                  Module de pilotage du ballon d’eau chaude ou Borne de recharge
                  pour véhicule électrique{" "}
                </span>
              </p>
            </div>
          }
        />
        <BoxOffre
          title="SunPrime"
          price={"10 430"}
          desc="Le solaire de dernière génération garantie 30 ans, à
performances exceptionnelles et au design élégant"
          link={"/sunprime"}
          list={
            <>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">
                  Panneaux solaires ultra-performants de dernière génération
                </span>
              </li>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">
                  Micro-onduleur(s) à haut rendement
                </span>
              </li>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">Suivi de production</span>
              </li>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">Suivi de consommation</span>
              </li>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">
                  Optimisation de production en cas d’ombrage
                </span>
              </li>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">
                  Optimisation des consommations en fonction de la production
                </span>
              </li>
              <li className="flex gap-3">
                <Check color="#00A06B" size={20} strokeWidth={3} />
                <span className="max-w-[80%]">
                  Module de pilotage du ballon d’eau chaude ou Borne de recharge
                  pour véhicule électrique
                </span>
              </li>
            </>
          }
        />
      </Slider>
    </div>
  );
}
