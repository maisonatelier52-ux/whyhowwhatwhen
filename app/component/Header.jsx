"use client";

import { LucideMenu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [today, setToday] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const categories = [
    { name: "HOME", path: "/" },
    { name: "BUSINESS", path: "/category/business" },
    { name: "POLITICS", path: "/category/politics" },
    { name: "INVESTIGATION", path: "/category/investigation" },
    { name: "SPORTS", path: "/category/sports" },
    { name: "TRAVEL", path: "/category/travel" },
    { name: "CLIMATE", path: "/category/climate" },
  ];

  return (
    <header
      className={`w-full border-b border-gray-300 bg-white transition-all duration-300 ${
        scrolled ? "fixed top-0 z-50 shadow-md" : "relative"
      }`}
    >
      <div className="px-4 md:px-7 max-w-7xl mx-auto">
        {/* ================= TOP HEADER ROW ================= */}
        <div
          className={`flex items-center transition-all duration-300 ${
            scrolled ? "py-3 justify-between" : "py-4 justify-center"
          } relative`}
        >
          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="left-4 md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <LucideMenu size={24} />}
          </button>

          {/* Logo / Title */}
          <div
            className={`flex-1 ${
              scrolled ? "text-left" : "text-center"
            } md:text-center`}
          >
            <Link
              href="/"
              className={`font-semibold tracking-wide ${
                scrolled
                  ? "text-lg md:text-xl pt-0"
                  : "text-3xl md:text-6xl pt-2"
              }`}
            >
              WhyHowWhatWhen
            </Link>
            {!scrolled && (
              <p className="text-xs md:text-sm text-gray-600">{today}</p>
            )}
          </div>

          {/* Desktop Categories (Scrolled) */}
          {scrolled && (
            <nav className="hidden md:flex gap-6 text-sm font-bold tracking-wide">
              {categories.map((cat) => (
                <a
                  key={cat.name}
                  href={cat.path}
                  className={`hover:text-[#7351a8] ${
                    pathname === cat.path ? "text-[#7351a8]" : ""
                  }`}
                >
                  {cat.name}
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* ================= DESKTOP NAVIGATION (Initial) ================= */}
        {!scrolled && (
          <nav className="hidden md:flex justify-center gap-10 border-t border-gray-300 py-3 text-md font-bold tracking-wide">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href={cat.path}
                className={`hover:text-[#7351a8] ${
                  pathname === cat.path ? "text-[#7351a8]" : ""
                }`}
              >
                {cat.name}
              </a>
            ))}
          </nav>
        )}

        {/* ================= MOBILE DROPDOWN MENU ================= */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden border-t border-gray-200 ${
            isMenuOpen ? "max-h-screen py-4" : "hidden max-h-0 py-0"
          }`}
        >
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.path}
              className={`block font-bold tracking-wide py-2 px-4 ${
                pathname === cat.path ? "text-[#7351a8]" : "text-gray-800"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
