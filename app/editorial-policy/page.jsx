export const metadata = {
  title: "Editorial Policy | Why How What When",
  description:
    "Read the editorial policy of Why How What When and learn about our commitment to accuracy, independence, fairness, transparency, and responsible journalism.",
  alternates: {
    canonical: "https://www.whyhowwhatwhen.com/editorial-policy",
  },
  openGraph: {
    title: "Editorial Policy | Why How What When",
    description:
      "Our editorial standards, reporting practices, correction process, and commitment to independent journalism.",
    url: "https://www.whyhowwhatwhen.com/editorial-policy",
    siteName: "Why How What When",
    type: "website",
  },
};

export default function EditorialPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Editorial Policy",
    url: "https://www.whyhowwhatwhen.com/editorial-policy",
    description:
      "Editorial standards and policies followed by Why How What When.",
    publisher: {
      "@type": "Organization",
      name: "Why How What When",
      url: "https://www.whyhowwhatwhen.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-black">
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto space-y-16">

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#7351a8] mb-6">
                Editorial Policy
              </h1>

              <p className="text-xl text-gray-700 leading-8">
                Trust is earned through accurate reporting, editorial
                independence, and a commitment to responsible journalism.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Our Editorial Standards
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Every story published by <strong>Why How What When</strong>
                  begins with a simple objective: provide readers with
                  information that is accurate, balanced, and meaningful.
                </p>

                <p>
                  We cover business, climate, investigations, politics, sports,
                  and travel through fact-based reporting and thoughtful
                  analysis that helps readers understand not only what happened,
                  but also why it matters.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                How We Report
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  News develops rapidly, and responsible journalism requires
                  careful verification.
                </p>

                <p>
                  Our editorial team monitors official announcements, public
                  records, government publications, interviews, research
                  reports, industry data, and firsthand reporting whenever
                  available.
                </p>

                <p>
                  Every article undergoes editorial review before publication to
                  ensure clarity, consistency, and factual accuracy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Accuracy First
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Facts are the foundation of credible journalism.
                </p>

                <p>
                  We carefully verify names, dates, figures, quotations, and
                  other factual information before publishing. When information
                  cannot be independently confirmed, we clearly communicate that
                  limitation to readers.
                </p>

                <p>
                  Accuracy is prioritized over speed, and we strive to provide
                  context that supports informed understanding.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Editorial Independence
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Editorial decisions are made solely by our editors and
                  writers.
                </p>

                <p>
                  Advertisers, sponsors, commercial partners, or external
                  organizations do not influence our newsroom or determine our
                  editorial coverage.
                </p>

                <p>
                  Any sponsored or promotional content is clearly labeled to
                  distinguish it from independent editorial work.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Research and Sources
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Our reporting is informed by official statements, public
                  documents, expert interviews, academic research, government
                  data, reputable institutions, and trusted news sources.
                </p>

                <p>
                  Because stories evolve over time, we review and update our
                  articles when significant new information becomes available.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Fairness and Balance
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  We aim to present information fairly and responsibly while
                  providing appropriate context for complex issues.
                </p>

                <p>
                  Our reporting seeks to represent diverse perspectives and
                  avoids unnecessary bias, ensuring readers receive balanced and
                  informative coverage across all topics.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Reviews and Recommendations
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Reviews, recommendations, and editorial opinions are based on
                  independent research, editorial evaluation, and available
                  evidence.
                </p>

                <p>
                  Commercial relationships do not guarantee favorable coverage,
                  and editorial opinions cannot be purchased or influenced by
                  advertisers or partners.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Corrections and Updates
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Transparency is an essential part of responsible journalism.
                </p>

                <p>
                  If a significant factual error is identified, we will review
                  the issue promptly and make corrections or clarifications as
                  necessary to maintain the accuracy of our reporting.
                </p>

                <p>
                  Articles may also be updated to reflect important
                  developments or newly verified information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Our Commitment
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Why How What When exists to help readers better understand the
                  events shaping business, climate, investigations, politics,
                  sports, and travel around the world.
                </p>

                <p>
                  We are committed to accuracy, independence, accountability,
                  transparency, and continuous improvement in everything we
                  publish.
                </p>

                <p>
                  Above all, our responsibility is to our readers, and we strive
                  to earn their trust with every story.
                </p>
              </div>
            </section>

          </div>
        </section>
      </main>
    </>
  );
}