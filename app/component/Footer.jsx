"use client";

import Link from "next/link";
import {
  Twitter,
  LucideRabbit,
  MSquare,
  MessageSquareQuote,
} from "lucide-react";

const newsRoom = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact Us", href: "/contact" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Corrections Policy", href: "/corrections-policy" },
  { label: "Source Methodology", href: "/source-methodology" },
];

const standards = [
  { label: "Ownership & Funding", href: "/ownership-and-funding" },
  { label: "Advertising Policy", href: "/advertising-policy" },
  { label: "Right of Reply", href: "/right-of-reply" },
  { label: "Legal", href: "/legal" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {

  return (
    <footer className="relative bg-[#49297e] text-white border-t border-gray-800 overflow-hidden">
      {/* Top section */}
      <div className="container mx-auto px-7 py-14 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* LEFT SECTION */}
        <div className="space-y-4 text-left lg:col-span-2">
          <Link href="/" title="Home" className="block">
            <span className="text-4xl tracking-wide">
              WhyHowWhatWhen
            </span>
          </Link>

          <p className="text-sm max-w-md text-gray-300">
            WhyHowWhatWhen brings you the latest news from around the world.
            Stay updated with real-time headlines and exclusive insights.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-5 pt-2">
            {[
              {
                Icon: LucideRabbit,
                link: "https://www.reddit.com/user/why_how_what_when/",
                title: "Reddit",
              },
              {
                Icon: Twitter,
                link: "https://x.com/why_Howwhatwhen",
                title: "Twitter",
              },
              {
                Icon: MSquare,
                link: "https://medium.com/@whyhowwhatwhen",
                title: "Medium",
              },
              {
                Icon: MessageSquareQuote,
                link: "https://www.quora.com/profile/WhyHowWhatWhen",
                title: "Quora",
              }
            ].map(({ Icon, link, title }) => (
              <Link
                key={link}
                href={link}
                title={title}
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition-transform duration-200 hover:scale-110"
              >
                <Icon size={22} />
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-8 md:gap-14 text-left">
            {/* News Room */}
            <div>
              <div className="mb-2 text-md font-semibold tracking-wide underline">
                News Room
              </div>
              <ul className="uppercase space-y-1 leading-tight">
                {newsRoom.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      title={item.label}
                      className="text-[11px] text-gray-300 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standards */}
            <div>
              <div className="mb-2 text-md font-semibold tracking-wide underline">
                Standards
              </div>
              <ul className="uppercase space-y-1 leading-tight">
                {standards.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      title={label}
                      className="text-[11px] text-gray-300 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <span className="block h-px w-full bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Bottom */}
      <div className="py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} WhyHowWhatWhen. All rights reserved.
      </div>
    </footer>
  );
}
