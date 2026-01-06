"use client";
import useSearchBooks from "@/app/hooks/useSearchBooks";
import "react-loading-skeleton/dist/skeleton.css";

import BookCardSkeleton from "../BookCardSkeleton/BookCardSkeleton";
import BookList from "../BookList/BookList";
import SearchBar from "../SearchBar/SearchBar";

export default function SearchPage() {
  const { loading, results } = useSearchBooks();

  return (
    <div>
      <div className="flex justify-center m-3 p-3">
        <SearchBar />
      </div>
      {loading ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7.5 my-16 mx-auto px-20 w-full">
          {Array.from({ length: 40 }).map((_, i) => (
            <BookCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <BookList books={results} />
      )}
    </div>
  );
}
