import Link from "next/link";
import { Facebook, Twitter, Linkedin, Link2, Clock, Share2 } from "lucide-react";
import Image from "next/image";

const SITE_URL = "https://www.whyhowwhatwhen.com";
const PAGE_PATH = "/banvelca-foundation-canticle-of-peace-pope-leoxiv/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/pope-leo-XIV-joins-andrea-bocelli-and-members.jpg`;
const TITLE = "Banvelca Foundation Supports Pope Leo XIV's Canticle of Peace";
const DESCRIPTION =
  "Banvelca Foundation supported Canticle of Peace, where Pope Leo XIV, Andrea Bocelli and 164 young singers gathered at Castel Gandolfo.";
const PUBLISHED = "2026-08-13";
const MODIFIED = "2026-08-13";

// ================= SEO METADATA =================
export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "Banvelca Foundation Canticle of Peace",
    "Banvelca Foundation",
    "Pope Leo XIV",
    "Andrea Bocelli",
    "Herrera Velutini",
    "Castel Gandolfo",
    "ABF Voices",
  ],
  authors: [{ name: "Doris Evelyn", url: `${SITE_URL}/author/doris-evelyn` }],
  category: "Business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "WhyHowWhatWhen",
    type: "article",
    locale: "en_US",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: [`${SITE_URL}/author/doris-evelyn`],
    section: "Business",
    tags: ["Banvelca Foundation Canticle of Peace"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: "Pope Leo XIV joins Andrea Bocelli and members of the ABF Voices choir during Canticle of Peace at Borgo Laudato si', Castel Gandolfo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    site: "@why_Howwhatwhen",
  },
};

