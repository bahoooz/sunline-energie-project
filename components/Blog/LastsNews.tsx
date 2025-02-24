import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import LastNewsArticle from "./LastNewsArticle";

function getLastArticles(currentSlug: string) {
  const articlesDirectory = path.join(process.cwd(), "app/blog/articles");
  const fileNames = fs.readdirSync(articlesDirectory);
  const isDevelopment = process.env.NODE_ENV === "development";

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug.replace(/-/g, " "),
      date: data.date || "",
      category: data.category || "uncategorized",
      image: data.image || "/assets/default-image.jpg",
      draft: data.draft || false,
    };
  });

  const filteredArticles = isDevelopment
    ? articles
    : articles.filter((article) => !article.draft);

  return filteredArticles
    .filter((article) => article.slug !== currentSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);
}

export default function LastsNews({ currentSlug = "" }) {
  const lastArticles = getLastArticles(currentSlug);

  return (
    <div className="bg-[#F4F4F4] py-16 lg:py-20 px-7">
      <div className="text-center flex flex-col gap-4 lg:gap-8 mb-16">
        <h2 className="text-2xl lg:text-3xl font-bold">Dernières actualités</h2>
        <p>
          Pour tout savoir sur le photovoltaïque pour les particuliers et les
          professionnels, découvrez nos dernières actualités
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-start gap-12 md:gap-8 xl:gap-12">
        {lastArticles.map((article) => (
          <LastNewsArticle
            key={article.slug}
            slug={article.slug}
            title={article.title}
            image={article.image}
            category={article.category}
          />
        ))}
      </div>
    </div>
  );
}
