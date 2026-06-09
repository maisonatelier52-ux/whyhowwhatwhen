export const metadata = {
  title: "Terms & Conditions | Why How What When",
  description:
    "Read the Terms and Conditions governing the use of Why How What When, including user responsibilities, intellectual property rights, disclaimers, and website policies.",
  alternates: {
    canonical: "https://www.whyhowwhatwhen.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Why How What When",
    description:
      "The official Terms & Conditions for using Why How What When.",
    url: "https://www.whyhowwhatwhen.com/terms-and-conditions",
    siteName: "Why How What When",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Why How What When",
    description:
      "Learn about the terms governing access and use of Why How What When.",
  },
};

export default function TermsConditionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    url: "https://www.whyhowwhatwhen.com/terms-and-conditions",
    description:
      "Terms and Conditions governing the use of Why How What When.",
  };

  const sections = [
    {
      title: "Welcome",
      text: "Welcome to Why How What When. By accessing or using this website, you acknowledge and agree to comply with these Terms & Conditions. These terms apply to all visitors, readers, contributors, partners, and anyone interacting with our platform. If you do not agree with these terms, you should discontinue use of the website.",
    },
    {
      title: "Use of the Website",
      text: "Our website is intended primarily for personal, informational, and non-commercial use unless otherwise expressly permitted. You agree to use the platform responsibly and in compliance with all applicable laws and regulations.",
      list: [
        "Use the website for unlawful, fraudulent, or harmful activities.",
        "Attempt to disrupt, hack, or interfere with website functionality or security.",
        "Copy, scrape, reproduce, or redistribute content without authorization.",
        "Impersonate another individual or misrepresent your identity or affiliation.",
        "Upload or transmit malicious software, spam, defamatory, or offensive material.",
      ],
    },
    {
      title: "Intellectual Property Rights",
      text: "All editorial content, articles, graphics, branding elements, logos, images, videos, layouts, and design assets published on Why How What When are protected under copyright, trademark, and intellectual property laws. Unless expressly authorized in writing, no material may be copied, modified, republished, distributed, or used for commercial purposes.",
    },
    {
      title: "User Contributions",
      text: "If you submit comments, feedback, suggestions, or other materials through our platform, you grant Why How What When a non-exclusive right to review, edit, moderate, publish, or remove such content where appropriate. You remain solely responsible for ensuring your submissions comply with applicable laws and do not infringe upon third-party rights.",
    },
    {
      title: "Accuracy & Editorial Content",
      text: "We strive to produce accurate, timely, and well-researched journalism. However, information may evolve over time, and we cannot guarantee that every article will always be complete, current, or free from errors. Readers should independently evaluate information before making decisions based on our content.",
    },
    {
      title: "External Resources",
      text: "Our articles may contain references or links to third-party websites, services, products, or publications for informational purposes. Why How What When does not control or endorse these external resources and is not responsible for their content, availability, security, or privacy practices.",
    },
    {
      title: "Advertising & Affiliate Relationships",
      text: "The website may display advertisements, sponsored articles, affiliate links, or commercial partnerships. Any sponsored or promotional content will be identified where appropriate. Editorial independence remains a core principle, and commercial relationships do not influence our reporting or editorial decisions.",
    },
    {
      title: "Disclaimer of Liability",
      text: "To the fullest extent permitted by applicable law, Why How What When, its owners, editors, writers, employees, contributors, licensors, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of this website or reliance upon any information published herein. Use of the website is entirely at your own risk.",
    },
    {
      title: "Changes to These Terms",
      text: "As our platform evolves, these Terms & Conditions may be revised periodically to reflect legal, operational, or editorial updates. The latest version will always be available on this page, and continued use of the website constitutes acceptance of any revised terms.",
    },
    {
      title: "Suspension or Termination",
      text: "We reserve the right, at our sole discretion, to restrict, suspend, or permanently terminate access to users who violate these Terms & Conditions or engage in activities that threaten the security, integrity, reputation, or operation of the website or its community.",
    },
    {
      title: "Contact Information",
      text: "For questions regarding these Terms & Conditions or any of our policies, please contact our editorial or administrative team through the Contact page available on the website.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="bg-white text-black min-h-screen">

        {/* Hero Section */}

        <section className="relative overflow-hidden border-b border-gray-200">

          <div className="absolute inset-0 bg-gradient-to-br from-[#7351a8]/10 via-white to-[#7351a8]/5"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-24">

            <div className="text-center">

              <span className="inline-flex items-center rounded-full border border-[#7351a8]/20 bg-[#7351a8]/5 px-6 py-2 text-sm font-medium text-[#7351a8]">
                Legal Agreement
              </span>

              <h1 className="mt-8 text-5xl md:text-6xl font-bold text-[#7351a8] tracking-tight">
                Terms & Conditions
              </h1>

              <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-700">
                These Terms & Conditions establish the rules governing access
                to and use of Why How What When, ensuring a secure,
                respectful, and transparent experience for our readers and
                contributors.
              </p>

            </div>

          </div>

        </section>

        {/* Content */}

        <section className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid gap-8">

            {sections.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 bg-white p-10 shadow-sm hover:shadow-2xl hover:border-[#7351a8]/30 transition-all duration-300"
              >
                <div className="flex gap-6">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7351a8]/10 font-bold text-[#7351a8]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>

                    <h2 className="text-3xl font-semibold text-[#7351a8] mb-5">
                      {item.title}
                    </h2>

                    <p className="text-lg leading-9 text-gray-700">
                      {item.text}
                    </p>

                    {item.list && (
                      <ul className="mt-6 space-y-3 list-disc pl-6 text-gray-700 leading-8">
                        {item.list.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Final Note */}

          <div className="mt-20 bg-gradient-to-r from-[#7351a8] via-[#8160b6] to-[#7351a8] p-[1px]">

            <div className="bg-white px-10 py-14 text-center">

              <h2 className="text-4xl font-bold text-[#7351a8] mb-8">
                Our Commitment
              </h2>

              <p className="max-w-4xl mx-auto text-lg leading-9 text-gray-700">
                Why How What When exists to educate, inform, and inspire
                readers through reliable journalism and thoughtful content.
                By using our platform responsibly and respecting these Terms &
                Conditions, you contribute to a positive, transparent, and
                trustworthy digital community built on integrity, respect, and
                the free exchange of knowledge.
              </p>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}