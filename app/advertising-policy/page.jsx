import Script from "next/script";

export async function generateMetadata() {
  return {
    title: "Advertising Policy | Why How What When",
    description:
      "Learn about the advertising standards, sponsored content policies, affiliate relationships, and editorial independence of Why How What When.",
    alternates: {
      canonical: "https://www.whyhowwhatwhen.com/advertising-policy",
    },
    openGraph: {
      title: "Advertising Policy | Why How What When",
      description:
        "Our commitment to transparency, editorial independence, and responsible advertising practices.",
      url: "https://www.whyhowwhatwhen.com/advertising-policy",
      siteName: "Why How What When",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Advertising Policy | Why How What When",
      description:
        "Read how Why How What When approaches advertising, sponsored content, and affiliate partnerships.",
    },
  };
}

function Section({ number, title, children }) {
  return (
    <section className="flex gap-5 py-8 border-b border-stone-200 last:border-0">
      <span className="text-3xl font-bold text-[#7351a8]/40 leading-none mt-1 w-8 shrink-0">
        {String(number).padStart(2, "0")}
      </span>

      <div>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7351a8] mb-3">
          {title}
        </h2>

        <div className="text-stone-700 leading-relaxed text-[15px] space-y-3">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function AdvertisingPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Advertising Policy",
    url: "https://www.whyhowwhatwhen.com/advertising-policy",
    description:
      "Advertising Policy explaining editorial independence, sponsored content, affiliate partnerships, and advertising standards.",
    publisher: {
      "@type": "Organization",
      name: "Why How What When",
      url: "https://www.whyhowwhatwhen.com",
    },
  };

  return (
    <>
      <Script
        id="advertising-policy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="min-h-screen bg-[#faf8f4] font-serif">

        {/* Hero */}

        <div className="border-b-4 border-stone-900">
          <div className="max-w-3xl mx-auto px-6 py-16 text-center">

            <p className="text-[11px] uppercase tracking-[0.3em] text-[#7351a8] font-sans mb-4">
              Transparency & Trust
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-4">
              Advertising
              <br />
              <span className="italic font-normal">
                Policy
              </span>
            </h1>

            <div className="w-16 h-px bg-[#7351a8] mx-auto my-6" />

            <p className="text-stone-600 text-[16px] leading-relaxed max-w-xl mx-auto">
              Advertising helps support Why How What When and enables us to
              continue publishing informative articles, explainers, guides, and
              educational content. We believe readers should always understand
              the difference between editorial content and advertising.
            </p>

          </div>
        </div>

        {/* Policy */}

        <div className="max-w-3xl mx-auto px-6 py-14">

          <Section number={1} title="Editorial Independence">
            <p>
              Every article published on Why How What When is selected,
              researched, and produced by our editorial team. Advertising
              partners, sponsors, and commercial relationships do not determine
              the topics we cover or the conclusions presented in our content.
            </p>

            <p>
              Editorial decisions are made independently with the goal of
              providing useful, accurate, and trustworthy information for our
              readers.
            </p>
          </Section>

          <Section number={2} title="Sponsored Content">
            <p>
              We may occasionally collaborate with organizations or brands on
              sponsored articles, campaigns, or educational initiatives.
            </p>

            <p>
              Whenever content is sponsored, it will be clearly identified so
              readers can easily distinguish promotional material from
              independently produced editorial content.
            </p>
          </Section>

          <Section number={3} title="Advertising Standards">
            <p>
              We seek to work only with advertisers whose products or services
              are relevant to our audience and align with our commitment to
              quality and integrity.
            </p>

            <p>
              We reserve the right to reject or remove advertisements that are
              misleading, deceptive, offensive, harmful, or inconsistent with
              our editorial standards and community values.
            </p>
          </Section>

          <Section number={4} title="Affiliate Partnerships">
            <p>
              Some articles may include affiliate links to products or services.
              If readers make a purchase through these links, Why How What When
              may earn a commission at no additional cost to the reader.
            </p>

            <p>
              Affiliate relationships help support our operations but never
              influence our editorial opinions, recommendations, or rankings.
            </p>
          </Section>

          <Section number={5} title="Reader Trust">
            <p>
              Commercial partnerships do not guarantee positive reviews,
              favorable mentions, or editorial coverage.
            </p>

            <p>
              Our primary responsibility is to our readers, and maintaining
              their trust remains more important than any advertising
              relationship.
            </p>
          </Section>

          <Section number={6} title="Policy Updates">
            <p>
              As our advertising practices and business operations evolve, this
              Advertising Policy may be updated periodically.
            </p>

            <p>
              Any revisions will be published on this page, and continued use of
              the website indicates acceptance of the updated policy.
            </p>
          </Section>

        </div>

        {/* Promise */}

        <div className="bg-stone-900 text-white border-t-4 border-[#7351a8]">
          <div className="max-w-3xl mx-auto px-6 py-14 text-center">

            <p className="text-xs uppercase tracking-[0.3em] text-[#7351a8] font-sans mb-5">
              Our Promise
            </p>

            <p className="text-xl md:text-2xl italic text-stone-300 leading-relaxed">
              "Transparency, editorial independence, and reader trust are the
              principles that guide every advertising decision we make. We are
              committed to ensuring readers can explore ideas, products, and
              services with confidence."
            </p>

          </div>
        </div>

        {/* Footer */}

        <div className="border-t border-stone-200 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6 py-8 text-center">

            <p className="text-xs text-stone-500 font-sans tracking-wide">
              Questions about advertising or partnerships?{" "}
              <a
                href="/contact"
                className="text-[#7351a8] underline underline-offset-2 hover:opacity-80 transition"
              >
                Contact us
              </a>
            </p>

          </div>
        </div>

      </div>
    </>
  );
}