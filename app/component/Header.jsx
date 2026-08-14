"use client";

import { LucideMenu, X, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [today, setToday] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const date = new Date();
    setToday(
      date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the newsletter modal is open, and allow Esc to close it
  useEffect(() => {
    if (isNewsletterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsNewsletterOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isNewsletterOpen]);

  const categories = [
    { name: "HOME", path: "/" },
    { name: "BUSINESS", path: "/category/business" },
    { name: "POLITICS", path: "/category/politics" },
    { name: "INVESTIGATION", path: "/category/investigation" },
    { name: "SPORTS", path: "/category/sports" },
    { name: "TRAVEL", path: "/category/travel" },
    { name: "CLIMATE", path: "/category/climate" },
    { name: "WORLD", path: "/category/world" },
  ];

  return (
    <header
      className={`w-full bg-white transition-all duration-300 ${
        scrolled ? "fixed top-0 z-50 shadow-[0_2px_12px_rgba(15,23,60,0.08)]" : "relative"
      }`}
    >
      {/* ================= UTILITY BAR ================= */}
      {!scrolled && (
        <div className="hidden md:block bg-[#0f1f45] text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-7 flex items-center justify-between h-9 text-[11px] tracking-wide">
            <span className="text-white/70 font-medium">{today}</span>
            <div className="flex items-center gap-6 font-semibold uppercase">
              <button
                type="button"
                onClick={() => setIsNewsletterOpen(true)}
                className="bg-[#b8862b] hover:bg-[#a3762352] px-3 py-1 rounded-sm text-white transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="px-4 md:px-7 max-w-7xl mx-auto">
        {/* ================= TOP HEADER ROW ================= */}
        <div
          className={`flex items-center transition-all duration-300 ${
            scrolled ? "py-3 justify-between" : "py-6 justify-center"
          } relative`}
        >
          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="absolute left-0 md:hidden z-50 text-[#0f1f45]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <LucideMenu size={24} />}
          </button>

          {/* Logo / Title */}
          <div
            className={`flex-1 px-11 md:px-0 ${
              scrolled ? "text-left" : "text-center"
            } md:text-center`}
          >
            <Link
              href="/"
              title="Go to homepage"
              className={`font-serif font-bold tracking-tight text-[#0f1f45] inline-block ${
                scrolled ? "text-xl md:text-2xl" : "text-3xl md:text-7xl"
              }`}
            >
              WhyHowWhatWhen
            </Link>
            {!scrolled && (
              <p className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.25em] text-gray-500 font-semibold">
                Independent Journalism, Every Day
              </p>
            )}
          </div>

          {/* Right-side controls (scrolled) */}
          {scrolled && (
            <div className="hidden md:flex items-center gap-5">
              <button
                type="button"
                className="flex items-center justify-center text-[#0f1f45] hover:text-[#b8862b] transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                type="button"
                onClick={() => setIsNewsletterOpen(true)}
                className="bg-[#b8862b] hover:opacity-90 px-3 py-1.5 rounded-sm text-white text-xs font-semibold uppercase tracking-wide transition-opacity"
              >
                Subscribe
              </button>
            </div>
          )}
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav
          className={`hidden md:flex justify-center gap-9 border-t-2 border-[#0f1f45] text-[13px] font-bold tracking-[0.12em] uppercase ${
            scrolled ? "py-2.5" : "py-3.5"
          }`}
        >
          {categories.map((cat) => (
            <Link
              key={cat.name}
              title={`View ${cat.name} category`}
              href={cat.path}
              className={`relative py-1 text-gray-700 hover:text-[#0f1f45] transition-colors after:absolute after:left-0 after:-bottom-[1px] after:h-[2px] after:bg-[#b8862b] after:transition-all after:duration-300 ${
                pathname === cat.path
                  ? "text-[#0f1f45] after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        {/* ================= MOBILE DROPDOWN MENU ================= */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden border-t border-gray-200 ${
            isMenuOpen ? "max-h-screen py-3" : "hidden max-h-0 py-0"
          }`}
        >
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              title={`View ${cat.name} category`}
              href={cat.path}
              className={`block font-bold tracking-wide text-sm uppercase py-3 px-1 ${
                i !== categories.length - 1 ? "border-b border-gray-100" : ""
              } ${pathname === cat.path ? "text-[#0f1f45]" : "text-gray-700"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {cat.name}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(false);
              setIsNewsletterOpen(true);
            }}
            className="mt-3 w-full bg-[#b8862b] text-white text-sm font-semibold uppercase tracking-wide py-2.5 rounded-sm"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Hairline accent rule at the very bottom of the header */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#0f1f45] via-[#b8862b] to-[#0f1f45]" />

      {/* ================= NEWSLETTER MODAL ================= */}
      {isNewsletterOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsNewsletterOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsNewsletterOpen(false)}
              aria-label="Close newsletter signup"
              className="absolute top-3 right-3 text-gray-500 hover:text-[#0f1f45] transition-colors"
            >
              <X size={20} />
            </button>

            {/* MIDDLE — NEWSLETTER */}
            <div className="space-y-4 p-5 bg-[#f3f3f3]">
              <h3 className="text-lg font-bold uppercase text-[#0f1f45]">
                Subscribe to our newsletter
              </h3>

              <p className="text-sm text-gray-600">
                To be updated with all the latest news, offers and special
                announcements.
              </p>

              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsNewsletterOpen(false);
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0f1f45]"
                />
                <button
                  type="submit"
                  className="bg-[#0f1f45] text-white px-4 py-2 text-sm font-semibold hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}