"use client";

import React, { useEffect } from "react";

export default function PageSimulateur() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.reonic.de/elements/reonic-loader.js";
    script.type = "text/javascript";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  return (
    <div className="mt-12" id="page-simulateur">
      <div
        data-reonic-type="element"
        data-product="energyhouse"
        data-client-id="8802b02f-711e-4b78-ba14-aa0453d6c062"
      ></div>
    </div>
  );
}
