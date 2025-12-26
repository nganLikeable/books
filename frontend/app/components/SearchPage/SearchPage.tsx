"use client";
import useSearchBooks from "@/app/hooks/useSearchBooks";
import "react-loading-skeleton/dist/skeleton.css";

import BookCardSkeleton from "../BookCardSkeleton/BookCardSkeleton";
import BookList from "../BookList/BookList";
import SearchBar from "../SearchBar/SearchBar";

import styles from "../BookList/BookList.module.css";

export default function SearchPage() {
  const { loading, results } = useSearchBooks();

  return (
    <div>
      <SearchBar />
      {loading ? (
        <div className={styles.grid}>
          {Array.from({ length: 12 }).map((_, i) => (
            <BookCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <BookList books={results} />
      )}
    </div>
  );
}
