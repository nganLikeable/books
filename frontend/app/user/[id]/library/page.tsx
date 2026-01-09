"use client";

import Spinner from "@/app/components/Spinner/Spinner";
import useFetchUserBooks from "@/app/hooks/useFetchUserBooks";
import Link from "next/link";
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
    (book: any) => book.status === "WANT_TO_READ"
  );
  const reading = books.filter(
    (book: any) => book.status === "CURRENTLY_READING"
  );
  const read = books.filter((book: any) => book.status === "READ");

  console.log("WANT: ", wantToRead, "READING:", reading, "READ:", read);

  // create dictionary for looping
  const sections = [
    { title: "Want to read", data: wantToRead },
    { title: "Currently reading", data: reading },
    { title: "Read", data: read },
  ];

  return (
    <div>
      {sections.map((s, sIndex) => (
        <div key={`${s.title}-${Date.now()}`}>
          <div>
            <h2>{s.title}</h2>
            <span>Count: {s.data.length}</span>
          </div>
          {s.data.length === 0 ? (
            <p>No books</p>
          ) : (
            <div>
              {s.data.map((b: any) => {
                const book = b.book ?? b; // support either nested book or flat
                const authors = book?.authors || [];
                console.log(authors);
                return (
                  <div key={book.id}>
                    <Link href={`/book/${book.id}`}>{book.title}</Link>
                    {authors.map((a: any, aIndex: number) => {
                      return (
                        <div key={`${a.id}`}>
                          <Link href={`/author/${a.id}`}>{a.name}</Link>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
