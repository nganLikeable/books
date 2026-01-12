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
        const data = await response.json();
        console.log(data);

        if (!data.entries) {
          return;
        }
        const parsedBooks = data.entries.map((item: any): BookWithDetails => {
          // console.log("work item:", item);
          //  only save books with covers available
          //  some books covers arrays are available yet the values are not in the right form, for ex: -1
          const covers = item.covers;
          const coverId =
            covers && covers.length > 0 && covers[0] > 0
              ? String(covers[0])
              : null;
          // console.log(`Book: ${item.title} | Cover ID: ${coverId}`);

          // if (covers && covers[0].toString().length > 1 && covers[0] > 0) {
          const cover = coverId
            ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
            : "/no_cover.jpg";
          const authorIds = item.authors.map((a: any) => a.key);

          return {
            id: item.key.split("/")[2],
            title: item.title,
            authorIds: authorIds,
            cover: cover,
          };
        });

        setBooks(parsedBooks);
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
