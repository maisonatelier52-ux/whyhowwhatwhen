import Image from "next/image";
import { Twitter, MessageCircle, Rabbit, BookOpen } from "lucide-react";

export default function AuthorCard({ author }) {
  if (!author) return null;

  return (
    <div className="border border-gray-300 p-5 flex flex-col items-center text-center space-y-3">
      
      {/* AUTHOR IMAGE */}
      {author.photo && (
        <div className="w-20 h-20 relative">
          <Image
            src={author.photo}
            alt={author.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
      )}

      {/* NAME */}
      <h3 className="font-semibold text-lg">{author.name}</h3>

      {/* BIO */}
      <p className="text-sm text-gray-600">
        {author.bio || "Journalist & contributor"}
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex gap-4 pt-2">
        <a
          href={author.twitter || "#"}
          target="_blank"
          className="hover:text-[#7351a8] transition"
          aria-label="Twitter"
        >
          <Twitter size={18} />
        </a>

        <a
          href={author.quora || "#"}
          target="_blank"
          className="hover:text-[#7351a8] transition"
          aria-label="Quora"
        >
          <MessageCircle size={18} />
        </a>

        <a
          href={author.reddit || "#"}
          target="_blank"
          className="hover:text-[#7351a8] transition"
          aria-label="Reddit"
        >
          <Rabbit size={18} />
        </a>

        <a
          href={author.medium || "#"}
          target="_blank"
          className="hover:text-[#7351a8] transition"
          aria-label="Medium"
        >
          <BookOpen size={18} />
        </a>
      </div>
    </div>
  );
}
