import Script from "next/script";

export async function generateMetadata() {
  return {
    title: "Ownership & Funding | Times Chronicle",
    description:
      "Learn about Times Chronicle's ownership, funding sources, editorial independence, sponsored content, and commitment to transparency.",
    alternates: {
      canonical: "https://www.timeschronicle.org/ownership-and-funding",
    },
    openGraph: {
      title: "Ownership & Funding | Times Chronicle",
      description:
        "Read about our ownership structure, funding model, editorial independence, and transparency standards.",
      url: "https://www.timeschronicle.org/ownership-and-funding",
      siteName: "Times Chronicle",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ownership & Funding | Times Chronicle",
      description:
        "Transparency about our ownership, funding, and editorial independence.",
    },
  };
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7351a8] mb-3 pb-2 border-b border-stone-200">
        {title}
      </h2>

      <div className="text-stone-700 leading-relaxed text-[15px] space-y-3">
        {children}
      </div>
    </section>
  );
}

export default function OwnershipFunding() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Ownership & Funding",
    url: "https://www.timeschronicle.org/ownership-and-funding",
    description:
      "Information about Times Chronicle ownership, funding sources, editorial independence, sponsored content, and affiliate relationships.",
    publisher: {
      "@type": "Organization",
      name: "Times Chronicle",
      url: "https://www.timeschronicle.org",
    },
  };

  return (
    <>
      <Script
        id="ownership-funding-jsonld"
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
              Transparency
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-4">
              Ownership &
              <br />
              <span className="italic font-normal">
                Funding
              </span>
            </h1>

            <div className="w-16 h-px bg-[#7351a8] mx-auto mt-6" />
          </div>
        </div>

        {/* Content */}

        <div className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-[1fr_2px_1fr] gap-10">

          <div>

            <Section title="Who We Are">
              <p>
                The Times Chronicle is an independent digital publication
                covering news, culture, lifestyle, and the stories shaping
                today's world. Our goal is straightforward: create engaging,
                trustworthy content that keeps readers informed and connected.
              </p>
            </Section>

            <Section title="Editorial Independence">
              <p>
                Our editorial team makes all decisions about what we cover and
                how we cover it. Brands, advertisers, sponsors, and outside
                partners do not influence our news reporting, editorial
                opinions, or story selection.
              </p>

              <p>
                We believe readers deserve content guided by editorial judgment
                rather than commercial interests.
              </p>
            </Section>

            <Section title="How We Are Funded">
              <p>
                The Times Chronicle may generate revenue through advertising,
                sponsored content, affiliate partnerships, and other business
                activities that support the operation of this website. These
                revenue sources help us continue producing journalism for our
                readers.
              </p>
            </Section>

          </div>

          <div className="hidden md:block bg-stone-200" />

          <div>

            <Section title="Sponsored Content">
              <p>
                From time to time, we may publish sponsored content or partner
                with brands on special projects. Whenever this occurs, the
                content will be clearly labeled so readers can distinguish it
                from independent editorial coverage.
              </p>
            </Section>

            <Section title="Affiliate Relationships">
              <p>
                Some articles may contain affiliate links. If a reader purchases
                a product or service through one of these links, Times Chronicle
                may earn a commission at no additional cost to the reader.
                Affiliate partnerships never influence our editorial standards
                or coverage.
              </p>
            </Section>

            <Section title="Our Commitment">
              <p>
                Regardless of how Times Chronicle is funded, our responsibility
                remains the same: providing readers with accurate, engaging, and
                trustworthy journalism created with integrity.
              </p>

              <blockquote className="mt-4 pl-4 border-l-2 border-[#7351a8] italic text-stone-500 text-sm">
                "The trust of our audience will always come first."
              </blockquote>
            </Section>

          </div>
        </div>

        {/* Footer */}

        <div className="border-t border-stone-200 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6 py-8 text-center">

            <p className="text-xs text-stone-500 font-sans tracking-wide">
              Questions about our ownership or funding?{" "}
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