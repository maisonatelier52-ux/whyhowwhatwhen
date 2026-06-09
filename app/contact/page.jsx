export const metadata = {
  title: "Contact Us | Why How What When",
  description:
    "Get in touch with Why How What When for editorial inquiries, news tips, corrections, media requests, advertising opportunities, and contributor submissions.",
  alternates: {
    canonical: "https://www.whyhowwhatwhen.com/contact",
  },
  openGraph: {
    title: "Contact Us | Why How What When",
    description:
      "Contact the editorial team at Why How What When for news tips, corrections, partnerships, media requests, and general inquiries.",
    url: "https://www.whyhowwhatwhen.com/contact",
    siteName: "Why How What When",
    type: "website",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    url: "https://www.whyhowwhatwhen.com/contact",
    description:
      "Contact information for Why How What When.",
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
          <div className="max-w-5xl mx-auto space-y-16">

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#7351a8] mb-6">
                Contact Us
              </h1>

              <p className="text-xl text-gray-700 leading-8 max-w-3xl mx-auto">
                We welcome feedback, story ideas, corrections, partnership
                inquiries, media requests, and questions from our readers.
                Every submission is reviewed and directed to the appropriate
                member of our editorial team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="border border-[#7351a8] p-8">
                <h2 className="text-2xl font-bold text-[#7351a8] mb-4">
                  General Inquiries
                </h2>

                <p className="text-gray-700 leading-7">
                  Have a question about our website, editorial policies, or
                  published content? Our team is available to assist with
                  general inquiries and reader support.
                </p>
              </div>

              <div className="border border-[#7351a8] p-8">
                <h2 className="text-2xl font-bold text-[#7351a8] mb-4">
                  Editorial & News Tips
                </h2>

                <p className="text-gray-700 leading-7 mb-4">
                  Share breaking news, investigative leads, press releases,
                  interview opportunities, or story ideas related to business,
                  climate, politics, investigations, sports, or travel.
                </p>

                <div className="font-semibold text-lg">
                  editorial@whyhowwhatwhen.com
                </div>
              </div>

              <div className="border border-[#7351a8] p-8">
                <h2 className="text-2xl font-bold text-[#7351a8] mb-4">
                  Corrections & Updates
                </h2>

                <p className="text-gray-700 leading-7 mb-4">
                  Accuracy is fundamental to our journalism. If you believe an
                  article contains an error or requires clarification, please
                  contact our editorial staff and include supporting
                  information whenever possible.
                </p>

                <div className="font-semibold text-lg">
                  corrections@whyhowwhatwhen.com
                </div>
              </div>

              <div className="border border-[#7351a8] p-8">
                <h2 className="text-2xl font-bold text-[#7351a8] mb-4">
                  Advertising & Partnerships
                </h2>

                <p className="text-gray-700 leading-7">
                  We collaborate with brands, agencies, organizations, and
                  businesses interested in advertising opportunities, sponsored
                  campaigns, strategic partnerships, and other commercial
                  initiatives that align with our editorial standards.
                </p>
              </div>

              <div className="border border-[#7351a8] p-8">
                <h2 className="text-2xl font-bold text-[#7351a8] mb-4">
                  Media & Press Requests
                </h2>

                <p className="text-gray-700 leading-7">
                  Journalists, broadcasters, researchers, and media
                  organizations seeking interviews, statements, or additional
                  information about Why How What When may reach out to our
                  communications team for assistance.
                </p>
              </div>

              <div className="border border-[#7351a8] p-8">
                <h2 className="text-2xl font-bold text-[#7351a8] mb-4">
                  Careers & Contributors
                </h2>

                <p className="text-gray-700 leading-7">
                  We welcome submissions from journalists, writers,
                  investigators, analysts, photographers, and subject-matter
                  experts who are passionate about delivering high-quality,
                  fact-based reporting across our coverage areas.
                </p>
              </div>

            </div>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Our Editorial Commitment
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Why How What When is committed to responsible journalism,
                  editorial independence, transparency, fact-checking, and
                  accountability.
                </p>

                <p>
                  We continuously review and update our reporting when new
                  verified information becomes available, ensuring our readers
                  receive accurate, relevant, and trustworthy content.
                </p>
              </div>
            </section>

            <section className="bg-gray-50 p-10 text-center border border-[#7351a8]">
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                We'd Love to Hear From You
              </h2>

              <p className="text-lg text-gray-700 leading-8 max-w-3xl mx-auto">
                Whether you're a reader with feedback, a journalist with a news
                tip, a potential contributor, or a business exploring
                partnership opportunities, we appreciate your interest in Why
                How What When and look forward to hearing from you.
              </p>
            </section>

          </div>
        </section>
      </main>
    </>
  );
}