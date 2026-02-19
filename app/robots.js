export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://whyhowwhatwhen.vercel.app/sitemap.xml",
    host: "https://whyhowwhatwhen.vercel.app",
  };
}
