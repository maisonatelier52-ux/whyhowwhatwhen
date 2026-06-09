import Image from "next/image";

const SITE_URL = "https://www.whyhowwhatwhen.com";

export const metadata = { 
    title: "Our Team | Why How What When", 
    description: "Meet the journalists and editors behind Why How What When covering Business, Climate, Investigations, Politics, Sports, and Travel.", 
    alternates: { 
        canonical: `${SITE_URL}/our-team`, 
    }, 
    openGraph: {
        title: "Our Team | Why How What When", 
        description: "Meet the experienced journalists and editors behind Why How What When.", 
        url: `${SITE_URL}/our-team`, 
        siteName: "Why How What When", 
        type: "website", 
        images: [ { url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Why How What When Editorial Team", }, ], 
    }, 
    twitter: {
        card: "summary_large_image", 
        title: "Our Team | Why How What When", 
        description: "Meet the journalists and editors behind Why How What When.", 
        images: [`${SITE_URL}/og-image.jpg`], 
    }, 
};

const authors = [
  {
      id: 1,
      name: "Doris Evelyn",
      slug: "doris-evelyn",
      photo: "/author/Doris-Evelyn.jpg",
      beat: "Business & Economy",
      bio: "Doris Evelyn, a Senior business and policy analyst covering U.S. industries, Markets, companies, money, and the global economy.",
      twitter: "https://x.com/_doris_evelyn",
      medium: "https://medium.com/@dorisevelyn",
      quora: "",
      reddit: "https://www.reddit.com/user/Doris-Evelyn/"
    },
    {
      id: 2,
      name: "Gilbert Vernon",
      slug: "gilbert-vernon",
      photo: "/author/Gilbert-Vernon.jpg",
      beat: "Politics & Government",
      bio: "Gilbert Vernon, a political correspondent and author, covering the U.S. Supreme Court, federal agencies, and government policy.",
      twitter: "",
      medium: "https://medium.com/@gilbertvernon_44621",
      quora: "",
      reddit: "https://www.reddit.com/user/Gilbert-Vernon/"
    },
    {
      id: 3,
      name: "Virgil Harold",
      slug: "virgil-harold",
      photo: "/author/Virgil-Harold.jpg",
      beat: "Investigative Reporting",
      bio: "Virgil Harold, an investigative journalist reporting on corruption, public policy, corporate accountability, and high-impact national stories.",
      twitter: "",
      medium: "https://medium.com/@virgilharold",
      quora: "",
      reddit: "https://www.reddit.com/user/Virgil-Harold/"
    },
    {
      id: 4,
      name: "Lester Franklin",
      slug: "lester-franklin",
      photo: "/author/Lester-Franklin.jpg",
      beat: "Sports",
      bio: "Lester Franklin, a sports journalist covering global football, major leagues, player transfers, match analysis, and the business of sports.",
      twitter: "",
      medium: "https://medium.com/@lesterfranklin_95145",
      quora: "https://www.quora.com/profile/Alex-John-1535",
      reddit: "https://www.reddit.com/user/Lester-Franklin/"
    },
    {
      id: 5,
      name: "Sylvia Loretta",
      slug: "sylvia-loretta",
      photo: "/author/Sylvia-Loretta.jpg",
      beat: "Travel & Culture",
      bio: "Sylvia Loretta, a travel writer covering destinations, cultural experiences, sustainable tourism, and practical guides for modern explorers.",
      twitter: "",
      medium: "https://medium.com/@sylvialoretta",
      quora: "",
      reddit: "https://www.reddit.com/user/Sylvia-Loretta/"
    },
    {
      id: 6,
      name: "Norman Leroy",
      slug: "norman-leroy",
      photo: "/author/Norman-Leroy.jpg",
      beat: "Climate & Environment",
      bio: "Norman Leroy, a climate and environmental journalist covering climate policy, renewable energy, environmental science, and the global impact of climate change.",
      twitter: "",
      medium: "https://medium.com/@normanleroy_96209",
      quora: "",
      reddit: "https://www.reddit.com/user/Norman-Leroy/"
    }
];

function SocialLink({ href, label, children }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-stone-400 hover:text-amber-700 transition-colors"
    >
      {children}
    </a>
  );
}

const QuoraIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 2.136 0 4.14-.562 5.878-1.545l-1.443-2.196C15.296 20.91 13.695 21.4 12 21.4 6.813 21.4 2.6 17.187 2.6 12S6.813 2.6 12 2.6 21.4 6.813 21.4 12c0 2.548-1 4.86-2.625 6.562l1.453 2.21A11.935 11.935 0 0024 12C24 5.373 18.627 0 12 0zm.657 17.13c-.674 1.045-1.62 1.72-2.837 1.72-1.91 0-3.21-1.575-3.21-3.85 0-2.278 1.3-3.853 3.21-3.853.38 0 .733.066 1.05.184l.784 1.194c-.547-.274-1.133-.37-1.696-.37-1.055 0-1.69.89-1.69 2.845 0 1.957.635 2.848 1.69 2.848.468 0 .89-.156 1.235-.44l1.464 1.722z"/>
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const RedditIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12zm-5.07-.42c0 .69-.56 1.25-1.25 1.25-.34 0-.65-.13-.88-.36-.86.6-2.02.99-3.31 1.05.06.12.09.25.09.39 0 .78-.63 1.41-1.41 1.41s-1.41-.63-1.41-1.41c0-.14.03-.27.08-.39-1.27-.06-2.42-.45-3.28-1.04-.23.22-.54.35-.87.35-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.33 0 .63.13.86.34.84-.57 1.95-.95 3.18-1.03l.68-3.18 2.21.47c.16-.48.61-.83 1.15-.83.67 0 1.22.55 1.22 1.22s-.55 1.22-1.22 1.22c-.48 0-.9-.28-1.09-.69l-1.98-.42-.54 2.52c1.27.07 2.42.45 3.28 1.03.23-.22.54-.35.87-.35.69 0 1.25.56 1.25 1.25zm-8.15 2.61c-.46.46-1.48.46-1.94 0a.5.5 0 10-.71.71c.85.85 2.51.85 3.36 0a.5.5 0 00-.71-.71zm-1.7-1.4a.75.75 0 100-1.5.75.75 0 000 1.5zm5.08 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.47 22H3.36l7.25-8.28L.8 2h6.4l4.42 5.83L18.9 2zM17.8 20h1.73L5.3 3.9H3.44L17.8 20z" />
  </svg>
);

