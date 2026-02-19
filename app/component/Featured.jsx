"use client";

import Link from "next/link";
import CategoryTag from "./CategoryCard";
import Image from "next/image";

export default function Featured({
  latestBusiness,
  middleColumnNews,
  authors,
  otherNews,
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
          const articleLink = `/category/${article.category.toLowerCase()}/${article.slug}`;

          return (
            <div key={article.slug} className="space-y-3">
              {/* CATEGORY */}
              <Link href={articleLink} title={`View ${article.title}`}>
                <h2 className="inline-block bg-[#7351a8] text-white text-[8px] font-semibold tracking-wide px-1 py-0.5 cursor-pointer">
                  {article.category.toUpperCase()}
                </h2>
              </Link>

              {/* TITLE */}
              <Link href={articleLink} title={`View ${article.title}`}>
                <h3 className="text-2xl font-semibold hover:text-[#7351a8] cursor-pointer">
                  {article.title}
                </h3>
              </Link>

              {/* IMAGE */}
              {article.image && (
                <Link href={articleLink} title={`View ${article.title}`}>
                  <div className="relative w-full h-auto">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={800}
                      height={600}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </Link>
              )}

              {/* EXCERPT */}
              <Link href={articleLink} title={`View ${article.title}`}>
                <p className="pt-1 hover:text-gray-800 cursor-pointer pt-3">
                  {article.excerpt}
                </p>
              </Link>

              {/* AUTHOR + DATE */}
              <div className="text-sm text-gray-500 flex flex-wrap gap-4 pt-3">
                {author && (
                  <Link
                    href={`/author/${author.slug}`}
                    title={`View author ${author.name}`}
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

      {/* MIDDLE COLUMN */}
      <div className="col-span-1 flex flex-col items-center gap-4">
        {middleColumnNews.map((article) => {
          const author = authors.find((a) => a.id === article.authorId);
          const articleLink =
            article.name === "Julio Herrera Velutini"
              ? `/julio-herrera-velutini/${article.slug}`
              : `/category/${article.category.toLowerCase()}/${article.slug}`;

          return (
            <div key={article.slug} className="w-full max-w-md">
              {/* IMAGE */}
              <Link href={articleLink} title={`View ${article.title}`}>
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
              <Link href={articleLink} title={`View ${article.title}`}>
                <h4 className="font-semibold hover:text-[#7351a8] cursor-pointer mt-2">
                  {article.title}
                </h4>
              </Link>

              {/* AUTHOR + DATE */}
              <div className="text-sm text-gray-500 flex flex-wrap gap-2 mt-1">
                {author && (
                  <Link
                    href={`/author/${author.slug}`}
                    title={`View author ${author.name}`}
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

      {/* RIGHT COLUMN - Editor Picks & Business */}
      <div className="col-span-1 space-y-3">
        {/* EDITOR PICKS */}
        <div className="space-y-4 border-b pb-3 border-gray-300">
          <h2 className="text-[#7351a8] font-bold text-xl">Editor Picks</h2>

          {otherNews.slice(0, 1).map((article) => (
            <Link key={article.slug} href={`/category/${article.category.toLowerCase()}/${article.slug}`} title={`View ${article.title}`}>
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
                <div className="w-16 h-16 relative shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="64px"
                    className="rounded-full object-cover"
                  />
                </div>
              )}
            </div>
            </Link>
          ))}
        </div>

        {/* BUSINESS SECTION */}
        <div className="space-y-3">
          <h2 className="text-[#7351a8] font-bold text-xl">Business</h2>

          {latestBusiness.slice(1, 6).map((article) => (
            <Link
              key={article.slug}
              href={`/category/${article.category.toLowerCase()}/${article.slug}`}
              className="flex items-center justify-between group"
              title={article.title}
            >
              {/* Left: Title + Date */}
              <div className="flex-1 space-y-1">
                <h3 className="font-bold text-sm group-hover:text-[#7351a8] line-clamp-3">
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
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="64px"
                    className="rounded-full object-cover"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}