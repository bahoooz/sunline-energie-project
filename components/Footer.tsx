/* eslint-disable prettier/prettier */
import {
  Facebook,
  Instagram,
  Linkedin,
  Star,
  StarOff,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#38373F] py-16 text-white">
      <div className="xl:flex xl:justify-center xl:items-center xl:gap-24">
        <div className="flex flex-col items-center">
          <Image
            src={"/logo_white.png"}
            width={255}
            height={87}
            alt="logo sunline"
            className="mb-10"
          />
          <div className="text-center">
            <div className="flex gap-3 mb-3">
              <span className="font-bold">4.4</span>
              <div className="flex gap-1">
                <Star color="#F6BB06" fill="#F6BB06" />
                <Star color="#F6BB06" fill="#F6BB06" />
                <Star color="#F6BB06" fill="#F6BB06" />
                <Star color="#F6BB06" fill="#F6BB06" />
                <StarOff color="#F6BB06" fill="#F6BB06" />
              </div>
            </div>
            <span className="font-bold">28 avis Google</span>
          </div>
        </div>
        <div className="mt-5 flex flex-col xl:flex-row gap-8 xl:gap-20">
          <ul className="text-center flex flex-col gap-3">
            <li>
              <Link href="/">Qui sommes nous ?</Link>
            </li>
            <li>
              <Link href="/">Avis clients</Link>
            </li>
            <li>
              <Link href="/">Programme de parrainage</Link>
            </li>
          </ul>
          <ul className="text-center flex flex-col gap-3">
            <li>
              <Link href="/">Demande de devis Panneau Solaire</Link>
            </li>
            <li>
              <Link href="/">Politique de données personnelles</Link>
            </li>
            <li>
              <Link href="/">Mentions légales</Link>
            </li>
            <li>
              <Link href="/">Nous contacter</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-0.5 bg-[#5b5a63] w-[90%] 2xl:w-[1300px] mx-auto my-10"></div>
      <div className="text-center xl:flex xl:items-center xl:justify-between 2xl:justify-center xl:px-20 2xl:px-0 2xl:gap-64">
        <p className="text-sm px-8 xl:px-0">
          © 2024 SUNLINE – Tous droits réservés | Mentions légales | Politique
          de gestion des données personnelles
        </p>
        <div className="flex justify-center gap-3 mt-8 xl:mt-0">
          <Link href={"/"}><Facebook fill="white" strokeWidth={1} /></Link>
          <Link href={"/"}><Youtube strokeWidth={2} /></Link>
          <Link href={"/"}><Linkedin strokeWidth={2} /></Link>
          <Link href={"/"}><Instagram /></Link>
        </div>
      </div>
    </div>
  );
}
