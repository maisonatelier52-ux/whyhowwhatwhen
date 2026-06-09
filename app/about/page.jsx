export const metadata = {
  title: "About Us | Why How What When",
  description:
    "Learn about Why How What When, an independent digital publication covering business, climate, investigations, politics, sports, and travel with insightful journalism.",
  alternates: {
    canonical: "https://www.whyhowwhatwhen.com/about",
  },
  openGraph: {
    title: "About Us | Why How What When",
    description:
      "Discover our mission to explain the stories behind today's biggest events across business, climate, politics, investigations, sports, and travel.",
    url: "https://www.whyhowwhatwhen.com/about",
    siteName: "Why How What When",
    type: "website",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Why How What When",
    url: "https://www.whyhowwhatwhen.com/about",
    description:
      "Independent news and analysis covering business, climate, investigations, politics, sports, and travel.",
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
                About Us
              </h1>
              <p className="text-xl leading-8 text-gray-700">
                Understanding today's world starts with asking the right
                questions—and finding answers that matter.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Beyond the Headlines
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  News moves quickly, but understanding takes time.
                </p>

                <p>
                  At <strong>Why How What When</strong>, we believe every major
                  story deserves context, clarity, and thoughtful analysis. We
                  don't just report what happened—we explore why it happened,
                  how it impacts people, what it means for the future, and when
                  the next developments may unfold.
                </p>

                <p>
                  Our goal is to help readers move beyond breaking news and gain
                  a deeper understanding of the events shaping the world around
                  them.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Looking Deeper
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Every headline has a larger story behind it.
                </p>

                <p>
                  Economic decisions affect businesses and households.
                  Environmental changes reshape communities across the globe.
                  Political developments influence policy, society, and
                  international relations. Sporting events become cultural
                  moments, while travel reveals the people and places that
                  connect our world.
                </p>

                <p>
                  We focus on explaining these connections through reliable
                  reporting, informed perspectives, and meaningful storytelling.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-8">
                What We Cover
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="border rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-2">Business</h3>
                  <p className="text-gray-600">
                    Markets, companies, innovation, startups, and the global
                    economy.
                  </p>
                </div>

                <div className="border rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-2">Climate</h3>
                  <p className="text-gray-600">
                    Environmental challenges, sustainability, science, and
                    climate policy.
                  </p>
                </div>

                <div className="border rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-2">Investigations</h3>
                  <p className="text-gray-600">
                    In-depth reporting that uncovers facts and provides
                    accountability.
                  </p>
                </div>

                <div className="border rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-2">Politics</h3>
                  <p className="text-gray-600">
                    Government, elections, policy decisions, and global affairs.
                  </p>
                </div>

                <div className="border rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-2">Sports</h3>
                  <p className="text-gray-600">
                    Major competitions, athlete stories, analysis, and sporting
                    culture.
                  </p>
                </div>

                <div className="border rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-2">Travel</h3>
                  <p className="text-gray-600">
                    Destinations, experiences, culture, and stories from around
                    the world.
                  </p>
                </div>

              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Journalism for Curious Minds
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  Whether you're following financial markets, understanding
                  political developments, exploring climate issues, or planning
                  your next journey, knowledge becomes more valuable when it's
                  presented with accuracy and context.
                </p>

                <p>
                  Our content is designed for readers who want more than quick
                  updates—they want insight, explanation, and perspective.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#7351a8] mb-6">
                Why We Exist
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-700">
                <p>
                  The world is interconnected, and understanding one story often
                  means understanding many others.
                </p>

                <p>
                  Why How What When was created to make complex topics easier to
                  understand through clear reporting, thoughtful analysis, and
                  engaging storytelling.
                </p>

                <p>
                  We believe informed readers make better decisions, ask better
                  questions, and contribute to better conversations.
                </p>
              </div>
            </section>

          </div>
        </section>
      </main>
    </>
  );
}