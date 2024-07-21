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

  const menuItems = [
    "Solutions photovoltaïques",
    "Garanties",
    "Avis",
    "Nous contacter",
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="h-20 static">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand
          as={Link}
          href={"/"}
          className="justify-end sm:justify-start"
        >
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
        className="hidden sm:flex gap-8 font-bold"
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href="/offres">
            Solutions photovoltaïques
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/garanties">
            Garanties
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/avis">
            Avis
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Nous contacter
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href={"/offres"}>Solutions photovoltaïques</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={"/garanties"}>Garanties</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={"/avis"}>Avis</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={"/contact"}>Nous contacter</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
