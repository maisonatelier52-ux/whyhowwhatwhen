export const metadata = {
  title: "Corrections Policy | Why How What When",
  description:
    "Read the Corrections Policy of Why How What When and learn how we handle factual errors, updates, clarifications, and editorial corrections.",
  alternates: {
    canonical: "https://www.whyhowwhatwhen.com/corrections-policy",
  },
  openGraph: {
    title: "Corrections Policy | Why How What When",
    description:
      "Our commitment to accuracy, transparency, and responsible journalism through timely corrections and updates.",
    url: "https://www.whyhowwhatwhen.com/corrections-policy",
    siteName: "Why How What When",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corrections Policy | Why How What When",
    description:
      "Learn how Why How What When reviews and corrects editorial errors while maintaining transparency and accountability.",
  },
};

export default function CorrectionsPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Corrections Policy",
    url: "https://www.whyhowwhatwhen.com/corrections-policy",
    description:
      "Why How What When's Corrections Policy outlines our commitment to accuracy, transparency, and editorial accountability.",
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
              Corrections Policy
            </h1>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-8">
              Accuracy is fundamental to our editorial mission. We are committed
              to correcting errors promptly, updating information when necessary,
              and maintaining transparency with our readers.
            </p>
          </div>

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Our Commitment to Accuracy
              </h2>

              <p className="leading-8 text-gray-800">
                At <strong>Why How What When</strong>, we strive to publish
                reliable, well-researched, and factually accurate content across
                news, business, technology, health, science, education,
                lifestyle, and other topics.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                Every article undergoes editorial review before publication.
                However, despite careful processes, errors or omissions may
                occasionally occur. When they do, we believe they should be
                addressed quickly and responsibly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                How We Handle Corrections
              </h2>

              <p className="leading-8 text-gray-800">
                When a factual error is identified, our editorial team reviews
                the issue and verifies the available evidence before making any
                necessary changes.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                Corrections may involve updating or revising:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-800 leading-8">
                <li>Names, dates, places, or timelines.</li>
                <li>Quotes, statements, or attributed information.</li>
                <li>Company, product, or organizational details.</li>
                <li>Statistical data or factual claims.</li>
                <li>Information that is inaccurate, incomplete, or potentially misleading.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Article Updates
              </h2>

              <p className="leading-8 text-gray-800">
                News and informational content often evolves as new developments
                emerge. We may update previously published articles to include
                new facts, official statements, additional context, or relevant
                information that improves the completeness and accuracy of our
                reporting.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                These updates help ensure readers have access to the most current
                and reliable information available.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Reader Feedback
              </h2>

              <p className="leading-8 text-gray-800">
                We value feedback from our readers and recognize that community
                input plays an important role in maintaining editorial quality.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                If you believe an article contains an error or requires
                clarification, we encourage you to contact our editorial team.
                Every legitimate correction request is reviewed carefully and
                independently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Transparency in Corrections
              </h2>

              <p className="leading-8 text-gray-800">
                We believe significant factual corrections should not be made
                without acknowledging that a revision has occurred.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                Where appropriate, articles may include an editor's note,
                correction notice, or updated publication information to inform
                readers that meaningful changes have been made.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Our Editorial Review Process
              </h2>

              <p className="leading-8 text-gray-800">
                When a correction request is submitted, our editorial team
                examines the original source material, verifies supporting
                evidence, and evaluates whether a correction, clarification, or
                update is warranted.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                Editorial decisions are based on factual accuracy, credible
                sources, available documentation, and established journalistic
                standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#7351a8] mb-4">
                Our Promise to Readers
              </h2>

              <p className="leading-8 text-gray-800">
                Credibility is built through accountability and continuous
                improvement.
              </p>

              <p className="leading-8 text-gray-800 mt-4">
                Why How What When is committed to correcting mistakes,
                updating content when necessary, and maintaining transparent
                editorial practices. Our goal is to provide readers with
                trustworthy, balanced, and dependable information that meets the
                highest standards of responsible journalism.
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}