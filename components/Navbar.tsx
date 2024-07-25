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
export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="h-20 static shadow-md"
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
          <Link color="foreground" href="/avis" className="hover:underline">
            Avis
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact" className="hover:underline">
            Nous contacter
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black bg-opacity-50 text-white pt-8 gap-6 top-20">
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
  );
}
