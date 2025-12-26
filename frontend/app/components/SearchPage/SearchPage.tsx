"use client";
import useSearchBooks from "@/app/hooks/useSearchBooks";
import Skeleton from "react-loading-skeleton";
import BookList from "../BookList/BookList";
import SearchBar from "../SearchBar/SearchBar";
export default function SearchPage() {
  const { loading, results } = useSearchBooks();

  return (
    <div>
      <SearchBar />
      {loading ? <Skeleton /> : <BookList books={results} />}
    </div>
  );
}
