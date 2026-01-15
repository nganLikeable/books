"use client";

import LibraryView from "@/app/components/LibraryView/LibraryView";
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

  return <LibraryView books={books} />;
}
