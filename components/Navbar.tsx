/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
"use client";

/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Phone } from "lucide-react"; // Import de l'icône téléphone

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-20 top-0">
      {/* Barre supérieure avec numéro de téléphone */}
      <div className="bg-[#FBAC18] text-white py-2 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <strong>UNE QUESTION ?</strong> Contactez-nous gratuitement
        </div>
        <div className="flex gap-4">
          <Link
            href="tel:+33973052851"
            className="flex items-center gap-2 bg-white text-[#FBAC18] px-4 py-2 rounded-full border border-white hover:bg-[#FBAC18] hover:text-white transition-all"
          >
            <Phone size={18} />
            09 73 05 28 51
          </Link>
          <Link
            href="/contact"
            className="bg-white text-[#FBAC18] px-4 py-2 rounded-full border border-white hover:bg-[#FBAC18] hover:text-white transition-all"
          >
            Être rappelé(e)
          </Link>
        </div>
      </div>

      {/* Section principale du Navbar */}
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className="h-20 shadow-md bg-white"
        id="navbar"
      >
        <NavbarContent>
          <NavbarBrand as={Link} href={"/"}>
            <Image
              className="w-40"
              src={"/logo_black.png"}
              width={252}
              height={83}
              alt="logo"
            />
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
        </NavbarContent>
        <NavbarContent
          className="hidden md:flex gap-8 font-bold"
          justify="center"
        >
          {/* Les éléments de navigation */}
          <NavbarItem>
            <Link color="foreground" href="/offres" className="hover:text-[#FBAC18] transition-colors duration-300">
              Solutions photovoltaïques
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/garanties"
              className="hover:text-[#FBAC18] transition-colors duration-300"
            >
              Garanties
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/simulateur"
              className="hover:text-[#FBAC18] transition-colors duration-300"
            >
              Simulateur
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/avis" className="hover:text-[#FBAC18] transition-colors duration-300">
              Avis
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/contact"
              className="hover:text-[#FBAC18] transition-colors duration-300"
            >
              Nous contacter
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-white text-black flex flex-col justify-center gap-6 top-32 pb-2 max-h-[260px]">
          <NavbarMenuItem className="text-xl">
            <Link href={"/offres"} onClick={() => setIsMenuOpen(false)} className="hover:text-[#FBAC18] transition-colors duration-300">
              Solutions photovoltaïques
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="text-xl">
            <Link href={"/garanties"} onClick={() => setIsMenuOpen(false)} className="hover:text-[#FBAC18] transition-colors duration-300">
              Garanties
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="text-xl">
            <Link href={"/simulateur"} onClick={() => setIsMenuOpen(false)} className="hover:text-[#FBAC18] transition-colors duration-300">
              Simulateur
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="text-xl">
            <Link href={"/avis"} onClick={() => setIsMenuOpen(false)} className="hover:text-[#FBAC18] transition-colors duration-300">
              Avis
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="text-xl">
            <Link href={"/contact"} onClick={() => setIsMenuOpen(false)} className="hover:text-[#FBAC18] transition-colors duration-300">
              Nous contacter
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
