"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import data from "@/data/data.json";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  const categories = [
    ...new Set(
      data.articles
        .filter((article) => article.published && article.category)
        .map((article) => article.category.toLowerCase())
    ),
  ].sort();

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
                Icon: Facebook,
                link: "https://facebook.com",
                title: "Facebook",
              },
              {
                Icon: Twitter,
                link: "https://twitter.com",
                title: "Twitter",
              },
              {
                Icon: Instagram,
                link: "https://instagram.com",
                title: "Instagram",
              },
              {
                Icon: Youtube,
                link: "https://youtube.com",
                title: "YouTube",
              },
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
            {/* Categories */}
            <div>
              <div className="mb-2 text-md font-semibold tracking-wide underline">
                Categories
              </div>
              <ul className="uppercase space-y-1 leading-tight">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/category/${cat.toLowerCase()}`}
                      title={cat}
                      className="text-[11px] text-gray-300 hover:text-white"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <div className="mb-2 text-md font-semibold tracking-wide underline">
                Quick Links
              </div>
              <ul className="uppercase space-y-1 leading-tight">
                {quickLinks.map(({ label, href }) => (
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
