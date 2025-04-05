"use client";

import { Button, Calendar, Input, TimeInput } from "@heroui/react";
import { format } from "date-fns";
import React, { useState } from "react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { DayPicker } from "react-day-picker";
import { fr } from "react-day-picker/locale";
import "react-day-picker/style.css";
import { formatTime } from "@/lib/formatTime";

function Step1({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
}) {
  return (
    <DayPicker
      mode="single"
      locale={fr}
      className="rounded-xl p-4 flex justify-center items-center bg-gray-50 md:w-[500px] lg:w-[350px]"
      classNames={{
        today: "text-primary",
        selected: "bg-primary text-white hover:bg-primary/90 rounded-full",
        chevron: "fill-primary",
      }}
      selected={selectedDate}
      onSelect={setSelectedDate}
    />
  );
}

function Step2({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  time,
  setTime,
  postalCode,
  setPostalCode,
  notes,
  setNotes,
}: {
  name: string;
  setName: (name: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  time: any;
  setTime: (time: any) => void;
  postalCode: string;
  setPostalCode: (postalCode: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
}) {
  return (
    <div className="flex flex-col gap-5 md:w-full">
      <Input
        isRequired
        label="Prénom & Nom"
        placeholder="John Doe"
        variant="bordered"
        labelPlacement="outside"
        radius="none"
        className="md:w-full"
        color="primary"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        isRequired
        label="Numéro de téléphone"
        placeholder="0612345678"
        variant="bordered"
        labelPlacement="outside"
        radius="none"
        className="md:w-full"
        color="primary"
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <TimeInput
        isRequired
        label="Heure du rendez-vous"
        variant="bordered"
        radius="none"
        labelPlacement="outside"
        color="primary"
        value={time}
        onChange={setTime}
      />
      <Input
        isRequired
        label="Code postal"
        placeholder="33200"
        variant="bordered"
        labelPlacement="outside"
        radius="none"
        className="md:w-full"
        color="primary"
        type="number"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <Input
        label="Notes (facultatif)"
        placeholder="J'aimerai prendre rdv car..."
        variant="bordered"
        labelPlacement="outside"
        radius="none"
        className="md:w-full"
        color="primary"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
}

function Step3({
  name,
  selectedDate,
  time,
  phoneNumber,
  notes,
  postalCode,
}: {
  name: string;
  selectedDate: any;
  time: any;
  phoneNumber: string;
  notes: string;
  postalCode: string;
}) {
  return (
    <div className="border border-black p-3 max-h-[400px] overflow-y-auto">
      <p className="text-sm">
        Prise de rendez-vous de <span className="text-primary">{name}</span>{" "}
        pour le{" "}
        <span className="text-primary">
          {selectedDate ? format(selectedDate, "dd/MM/yyyy") : ""}
        </span>{" "}
        à <span className="text-primary">{formatTime(time)}</span> avec le
        numéro de téléphone suivant :{" "}
        <span className="text-primary">{phoneNumber}</span> et le code postal
        suivant : <span className="text-primary">{postalCode}</span>. <br />{" "}
        <br /> Les informations complémentaires pour le rendez-vous : <br />{" "}
        <br />
        <span className="text-primary">
          {notes ? notes : "Aucune information supplémentaire"}
        </span>
      </p>
    </div>
  );
}

export default function StepsRdv() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // console.log(step);
  // console.log(selectedDate);
  // console.log(time);

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Formater l'heure au format HH:MM:SS
      const formattedTime =
        time && typeof time === "object" && "hour" in time && "minute" in time
          ? `${String((time as any).hour).padStart(2, "0")}:${String(
              (time as any).minute
            ).padStart(2, "0")}:${String((time as any).second || 0).padStart(
              2,
              "0"
            )}`
          : time;

      console.log("Données à envoyer:", {
        name,
        notes,
        phone_number: phoneNumber,
        postal_code: postalCode,
        date: selectedDate?.toISOString(),
        time: formattedTime,
      });

      // Appel à notre route API pour créer le rendez-vous
      const response = await fetch("/api/rdv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          notes,
          phone_number: phoneNumber,
          postal_code: postalCode,
          date: selectedDate?.toISOString(),
          time: formattedTime,
        }),
      });

      const responseData = await response.json();
      console.log("Réponse API:", responseData);

      if (!response.ok) {
        console.error("Erreur API:", responseData);
        throw new Error(
          responseData.error || "Erreur lors de la création du rendez-vous"
        );
      }

      // Réinitialiser les champs
      setStep(1);
      setName("");
      setPhoneNumber("");
      setTime("");
      setPostalCode("");
      setNotes("");
      setSelectedDate(undefined);
    } catch (error) {
      console.error("Erreur complète:", error);
      // Afficher un message d'erreur à l'utilisateur
    } finally {
      setIsLoading(false);
    }

    console.log("submit");
  };

  return (
    <div className="px-4">
      <h2 className="text-2xl lg:text-3xl text-center font-semibold mb-12 lg:mb-24">
        Prendre rendez-vous ?
      </h2>
      <div className="flex flex-col md:items-center lg:justify-center lg:flex-row lg:items-center gap-8 md:gap-12 lg:gap-20 xl:gap-32">
        <div className="md:max-w-[500px] lg:max-w-[400px]">
          <h3 className="mb-8 lg:text-xl">
            ​Prenez rendez-vous avec nos experts pour découvrir comment Sunline
            Énergie peut vous aider à réduire vos factures d'électricité grâce à
            des solutions solaires sur mesure. <br /> <br /> Profitez de notre
            expertise et de nos garanties exclusives pour une transition
            énergétique en toute sérénité.
          </h3>
          <p className="underline decoration-primary underline-offset-2 lg:underline-offset-4 lg:text-lg">
            {step === 1 && "Tout d'abord, choisissez la date du rendez-vous"}
            {step === 2 && "Puis remplissez les informations suivantes"}
            {step === 3 && "Parfait, vérifiez si tout est bon et validez !"}
          </p>
        </div>
        <form
          className="flex md:items-center flex-col gap-8 md:gap-12 md:w-[500px] lg:w-[400px] md:max-w-[500px] lg:max-w-[400px]"
          onSubmit={handleSumbit}
        >
          {step === 1 && (
            <Step1
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          )}
          {step === 2 && (
            <Step2
              name={name}
              setName={setName}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              time={time}
              setTime={setTime}
              postalCode={postalCode}
              setPostalCode={setPostalCode}
              notes={notes}
              setNotes={setNotes}
            />
          )}
          {step === 3 && (
            <Step3
              name={name}
              selectedDate={selectedDate}
              time={time}
              phoneNumber={phoneNumber}
              notes={notes}
              postalCode={postalCode}
            />
          )}
          <div className="flex justify-between items-center w-full">
            <h4 className="font-semibold text-lg">
              Étape{" "}
              <span>
                <span className="text-primary">{step}</span>/3
              </span>
            </h4>
            {step !== 3 ? (
              <Button
                type="button"
                radius="full"
                color="primary"
                onPress={() => {
                  setStep(step + 1);
                }}
              >
                Étape Suivante
              </Button>
            ) : (
              <div className="flex gap-3">
                <Button
                  radius="full"
                  variant="bordered"
                  color="primary"
                  onPress={() => {
                    setStep(1);
                    setSelectedDate(undefined);
                    setName("");
                    setPhoneNumber("");
                    setTime("");
                    setPostalCode("");
                    setNotes("");
                  }}
                >
                  Recommencer
                </Button>
                <Button type="submit" radius="full" color="primary">
                  Confirmer
                </Button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
