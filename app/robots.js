export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.whyhowwhatwhen.com/sitemap.xml",
    host: "https://www.whyhowwhatwhen.com",
  };
}
