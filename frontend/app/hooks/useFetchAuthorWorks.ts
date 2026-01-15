// return works of an author

import { useEffect, useState } from "react";
import { BookWithDetails } from "../types/database";

export function useFetchAuthorWorks(authorId: string) {
  const [books, setBooks] = useState<BookWithDetails[]>([]);
  const [isLoadingBooks, setLoadingBooks] = useState(false);

  // get books of author
  useEffect(() => {
    if (!authorId || authorId === "undefined") return;
    async function fetchBooks() {
      try {
        setLoadingBooks(true);
        const response = await fetch(`/api/author/${authorId}/works`);
        const books = await response.json();
        console.log(books);
        setBooks(books);
      } catch (e) {
        console.error("Failed to fetch works", e);
      } finally {
        setLoadingBooks(false);
      }
    }
    fetchBooks();
  }, [authorId]);

  return { books, isLoadingBooks };
}
