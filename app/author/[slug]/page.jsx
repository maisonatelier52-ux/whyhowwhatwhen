import data from "@/data/data.json";
import Link from "next/link";
import Image from "next/image";
import AdBanner from "@/app/component/AdBanner";
import CategoryTag from "@/app/component/CategoryCard";

const SITE_URL = "https://www.whyhowwhatwhen.com";

export function generateStaticParams() {
  const author = [
    ...new Set(data.authors.map(a => a.slug.toLowerCase()))
  ];

  return author.map(slug => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const author = data.authors.find(a => a.slug === slug);

  if (!author) {
    return {
      title: "Author Not Found — WhyHowWhatWhen",
      description: "This author profile does not exist on WhyHowWhatWhen.",
    };
  }
  
  const imageUrl = `${SITE_URL}${author.photo}`;

  return {
    title: `${author.name} — Author at WhyHowWhatWhen`,
    description:
      `Read articles and investigative reports written by ${author.name} on WhyHowWhatWhen.`,
    alternates: {
      canonical: `${SITE_URL}/author/${author.slug}`,
      languages: {
        "en": `${SITE_URL}/author/${author.slug}`,
        "en-US": `${SITE_URL}/author/${author.slug}`,
      },
    },
    openGraph: {
      title: `${author.name} — WhyHowWhatWhen Staff`,
      description: author.bio,
      url: `${SITE_URL}/author/${author.slug}`,
      type: "profile",
      siteName: "WhyHowWhatWhen",
      images: [
        {
          url: imageUrl,
          width: 600,
          height: 600,
          alt: author.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${author.name} — WhyHowWhatWhen Staff`,
      description: author.bio,
      images: [imageUrl],
    },
  };
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;

  // Find author by slug
  const author = data.authors.find(
    (a) => a.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!author) {
    return (
      <div className="px-5 py-10 text-center">
        <h2 className="text-xl font-semibold">Author not found</h2>
      </div>
    );
  }

  // Get articles written by this author
  const authorArticles = data.articles
    .filter(
      (article) => article.published && article.authorId === author.id
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!authorArticles.length) {
    return (
      <div className="px-5 py-10 text-center">
        <h2 className="text-xl font-semibold">
          No articles found for {author.name}
        </h2>
      </div>
    );
  }

  const latestNews = authorArticles.slice(0, 5);
  const moreNews = authorArticles.slice(5, 10);

  /* ---------- JSON-LD ---------- */

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "url": `${SITE_URL}/author/${author.slug}`,
    "description": author.bio,
    "jobTitle": "Journalist",
    "worksFor": {
      "@type": "NewsMediaOrganization",
      "name": "WhyHowWhatWhen",
      "url": SITE_URL,
    },
    "sameAs": [
      author.twitter,
      author.quora,
      author.reddit
    ].filter(Boolean),
  };

  const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
          {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL,
          },
          {
          "@type": "ListItem",
          "position": 2,
          "name": "Authors",
          "item": `${SITE_URL}/author`,
          },
          {
          "@type": "ListItem",
          "position": 3,
          "name": author.name,
          "item": `${SITE_URL}/author/${author.slug}`,
          },
      ],
  };

  return (
    <section className="px-5 pt-5 pb-6 max-w-7xl mx-auto">
      {/* Structured Data */}
      <script
        id="author-person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <script
        id="author-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* AUTHOR HEADER */}
      <div className="text-center pt-5 mb-12">
        <p className="text-xs tracking-widest text-gray-500 uppercase">
          AUTHOR
        </p>

        <h1 className="text-4xl font-bold uppercase text-[#7351a8] mt-1">
          {author.name}
        </h1>

        {author.photo && (
          <div className="flex justify-center mt-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border">
              <Image
                src={author.photo}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {author.bio && (
          <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
            {author.bio}
          </p>
        )}
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-6">
        {/* LEFT — AUTHOR ARTICLES */}
        <div className="lg:col-span-2 space-y-10">
          {latestNews.map((article) => (
            <Link
              key={article.slug}
              title={article.title}
              href={`/category/${article.category.toLowerCase()}/${article.slug}`}
              className="group flex gap-6"
            >
              {/* Image */}
              {article.image && (
                <div className="relative hidden lg:block md:block group overflow-hidden w-2/5 h-50 flex-shrink-0">
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
                  <div className="italic hover:text-[#7351a8]">
                    {author.name}
                  </div>
                  <span>
                    |{" "}
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <p className="text-sm text-gray-700 mt-2">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* RIGHT — MORE ARTICLES BY AUTHOR */}
        <aside className="space-y-6">
          <div className="border p-5 border-gray-300">
            <h3 className="text-lg font-bold uppercase text-[#7351a8]">
              More from {author.name.split(" ")[0]}
            </h3>

            <div className="space-y-4">
              {moreNews.map((article) => (
                <Link
                  key={article.slug}
                  title={article.title}
                  href={`/category/${article.category.toLowerCase()}/${article.slug}`}
                  className="flex gap-3 pb-3 group"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold leading-snug group-hover:text-[#7351a8]">
                      {article.title}
                    </h4>

                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>

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

            <div className="relative w-full aspect-9/16">
              <Link href="https://www.timeschronicle.org" title="View Advertisement" target="_blank">
                <Image
                  src="/ad-image.jpeg"
                  alt="Advertisement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </Link>
            </div>
          </div>
        </aside>
      </div>
      <AdBanner />
    </section>
  );
}
