import Link from "next/link";
import Image from "next/image";

export default function MoreNews({ news }) {
  return (
    <div className="border border-gray-300 p-4 space-y-4">
      <h3 className="text-sm font-bold uppercase text-[#7351a8]">
        More News
      </h3>

      {news.map((item) => (
        <Link
          key={item.slug}
          href={`/category/${item.category}/${item.slug}`}
          className="flex justify-between items-start gap-3 border-b border-gray-200 pb-3 last:border-none group"
        >
          {/* LEFT – TITLE + DATE */}
          <div className="flex-1">
            <h4 className="text-sm font-medium leading-snug group-hover:text-[#7351a8]">
              {item.title}
            </h4>

            <p className="text-xs text-gray-500 mt-1">
              {new Date(item.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          {item.image && (
            <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
