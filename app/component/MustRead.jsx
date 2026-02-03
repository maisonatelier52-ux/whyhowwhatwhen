import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";
import CategoryTag from "./CategoryCard";

export default function MustRead() {
  const publishedNews = data.articles.filter(
    (article) =>
      article.category === "Travel" ||
      article.category === "Climate"
  ).sort((a,b) => new Date(b.date) - new Date(a.date));

  const topNews = publishedNews[0];
  const remaining = publishedNews.slice(1, 5);

  return (
    <section className="px-5 pb-5">
      {/* HEADER */}
      <div className="relative bg-[#7351a8] text-white p-6 pb-16 mb-8">
        <h2 className="text-4xl font-extrabold">Must Read</h2>
        <p className="mt-2">
          Everything you need to know about the re-reboot of your favourite
          childhood flick.
        </p>
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* LEFT — TOP NEWS (WIDER) */}
        {topNews && (
          <div className="lg:col-span-2 -mt-20 relative z-10 space-y-4">
            {topNews.image && (
              <div className="relative w-full h-100 overflow-hidden shadow-xl">
                <Image
                  src={topNews.image}
                  alt={topNews.title}
                  fill
                  className="object-cover"
                />
                <CategoryTag text={topNews.category.toUpperCase()} />
              </div>
            )}

            <h3 className="text-2xl font-semibold hover:text-[#7351a8] cursor-pointer">
              {topNews.title}
            </h3>
            <div className="text-sm text-gray-500 flex flex-wrap gap-2">
              <Link
                href={`/author/${topNews.authorId}`}
                className="italic hover:text-[#7351a8]"
              >
                {data.authors.find(a => a.id === topNews.authorId)?.name}
              </Link>
              <span>| {new Date(topNews.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}</span>
            </div>
          </div>
        )}

        {/* RIGHT — 2x2 GRID */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {remaining.map((article) => (
            <div key={article.slug} className="space-y-2">
              {article.image && (
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <CategoryTag text={article.category.toUpperCase()} />
                </div>
              )}
              <h4 className="text-sm font-semibold leading-snug hover:text-[#7351a8] cursor-pointer">
                {article.title}
              </h4>
              <div className="text-sm text-gray-500 flex flex-wrap gap-2">
                <Link
                    href={`/author/${article.authorId}`}
                    className="italic hover:text-[#7351a8]"
                >
                    {data.authors.find(a => a.id === article.authorId)?.name}
                </Link>
                <span>| {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                })}</span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
