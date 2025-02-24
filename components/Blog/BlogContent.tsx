"use client";
import { useState } from "react";
import { ArticleMetadata } from "@/types/article";
import FilterBlogCategory from "./FilterBlogCategory";
import Article from "./Article";
import { motion, AnimatePresence } from "framer-motion";
import { Pagination } from "@heroui/pagination";

// Ajout du mapping inverse pour la recherche
const categoryMapReverse: { [key: string]: string } = {
  Particuliers: "particuliers",
  "Aides de l'État": "aides-etat",
  Société: "societe",
  "Passer au Solaire": "passer-au-solaire",
  "Technologie Solaire": "technologie-solaire",
  "Pionniers de l'Énergie Solaire": "pionniers-energie-solaire",
};

interface BlogContentProps {
  initialArticles: ArticleMetadata[];
}

export default function BlogContent({ initialArticles }: BlogContentProps) {
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  const handleCategoriesChange = (categories: string[]) => {
    setFilteredCategories(categories);
    setCurrentPage(1); // Réinitialiser la page lors du changement de filtres
  };

  const filteredArticles =
    filteredCategories.length > 0
      ? initialArticles.filter((article) =>
          // Convertir la catégorie formatée en valeur non formatée pour la comparaison
          filteredCategories.includes(
            categoryMapReverse[article.category] || article.category
          )
        )
      : initialArticles;

  // Pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const [firstArticle, ...otherArticles] = currentArticles;
  const totalPages = Math.ceil((filteredArticles.length - 1) / articlesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative lg:flex justify-between xl:justify-between xl:gap-12 lg:px-[8vw] xl:px-0 xl:mx-auto xl:max-w-[1200px]">
      <FilterBlogCategory onCategoriesChange={handleCategoriesChange} />
      <AnimatePresence mode="wait">
        {filteredArticles.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:w-[600px] xl:w-[800px] px-7 flex flex-col gap-3 items-center justify-center py-8"
          >
            <h2 className="text-2xl lg:text-3xl text-center lg:text-start">
              Aucun article
            </h2>
            <p className="text-center">
              Nous n&apos;avons pas trouvé d&apos;articles correspondant à vos
              critères.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-7 flex flex-col items-center justify-center"
          >
            {firstArticle && (
              <Article
                title={firstArticle.title}
                image={firstArticle.image}
                date={firstArticle.date}
                category={firstArticle.category}
                slug={firstArticle.slug}
                isFirst={true}
              />
            )}

            {otherArticles.length > 0 && (
              <div className="w-full max-w-[500px] md:hidden h-[2px] bg-[#141F90] my-8" />
            )}

            <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-5 md:gap-x-8 xl:gap-x-6 gap-y-8 md:gap-y-12 max-w-[500px] md:min-w-[600px] md:max-w-[600px] xl:min-w-[800px] xl:max-w-[800px] md:mt-12">
              {otherArticles.map((article) => (
                <Article
                  key={article.slug}
                  title={article.title}
                  image={article.image}
                  date={article.date}
                  category={article.category}
                  slug={article.slug}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination
                  total={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  variant="bordered"
                  color="default"
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
