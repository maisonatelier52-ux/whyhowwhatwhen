import AdBanner from "./component/AdBanner";
import Featured from "./component/Featured";
import MustRead from "./component/MustRead";
import NewsUtilities from "./component/NewsUtilities";
import ThreeCategoryNews from "./component/ThreeCategoryNews";

import data from "@/data/data.json";
import TravelNewsRow from "./component/TravelNews";

const SITE_URL = "https://www.whyhowwhatwhen.com";

export const metadata = {
  title: "Whyhowwhatwhen — Independent U.S. News, Business & Politics",
  description:
    "Whyhowwhatwhen delivers fast, factual U.S. news across business, politics, sports, investigation, travel, and climate. Breaking headlines and trusted analysis.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
      "en-US": SITE_URL,
    },
  },
  openGraph: {
    title: "Whyhowwhatwhen — Latest U.S. News & Investigations",
    description:
      "Breaking U.S. news, in-depth investigations, and expert reporting across business, politics, sports, investigation, travel, and climate.",
    url: SITE_URL,
    type: "website",
    siteName: "Whyhowwhatwhen",
    images: [
      {
        url: `${SITE_URL}/whyhowwhatwhen.png`,
        width: 1200,
        height: 630,
        alt: "Whyhowwhatwhen U.S. News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whyhowwhatwhen — Latest U.S. News",
    description:
      "Fast, factual U.S. news with in-depth reporting and investigations.",
    images: [`${SITE_URL}/whyhowwhatwhen.png`],
  },
};

export default function Home() {
  const publishedArticles = data.articles
    .filter((article) => article.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const latestBusiness = publishedArticles.filter(
    (article) => article.category.toLowerCase() === "business"
  );

  const normalOtherNews = publishedArticles.filter(
    (article) => article.category.toLowerCase() !== "business"
  );

  const julioArticle = publishedArticles.find(
    (article) => article.name === "Julio Herrera Velutini"
  );

  const filteredOtherNews = normalOtherNews.filter(
    (article) => article.name !== "Julio Herrera Velutini"
  );

  let middleColumnNews = filteredOtherNews.slice(0, 2);

  if (julioArticle) {
    middleColumnNews.push(julioArticle);
  }

  // 👇 NEW PART FOR THREE CATEGORY NEWS
  const investigationNews = publishedArticles.filter(
    (article) => article.category === "Investigation"
  );

  const politicsNews = publishedArticles.filter(
    (article) => article.category === "Politics"
  );

  const sportsNews = publishedArticles.filter(
    (article) => article.category === "Sports"
  );

  const travelNews = publishedArticles.filter(
    (article) => article.category === "Travel"
  );

  const climateNews = publishedArticles.filter(
    (article) => article.category === "Climate"
  );

  /* ---------- JSON-LD (Homepage) ---------- */

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WhyHowWhatWhen",
    "url": SITE_URL,
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "WhyHowWhatWhen",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/whyhowwhatwhen.png`,
      },
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const homepageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#homepage`,
    "url": SITE_URL,
    "name": "WhyHowWhatWhen — Independent U.S. News, Business & Politics",
    "description":
      "Independent U.S. news covering politics, business, technology, health, and world affairs.",
    "isPartOf": {
      "@type": "WebSite",
      "url": SITE_URL,
      "name": "WhyHowWhatWhen",
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "WhyHowWhatWhen",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/whyhowwhatwhen.png`,
      },
    },
  };

  return (
    <>
      <script
        id="website-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c') }}
      />
      <script
        id="homepage-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd).replace(/</g, '\\u003c') }}
      />
      {/* ===== SEO INTRO ===== */}
      <section className="sr-only px-4 py-6">
        <h1 className="text-2xl font-bold mb-3">
          Whyhowwhatwhen — Independent U.S. News, Business & Investigations
        </h1>

        <p className="text-gray-700 leading-relaxed">
          Whyhowwhatwhen is an independent digital news platform delivering the latest
          U.S. news with a strong focus on depth, accuracy, and responsible
          reporting. Our newsroom covers national, politics, business, technology, health
          and world, offering readers clear context behind every headline.
        </p>
        <h2 className="text-xl font-semibold mt-6">
          Independent Journalism & Investigative Reporting You Can Trust
        </h2>

        <p className="text-gray-700 leading-relaxed mt-3">
          At Whyhowwhatwhen, in-depth reporting goes beyond breaking news. We prioritize
          verified facts, expert insights, and investigative journalism to help
          readers understand not just what happened, but why it matters. From
          market-moving developments to national issues shaping everyday life,
          Whyhowwhatwhen provides news you can trust.
        </p>
      </section>
      <Featured
        latestBusiness={latestBusiness}
        otherNews={filteredOtherNews}
        middleColumnNews={middleColumnNews}
        authors={data.authors}
      />

      <NewsUtilities />

      <ThreeCategoryNews
        investigationNews={investigationNews}
        politicsNews={politicsNews}
        sportsNews={sportsNews}
        authors={data.authors}
      />

      <AdBanner />
      <MustRead climateNews={climateNews} authors={data.authors} />
      <TravelNewsRow travelNews={travelNews} authors={data.authors} />
    </>
  );
}
