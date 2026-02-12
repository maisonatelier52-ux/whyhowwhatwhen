import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/app/component/ShareButton";
import ShareArticle from "@/app/component/ShareArticle";
import NewsLatest from "@/app/component/NewsLatest";
import AuthorCard from "@/app/component/AuthorCard";
import MoreNews from "@/app/component/MoreNews";
import AdBanner from "@/app/component/AdBanner";

export default async function ArticlePage({ params }) {
  const { slug, category } = await params;

  const article = data.articles.find(
    (item) =>
      item.slug === slug &&
      item.category.toLowerCase() === category.toLowerCase()
  );

  if (!article) {
    return (
      <main className="bg-white text-black min-h-screen flex flex-col justify-center items-center px-7 py-20">
        <h1 className="font-bold text-3xl sm:text-4xl uppercase mb-4 text-center">
          Article Not Found
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Sorry, the article you are looking for does not exist or has been
          removed.
        </p>
        <Link
          href="/"
          title="Home"
          className="px-6 py-3 bg-blue-600 text-white font-semibold uppercase hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </main>
    );
  }

  const moreNews = data.articles
    .filter(
      (item) =>
        item.slug !== slug &&
        item.category.toLowerCase() === category.toLowerCase()
    )
    .slice(0, 4);

  const author = data.authors.find((a) => a.id === article.authorId);

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-3">
        {/* MAIN ARTICLE AREA */}
        <article className="lg:col-span-3">
          <Link
            href={`/category/${category}`}
            className="text-sm text-[#7351a8] font-semibold"
          >
            ← Back to {category.toUpperCase()}
          </Link>

          <h1 className="text-3xl font-bold mt-4">{article.title}</h1>

          <div className="text-sm text-gray-500 mt-2 flex flex-wrap items-center gap-3">
            <span>{author?.name}</span>
            <span>|</span>
            <span>
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>

            <div className="ml-auto">
              <ShareButton />
            </div>
          </div>

          {/* IMAGE */}
          {article.image && (
            <div className="relative h-[600px] my-6">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* DESKTOP LAYOUT WITH SIDEBAR */}
          <div className="grid grid-cols-1 lg:grid-cols-6 pb-5 gap-6">
            {/* LEFT SIDEBAR – DESKTOP ONLY */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="sticky top-16 space-y-8">
                <MoreNews news={moreNews} />
                <AuthorCard author={author} />
              </div>
            </div>

            {/* ARTICLE CONTENT */}
            <div className="lg:col-span-4">
              <div
                className="prose max-w-none text-sm sm:text-base md:text-lg
                  [&_h1]:pt-6 [&_h1]:pb-3 
                  [&_h2]:pt-5 [&_h2]:pb-2 
                  [&_h3]:pt-4 [&_h3]:pb-2
                  [&_h4]:pt-3 [&_h4]:pb-1

                  [&_h2]:font-bold [&_h2]:text-2xl
                  [&_h3]:font-bold [&_h3]:text-xl
                  [&_h4]:font-bold [&_h4]:text-md

                  [&_p]:pt-4 [&_p]:pb-2

                  [&_ul]:list-disc [&_ul]:pl-6
                  [&_ol]:list-decimal [&_ol]:pl-6
                "
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <ShareArticle />
            </div>
          </div>

          <AdBanner />

          {/* MOBILE ONLY STACKED COMPONENTS */}
          <div className="lg:hidden space-y-8 mt-8">
            <AuthorCard author={author} />
            <MoreNews news={moreNews} />
          </div>
        </article>

        <NewsLatest news={moreNews} />
      </div>
    </div>
  );
}
