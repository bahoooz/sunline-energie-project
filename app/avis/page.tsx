"use client";

import React, { useEffect } from "react";
import HeaderAvis from "@/components/Avis/HeaderAvis";
import InstallationsSolaires from "@/components/InstallationsSolaires";
import FAQ from "@/components/FAQ";
import { Star } from "lucide-react";

// Déclaration d'une interface pour la fonction tmary
interface TmaryFunction {
  (command: string, id: string): void;
  q?: unknown[];
}

declare global {
  interface Window {
    tmary?: TmaryFunction;
  }
}

export default function Avis() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "trustmary-embed";
    script.src = "https://embed.trustmary.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof window.tmary === "undefined") {
        window.tmary = function (command: string, id: string) {
          if (!window.tmary) {
            window.tmary = function (cmd: string, identifier: string) {
              (window.tmary!.q = window.tmary!.q || []).push([cmd, identifier]);
            };
          }
          (window.tmary.q = window.tmary.q || []).push([command, id]);
        };
      }
      window.tmary("app", "jkrmJBDvb");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-32">
      <HeaderAvis />
      <div className="mt-20">
        <h2 className="text-center font-bold text-2xl lg:text-3xl px-7">
          Ils ont été installés par Sunline
        </h2>
        <div className="flex flex-col items-center mt-12 gap-12">
          <div className="flex items-end gap-3">
            <div className="flex">
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
            </div>
            <span className="font-bold text-2xl">5</span>
          </div>
        </div>
        {/* Point d'ancrage pour le widget Trustmary */}
        <div data-trustmary-widget="jkrmJBDvb"></div>
      </div>
      <FAQ />
      <InstallationsSolaires />
    </div>
  );
}
