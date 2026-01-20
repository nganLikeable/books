import { Author, Book } from "@/app/types/database";
import Link from "next/link";
export default function BookCard({ book }: { book: Book }) {
  const authors = book.authors || [];

  return (
    <div className="group flex gap-2 rounded-xl border border-line-bg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="w-24 md:w-32 shrink-0">
        <Link href={`/book/${book.id}`}>
          <div className="relative aspect-2/3 overflow-hidden rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300">
            {book.cover && (
              <img
                src={book.cover}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              ></img>
            )}
          </div>
        </Link>
      </div>
      {/* right col */}
      <div className="flex flex-col flex-1 py-1">
        <div className="flex flex-col gap-1">
          <Link
            className="text-lg md:text-2sm font-bold text-foreground"
            href={`/book/${book.id}`}
          >
            {book.title}{" "}
          </Link>

          <div className="flex flex-wrap gap-x-1.5">
            {authors.length > 0 && (
              <>
                {" "}
                <span className="text-xs uppercase tracking-wider opacity-50">
                  by
                </span>
                {authors.map((author: Author, index: number) => (
                  <span key={`${author.id}-${book.id}-${index}`}>
                    <Link
                      className="font-semibold opacity-90 hover:text-orange-600 hover:underline decoration-orange-300 underline-offset-4"
                      href={`/author/${author.id}`}
                    >
                      {author.name}
                    </Link>
                  </span>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
