"use client";
import useSearchBooks from "@/app/hooks/useSearchBooks";
import "react-loading-skeleton/dist/skeleton.css";

import BookCardSkeleton from "../BookCardSkeleton/BookCardSkeleton";
import BookList from "../BookList/BookList";

export default function SearchPage() {
  const { loading, results, query } = useSearchBooks();
  console.log(results);

  return (
    <div>
      {loading ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7.5 my-16 mx-auto px-20 w-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <BookCardSkeleton key={i} />
          ))}
        </div>
      ) : query && results.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-3 text-center px-4">
          <p className="text-lg font-semibold text-foreground">No results found</p>
          <p className="text-sm text-gray-400">Try a different title, author, or keyword</p>
        </div>
      ) : (
        <div className="my-16 mx-auto px-20">
          <BookList books={results} />
        </div>
      )}
    </div>
  );
}
