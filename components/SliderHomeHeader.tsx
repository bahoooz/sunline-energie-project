/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
"use client";

import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../public/slick-theme.css";

const dataSlider = [
  {
    title: "Autoconsommation",
    desc: "L’autoconsommation solaire permet de produire et consommer sa propre électricité à partir du soleil. C’est une solution durable qui réduit les factures d’énergie, en optant pour l’énergie solaire, vous contribuez activement à la transition énergétique.",
    link_tag: "Nos offres ",
    link: "",
  },
  {
    title: "Qualité",
    desc: "Nous nous engageons à fournir des produits et des services de la plus haute qualité. Nous travaillons avec des fabricants réputés et nous assurons que nos installations répondent aux normes les plus élevées.",
    link_tag: "Nos réalisations ",
    link: "",
  },
  {
    title: "Service Client",
    desc: "Nous accordons une grande importance à la satisfaction de nos clients.Pendant 10 ans, si vous ne faites pas les économies promises, on vous rembourse ladifférence. Nous vous offrons également la maintenance de votre installation pendant 5ans.",
    link_tag: "Nos offres ",
    link: "",
  },
];

function SliderHomeHeader() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="mx-auto">
        {dataSlider.map((items) => (
          <div
            key={items.title}
            className="bg-white px-5 text-center py-5 max-w-[360px]"
          >
            <h3 className="font-bold text-xl mb-8">{items.title}</h3>
            <p className="mb-8">{items.desc}</p>
            <Link className="font-semibold underline" href={items.link}>
              {items.link_tag}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderHomeHeader;
