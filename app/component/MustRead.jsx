import Image from "next/image";
import Link from "next/link";
import CategoryTag from "./CategoryCard";

export default function ClimateNews({ climateNews, authors }) {
  const publishedNews = climateNews;

  const topNews = publishedNews[0];
  const remaining = publishedNews.slice(1, 5);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <section className="px-5 pb-5">
      {/* HEADER */}
      <div className="relative bg-[#7351a8] text-white p-6 pb-16 mb-8">
        <h2 className="text-4xl font-extrabold">Climate</h2>
        <p className="mt-2">
          Latest updates and in-depth coverage on climate and environmental
          issues.
        </p>
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* LEFT — TOP NEWS */}
        {topNews &&
          (() => {
            const author = authors.find((a) => a.id === topNews.authorId);
            const articleLink = `/category/${topNews.category.toLowerCase()}/${topNews.slug}`;

            return (
              <div className="lg:col-span-2 -mt-20 relative z-10 space-y-4">
                {/* IMAGE */}
                {topNews.image && (
                  <Link href={articleLink} title={`View ${topNews.title}`}>
                    <div className="relative w-full h-[400px] overflow-hidden shadow-xl cursor-pointer">
                      <Image
                        src={topNews.image}
                        alt={topNews.title}
                        fill
                        className="object-cover hover:scale-[1.02] transition-transform duration-300"
                      />
                      <CategoryTag text={topNews.category.toUpperCase()} />
                    </div>
                  </Link>
                )}

                {/* TITLE */}
                <Link href={articleLink} title={`View ${topNews.title}`}>
                  <h3 className="text-3xl font-semibold hover:text-[#7351a8] cursor-pointer pt-3">
                    {topNews.title}
                  </h3>
                </Link>

                {/* DESCRIPTION */}
                <Link href={articleLink} title={`View ${topNews.title}`}>
                  <p className="text-sm pt-3 text-gray-700 line-clamp-3 hover:text-gray-900 cursor-pointer">
                    {topNews.excerpt}
                  </p>
                </Link>

                {/* AUTHOR + DATE */}
                <div className="text-sm text-gray-500 flex flex-wrap gap-2 pt-2">
                  {author && (
                    <Link
                      href={`/author/${author.slug}`}
                      title={`View author ${author.name}`}
                      className="italic hover:text-[#7351a8]"
                    >
                      {author.name}
                    </Link>
                  )}
                  <span>| {formatDate(topNews.date)}</span>
                </div>
              </div>
            );
          })()}

        {/* RIGHT — 2x2 GRID */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {remaining.map((article) => {
            const author = authors.find((a) => a.id === article.authorId);
            const articleLink = `/category/${article.category.toLowerCase()}/${article.slug}`;

            return (
              <div key={article.slug} className="space-y-2">
                {/* IMAGE */}
                {article.image && (
                  <Link href={articleLink} title={`View ${article.title}`}>
                    <div className="relative w-full h-40 overflow-hidden cursor-pointer">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover hover:scale-[1.03] transition-transform duration-300"
                      />
                      <CategoryTag text={article.category.toUpperCase()} />
                    </div>
                  </Link>
                )}

                {/* TITLE */}
                <Link href={articleLink} title={`View ${article.title}`}>
                  <h4 className="text-sm font-semibold leading-snug hover:text-[#7351a8] pt-2 cursor-pointer">
                    {article.title}
                  </h4>
                </Link>

                {/* DESCRIPTION */}
                <Link href={articleLink} title={`View ${article.title}`}>
                  <p className="text-sm text-gray-700 line-clamp-3 hover:text-gray-900 cursor-pointer">
                    {article.excerpt}
                  </p>
                </Link>

                {/* AUTHOR + DATE */}
                <div className="text-sm text-gray-500 flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}