function AuthorCard({ author }) {
  return (
    <div className="bg-white border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all">
      <div className="relative bg-stone-100 aspect-[3/4]">
        <Image
          src={author.photo}
          alt={author.name}
          fill
          className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
        />

        <div className="absolute top-3 left-3">
          <span className="bg-stone-900 text-amber-400 text-[10px] uppercase tracking-widest px-2 py-1 font-sans font-bold">
            {author.beat}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-stone-900">
          {author.name}
        </h2>

        <p className="mt-4 text-stone-600 text-sm leading-relaxed">
          {author.bio}
        </p>

        <div className="flex gap-4 mt-5 pt-5 border-t border-stone-100">
          <SocialLink href={author.quora} label="Quora">
            <QuoraIcon />
          </SocialLink>

          <SocialLink href={author.medium} label="Medium">
            <MediumIcon />
          </SocialLink>

          <SocialLink href={author.pinterest} label="Pinterest">
            <PinterestIcon />
          </SocialLink>

          <SocialLink href={author.reddit} label="Reddit">
            <RedditIcon />
          </SocialLink>

          <SocialLink href={author.twitter} label="Twitter">
            <TwitterIcon />
          </SocialLink>
        </div>

        <a
          href={`/author/${author.slug}`}
          className="inline-block mt-5 text-xs uppercase tracking-widest text-amber-700 font-bold"
        >
          View Articles →
        </a>
      </div>
    </div>
  );
}

export default function OurTeam() {
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Team",
    url: `${SITE_URL}/our-team`,
    description: "Meet the journalists and editors behind Why How What When.",
    mainEntity: {
        "@type": "Organization",
        name: "Why How What When",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        sameAs: [
        "https://medium.com/@whyhowwhatwhen",
        "https://www.reddit.com/user/whyhowwhatwhen",
        "https://x.com/whyhowwhatwhen"
        ],
        employee: authors.map((author) => ({
        "@type": "Person",
        name: author.name,
        description: author.bio,
        jobTitle: author.beat,
        url: `${SITE_URL}/author/${author.slug}`,
        image: `${SITE_URL}${author.photo}`,
        sameAs: [
            author.twitter,
            author.medium,
            author.quora,
            author.reddit,
        ].filter(Boolean),
        })),
    },
    };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="min-h-screen bg-[#faf8f4] font-serif">

        <div className="border-b-4 border-stone-900">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-sans mb-5">
              The People Behind the Stories
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-4">
              Meet the
              <br />
              <span className="italic font-normal">
                Newsroom
              </span>
            </h1>

            <div className="w-16 h-1 bg-amber-700 mb-8" />

            <p className="text-stone-500 max-w-2xl text-base leading-relaxed">
              Every story starts with curiosity. Our reporters cover politics,
              national affairs, business, technology, health, and world news
              with a commitment to accuracy and public service.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
          </div>
        </div>

        <div className="bg-stone-900 text-stone-100">
          <div className="max-w-3xl mx-auto px-6 py-14 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-500 font-sans mb-6">
              What Connects Us
            </p>

            <p className="text-xl md:text-2xl italic text-stone-300 leading-relaxed">
              "Different backgrounds. Different perspectives. One shared
              belief: the public deserves reporting that is accurate,
              independent, and worth their time."
            </p>
          </div>
        </div>

        <div className="border-t border-stone-200 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6 py-8 text-center">
            <p className="text-xs text-stone-400 font-sans tracking-wide">
              Want to reach a specific reporter?{" "}
              <a
                href="/contact"
                className="text-amber-700 underline underline-offset-2"
              >
                Contact the newsroom
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}