import Link from "next/link";
import Image from "next/image";

export default function NewsLatest({ news = [] }) {
  return (
    <aside className="">
      <div className="border border-gray-300 sticky top-16 space-y-5 px-6 pt-4">
        <h3 className="text-lg font-bold uppercase text-[#7351a8]">
          Latest News
        </h3>

        <div className="space-y-4">
          {news.map((item) => (
            <Link
              key={item.slug}
              title={`View ${item.title}`}
              href={`/category/${item.category}/${item.slug}`}
              className="flex gap-3 border-b border-gray-200 pb-3 last:border-none group"
              >
              {/* TEXT */}
              <div className="flex-1">
                <h4 className="text-sm font-semibold leading-snug group-hover:text-[#7351a8]">
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

              {/* IMAGE */}
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
      </div>
    </aside>
  );
}
