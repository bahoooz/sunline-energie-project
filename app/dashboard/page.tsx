"use client";

import ArticleCreation from "@/components/Dashboard/Article/ArticleCreation";
import ManageArticles from "@/components/Dashboard/Article/ManageArticles";
import ManageRdv from "@/components/Dashboard/Rdv/ManageRdv";
import ManageTeam from "@/components/Dashboard/Team/ManageTeam";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Dashboard() {
  return (
    <div className="h-screen min-h-[1000px] md:min-h-[800px] flex justify-center items-center px-4">
      <Link
        className="absolute top-12 left-12 hidden lg:flex gap-2 hover:text-primary"
        href={"/"}
      >
        <House /> Revenir à l'accueil
      </Link>
      <div className="flex flex-col gap-12 lg:gap-0 py-5">
        <div className="flex items-center justify-center gap-4 lg:mb-24">
          <Image
            src={"/logo.png"}
            width={67}
            height={83}
            alt="logo"
            className="w-7"
          />
          <h1 className="font-semibold text-2xl lg:text-4xl">
            Tableau de bord Sunline
          </h1>
        </div>
        <div>
          <h2 className="mb-7">
            Bienvenue dans{" "}
            <span className="decoration-primary underline underline-offset-4">
              l'espace de gestion
            </span>{" "}
            du site web de Sunline Energie, ici vous pouvez :{" "}
          </h2>
          <ol className="list-decimal pl-5 space-y-4 marker:text-primary marker:text-xl">
            <li>
              Créer de nouveaux articles de blog avec un outil intuitif et
              adapté
            </li>
            <li>
              Gérer les articles existants (les consulter, les mettre à jour,
              les supprimer)
            </li>
            <li>
              Gérer les rendez-vous (les consulter, les déplacer, les supprimer)
            </li>
            <li>
              Gérer les membres qui ont accès au tableau de bord (les consulter,
              les supprimer)
            </li>
          </ol>
        </div>
        <div className="flex flex-col lg:flex-row gap-7 lg:justify-between lg:mt-16">
          <div className="flex flex-col gap-5">
            <h3 className="uppercase text-xl">Partie Blog</h3>
            <div className="flex lg:flex-col gap-4">
              <ArticleCreation />
              <ManageArticles />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="uppercase text-xl">Partie Rendez-vous</h3>
            <ManageRdv />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="uppercase text-xl">Partie Équipe</h3>
            <ManageTeam />
          </div>
        </div>
      </div>
    </div>
  );
}
