/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement | any>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [commentary, setCommentary] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const sendEmail = (e: Event | any) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Veuillez cocher la case du captcha avant d'envoyer.");
      return;
    }
    if (form.current) {
      onOpen();
      emailjs
        .sendForm("service_ni2w51s", "template_fkin4oe", form.current, {
          publicKey: "tffKF3aD3Hi53nGFK",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const onCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  const handleCommentaryChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentary(e.target.value);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="w-[500px] max-sm:w-[90%] max-sm:absolute max-sm:top-1/2 max-sm:-translate-y-1/2"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="flex flex-col gap-24 py-12">
                <div>
                  <h2 className="text-center font-bold text-xl mb-8">
                    Votre message a été envoyé avec succès !
                  </h2>
                  <p className="text-center">
                    Nous vous répondrons par mail dans les plus bref délais
                  </p>
                </div>
                <Button
                  as={Link}
                  href="/"
                  onPress={onClose}
                  className="bg-[#FBAC18] text-white w-[90%] rounded-full mx-auto py-6 text-base"
                >
                  Revenir sur la page d&apos;accueil
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="px-7 xl:px-0 flex flex-col gap-8"
      >
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex flex-col gap-1 sm:w-1/2">
            <label>Prénom</label>
            <input
              className="border py-2 px-2 rounded-md"
              type="text"
              name="user_firstname"
              minLength={1}
              maxLength={40}
              placeholder="ex : Jean"
            />
          </div>
          <div className="flex flex-col gap-1 sm:w-1/2">
            <label>Nom</label>
            <input
              className="border py-2 px-2 rounded-md"
              type="text"
              name="user_lastname"
              minLength={1}
              maxLength={40}
              placeholder="ex : Durand"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label>
            Email <span className="text-red-600 text-sm">(Nécessaire)</span>
          </label>
          <input
            className="border py-2 px-2 rounded-md"
            type="email"
            name="user_email"
            required
            minLength={3}
            maxLength={100}
            placeholder="ex : jean@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>
            Message <span className="text-red-600 text-sm">(Nécessaire)</span>
          </label>
          <label className="text-sm">
            Dites nous en plus sur votre demande.
          </label>
          <textarea
            className="border py-2 px-2 rounded-md min-h-32 max-h-[400px]"
            name="commentary"
            required
            onChange={handleCommentaryChange}
            minLength={3}
            maxLength={600}
            placeholder="Ecrivez ici..."
          />
          <p className="text-sm">
            {commentary.length} sur 600 caractères maximum
          </p>
        </div>
        <ReCAPTCHA
          sitekey="6LdcfBgqAAAAADhBX28ptOEXeiTxKj0NxQzBHRbv"
          className="sm:mx-auto xl:mx-0"
          onChange={onCaptchaChange}
        />
        <input
          className="bg-[#FBAC18] py-4 text-white rounded-full sm:w-40 cursor-pointer hover:bg-[#fdbc44] sm:mx-auto xl:mx-0"
          type="submit"
          value="Envoyer"
        />
      </form>
    </div>
  );
};
