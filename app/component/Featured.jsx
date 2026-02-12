"use client";

import Link from "next/link";
import CategoryTag from "./CategoryCard";
import Image from "next/image";

export default function Featured({
  latestBusiness,
  middleColumnNews,
  authors,
}) {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
      {/* LEFT COLUMN - LATEST BUSINESS NEWS */}
      <div className="col-span-1 lg:col-span-2 space-y-6">
        {latestBusiness.slice(0, 1).map((article) => {
          const author = authors.find((a) => a.id === article.authorId);
          const articleLink = `/category/${article.category}/${article.slug}`;

          return (
            <div key={article.slug} className="space-y-3">
              {/* CATEGORY */}
              <Link href={articleLink}>
                <h2 className="inline-block bg-[#7351a8] text-white text-[8px] font-semibold tracking-wide px-1 py-0.5 cursor-pointer">
                  {article.category.toUpperCase()}
                </h2>
              </Link>

              {/* TITLE */}
              <Link href={articleLink}>
                <h3 className="text-2xl font-semibold hover:text-[#7351a8] cursor-pointer">
                  {article.title}
                </h3>
              </Link>

              {/* AUTHOR + DATE */}
              <div className="text-sm text-gray-500 flex flex-wrap gap-2">
                {author && (
                  <Link
                    href={`/author/${author.slug}`}
                    className="italic hover:text-[#7351a8]"
                  >
                    {author.name}
                  </Link>
                )}
                <span>| {formatDate(article.date)}</span>
              </div>

              {/* IMAGE */}
              {article.image && (
                <Link href={articleLink}>
                  <div className="relative w-full aspect-[16/9] cursor-pointer">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
                    />
                  </div>
                </Link>
              )}

              {/* EXCERPT */}
              <Link href={articleLink}>
                <p className="pt-1 hover:text-gray-800 cursor-pointer">
                  {article.excerpt}
                </p>
              </Link>
            </div>
          );
        })}
      </div>

      {/* MIDDLE COLUMN */}
      <div className="col-span-1 flex flex-col items-center gap-4">
        {middleColumnNews.map((article) => {
          const author = authors.find((a) => a.id === article.authorId);
          const articleLink = `/category/${article.category}/${article.slug}`;

          return (
            <div key={article.slug} className="w-full max-w-md">
              {/* IMAGE */}
              <Link href={articleLink}>
                <div className="relative group aspect-7/3 w-full overflow-hidden cursor-pointer">
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
              </Link>

              {/* TITLE */}
              <Link href={articleLink}>
                <h4 className="font-semibold hover:text-[#7351a8] cursor-pointer mt-2">
                  {article.title}
                </h4>
              </Link>

              {/* AUTHOR + DATE */}
              <div className="text-sm text-gray-500 flex flex-wrap gap-2 mt-1">
                {author && (
                  <Link
                    href={`/author/${author.slug}`}
                    className="italic hover:text-[#7351a8]"
                  >
                    {author.name}
                  </Link>
                )}
                <span>| {formatDate(article.date)}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT COLUMN */}
      <div className="col-span-1 space-y-3">
        <h2 className="text-[#7351a8] font-bold text-xl">Business</h2>

        {latestBusiness.slice(1, 6).map((article) => {
          const articleLink = `/category/${article.category}/${article.slug}`;

          return (
            <div
              key={article.slug}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex-1 space-y-1">
                {/* TITLE */}
                <Link href={articleLink}>
                  <h3 className="font-bold text-sm hover:text-[#7351a8] cursor-pointer">
                    {article.title}
                  </h3>
                </Link>

                <span className="text-sm text-gray-500">
                  {formatDate(article.date)}
                </span>
              </div>

              {/* IMAGE */}
              {article.image && (
                <Link href={articleLink}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-16 h-16 rounded-full object-cover cursor-pointer"
                  />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
