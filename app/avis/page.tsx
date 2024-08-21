import Head from 'next/head';
import HeaderAvis from "@/components/Avis/HeaderAvis";
import InstallationsSolaires from "@/components/InstallationsSolaires";
import FAQ from "@/components/FAQ";
import { Star } from "lucide-react";
import React from "react";

export default function Avis() {
  return (
    <>
      <Head>
        <script>
          {`(function (w,d,s,o,r,js,fjs) {
            w[r]=w[r]||function() {(w[r].q = w[r].q || []).push(arguments)}
            w[r]('app', '8Fbj3GBuLv');
            if(d.getElementById(o)) return;
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = 'https://embed.trustmary.com/embed.js';
            js.async = 1; fjs.parentNode.insertBefore(js, fjs);
          }(window, document, 'script', 'trustmary-embed', 'tmary'));`}
        </script>
      </Head>
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
            <div data-trustmary-widget="jkrmJBDvb"></div>
          </div>
        </div>
        <FAQ />
        <InstallationsSolaires />
      </div>
    </>
  );
}
