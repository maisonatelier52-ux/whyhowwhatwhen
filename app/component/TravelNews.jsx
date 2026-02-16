import Image from "next/image";
import Link from "next/link";
import CategoryTag from "./CategoryCard";

export default function TravelNewsRow({ travelNews, authors }) {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <section className="mx-auto px-6 py-10">
      <Link href="/category/Travel" title="View Travel category">
        <h2 className="text-[#7351a8] font-bold text-xl uppercase mb-6">
          Travel
        </h2>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-300 divide-y md:divide-y-0 md:divide-x divide-gray-300">
        {travelNews.slice(0, 4).map((article) => {
          const author = authors.find((a) => a.id === article.authorId);
          const articleLink = `/category/${article.category}/${article.slug}`;

          return (
            <div key={article.slug} className="p-4 space-y-3">
              {/* IMAGE WITH CATEGORY */}
              <Link href={articleLink} title={`View ${article.title}`}>
                <div className="relative group aspect-16/10 w-full overflow-hidden cursor-pointer">
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
                <h3 className="font-semibold text-base hover:text-[#7351a8] pt-2 leading-snug cursor-pointer">
                  {article.title}
                </h3>
              </Link>

              {/* DESCRIPTION */}
              <Link href={articleLink} title={`View ${article.title}`}>
                <p className="text-sm text-gray-700 line-clamp-3 hover:text-gray-900 cursor-pointer">
                  {article.excerpt}
                </p>
              </Link>

              {/* AUTHOR + DATE */}
              <div className="text-xs text-gray-500 flex flex-wrap gap-2">
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
    </section>
  );
}
