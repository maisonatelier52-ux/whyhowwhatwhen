export const metadata = {
  title: "Legal Information | Why How What When",
  description:
    "Read the legal information, copyright policy, editorial disclaimer, affiliate disclosure, and terms governing the use of Why How What When.",
  alternates: {
    canonical: "https://www.whyhowwhatwhen.com/legal",
  },
  openGraph: {
    title: "Legal Information | Why How What When",
    description:
      "Our legal policies, editorial disclaimers, copyright information, and commitment to transparency.",
    url: "https://www.whyhowwhatwhen.com/legal",
    siteName: "Why How What When",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Information | Why How What When",
    description:
      "Learn about our legal policies, intellectual property rights, editorial standards, and user responsibilities.",
  },
};

export default function LegalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Legal Information",
    url: "https://www.whyhowwhatwhen.com/legal",
    description:
      "Legal information and policies governing the use of Why How What When.",
  };

  const sections = [
    {
      title: "Welcome",
      content:
        "Welcome to Why How What When. By accessing or using our website, you agree to use it responsibly, lawfully, and in accordance with these legal guidelines. These principles help maintain a safe, respectful, and trustworthy environment for our readers, contributors, and partners.",
    },
    {
      title: "Intellectual Property",
      content:
        "Unless otherwise stated, all articles, graphics, logos, illustrations, website design elements, and editorial content published on Why How What When are protected by applicable copyright and intellectual property laws. Unauthorized reproduction, distribution, republication, or commercial use of our content without prior written permission is prohibited except where permitted by law.",
    },
    {
      title: "Editorial Disclaimer",
      content:
        "The content available on Why How What When is published for informational, educational, and general reference purposes. While our editorial team works diligently to ensure accuracy and reliability, we cannot guarantee that every article will always be complete, current, or entirely free from error. Readers should exercise their own judgment before relying on any information presented on this website.",
    },
    {
      title: "Third-Party Websites",
      content:
        "Our articles may contain links to external websites, research publications, or third-party resources that provide additional information. These links are offered solely for reader convenience. We do not control, endorse, or assume responsibility for the content, privacy practices, or availability of any external websites.",
    },
    {
      title: "Opinions & Guest Contributions",
      content:
        "Views expressed by guest writers, interviewees, contributors, or opinion columnists are their own and do not necessarily represent the editorial position or views of Why How What When. Editorial independence remains a core principle of our publication.",
    },
    {
      title: "Affiliate & Commercial Disclosure",
      content:
        "Certain articles may contain affiliate links or references to products and services from commercial partners. If readers purchase through qualifying links, we may receive a commission at no additional cost to them. These commercial relationships never determine our editorial decisions, reviews, or recommendations.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Why How What When, including its owners, editors, writers, contributors, and affiliates, shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of this website or reliance upon its content. Accessing and using the information provided on this website is done entirely at the user's own discretion and risk.",
    },
    {
      title: "Policy Updates",
      content:
        "We reserve the right to modify or update our legal policies, editorial guidelines, and website terms at any time to reflect operational, legal, or regulatory changes. Updated versions will be published on this page, and continued use of the website constitutes acceptance of those revisions.",
    },
    {
      title: "Contact",
      content:
        "If you have questions regarding this Legal Information page or any of our editorial or website policies, please contact our team through the Contact page. We welcome inquiries and will review requests as promptly as possible.",
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

      <main className="bg-white min-h-screen">

        {/* Hero */}

        <section className="relative overflow-hidden border-b border-gray-200">

          <div className="absolute inset-0 bg-gradient-to-br from-[#7351a8]/5 via-white to-[#7351a8]/10" />

          <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">

            <span className="inline-block px-5 py-2 rounded-full border border-[#7351a8]/20 bg-[#7351a8]/5 text-[#7351a8] font-medium mb-6">
              Legal Information
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-[#7351a8] tracking-tight">
              Transparency & Trust
            </h1>

            <p className="max-w-3xl mx-auto mt-8 text-lg leading-9 text-gray-700">
              Our legal policies are designed to protect readers, creators,
              contributors, and intellectual property while promoting
              transparency, accountability, and responsible digital publishing.
            </p>

          </div>
        </section>

        {/* Content */}

        <section className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid gap-8">

            {sections.map((section, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 hover:border-[#7351a8]/30 hover:shadow-2xl transition-all duration-300 p-10"
              >
                <div className="flex items-start gap-6">

                  <div className="h-12 w-12 rounded-full bg-[#7351a8]/10 flex items-center justify-center text-[#7351a8] font-bold text-lg shrink-0">
                    {index + 1}
                  </div>

                  <div>
                    <h2 className="text-3xl font-semibold text-[#7351a8] mb-5">
                      {section.title}
                    </h2>

                    <p className="text-gray-700 leading-9 text-lg">
                      {section.content}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Commitment Section */}

          <div className="mt-20 bg-gradient-to-r from-[#7351a8] to-[#8d6ac2] p-[1px]">

            <div className="bg-white p-12">

              <h2 className="text-4xl font-bold text-[#7351a8] mb-8 text-center">
                Our Commitment
              </h2>

              <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg leading-9">
                At <strong>Why How What When</strong>, we believe that trust is
                built through openness, accountability, editorial independence,
                and clear communication. We remain committed to maintaining a
                responsible publishing environment that respects intellectual
                property, values transparency, and serves readers with integrity
                and professionalism.
              </p>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}