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
      <div
        id="navbar"
        className="h-12 bg-[#FBAC18] flex justify-between px-12 text-white items-center"
      >
        <Button as={Link} href="/simulateur" className="h-8 bg-white text-[#FBAC18] lg:hidden">
          Obtenir un devis
        </Button>
        <Link href="tel:+330975309157" className="lg:hidden">
          <Button
            className="flex items-center gap-2 bg-[#FBAC18] text-white border border-[#FBAC18] rounded-xl px-4 py-2 h-8 hover:bg-white hover:text-[#FBAC18] transition-all duration-300"
          >
            <Phone size={18} />
            09 75 30 91 57
          </Button>
        </Link>
        <div className="hidden lg:flex">
          <h3 className="underline"> </h3>
        </div>
        <div className="hidden lg:flex gap-8">
          <div className="flex items-center gap-3">
            <Button
              as={Link}
              href="/simulateur"
              className="h-8 bg-white text-[#FBAC18]"
            >
              Obtenir un devis
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Link href="tel:+330975309157">
              <Button
                className="flex items-center gap-2 bg-[#FBAC18] text-white border border-[#FBAC18] rounded-xl px-4 py-2 h-8 hover:bg-white hover:text-[#FBAC18] transition-all duration-300"
              >
                <Phone size={18} />
                09 75 30 91 57
              </Button>
            </Link>
          </div>
        </div>
      </div>
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
          <NavbarItem>
            <Link
              color="foreground"
              href="/offres"
              className="hover:text-[#FBAC18] transition-colors duration-300 relative group"
            >
              Solutions photovoltaïques
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-[#FBAC18] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/garanties"
              className="hover:text-[#FBAC18] transition-colors duration-300 relative group"
            >
              Garanties
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-[#FBAC18] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/simulateur"
              className="hover:text-[#FBAC18] transition-colors duration-300 relative group"
            >
              Simulateur
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-[#FBAC18] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/avis"
              className="hover:text-[#FBAC18] transition-colors duration-300 relative group"
            >
              Avis
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-[#FBAC18] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/contact"
              className="hover:text-[#FBAC18] transition-colors duration-300 relative group"
            >
              Nous contacter
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-[#FBAC18] transition-all duration-300 group-hover:w-full"></span>
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
