import AdBanner from "./component/AdBanner";
import Featured from "./component/Featured";
import MustRead from "./component/MustRead";
import NewsUtilities from "./component/NewsUtilities";
import ThreeCategoryNews from "./component/ThreeCategoryNews";

import data from "@/data/data.json";
import TravelNewsRow from "./component/TravelNews";

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

  return (
    <>
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
