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
    <footer className="relative bg-[#0f1f45] text-white overflow-hidden">
      {/* Top accent rule, echoes the header */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#0f1f45] via-[#b8862b] to-[#0f1f45]" />

      {/* Top section */}
      <div className="container mx-auto px-7 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* LEFT SECTION */}
        <div className="space-y-5 text-left lg:col-span-2">
          <Link href="/" title="Home" className="block">
            <span className="font-serif font-bold text-4xl tracking-tight text-white">
              WhyHowWhatWhen
            </span>
          </Link>

          <p className="text-sm max-w-md text-white/60 leading-relaxed">
            WhyHowWhatWhen brings you the latest news from around the world.
            Stay updated with real-time headlines and exclusive insights.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-5 pt-1">
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
              },
            ].map(({ Icon, link, title }) => (
              <Link
                key={link}
                href={link}
                title={title}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/60 hover:text-[#0f1f45] hover:bg-[#b8862b] hover:border-[#b8862b] transition-all duration-200"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-8 md:gap-14 text-left">
            {/* News Room */}
            <div>
              <div className="mb-4 text-[12px] font-bold tracking-[0.2em] uppercase text-[#b8862b] after:block after:mt-2 after:h-[2px] after:w-8 after:bg-[#b8862b]">
                News Room
              </div>
              <ul className="space-y-2.5 leading-tight">
                {newsRoom.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      title={item.label}
                      className="text-[12px] tracking-wide uppercase text-white/55 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standards */}
            <div>
              <div className="mb-4 text-[12px] font-bold tracking-[0.2em] uppercase text-[#b8862b] after:block after:mt-2 after:h-[2px] after:w-8 after:bg-[#b8862b]">
                Standards
              </div>
              <ul className="space-y-2.5 leading-tight">
                {standards.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      title={label}
                      className="text-[12px] tracking-wide uppercase text-white/55 hover:text-white transition-colors"
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
      <span className="block h-px w-full bg-white/10" />

      {/* Bottom */}
      <div className="py-5 flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 container mx-auto px-7 text-center text-[12px] tracking-wide text-white/50">
        <span>
          © {new Date().getFullYear()} WhyHowWhatWhen. All rights reserved.
        </span>
        <span className="uppercase tracking-[0.15em] text-white/30">
          Independent Journalism, Every Day
        </span>
      </div>
    </footer>
  );
}