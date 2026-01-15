"use client";

import LibraryBookCard from "@/app/components/LibraryBookCard/LibraryBookCard";
import Spinner from "@/app/components/Spinner/Spinner";
import useFetchUserBooks from "@/app/hooks/useFetchUserBooks";
import { LibraryUserBook } from "@/app/types/database";
export default function Library() {
  const { books, loading } = useFetchUserBooks();

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <Spinner />
      </div>
    );

  console.log(books);

  // fetch books of each status
  const wantToRead = books.filter(
    (book: LibraryUserBook) => book.status === "WANT_TO_READ"
  );
  const reading = books.filter(
    (book: LibraryUserBook) => book.status === "CURRENTLY_READING"
  );
  const read = books.filter((book: LibraryUserBook) => book.status === "READ");

  console.log("WANT: ", wantToRead, "READING:", reading, "READ:", read);

  // create dictionary for looping
  const sections = [
    { title: "Want to read", data: wantToRead },
    { title: "Currently reading", data: reading },
    { title: "Read", data: read },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {sections.map((s, sIndex) => (
        <div key={`${s.title}`} className="mb-12 last:mb-2">
          <div className="flex items-center justify-between mb-6 border-b border-gray-300 pb-2">
            <h2 className="text-2xl font-bold text-orange-500  tracking-tight">
              {s.title}
            </h2>
            <span className="text-sm font-medium px-3 py-1  ">
              {s.data.length} book(s)
            </span>
          </div>
          {s.data.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 bg-white/5 rounded-2xl border border-dashed border-white/20">
              <p className="text-gray-500 italic">This shelf is empty</p>{" "}
            </div>
          ) : (
            <div className="grid grid-cols-3  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {s.data.map((b: any) => {
                const book = b.book ?? b; // support either nested book or flat
                const authors = book?.authors || [];
                console.log(authors);

                return <LibraryBookCard key={b.bookId} {...b} />;
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
