/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
"use client";

/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Phone } from "lucide-react"; // Import de l'icône téléphone

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-20 top-0">
      <div
        id="navbar"
        className="h-16 bg-[#FBAC18] flex justify-between px-8 text-white items-center shadow-lg"
      >
        <Button
          as={Link}
          href="/simulateur"
          className="h-10 bg-white text-[#FBAC18] font-semibold rounded-lg px-4 hover:shadow-lg transition-all duration-300 lg:hidden"
        >
          Obtenir un devis
        </Button>
        <Link href="tel:+330975309157" className="lg:hidden">
          <Button
            className="flex items-center gap-2 bg-white text-[#FBAC18] border border-[#FBAC18] rounded-lg px-4 py-2 h-10 hover:bg-[#FBAC18] hover:text-white hover:shadow-lg transition-all duration-300"
          >
            <Phone size={20} />
            09 75 30 91 57
          </Button>
        </Link>
        <div className="hidden lg:flex gap-8 items-center">
          <Link href={"/"}>
            <Image
              className="w-32"
              src={"/logo_black.png"}
              width={252}
              height={83}
              alt="logo"
            />
          </Link>
          <div className="flex gap-6 font-semibold">
            <Link href="/offres" className="hover:text-white transition-all duration-300">Solutions photovoltaïques</Link>
            <Link href="/garanties" className="hover:text-white transition-all duration-300">Garanties</Link>
            <Link href="/simulateur" className="hover:text-white transition-all duration-300">Simulateur</Link>
            <Link href="/avis" className="hover:text-white transition-all duration-300">Avis</Link>
            <Link href="/contact" className="hover:text-white transition-all duration-300">Nous contacter</Link>
          </div>
        </div>
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
            <span className="block w-4 h-0.5 bg-[#FBAC18] transform transition-transform duration-300"></span>
          </div>
        </button>
      </div>
      {isMenuOpen && (
        <div className="bg-white w-full fixed top-16 left-0 z-10 text-black shadow-md">
          <div className="flex flex-col gap-4 p-4 text-lg font-semibold">
            <Link href="/offres" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FBAC18] transition-all duration-300">
              Solutions photovoltaïques
            </Link>
            <Link href="/garanties" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FBAC18] transition-all duration-300">
              Garanties
            </Link>
            <Link href="/simulateur" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FBAC18] transition-all duration-300">
              Simulateur
            </Link>
            <Link href="/avis" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FBAC18] transition-all duration-300">
              Avis
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FBAC18] transition-all duration-300">
              Nous contacter
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
