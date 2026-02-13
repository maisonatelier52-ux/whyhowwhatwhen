import Image from "next/image";
import Link from "next/link";
import CategoryTag from "./CategoryCard";

export default function ThreeCategoryNews({
  investigationNews,
  politicsNews,
  sportsNews,
  authors,
}) {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 px-5 pb-6">
      {/* ================= RIGHT COLUMN – SPORTS ================= */}
      <aside className="lg:col-span-3 space-y-4">
        <div className="border border-gray-300 px-5 pt-5">
          <h3 className="text-xl text-[#7351a8] font-bold uppercase">Sports</h3>

          {sportsNews.slice(0, 4).map((article) => {
            const articleLink = `/category/${article.category}/${article.slug}`;

            return (
              <div
                key={article.slug}
                className="flex items-center gap-3 border-b border-gray-300 last:border-b-0 py-3"
              >
                {/* Text */}
                <div className="flex-1">
                  <Link href={articleLink}>
                    <h4 className="text-sm font-semibold leading-snug hover:text-[#7351a8] cursor-pointer">
                      {article.title}
                    </h4>
                  </Link>
                  <p className="text-sm text-gray-500">
                    {formatDate(article.date)}
                  </p>
                </div>

                {/* Image */}
                {article.image && (
                  <Link href={articleLink}>
                    <div className="relative group overflow-hidden w-24 h-24 cursor-pointer">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                      />
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Advertisement */}
        <div className="flex flex-col items-center rounded-md">
          <h4 className="text-[10px] font-semibold text-gray-400 pb-1">
            - Advertisement -
          </h4>
          <img
            src="/ad-image.jpeg"
            alt="Advertisement"
            className="w-full h-full object-cover"
          />
        </div>
      </aside>

        {/* ================= MIDDLE COLUMN – POLITICS ================= */}
      <div className="lg:col-span-6 space-y-6 px-3 pt-2">
        <div className="relative pl-3 pb-3 mb-2">
          {/* Background text */}
          <span className="absolute left-0 top-1/2 -translate-y-1/2 text-7xl font-extrabold tracking-widest text-gray-200/70 select-none pointer-events-none">
            LATEST
          </span>

          {/* Foreground heading */}
          <h3 className="relative text-xl pt-5 pb-1 font-bold text-[#7351a8]">
            POLITICS
          </h3>
        </div>

        {politicsNews.slice(0, 5).map((article) => (
          <div
            key={article.slug}
            className="flex flex-row-reverse lg:flex-row gap-4 pb-4"
          >
            {/* Image */}
            {article.image && (
              <div className="
                relative group overflow-hidden
                w-2/5 h-32 md:h-40
                flex-shrink-0
              ">
                <Link href={`/category/${article.category}/${article.slug}`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <CategoryTag text={article.category.toUpperCase()} />
                </Link>
              </div>
            )}

            {/* Content */}
            <div className="border-t border-gray-300 pt-3 flex-1">
              <Link href={`/category/${article.category}/${article.slug}`}>
                <h4 className="text-base md:text-xl font-semibold leading-snug hover:text-[#7351a8] cursor-pointer">
                  {article.title}
                </h4>
              </Link>

              <div className="text-xs md:text-sm text-gray-500 flex flex-wrap gap-2">
                <Link
                  href={`/author/${article.authorId}`}
                  className="italic hover:text-[#7351a8]"
                >
                  {authors.find(a => a.id === article.authorId)?.name}
                </Link>
                <span>
                  | {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </span>
              </div>

              <Link href={`/category/${article.category}/${article.slug}`}>
                <p className="text-xs md:text-sm text-gray-700 mt-2">
                  {article.excerpt}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ================= RIGHT COLUMN – INVESTIGATION ================= */}
      <div className="lg:col-span-3 sticky top-20 self-start mr-5 p-6 border border-gray-300">
        <h3 className="text-xl font-bold uppercase text-[#7351a8] mb-4">
          Investigation
        </h3>

        <div className="space-y-4">
          {investigationNews.slice(0, 4).map((article) => {
            const articleLink = `/category/${article.category}/${article.slug}`;

            return (
              <div
                key={article.slug}
                className="pb-2 border-b border-gray-300 last:border-b-0"
              >
                <Link href={articleLink}>
                  <h4 className="font-semibold leading-snug hover:text-[#7351a8] cursor-pointer">
                    {article.title}
                  </h4>
                </Link>
                <p className="text-sm text-gray-500">
                  {formatDate(article.date)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
