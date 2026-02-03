"use client";

import { Facebook, Twitter, Youtube } from "lucide-react";

export default function NewsUtilities() {
  return (
    <section className="px-5 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
        {/* LEFT — PODCAST */}
        <div className="space-y-4 p-5 h-full bg-[#f3f3f3]">
          <h3 className="text-lg font-bold uppercase text-[#7351a8]">
            News Podcast
          </h3>

          <h4 className="font-semibold text-base">
            Today’s Top Stories Explained
          </h4>

          <audio
            controls
            className="w-full"
            preload="none"
          >
            <source src="/podcast.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* MIDDLE — NEWSLETTER */}
        <div className="space-y-4 p-5 bg-[#f3f3f3]">
          <h3 className="text-lg font-bold uppercase text-[#7351a8]">
            Subscribe to our newsletter
          </h3>

          <p className="text-sm text-gray-600">
            To be updated with all the latest news, offers and special announcements.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#7351a8]"
            />
            <button
              type="submit"
              className="bg-[#7351a8] text-white px-4 py-2 text-sm font-semibold hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* RIGHT — SOCIAL */}
        <div className="space-y-4 px-7 pt-5 h-full bg-[#f3f3f3]">
            <h3 className="text-lg font-bold uppercase text-[#7351a8]">
                Stay Connected
            </h3>

            <div className="flex justify-between">
                {/* Facebook */}
                <a
                href="#"
                aria-label="Facebook"
                className="group"
                >
                    <div className="flex items-center justify-center w-24 h-24 bg-[#1877F2] text-white transition-all duration-300
                                    shadow-md group-hover:shadow-[0_0_12px_rgba(24,119,242,0.8)] hover:bg-black">
                        <Facebook size={24} />
                    </div>
                </a>

                {/* Twitter */}
                <a
                href="#"
                aria-label="Twitter"
                className="group"
                >
                    <div className="flex items-center justify-center w-24 h-24 bg-[#1DA1F2] text-white transition-all duration-300
                                    shadow-md group-hover:shadow-[0_0_12px_rgba(29,161,242,0.8)] hover:bg-black">
                        <Twitter size={24} />
                    </div>
                </a>

                {/* YouTube */}
                <a
                href="#"
                aria-label="YouTube"
                className="group"
                >
                    <div className="flex items-center justify-center w-24 h-24 bg-[#FF0000] text-white transition-all duration-300
                                    shadow-md group-hover:shadow-[0_0_12px_rgba(255,0,0,0.8)] hover:bg-black">
                        <Youtube size={24} />
                    </div>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
