"use client";

import Link from "next/link";
import data from "@/data/data.json";
import CategoryTag from "./CategoryCard";
import Image from "next/image";

export default function Featured() {
  // Filter published articles
  const publishedArticles = data.articles.filter((article) => article.published);

  // Latest Business news
  const latestBusiness = publishedArticles
    .filter((article) => article.category.toLowerCase() === "business")
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Other news for middle column
  const otherNews = publishedArticles.filter(
    (article) => article.category.toLowerCase() !== "business"
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-5 gap-7">
      {/* LEFT COLUMN - LATEST BUSINESS NEWS */}
      <div className="col-span-1 lg:col-span-3 space-y-6">
        {latestBusiness.slice(0, 1).map((article) => (
          <div key={article.slug} className="space-y-2">
            <h2 className="inline-block bg-[#7351a8] text-white text-[8px] font-semibold tracking-wide px-1 py-0.5 cursor-pointer">
              {article.category.toUpperCase()}
            </h2>
            <h3 className="text-2xl font-semibold hover:text-[#7351a8]">{article.title}</h3>
            <div className="text-sm text-gray-500 flex flex-wrap gap-2">
              <Link
                href={`/author/${article.authorId}`}
                className="italic hover:text-[#7351a8]"
              >
                {data.authors.find((a) => a.id === article.authorId)?.name}
              </Link>
              <span>
                | {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            {article.image && (
              <img src={article.image} alt={article.title} className="w-full h-auto" />
            )}
            <p className="pt-1">{article.excerpt}</p>
          </div>
        ))}
      </div>

      {/* MIDDLE COLUMN - 3 NEWS WITH IMAGE (CENTERED) */}
      <div className="col-span-1 flex flex-col items-center gap-4">
        {otherNews.slice(0, 3).map((article) => (
          <div key={article.slug} className="w-full max-w-md">
            <div className="relative group aspect-[7/3] w-full overflow-hidden">
              {article.image && (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              )}
              <CategoryTag text={article.category.toUpperCase()} />
            </div>

            <h4 className="font-semibold hover:text-[#7351a8] cursor-pointer mt-2">
              {article.title}
            </h4>

            <div className="text-sm text-gray-500 flex flex-wrap gap-2 mt-1">
              <Link href={`/author/${article.authorId}`} className="italic hover:text-[#7351a8]">
                {data.authors.find((a) => a.id === article.authorId)?.name}
              </Link>
              <span>
                | {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN - Editor Picks & Business */}
      <div className="col-span-1 space-y-3">
        {/* EDITOR PICKS */}
        <div className="space-y-4 border-b pb-3 border-gray-300">
          <h2 className="text-[#7351a8] font-bold text-xl">Editor Picks</h2>

          {otherNews.slice(0, 1).map((article) => (
            <div key={article.slug} className="flex items-center justify-between gap-4">
              {/* Left: Title + Date */}
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold text-sm hover:text-[#7351a8] cursor-pointer">
                  {article.title}
                </h3>
                <span className="text-sm text-gray-500">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Right: Circular Image */}
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
            </div>
          ))}
        </div>

        {/* BUSINESS SECTION */}
        <div className="space-y-3">
          <h2 className="text-[#7351a8] font-bold text-xl">Business</h2>

          {latestBusiness.slice(1, 6).map((article) => (
            <div key={article.slug} className="flex items-center justify-between">
              {/* Left: Title + Date */}
              <div className="flex-1 space-y-1">
                <h3 className="font-bold text-sm hover:text-[#7351a8] cursor-pointer line-clamp-3">
                  {article.title}
                </h3>
                <span className="text-sm text-gray-500">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Right: Circular Image */}
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}