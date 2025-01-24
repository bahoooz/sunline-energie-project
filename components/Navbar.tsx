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
      <div className="h-16 bg-[#FBAC18] flex justify-between px-4 items-center shadow-lg md:hidden">
        <div className="flex items-center gap-4">
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
              <span
                className={`block w-4 h-0.5 bg-[#FBAC18] transform transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-[#FBAC18] transform transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-[#FBAC18] transform transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
          <Link href="tel:+330975309157">
            <button
              aria-label="Call us"
              className="flex items-center justify-center w-10 h-10 bg-white text-[#FBAC18] border border-[#FBAC18] rounded-full hover:bg-[#FBAC18] hover:text-white transition-all duration-300"
            >
              <Phone size={20} />
            </button>
          </Link>
        </div>
      </div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className="h-20 shadow-md bg-white hidden md:block"
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
        </NavbarContent>
        <NavbarContent
          className="hidden md:flex gap-8 font-bold"
          justify="center"
        >
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
      </Navbar>
      {isMenuOpen && (
        <div className="bg-white w-full fixed top-16 left-0 z-10 text-black shadow-md md:hidden">
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
