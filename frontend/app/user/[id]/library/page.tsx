"use client";

import Spinner from "@/app/components/Spinner/Spinner";
import useFetchUserBooks from "@/app/hooks/useFetchUserBooks";
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
}
