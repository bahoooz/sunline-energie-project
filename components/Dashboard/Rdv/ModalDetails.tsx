"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import React from "react";

export default function ModalDetails() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <span className="underline underline-offset-2 cursor-pointer" onClick={onOpen}>
        Détails
      </span>
      <Modal
        placement="center"
        size="sm"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="overflow-y-auto py-5"
      >
        <ModalContent className="relative">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl font-medium text-center lg:text-start mb-12 px-12 lg:absolute z-10">
                Détails
              </ModalHeader>
              <ModalBody className="!px-4 lg:!px-12 lg:min-h-[200px]"></ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
