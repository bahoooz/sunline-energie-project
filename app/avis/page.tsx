"use client";

import React, { useEffect } from "react";
import HeaderAvis from "@/components/Avis/HeaderAvis";
import InstallationsSolaires from "@/components/InstallationsSolaires";
import FAQ from "@/components/FAQ";
import { Star } from "lucide-react";

declare global {
  interface Window {
    tmary: any;
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
      window.tmary = window.tmary || function() {
        (window.tmary.q = window.tmary.q || []).push(arguments);
      };
      window.tmary('app', '8Fbj3GBuLv');
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
          <p className="text-xl lg:text-2xl">
            11 avis Google et Facebook
          </p>
          {/* Point d'ancrage pour le widget Trustmary */}
          <div data-trustmary-widget="jkrmJBDvb"></div>
        </div>
      </div>
      <FAQ />
      <InstallationsSolaires />
    </div>
  );
}
