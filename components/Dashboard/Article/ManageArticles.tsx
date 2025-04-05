"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import React, { useState, useEffect } from "react";
import ArticleCard, { ArticleCardProps } from "./ArticleCard";
import useSupabaseQuery from "@/hooks/useSupabaseQuery";

export default function ManageArticles() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [articles, setArticles] = useState<ArticleCardProps[]>([]);
  const [isRow, setIsRow] = useState(false);
  const { data, error, loading } = useSupabaseQuery<ArticleCardProps>(
    "articles",
    {},
    []
  );

  useEffect(() => {
    if (data) {
      setArticles(data);
    }
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      setIsRow(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Button
        className="w-1/2 lg:w-full bg-dashboardBlue text-white"
        onPress={onOpen}
        radius="sm"
      >
        Gérer les articles
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
                Gérer les articles
              </ModalHeader>
              <ModalBody className="!px-4 lg:!px-12 min-h-[1250px] lg:min-h-[1000px]">
                <div className="flex justify-center lg:w-full">
                  <div className="flex lg:hidden flex-wrap justify-center gap-x-5 md:gap-x-8 gap-y-8 md:gap-y-12">
                    {articles.map((article) => (
                      <ArticleCard
                        title={article.title}
                        category={article.category}
                        image={article.image}
                        created_at={article.created_at}
                        key={article.id}
                        isRow={isRow}
                      />
                    ))}
                  </div>
                  <div className="hidden my-28 lg:grid grid-cols-[repeat(4,minmax(0,1fr))] 2xl:grid-cols-[repeat(5,minmax(0,1fr))] gap-y-8 lg:gap-y-10 xl:gap-y-16 w-full">
                    {articles.map((article) => (
                      <ArticleCard
                        title={article.title}
                        category={article.category}
                        image={article.image}
                        created_at={article.created_at}
                        key={article.id}
                        isRow={isRow}
                      />
                    ))}
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
