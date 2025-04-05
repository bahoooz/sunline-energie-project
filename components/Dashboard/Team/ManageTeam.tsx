"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import React from "react";

export default function ManageTeam() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="lg:w-full bg-dashboardRed text-white"
        onPress={onOpen}
        radius="sm"
      >
        Gérer l'équipe
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
                Gérer l'équipe
              </ModalHeader>
              <ModalBody className="!px-4 lg:!px-12 min-h-[1250px] lg:min-h-[1000px]">
                
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
