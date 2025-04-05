"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import React, { useEffect, useState } from "react";
import RdvCard, { RdvCardProps } from "./RdvCard";

export default function ManageRdv() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [rdv, setRdv] = useState<RdvCardProps[]>([]);

  useEffect(() => {
    const fetchRdv = async () => {
      try {
        const response = await fetch("/api/rdv");
        const result = await response.json();

        // Vérifier si result.data existe et est un tableau
        if (result.data && Array.isArray(result.data)) {
          setRdv(result.data);
        } else {
          console.error("Format de données inattendu:", result);
          setRdv([]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des rendez-vous:", error);
        setRdv([]);
      }
    };
    fetchRdv();
  }, []);

  return (
    <>
      <Button
        className="lg:w-full bg-dashboardGreen text-white"
        onPress={onOpen}
        radius="sm"
      >
        Gérer les rendez-vous
      </Button>
      <Modal
        placement="center"
        size="full"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="overflow-y-auto py-5"
      >
        <ModalContent className="relative">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl font-medium text-center lg:text-start mb-12 px-12 lg:absolute z-10">
                Gérer les rendez-vous
              </ModalHeader>
              <ModalBody className="!px-4 lg:!px-12 min-h-[1250px] lg:min-h-[1000px]">
                <div className="lg:my-28 flex md:hidden flex-col items-center gap-6 sm:gap-12">
                  {rdv.map((rdv: RdvCardProps) => (
                    <RdvCard
                      key={rdv.id}
                      id={rdv.id}
                      name={rdv.name}
                      phone_number={rdv.phone_number}
                      postal_code={rdv.postal_code}
                      date={rdv.date}
                      time={rdv.time}
                      notes={rdv.notes}
                      status={rdv.status}
                    />
                  ))}
                </div>
                <div className="lg:my-28 hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-12 md:gap-y-16 md:px-4">
                  {rdv.map((rdv: RdvCardProps) => (
                    <RdvCard
                      key={rdv.id}
                      id={rdv.id}
                      name={rdv.name}
                      phone_number={rdv.phone_number}
                      postal_code={rdv.postal_code}
                      date={rdv.date}
                      time={rdv.time}
                      notes={rdv.notes}
                      status={rdv.status}
                    />
                  ))}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
