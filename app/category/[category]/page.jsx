import data from "@/data/data.json";
import Link from "next/link";
import Image from "next/image";
import AdBanner from "@/app/component/AdBanner";
import CategoryTag from "@/app/component/CategoryCard";

const SITE_URL = "https://www.whyhowwhatwhen.com";

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categoryName = decodeURIComponent(category);

  const formattedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return {
    title: `${formattedCategory} News — WhyHowWhatWhen`,
    description: `Read the latest ${formattedCategory.toLowerCase()} news, analysis and investigative stories from across the United States. Updated daily by WhyHowWhatWhen reporters.`,
    alternates: {
      canonical: `${SITE_URL}/categories/${categoryName}`,
    },
    openGraph: {
      title: `${formattedCategory} News — WhyHowWhatWhen`,
      description: `Latest U.S. ${formattedCategory.toLowerCase()} news, reports and analysis.`,
      url: `${SITE_URL}/categories/${categoryName}`,
      type: "website",
      siteName: "WhyHowWhatWhen",
      images: [
        {
          url: `${SITE_URL}/wiresavvy.webp`,
          width: 1200,
          height: 630,
          alt: `${formattedCategory} News`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedCategory} News — WhyHowWhatWhen`,
      description: `Latest U.S. ${formattedCategory.toLowerCase()} news and analysis.`,
      images: [`${SITE_URL}/wiresavvy.webp`],
    },
  };
}

const categoryDescriptions = {
  business:
    "Latest business news covering global markets, major companies, finance, investments, economic trends, and industry analysis from around the world.",

  politics:
    "Breaking political news, public policy updates, elections, government decisions, and in-depth analysis of national and international governance.",

  sports:
    "Comprehensive sports coverage including match results, player updates, team news, major tournaments, and highlights from global competitions.",

  investigation:
    "In-depth investigative reporting featuring exclusive findings, accountability journalism, legal developments, and detailed analysis of critical issues.",

  travel:
    "Travel news and guides covering destinations, culture, tourism trends, travel tips, and global journeys for modern explorers.",

  climate:
    "Climate and environmental news covering climate change, sustainability initiatives, energy policy, environmental science, and global impact analysis.",
};

export default async function CategoryPage({ params }) {    
  const { category } = await params;

  const categoryNews = data.articles.filter(
    (article) =>
      article.published
  ).sort((a, b) => new Date(b.date) - new Date(a.date));

  const latestNewsCategory = categoryNews.filter((article) => article.category.toLowerCase() === category.toLowerCase());
  const OtherlatestNewsCategory = categoryNews.filter((article) => article.category.toLowerCase() !== category.toLowerCase());

  if (!categoryNews.length) {
    return (
      <div className="px-5 py-10 text-center">
        <h2 className="text-xl font-semibold">No articles found</h2>
      </div>
    );
  }

  const latestNews = latestNewsCategory.slice(0, 5);
  const moreNews = OtherlatestNewsCategory.slice(0, 5);

    const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const categoryUrl = `${SITE_URL}/categories/${category}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Categories",
        item: `${SITE_URL}/categories`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: formattedCategory,
        item: categoryUrl,
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: latestNews.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/category/${category}/${article.slug}`,
      name: article.title,
    })),
  };

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${formattedCategory} News`,
    url: categoryUrl,
    description:
      categoryDescriptions[category.toLowerCase()] ||
      "Latest stories and updates from this category.",
  };

  return (
    <section className="px-5 pt-5 pb-10 max-w-7xl mx-auto">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageJsonLd),
        }}
      />

      <AdBanner />

      {/* CATEGORY HEADER */}
      <div className="text-center pt-5 mb-12">
        <p className="text-xs tracking-widest text-gray-500 uppercase">
          Category
        </p>
        <h1 className="text-4xl font-bold text-[#7351a8] mt-1 uppercase">
          {category} News — WhyHowWhatWhen
        </h1>
        <p className="mt-3 text-md font-semibold text-gray-600 max-w-2xl mx-auto">
          {categoryDescriptions[category.toLowerCase()] ||
            "Latest stories and updates from this category."}
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT — LATEST NEWS (2/3) */}
        <div className="lg:col-span-2 space-y-10">
          {latestNews.map((article) => (
            <Link
              key={article.slug}
              title={article.title}
              href={`/category/${category}/${article.slug}`}
              className="group flex gap-6"
            >
              {/* Image */}
            {article.image && (
              <div className="relative group hidden lg:block md:block overflow-hidden w-2/5 h-50 flex-shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <CategoryTag text={article.category.toUpperCase()} />
              </div>
            )}

            {/* Content */}
            <div className="border-t border-gray-300 pt-3">
              
              <h2 className="text-xl font-semibold leading-snug hover:text-[#7351a8] cursor-pointer">
                {article.title}
              </h2>

              <div className="text-sm text-gray-500 pt-3 flex flex-wrap gap-2">
                <div
                  className="italic hover:text-[#7351a8]"
                >
                  {data.authors.find(a => a.id === article.authorId)?.name}
                </div>
                <span>| {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}</span>
              </div>

              <p className="text-sm text-gray-700 mt-2">
                {article.excerpt}
              </p>
            </div>
            </Link>
          ))}
        </div>

        {/* RIGHT — MORE NEWS (1/3) */}
        <aside className="space-y-6">
          <div className="border px-5 pt-4 border-gray-300">
          <h2 className="text-lg font-bold uppercase text-[#7351a8]">
            More News
          </h2>

          <div className="space-y-4">
            {moreNews.map((article) => (
              <Link
                key={article.slug}
                title={article.title}
                href={`/category/${category}/${article.slug}`}
                className="flex gap-3 pb-3 group"
              >
                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-[#7351a8]">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>

                {/* Image */}
                {article.image && (
                  <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>
          </div>
          {/* Advertisement */}
          <div className="flex flex-col items-center rounded-md">
            <h4 className="text-[10px] font-semibold text-gray-400 pb-1">
              - Advertisement -
            </h4>

            <div className="relative w-full aspect-[9/16] overflow-hidden">
              <Image
                src="/ad-image.jpeg"
                alt="Advertisement"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover"
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}