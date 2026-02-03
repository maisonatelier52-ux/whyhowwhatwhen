import AdBanner from "./component/AdBanner";
import Featured from "./component/Featured";
import MustRead from "./component/MustRead";
import NewsUtilities from "./component/NewsUtilities";
import ThreeColumnNews from "./component/ThreeCategoryNews";

export default function Home() {
  return (
    <>
    <Featured />
    <NewsUtilities />
    <ThreeColumnNews />
    <AdBanner />
    <MustRead />
    </>
  );
}