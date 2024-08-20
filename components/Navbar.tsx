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
export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-20 top-0">
      <div
        id="navbar"
        className="h-12 bg-[#FBAC18] flex justify-between px-12 text-white items-center"
      >
        <Button className="h-8 bg-white text-[#FBAC18] lg:hidden">
          Obtenir un devis
        </Button>
        <Link className="lg:hidden" href={"tel:+330975309157"}>
          09 75 30 91 57
        </Link>
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
            <h3>Nous contacter :</h3>
            <Link href={"tel:+330975309157"}>09 75 30 91 57</Link>
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
            <Link color="foreground" href="/offres" className="hover:underline">
              Solutions photovoltaïques
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/garanties"
              className="hover:underline"
            >
              Garanties
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/simulateur"
              className="hover:underline"
            >
              Simulateur
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/avis" className="hover:underline">
              Avis
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/contact"
              className="hover:underline"
            >
              Nous contacter
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-black bg-opacity-50 text-white flex flex-col justify-center gap-6 top-32 pb-2 max-h-[260px]">
          <NavbarMenuItem className="text-xl">
            <Link href={"/offres"} onClick={() => setIsMenuOpen(false)}>
              Solutions photovoltaïques
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="text-xl">
            <Link href={"/garanties"} onClick={() => setIsMenuOpen(false)}>
              Garanties
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="text-xl">
            <Link href={"/simulateur"} onClick={() => setIsMenuOpen(false)}>
              Simulateur
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="text-xl">
            <Link href={"/avis"} onClick={() => setIsMenuOpen(false)}>
              Avis
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="text-xl">
            <Link href={"/contact"} onClick={() => setIsMenuOpen(false)}>
              Nous contacter
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
