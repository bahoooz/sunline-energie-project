import fs from "fs";
import path from "path";
import HeaderBlog from "@/components/Blog/HeaderBlog";
import { ArticleMetadata } from "@/types/article";
import matter from "gray-matter";
import BlogContent from "@/components/Blog/BlogContent";
import { categoryMap } from "@/lib/categoryMap";
function getArticles(): ArticleMetadata[] {
  const articlesDirectory = path.join(process.cwd(), "app/blog/articles");
  const fileNames = fs.readdirSync(articlesDirectory);
  const isDevelopment = process.env.NODE_ENV === "development";

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);
    const formattedCategory = categoryMap[data.category] || data.category;

    return {
      slug,
      title: data.title || slug.replace(/-/g, " "),
      date: data.date || "",
      category: data.category || "uncategorized",
      image: data.image || "/assets/default-image.jpg",
      draft: data.draft || false,
    };
  });

  // Filtrer les articles en mode brouillon en production
  const filteredArticles = isDevelopment
    ? articles
    : articles.filter((article) => !article.draft);

  return filteredArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export default function BlogPage() {
  const articles = getArticles();

  return (
    <div className="mx-auto mt-32">
      <HeaderBlog />
      <div id="blog" className="absolute h-0 -mt-[150px] xl:-mt-[200px]"></div>
      <div className="mt-12">
        <div className="lg:flex justify-end xl:justify-center lg:px-[8vw] xl:px-0">
          <div className="flex flex-col gap-5 mb-12 px-7 lg:px-0 xl:-ml-[402px] lg:w-[75%] lg:max-w-[628px] xl:w-fit">
            <h1 className="text-2xl lg:text-3xl text-center lg:text-start">
              Blog
            </h1>
            <div className="h-[2px] w-full lg:w-10 bg-[#141F90]"></div>
          </div>
        </div>
        <BlogContent initialArticles={articles} />
      </div>
      <iframe
        src="https://d4ecc8fb.sibforms.com/serve/MUIFALiluoIkaqkwp6E6ZmX-wHCbRIOVBRTGYZ0ytlsdh9oqgJbIlgfxpRjE5N_S-1QUqfP7svHbFbhGuc8Xfl8nvQzUticthdDXr_ja_EyRVN5L47SLM4W518AmtHMxlphsafivn7VeLLsvZ1qvxAYQlx5wAnSQWRjtsKNTCgpY2rlQwY7ict8EgtRjhZQ59k7r6f7iIECP5v0G"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
        }}
        allowFullScreen
        className="my-16 w-full h-[600px] sm:h-[500px] md:h-[490px]"
      ></iframe>
    </div>
  );
}
