"use client";
import useSearchBooks from "@/app/hooks/useSearchBooks";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import BookList from "../BookList/BookList";
import SearchBar from "../SearchBar/SearchBar";
export default function SearchPage() {
  const { loading, results } = useSearchBooks();

  return (
    <div>
      <SearchBar />
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Skeleton count={3} width={1000} height={50} />
        </div>
      ) : (
        <BookList books={results} />
      )}
    </div>
  );
}
