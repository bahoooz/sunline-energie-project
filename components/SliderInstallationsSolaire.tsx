import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function SliderInstallationsSolaire() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div
      id="slider-installations-solaire"
      className="slider-container w-[90%] sm:w-[80%]"
    >
      <Slider {...settings}>
        <div className="w-[90%] md:w-[70%] mx-auto  lg:w-full 2xl:w-[450px]">
          <Image
            src={"/assets/installation-solaire-1.png"}
            width={742}
            height={451}
            alt="installation solaire 1"
            className="rounded-md mb-3"
          />
          <h4>Installation solaire - 6kWc - Angoulême</h4>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto lg:w-full 2xl:w-[450px]">
          <Image
            src={"/assets/installation-solaire-2.png"}
            width={742}
            height={451}
            alt="installation solaire 2"
            className="rounded-md mb-3"
          />
          <h4>Installation solaire - 4kWc - Deux-Sèvres</h4>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto lg:w-full 2xl:w-[450px]">
          <Image
            src={"/assets/installation-solaire-3.png"}
            width={742}
            height={451}
            alt="installation solaire 3"
            className="rounded-md mb-3"
          />
          <h4>Installation solaire - 5kWc - Vendée</h4>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto lg:w-full 2xl:w-[450px]">
          <Image
            src={"/assets/2024-07-03.png"}
            width={742}
            height={451}
            alt="installation solaire 3"
            className="rounded-md mb-3"
          />
          <h4>Installation solaire - 3kWc - Apremont</h4>
        </div>
      </Slider>
    </div>
  );
}

export default SliderInstallationsSolaire;
