"use client";

export default function CategoryTag({ text }) {
  return (
    <span
      className="absolute bottom-0 left-0 bg-[#7351a8] text-white text-[8px] font-semibold tracking-wide px-1 py-0.5 cursor-default"
    >
      {text}
    </span>
  );
}
