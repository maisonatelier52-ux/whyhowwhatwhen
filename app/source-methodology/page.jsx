export const metadata = {
  title: "Source Methodology | Why How What When",
  description:
    "Learn how Why How What When researches, verifies, and evaluates sources to produce accurate, transparent, and trustworthy journalism.",
  alternates: {
    canonical: "https://www.whyhowwhatwhen.com/source-methodology",
  },
  openGraph: {
    title: "Source Methodology | Why How What When",
    description:
      "Our approach to sourcing, fact-checking, verification, and editorial standards.",
    url: "https://www.whyhowwhatwhen.com/source-methodology",
    siteName: "Why How What When",
    type: "website",
  },
};

export default function SourceMethodologyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Source Methodology",
    url: "https://www.whyhowwhatwhen.com/source-methodology",
    description:
      "Source methodology and verification standards followed by Why How What When.",
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
                Source Methodology
              </h1>

              <p className="text-xl leading-8 text-gray-700">
                Reliable journalism begins with reliable sources. Every article
                we publish is built on research, verification, and responsible
                editorial judgment.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Research Is the Foundation
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  At <strong>Why How What When</strong>, every story starts with
                  comprehensive research before writing begins.
                </p>

                <p>
                  Our editorial team gathers information from multiple credible
                  sources, compares available evidence, and evaluates the
                  reliability of the information before publication.
                </p>

                <p>
                  We believe that trustworthy reporting depends on a transparent
                  and disciplined sourcing process.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Sources We Use
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Whenever possible, we rely on primary and authoritative
                  sources to support our reporting.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-8">

                  <div className="border rounded-lg p-5">
                    Official government statements and publications
                  </div>

                  <div className="border rounded-lg p-5">
                    Regulatory filings and public records
                  </div>

                  <div className="border rounded-lg p-5">
                    Company announcements and corporate disclosures
                  </div>

                  <div className="border rounded-lg p-5">
                    Interviews with experts and relevant stakeholders
                  </div>

                  <div className="border rounded-lg p-5">
                    Academic studies and scientific research
                  </div>

                  <div className="border rounded-lg p-5">
                    International organizations and research institutions
                  </div>

                  <div className="border rounded-lg p-5">
                    Court documents and investigative records
                  </div>

                  <div className="border rounded-lg p-5">
                    Trusted news organizations and industry publications
                  </div>

                  <div className="border rounded-lg p-5">
                    Official sports organizations and governing bodies
                  </div>

                  <div className="border rounded-lg p-5">
                    Verified social media accounts used for confirmation or attribution
                  </div>

                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Fact-Checking Process
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Accuracy is central to our editorial process.
                </p>

                <p>
                  Editors and writers verify names, dates, quotations,
                  statistics, locations, organizations, and factual claims using
                  available evidence before publication.
                </p>

                <p>
                  Information that cannot be sufficiently verified is either
                  excluded or clearly identified as unconfirmed rather than
                  presented as fact.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Anonymous Sources
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  We strongly prefer sources who are identified by name and
                  affiliation.
                </p>

                <p>
                  Anonymous sources may be used only when the information is of
                  significant public interest, cannot reasonably be obtained
                  otherwise, and originates from individuals with direct
                  knowledge of the matter.
                </p>

                <p>
                  Such information is subject to additional editorial review and
                  corroboration whenever possible.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Social Media Verification
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Social media can provide valuable information, but it also
                  contains misinformation and unverified claims.
                </p>

                <p>
                  We rely primarily on verified accounts, official statements,
                  and independently confirmed content when referencing social
                  platforms.
                </p>

                <p>
                  Viral posts, rumors, or anonymous claims are not treated as
                  reliable evidence without additional verification.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Developing Stories
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Breaking news and ongoing investigations often evolve as new
                  information emerges.
                </p>

                <p>
                  Our editorial team continually reviews credible updates and
                  revises published articles when significant verified
                  developments occur, ensuring readers have access to the most
                  accurate information available.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                How We Evaluate Sources
              </h2>

              <div className="bg-gray-50 border rounded-xl p-8">
                <div className="space-y-6 text-lg text-gray-700">

                  <div>
                    <h3 className="font-semibold text-black mb-2">
                      Credibility
                    </h3>
                    <p>
                      Does the source have recognized authority or direct
                      knowledge of the subject?
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-black mb-2">
                      Reliability
                    </h3>
                    <p>
                      Can the information be verified through additional
                      evidence or independent reporting?
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-black mb-2">
                      Relevance
                    </h3>
                    <p>
                      Does the source meaningfully contribute to understanding
                      the story and provide appropriate context?
                    </p>
                  </div>

                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Our Commitment to Readers
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Readers deserve journalism that is transparent, accurate, and
                  responsibly sourced.
                </p>

                <p>
                  Every article published by Why How What When reflects our
                  commitment to careful research, independent verification, and
                  editorial integrity.
                </p>

                <p>
                  We believe that asking thoughtful questions, verifying every
                  answer, and citing credible information are essential to
                  building trust with our audience.
                </p>
              </div>
            </section>

          </div>
        </section>
      </main>
    </>
  );
}