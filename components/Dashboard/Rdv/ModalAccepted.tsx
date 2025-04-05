"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import React from "react";

export default function ModalAccepted() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <span
        className="text-dashboardGreen underline underline-offset-2 cursor-pointer"
        onClick={onOpen}
      >
        Valider
      </span>
      <Modal
        placement="center"
        size="md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="overflow-y-auto py-5"
      >
        <ModalContent className="relative">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl font-medium text-center lg:text-start mb-12 px-12 lg:absolute z-10 text-dashboardGreen">
                Valider le rendez-vous
              </ModalHeader>
              <ModalBody className="!px-4 lg:!px-12 lg:min-h-[200px]"></ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
