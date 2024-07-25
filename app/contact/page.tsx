/* eslint-disable prettier/prettier */
import { ContactForm } from "@/components/Contact/ContactForm";
import InstallationsSolaires from "@/components/InstallationsSolaires";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="my-20 lg:my-24">
      <div className="flex flex-col xl:flex-row-reverse xl:justify-center gap-20 xl:gap-16 2xl:gap-20">
        <div className="md:w-[700px] md:mx-auto xl:mx-0 xl:w-[600px]">
          <h2 className="text-center xl:text-start text-2xl lg:text-3xl px-7 xl:px-0 font-bold">
            Vous souhaitez passer au solaire ?
          </h2>
          <p className="text-center xl:text-start px-7 xl:px-0 my-8">
            Nos experts se feront un plaisir de répondre à toutes vos demandes
            et vous fournir tous les renseignements nécessaires.
          </p>
          <ContactForm />
        </div>
        <div className="sm:w-[550px] sm:mx-auto xl:mx-0 xl:w-[400px]">
          <Image
            src={"/assets/ampoule-contact-form.png"}
            width={728}
            height={342}
            alt="énergie"
          />
          <div className="bg-[#FBAC18] py-24 xl:py-32 px-12 flex flex-col gap-8 text-white">
            <div>
              <h4 className="font-bold text-lg lg:text-xl mb-4">
                Heures d&apos;ouverture
              </h4>
              <p>
                Du lundi au vendredi <br /> de 9h à 12h et de 14h à 18h
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg lg:text-xl mb-4">
                Siège social
              </h4>
              <p>
                14, Rue Augustin Fresnel <br /> 17180 PERIGNY
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg lg:text-xl mb-4">Nous suivre</h4>
              <div className="flex gap-4">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61559245282494"
                  }
                  target="_blank"
                >
                  <Facebook
                    strokeWidth={0}
                    fill="white"
                    className="hover:scale-110 transition-all"
                  />
                </Link>
                <Link href={"/"}>
                  <Youtube
                    strokeWidth={2}
                    className="hover:scale-110 transition-all"
                  />
                </Link>
                <Link
                  href={"https://www.linkedin.com/company/sunline-energie/"}
                  target="_blank"
                >
                  <Linkedin
                    strokeWidth={0}
                    fill="white"
                    className="hover:scale-110 transition-all"
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/sunline_energie/"}
                  target="_blank"
                >
                  <Instagram
                    strokeWidth={2}
                    className="hover:scale-110 transition-all"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InstallationsSolaires />
    </div>
  );
}
