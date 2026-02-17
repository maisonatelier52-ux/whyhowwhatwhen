const SITE_URL = "https://www.whyhowwhatwhen.com";

export const metadata = {
  title: "Terms of Use — WhyHowWhatWhen",
  description:
    "Read WhyHowWhatWhen's Terms of Use outlining acceptable website usage, intellectual property rights, disclaimers, and legal guidelines.",
  alternates: {
    canonical: `${SITE_URL}/terms-of-use`,
  },
  openGraph: {
    title: "Terms of Use — WhyHowWhatWhen",
    description:
      "Review the terms and conditions governing use of the WhyHowWhatWhen website and services.",
    url: `${SITE_URL}/terms-of-use`,
    type: "website",
    siteName: "WhyHowWhatWhen",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use — WhyHowWhatWhen",
    description:
      "Understand the rules, rights, and responsibilities when using WhyHowWhatWhen.",
  },
};

export default function TermsOfUse() {
  return (
    <>
      <div className="bg-white text-gray-900">
        <article className="prose max-w-4xl mx-auto py-16 px-6 md:px-10 leading-relaxed">
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Terms of Use
          </h1>

          <p className="text-sm text-gray-500 mb-10 border-b pb-4">
            Last Updated: February 2025
          </p>

          <h2 className="text-2xl font-bold mt-10">1. Introduction</h2>
          <p>
            Welcome to <strong>WhyHowWhatWhen</strong> (“we,” “us,” or “our”).
            By accessing or using our website, mobile site, newsletter, or any
            related services (collectively, the “Services”), you agree to be
            bound by these Terms of Use and our Privacy Policy. If you do not
            agree, please discontinue use of our Services immediately.
          </p>

          <h2 className="text-2xl font-bold mt-10">2. Acceptance of Terms</h2>
          <p>
            By accessing our Services, you confirm that you are at least 13
            years old, legally able to agree to these Terms, and using the
            Services for lawful purposes. Continued use of the platform
            constitutes acceptance of any updates made to these Terms.
          </p>

          <h2 className="text-2xl font-bold mt-10">3. Use of the Services</h2>
          <p>
            You may use WhyHowWhatWhen for personal, non-commercial purposes.
            You agree not to:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Reproduce, distribute, or republish content without permission</li>
            <li>Use automated tools (bots, scrapers) to collect data</li>
            <li>Interfere with website security, performance, or operations</li>
            <li>Upload malicious files or attempt unauthorized system access</li>
            <li>Engage in unlawful, abusive, or fraudulent behavior</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10">4. Intellectual Property</h2>
          <p>
            All articles, videos, graphics, photographs, logos, and materials on
            WhyHowWhatWhen are protected by copyright, trademark, and other
            intellectual property laws. You may not reproduce or use these
            materials without express permission.
          </p>

          <h2 className="text-2xl font-bold mt-10">5. User Submissions</h2>
          <p>
            By submitting comments, messages, or content to WhyHowWhatWhen, you
            grant us a worldwide, royalty-free, perpetual license to use,
            publish, and distribute that content.
          </p>

          <h2 className="text-2xl font-bold mt-10">6. Editorial Independence & Accuracy</h2>
          <p>
            WhyHowWhatWhen strives for accuracy and transparency; however,
            we make no guarantees regarding completeness or timeliness.
          </p>

          <h2 className="text-2xl font-bold mt-10">7. Advertising & Sponsored Content</h2>
          <p>
            Our Services may include ads, sponsored posts, and affiliate links.
            Sponsored content will be clearly labeled.
          </p>

          <h2 className="text-2xl font-bold mt-10">8. No Professional Advice</h2>
          <p>
            Articles covering finance, law, or health are for informational
            purposes only and do not constitute professional advice.
          </p>

          <h2 className="text-2xl font-bold mt-10">9. Third-Party Links</h2>
          <p>
            Our Services may contain links to external sites.
            We are not responsible for their content or practices.
          </p>

          <h2 className="text-2xl font-bold mt-10">10. Disclaimer of Warranties</h2>
          <p>
            The Services are provided “as is” and “as available.”
          </p>

          <h2 className="text-2xl font-bold mt-10">11. Limitation of Liability</h2>
          <p>
            WhyHowWhatWhen is not responsible for damages arising
            from your use of the Services.
          </p>

          <h2 className="text-2xl font-bold mt-10">12. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless WhyHowWhatWhen
            from claims arising from misuse of the Services.
          </p>

          <h2 className="text-2xl font-bold mt-10">13. Termination</h2>
          <p>
            We may suspend or terminate access at any time if these
            Terms are violated.
          </p>

          <h2 className="text-2xl font-bold mt-10">14. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United States
            and the State of California.
          </p>

          <h2 className="text-2xl font-bold mt-10">15. Changes to These Terms</h2>
          <p>
            We may update these Terms at any time. Continued use
            constitutes acceptance of updates.
          </p>

        </article>
      </div>
      {/* ===== JSON-LD STRUCTURED DATA ===== */}
      <script
        id="terms-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            "name": "WhyHowWhatWhen Terms of Use",
            "url": `${SITE_URL}/terms-of-use`,
            "publisher": {
              "@type": "Organization",
              "name": "WhyHowWhatWhen",
              "url": `${SITE_URL}`
            }
          }),
        }}
      />

      <script
        id="terms-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${SITE_URL}/`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Terms of Use",
                "item": `${SITE_URL}/terms-of-use`
              }
            ]
          }),
        }}
      />
    </>
  );
}
