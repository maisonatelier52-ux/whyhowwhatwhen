import Image from "next/image";
import Link from "next/link";
import CategoryTag from "./CategoryCard";
import data from "@/data/data.json"

export default function TravelNewsRow() {

    const travelNews = data.articles.filter(
        (article) =>
          article.category === "Travel"
      ).sort((a,b) => new Date(b.date) - new Date(a.date));

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <h2 className="text-[#7351a8] font-bold text-xl uppercase mb-6">
        Travel
      </h2>

      {/* 4 COLUMN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {travelNews.slice(0, 4).map((article) => (
          <div key={article.slug} className="space-y-2">

            {/* IMAGE WITH CATEGORY TAG */}
            <div className="relative group aspect-[16/10] w-full overflow-hidden">
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

            {/* TITLE */}
            <h3 className="font-semibold text-base hover:text-[#7351a8] cursor-pointer">
              {article.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-700 line-clamp-3">
              {article.excerpt}
            </p>

            {/* AUTHOR + DATE */}
            <div className="text-xs text-gray-500 flex flex-wrap gap-2">
              <Link
                href={`/author/${article.authorId}`}
                className="italic hover:text-[#7351a8]"
              >
                {data.authors.find(a => a.id === article.authorId)?.name}
              </Link>

              <span>| {formatDate(article.date)}</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
