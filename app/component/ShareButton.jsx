"use client";

import { Share2, Check } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center border border-gray-300 pr-3 text-[#7351a8] hover:text-[#5d3f8c] transition"
      aria-label="Share this article"
    >
      {copied ? (
        <div className="p-2 flex">
          <Check size={16} />
          <span className="text-xs">Copied</span>
        </div>
      ) : (
        <div className="p-2 flex gap-3">
          <Share2 size={16} />
          <span className="text-xs">Share</span>
        </div>
      )}
    </button>
  );
}
