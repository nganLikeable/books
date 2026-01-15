import { LibraryUserBook } from "@/app/types/database";
import Link from "next/link";

export default function LibraryBookCard({
  userBook,
}: {
  userBook: LibraryUserBook;
}) {
  if (!userBook) return null;

  const book = userBook.book ?? userBook.book; // support either nested book or flat
  const authors = (book as any)?.authors || [];

  return (
    <div key={book.id} className="group flex flex-col gap-3">
      <div className="relative aspect-2/3 w-full overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-orange-500/10">
        <img
          src={book?.cover || "/no_cover.jpg"}
          alt="Book cover"
          className="mt-3 w-full object-fill  aspect-2/3  rounded"
          loading="lazy"
        ></img>
      </div>
      <div className="flex flex-col">
        <Link
          href={`/book/${book.id}`}
          className="font-bold  cursor-pointer hover:underline  hover:text-orange-600 transition-colors line-clamp-2"
        >
          {book.title}
        </Link>
        <div className="mt-1 text-xs text-gray-400 font-medium">
          {authors.map((a: any, aIndex: number) => {
            return (
              <div key={`${a.id}`}>
                <Link
                  href={`/author/${a.id}`}
                  className="hover:font-bold hover:underline transition-colors "
                >
                  {a.name}
                </Link>
              </div>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
}
