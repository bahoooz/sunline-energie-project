import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ComponentType } from "react";
import matter from "gray-matter";
import MdxImage from "@/components/Blog/MdxImage";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/button";
import { ChevronsRight, Facebook, Instagram } from "lucide-react";
import { categoryMap } from "@/lib/categoryMap";
import LastsNews from "@/components/Blog/LastsNews";
import { Suspense } from "react";

type MDXComponents = {
  [key: string]: ComponentType<any>;
};

function extractHeadings(content: string) {
  const headings = content.match(/^##\s+(.+)$/gm) || [];
  return headings.map((heading) => {
    const text = heading.replace("## ", "");
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    return { text, id };
  });
}

const components: MDXComponents = {
  img: MdxImage,
  a: ({
    href = "",
    children,
    ...props
  }: {
    href?: string;
    children: React.ReactNode;
    [key: string]: any;
  }) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#");

    if (isInternal) {
      return (
        <Link
          href={href}
          className="text-blue-600 hover:text-blue-800 underline"
          {...props}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
        {...props}
      >
        {children}
      </a>
    );
  },
};

export async function generateStaticParams() {
  const articlesDirectory = path.join(process.cwd(), "app/blog/articles");
  const files = fs.readdirSync(articlesDirectory);

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "app/blog/articles", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);
  const headings = extractHeadings(content);

  console.log(data);

  // Prétraitement du contenu pour préserver les commentaires HTML
  const processedContent = content
    .replace(/^##\s+(.+)$/gm, (match, title) => {
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return `<h2 id="${id}">${title}</h2>`;
    })
    // Préserve les commentaires HTML
    .replace(/<!--[\s\S]*?-->/g, (match) => {
      return `{/* ${match.slice(4, -3).trim()} */}`;
    });

  const { content: compiledContent } = await compileMDX({
    source: processedContent,
    components,
    options: { parseFrontmatter: true }
  });

  return (
    <article className="mt-32 mx-auto">
      {data.image && (
        <Image
          src={data.image}
          alt={data.title || "Article image"}
          width={1200}
          height={600}
          className="w-full max-h-[400px] object-cover aspect-[2/1] m-0 lg:col-span-2"
          priority
          id="blog"
        />
      )}
      <div className="lg:grid lg:grid-cols-[350px,1fr] lg:gap-8 lg:px-4 xl:max-w-[1200px] lg:relative mx-auto mb-16">
        <div className="bg-gray-100 px-7 py-8 rounded-lg mb-8 md:mb-16 lg:m-0 lg:mt-4 lg:sticky lg:top-36 lg:h-fit lg:col-start-1">
          <h2 className="text-2xl text-center uppercase m-0 mb-8 lg:mt-0 font-normal">
            <a className="hover:underline no-underline" href="#blog">
              Sommaire
            </a>
          </h2>
          <nav className="flex flex-col gap-5">
            {headings.map((heading, index) => (
              <a
                key={index}
                href={`#${heading.id}`}
                className="hover:underline no-underline"
              >
                {heading.text}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 items-center mt-8">
            <Button
              as={Link}
              href="/contact"
              className="bg-[#FBAC18] w-full text-white no-underline rounded-none"
            >
              <ChevronsRight /> Demander un devis
            </Button>
            <a
              className="text-sm text-[#0B68A4] no-underline hover:underline"
              href="tel:0975309157"
            >
              Être gratuitement rappelé
            </a>
          </div>
        </div>
        <div className="px-7 lg:px-6 lg:pt-4 lg:col-start-2 lg:row-start-1 lg:-mt-12 bg-white prose sm:min-w-full  prose-h2:font-light sm:prose-h2:text-3xl">
          <div className="flex flex-col gap-6 mb-16">
            <h1 className="text-2xl lg:text m-0 font-light">{data.title}</h1>
            <div className="h-[2px] w-16 bg-[#141F90]"></div>
            <div className="flex justify-between items-center text-xs sm:text-sm uppercase">
              <span>{categoryMap[data.category]}</span>
              <span>
                {new Date(data.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex gap-3 justify-end">
              <a
                href="https://www.facebook.com/people/Sunline/61559245282494/"
                target="_blank"
                className="hover:scale-110 transition-all duration-300"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/sunline_energie/"
                target="_blank"
                className="hover:scale-110 transition-all duration-300"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <Suspense fallback={<div>Chargement...</div>}>
            {compiledContent}
          </Suspense>
        </div>
      </div>
      <LastsNews currentSlug={slug} />
    </article>
  );
}
