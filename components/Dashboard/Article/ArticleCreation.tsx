"use client";

import {
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";
import { Image } from "lucide-react";
import NextImage from "next/image";
import React, { useState, useRef } from "react";
import TextEditor from "./TextEditor";
import { uploadImage } from "@/lib/cloudinary";

export default function ArticleCreation() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Récupérer le contenu de l'éditeur
      const content =
        (document.querySelector(".ProseMirror") as HTMLElement)?.innerHTML ||
        "";

      // Upload de l'image vers Cloudinary
      const imageFile = fileInputRef.current?.files?.[0];
      let imageUrl = "";
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      // Appel à notre route API pour créer l'article
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category: selectedCategory,
          content,
          image: imageUrl,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error.error || "Erreur lors de la création de l'article"
        );
      }

      // Réinitialiser le formulaire
      setTitle("");
      setSelectedCategory("");
      setPreviewImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      onOpenChange();
    } catch (error) {
      console.error("Erreur lors de la création de l'article:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = [
    { label: "Particuliers", value: "particuliers" },
    { label: "Aides de l'état", value: "aides-etat" },
    { label: "Société", value: "societe" },
    { label: "Passer au solaire", value: "passer-au-solaire" },
    { label: "Technologie solaire", value: "technologie-solaire" },
    {
      label: "Pionniers de l'énergie solaire",
      value: "pionniers-energie-solaire",
    },
  ];

  return (
    <>
      <Button
        className="w-1/2 lg:w-full bg-dashboardBlue text-white"
        onPress={onOpen}
        radius="sm"
      >
        Créer un article
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
              <ModalHeader className="flex flex-col gap-1 text-2xl font-medium text-center lg:text-start mb-12 px-12 lg:absolute">
                Créer un article
              </ModalHeader>
              <ModalBody className="px-4 md:px-6 lg:px-12 lg:flex lg:items-center lg:justify-center min-h-[1250px] lg:min-h-[1000px] lg:overflow-hidden">
                <Form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 md:gap-12 lg:w-full"
                >
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-24 w-full">
                    <div className="flex-col flex gap-6 md:gap-12 w-full lg:w-3/4">
                      <div className="flex flex-col gap-6 lg:gap-12 md:flex-row lg:flex-col">
                        <Input
                          isRequired
                          label="Choisir un titre"
                          placeholder="L'avenir des panneaux solaires..."
                          variant="bordered"
                          labelPlacement="outside"
                          radius="none"
                          name="title"
                          className="md:w-full"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                        <Select
                          isRequired
                          label="Choisir une catégorie"
                          placeholder="Particuliers"
                          selectedKeys={
                            selectedCategory ? [selectedCategory] : []
                          }
                          onSelectionChange={(keys) => {
                            const selected = Array.from(keys)[0] as string;
                            setSelectedCategory(selected || "particuliers");
                          }}
                          variant="bordered"
                          labelPlacement="outside"
                          radius="none"
                          className="md:w-1/2 lg:w-full"
                        >
                          {categories.map((category) => (
                            <SelectItem key={category.value} color="primary">
                              {category.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <Input
                        ref={fileInputRef}
                        isRequired
                        label="Choisir une image de couverture"
                        variant="bordered"
                        labelPlacement="outside"
                        radius="none"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      <div className="w-full h-32 md:h-48 lg:h-72 bg-gray-200 flex justify-center items-center rounded-lg overflow-hidden">
                        {previewImage ? (
                          <NextImage
                            src={previewImage}
                            alt="Aperçu de l'image"
                            className="w-full h-full object-cover"
                            width={500}
                            height={500}
                          />
                        ) : (
                          <Image size={96} strokeWidth={1} />
                        )}
                      </div>
                      <Button
                        variant="bordered"
                        radius="none"
                        className="text-primary hidden lg:block"
                        type="submit"
                        isLoading={isLoading}
                      >
                        Créer l'article
                      </Button>
                    </div>
                    <div className="w-full">
                      <TextEditor />
                    </div>
                  </div>
                <Button
                  variant="bordered"
                  radius="none"
                  className="text-primary lg:hidden w-full"
                  type="submit"
                  isLoading={isLoading}
                >
                  Créer l'article
                </Button>
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
