export const metadata = {
  title: "Right of Reply Policy | Why How What When",
  description:
    "Learn about Why How What When's Right of Reply Policy and our commitment to fair, balanced, and responsible journalism.",
  alternates: {
    canonical: "https://www.whyhowwhatwhen.com/right-of-reply",
  },
  openGraph: {
    title: "Right of Reply Policy | Why How What When",
    description:
      "Our commitment to fairness, transparency, and providing individuals and organizations the opportunity to respond.",
    url: "https://www.whyhowwhatwhen.com/right-of-reply",
    siteName: "Why How What When",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Right of Reply Policy | Why How What When",
    description:
      "Read our Right of Reply Policy and editorial commitment to fairness and responsible reporting.",
  },
};

export default function RightOfReplyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Right of Reply Policy",
    url: "https://www.whyhowwhatwhen.com/right-of-reply",
    description:
      "Why How What When's Right of Reply Policy explains our commitment to fairness, transparency, and balanced journalism.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 py-16">

          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-[#7351a8] mb-4">
              Right of Reply
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-8">
              We believe that responsible journalism includes giving individuals,
              businesses, and organizations a fair opportunity to respond to
              information that directly concerns them.
            </p>
          </div>

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Our Commitment to Fairness
              </h2>

              <p className="leading-8 text-gray-800">
                At <strong>Why How What When</strong>, we strive to publish
                accurate, balanced, and well-researched content across a wide
                range of topics, including news, technology, business,
                health, lifestyle, science, education, and culture.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                Whenever our reporting includes information about identifiable
                individuals, companies, organizations, or public entities, we
                recognize the importance of allowing them an opportunity to
                present their perspective or clarify the facts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Our Editorial Practice
              </h2>

              <p className="leading-8 text-gray-800">
                When an article contains criticism, allegations, or statements
                that could reasonably affect the reputation of a person or
                organization, our editorial team makes reasonable efforts to
                seek comment before publication whenever practical and
                appropriate.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                We believe that considering multiple viewpoints contributes to
                more accurate, informative, and trustworthy journalism.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Requesting a Right of Reply
              </h2>

              <p className="leading-8 text-gray-800">
                If you believe that an article published on Why How What When
                contains information about you, your business, or your
                organization that requires clarification or response, you may
                contact our editorial team for review.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                Every genuine request is evaluated carefully, and any supporting
                information submitted will be considered as part of our editorial
                assessment process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Responses After Publication
              </h2>

              <p className="leading-8 text-gray-800">
                In some situations, comments or official statements may become
                available only after an article has been published.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                When new facts, clarifications, or responses materially improve
                the accuracy or completeness of a story, our editorial team may
                update the article, publish an editor's note, or include the
                response where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Information to Include
              </h2>

              <p className="leading-8 text-gray-800 mb-4">
                To help us review your request efficiently, please provide:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-800 leading-8">
                <li>Your full name and contact information.</li>
                <li>A link or title of the article concerned.</li>
                <li>The specific information you wish to address.</li>
                <li>
                  Any supporting documents, evidence, or official statements that
                  may assist our review.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Editorial Independence
              </h2>

              <p className="leading-8 text-gray-800">
                While we carefully consider every request submitted under this
                policy, editorial decisions regarding corrections, updates,
                additions, or publication of responses remain at the sole
                discretion of our editorial team.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                Decisions are guided by factual accuracy, relevance, available
                evidence, public interest, and our editorial standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Building Trust Through Dialogue
              </h2>

              <p className="leading-8 text-gray-800">
                Responsible journalism is strengthened through transparency,
                accountability, and open communication.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                Why How What When welcomes constructive engagement from readers,
                experts, organizations, and individuals who wish to provide
                additional context or respond to our reporting. By encouraging
                fair dialogue, we aim to maintain the trust of both our audience
                and the communities we cover.
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}