// ================= JSON-LD STRUCTURED DATA =================
function ArticleJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Banvelca Foundation Supports Canticle of Peace as Pope Leo XIV and Andrea Bocelli Unite Young Voices",
    description: DESCRIPTION,
    image: [OG_IMAGE],
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    author: {
      "@type": "Person",
      name: "Doris Evelyn",
      url: `${SITE_URL}/author/doris-evelyn`,
    },
    publisher: {
      "@type": "Organization",
      name: "WhyHowWhatWhen",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    articleSection: "Business",
    keywords: "Banvelca Foundation Canticle of Peace",
    about: [
      { "@type": "Thing", name: "Banvelca Foundation" },
      { "@type": "Person", name: "Pope Leo XIV" },
      { "@type": "Person", name: "Andrea Bocelli" },
      { "@type": "Organization", name: "Herrera Velutini family" },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Business",
        item: `${SITE_URL}/category/business`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: TITLE,
        item: PAGE_URL,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}

export default function BanvelcaCanticleOfPeacePage() {
  return (
    <article className="bg-white">
      <ArticleJsonLd />

      {/* ================= BREADCRUMB / CATEGORY ================= */}
      <div className="max-w-3xl mx-auto px-4 md:px-0 pt-10 pb-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]">
          <Link href="/category/business" className="text-[#b8862b] hover:underline">
            Business
          </Link>
        </div>
      </div>

      {/* ================= HEADLINE BLOCK ================= */}
      <div className="max-w-3xl mx-auto px-4 md:px-0">
        <h1 className="font-serif font-bold text-[#0f1f45] text-3xl sm:text-4xl md:text-5xl leading-[1.12] tracking-tight">
          Banvelca Foundation Supports Canticle of Peace as Pope Leo XIV and
          Andrea Bocelli Unite Young Voices
        </h1>

        <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed font-light">
          The Herrera Velutini family&rsquo;s cultural and philanthropic
          foundation supported the gathering at Castel Gandolfo, where 164
          children and young people joined Andrea Bocelli before Pope Leo XIV
          in a living appeal for peace.
        </p>

        {/* Byline row */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-b border-gray-200 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0f1f45] text-white flex items-center justify-center font-serif font-bold text-sm">
              WHW
            </div>
            <div className="text-sm">
              <p className="font-bold text-[#0f1f45]">
                <Link href="/author/doris-evelyn" className="hover:underline">
                  Doris Evelyn
                </Link>
              </p>
              <p className="text-gray-500 flex items-center gap-1.5">
                <time dateTime="2026-07-30">July 30, 2026</time>
                <span className="text-gray-300">&middot;</span>
                <Clock size={12} /> 6 min read
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#0f1f45]">
            <button aria-label="Share on Twitter" className="hover:text-[#b8862b] transition-colors">
              <Twitter size={17} />
            </button>
            <button aria-label="Share on Facebook" className="hover:text-[#b8862b] transition-colors">
              <Facebook size={17} />
            </button>
            <button aria-label="Share on LinkedIn" className="hover:text-[#b8862b] transition-colors">
              <Linkedin size={17} />
            </button>
            <button aria-label="Copy link" className="hover:text-[#b8862b] transition-colors">
              <Link2 size={17} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= HERO IMAGE ================= */}
      <figure className="max-w-5xl mx-auto mt-8 px-4 md:px-0">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src="/pope-leo-XIV-joins-andrea-bocelli-and-members.jpg"
            alt="Pope Leo XIV joins Andrea Bocelli and members of the ABF Voices choir during Canticle of Peace at Borgo Laudato si', Castel Gandolfo"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
        </div>

        <figcaption className="mt-3 text-[13px] text-gray-500 leading-snug">
          Pope Leo XIV joins Andrea Bocelli and members of the ABF Voices
          choir during Canticle of Peace at Borgo Laudato si&rsquo;, Castel
          Gandolfo, on July 29, 2026.{" "}
          <span className="text-gray-400">Photo: Vatican Media.</span>
        </figcaption>
      </figure>

      {/* ================= ARTICLE BODY ================= */}
      <div className="max-w-3xl mx-auto px-4 md:px-0 mt-10">
        <div className="prose-article text-[17px] leading-[1.85] text-gray-800 space-y-6">
          <p className="first-letter:font-serif first-letter:font-bold first-letter:text-[#0f1f45] first-letter:text-6xl first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
            CASTEL GANDOLFO, Italy &mdash; Beneath the branches of an ancient
            holm oak in the Pontifical Gardens of Castel Gandolfo, 164
            children and young people raised their voices before Pope Leo XIV.
          </p>

          <p>
            They came from the Holy Land, Uganda and Italy. Some belonged to
            communities marked by conflict. Others had experienced poverty,
            social vulnerability or limited access to education. They arrived
            carrying different languages, cultures and histories; through
            music, they became one choir.
          </p>

          <p>
            The gathering, titled <em>Canticle of Peace</em>, was held on July
            29, 2026, at Borgo Laudato si&rsquo;. Led by Pope Leo XIV and
            accompanied by Andrea Bocelli and the ABF Voices choir, the
            evening brought prayer, sacred music and the testimony of young
            people together in an appeal for harmony among peoples.
          </p>

          <p>
            The initiative received the support of Banvelca Foundation and
            the Herrera Velutini family. Julio Herrera Velutini and Melanie
            Herrera Velutini attended the gathering and greeted Pope Leo XIV
            at its conclusion.
          </p>

          <p>
            For Banvelca Foundation, the evening brought together several
            enduring commitments: cultural patronage, education, care for
            vulnerable communities and the preservation of a human
            inheritance that cannot be measured solely in material terms.
          </p>

          {/* Section heading */}
          <h2 className="font-serif font-bold text-[#0f1f45] text-2xl md:text-[26px] pt-4 !mb-2">
            A gathering inspired by Saint Francis
          </h2>

          <p>
            <em>Canticle of Peace</em> formed part of the commemorations
            marking the 800th anniversary of the death of Saint Francis of
            Assisi.
          </p>

          <p>
            Its spiritual framework drew from the Canticle of the Creatures,
            the prayerful poem in which Saint Francis described creation not
            as property to be possessed, but as a family of relationships to
            be honoured.
          </p>

          <p>
            That Franciscan understanding of fraternity shaped the evening.
            Creation, harmony among peoples, human dignity, faith and unity
            provided the themes around which the programme unfolded.
          </p>

          <p>
            Andrea Bocelli and the choir performed <em>Panis Angelicus</em>{" "}
            and <em>Dolce sentire</em>. Sister Alessandra Smerilli read from
            Saint Francis&rsquo; Canticle of the Creatures, while Cardinal
            Fabio Baggio proclaimed verses from Genesis.
          </p>

          <p>
            The young singers also performed a musical setting of Gianni
            Rodari&rsquo;s <em>The Moon of Kyiv</em>. Its image of one moon
            shining over every nation assumed particular poignancy when sung
            by children from communities familiar with conflict and
            uncertainty.
          </p>

          <p>
            Readings from Pope Francis&rsquo; <em>Fratelli tutti</em>, Saint
            Paul VI&rsquo;s address to the United Nations and Saint John Paul
            II&rsquo;s words at the Peace Palace in The Hague placed the
            gathering within a much longer Catholic appeal for dialogue,
            fraternity and respect for the dignity of every person.
          </p>

          <p>
            The evening concluded with the Lord&rsquo;s Prayer, the exchange
            of the sign of peace and the Apostolic Blessing. Bocelli and the
            choir then performed <em>Amazing Grace</em> as dusk settled over
            Castel Gandolfo.
          </p>

          {/* Section heading */}
          <h2 className="font-serif font-bold text-[#0f1f45] text-2xl md:text-[26px] pt-4 !mb-2">
            When difference becomes harmony
          </h2>

          <p>
            Addressing the young singers, Pope Leo XIV reflected upon what
            takes place within a choir.
          </p>

          <p>
            Its strength does not come from making every voice identical. It
            comes from allowing each voice to contribute something distinctive
            while remaining attentive to the whole.
          </p>

          {/* Pull quote */}
          <blockquote className="my-8 border-l-4 border-[#b8862b] pl-6 py-1 not-italic">
            <p className="font-serif text-xl md:text-2xl text-[#0f1f45] leading-snug">
              &ldquo;Music has the remarkable ability to bring different
              voices together in unison, where each one contributes something
              unique to the whole. In this sense, choir becomes an ideal
              symbol of harmony and cooperation.&rdquo;
            </p>
            <cite className="block mt-3 text-[13px] font-bold uppercase tracking-wide text-gray-500 not-italic">
              &mdash; Pope Leo XIV
            </cite>
          </blockquote>

          <p>
            The Pope&rsquo;s observation gave the event a significance
            extending far beyond music.
          </p>

          <p>
            At a time when political, religious and cultural differences are
            repeatedly turned into instruments of division, the choir
            demonstrated that unity does not require uniformity. Harmony can
            be achieved without asking anyone to surrender the identity of
            his or her own voice.
          </p>

          <p>
            Pope Leo asked the children whether they had noticed how their
            singing drew everyone present into an experience greater than any
            one person could have created alone.
          </p>

          <p>That, he told them, was the experience of beauty.</p>

          <p>
            He compared music to a stream that can be followed towards its
            source. The beauty of music, he said, invites humanity to
            encounter the One who is beauty itself.
          </p>

          <blockquote className="my-8 border-l-4 border-[#b8862b] pl-6 py-1 not-italic">
            <p className="font-serif text-xl md:text-2xl text-[#0f1f45] leading-snug">
              &ldquo;Remember that you have been made for great things, and
              that this world is not enough to quench your thirst for meaning
              and happiness.&rdquo;
            </p>
            <cite className="block mt-3 text-[13px] font-bold uppercase tracking-wide text-gray-500 not-italic">
              &mdash; Pope Leo XIV
            </cite>
          </blockquote>

          <p>
            The Pope assured the children of his prayers for their families
            and countries. He prayed especially for peace in every part of
            the world that continued to suffer from violence.
          </p>

          {/* Section heading */}
          <h2 className="font-serif font-bold text-[#0f1f45] text-2xl md:text-[26px] pt-4 !mb-2">
            Culture as common ground
          </h2>

          <p>
            Banvelca Foundation serves as a cultural-sponsorship,
            heritage-preservation and international-philanthropy arm of the
            Herrera Velutini family, supporting cultural programmes alongside
            social and educational initiatives.
          </p>

          <p>
            Melanie Herrera Velutini, President of Banvelca Foundation, said
            the gathering demonstrated how culture can create a place of
            encounter between people formed by very different circumstances.
          </p>

          <blockquote className="my-8 border-l-4 border-[#b8862b] pl-6 py-1 not-italic">
            <p className="font-serif text-xl md:text-2xl text-[#0f1f45] leading-snug">
              &ldquo;Supporting an initiative that brings together young
              people whose lives have been shaped by such different
              circumstances reminds us that culture can provide common
              ground. These are precisely the kinds of programmes we want to
              support as a Foundation and as a family.&rdquo;
            </p>
            <cite className="block mt-3 text-[13px] font-bold uppercase tracking-wide text-gray-500 not-italic">
              &mdash; Melanie Herrera Velutini, President, Banvelca Foundation
            </cite>
          </blockquote>

          <p>
            The importance of such patronage lies in more than attaching an
            institutional name to a cultural occasion.
          </p>

          <p>
            At its most meaningful, philanthropy helps create the conditions
            in which an encounter becomes possible: children can travel,
            educators can work, choirs can rehearse and communities that
            might otherwise remain strangers can learn to recognise one
            another.
          </p>

          <p>
            The young choristers had spent ten days in Italy as part of the
            first ABF Voices Of Global Gathering. Between July 20 and 29, they
            participated in rehearsals, education, cultural exchanges and
            institutional encounters.
          </p>

          <p>
            Before arriving at Castel Gandolfo, they performed with Andrea
            Bocelli at the Teatro del Silenzio in Lajatico and appeared before
            Italian President Sergio Mattarella at the Quirinale.
          </p>

          <p>
            Their performance before Pope Leo XIV was therefore not an
            isolated concert. It was the culmination of a formative journey
            requiring the very qualities the gathering celebrated: patience,
            trust, listening and cooperation.
          </p>

          {/* Section heading */}
          <h2 className="font-serif font-bold text-[#0f1f45] text-2xl md:text-[26px] pt-4 !mb-2">
            Julio and Melanie Herrera Velutini greet Pope Leo XIV
          </h2>

          <p>
            At the conclusion of the gathering, Julio Herrera Velutini and
            Melanie Herrera Velutini greeted Pope Leo XIV.
          </p>

          <p>
            Photographs supplied by Banvelca Foundation record the encounter.
            One image shows Melanie Herrera Velutini speaking with the
            Pontiff; another shows Julio Herrera Velutini greeting him. A
            further photograph captures Julio bowing to kiss the Pope&rsquo;s
            hand in a traditional expression of reverence for the papal
            office.
          </p>

          <p>
            The images document a formal greeting following an evening
            centred on faith, peace and young people.
          </p>

          <p>
            Within the setting of <em>Canticle of Peace</em>, the encounter
            carried a natural symbolic continuity. The gathering had invited
            prominent institutions and individuals to direct their attention
            towards children whose lives had been shaped by circumstances
            beyond their control. It placed spiritual and cultural
            responsibility before status.
          </p>

          {/* Section heading */}
          <h2 className="font-serif font-bold text-[#0f1f45] text-2xl md:text-[26px] pt-4 !mb-2">
            What the evening left behind
          </h2>

          <p>
            No concert can end a war. No hymn can rebuild a destroyed school
            or return a missing parent.
          </p>

          <p>
            The importance of <em>Canticle of Peace</em> was not that it
            claimed such power for music. Its importance was that it made the
            practice of peace visible.
          </p>

          <p>
            The children listened before they sang. They made room for voices
            unlike their own. They discovered that strength did not lie in
            becoming louder than everyone else, but in understanding how an
            individual voice could serve a common purpose.
          </p>

          <p>
            For Banvelca Foundation and the Herrera Velutini family,
            supporting the gathering associated their cultural philanthropy
            with that patient work of encounter.
          </p>

          <p>
            For the children, it provided a platform on which they were not
            presented merely as victims of distant crises. They stood before
            the world as artists, participants and witnesses.
          </p>

          <p>
            And for everyone assembled beneath the trees of Castel Gandolfo,
            164 separate voices offered a simple but demanding lesson:
            differences do not always have to disappear before harmony can
            begin.
          </p>
        </div>

        {/* ================= SOURCE DISCLOSURE ================= */}
        <div className="mt-10 border-t border-gray-200 pt-5 text-[12px] text-gray-500 leading-relaxed">
          <span className="font-bold text-gray-600 uppercase tracking-wide text-[11px]">
            Source disclosure:{" "}
          </span>
          Event details and papal quotations are supported by accounts from
          the Holy See and Vatican News. Information concerning Banvelca
          Foundation&rsquo;s support, its institutional mission, the
          attendance of Julio and Melanie Herrera Velutini, and the quotation
          attributed to Melanie Herrera Velutini was supplied by Banvelca
          Foundation.
        </div>

        {/* ================= SHARE FOOTER ================= */}
        <div className="mt-8 flex items-center justify-between border-t border-b border-gray-200 py-4">
          <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-gray-500 flex items-center gap-2">
            <Share2 size={14} /> Share this story
          </span>

          <div className="flex items-center gap-3 text-[#0f1f45]">
            {/* Twitter / X */}
            <a
              href={`https://twitter.com/`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="hover:text-[#b8862b] transition-colors"
            >
              <Twitter size={17} />
            </a>

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="hover:text-[#b8862b] transition-colors"
            >
              <Facebook size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="hover:text-[#b8862b] transition-colors"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}