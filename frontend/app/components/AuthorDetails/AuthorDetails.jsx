"use client";
import { useAuthor } from "@/app/hooks/useAuthor";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import BookList from "../BookList/BookList";

export default function AuthorDetail() {
  const pathname = usePathname();
  const authorId = pathname ? pathname.split("/")[2] : "";
  const { data, loading } = useAuthor(authorId);
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(false);

  // get books of author
  useEffect(() => {
    if (!authorId || authorId === "undefined" || !data) return;
    async function fetchBooks() {
      try {
        setLoadingBooks(true);
        const response = await fetch(`/api/author/${authorId}/works`);
        const data = await response.json();
        if (!data.entries) {
          return;
        }
        const parsedBooks = data.entries.map((item) => {
          console.log("work item:", item);
          return {
            key: item.key,
            title: item.title,
            author_name: data.name,
            // some books covers arrays are available yet the values are not in the right form, for ex: -1
            cover_i:
              item.covers && item.covers[0].toString().length > 1
                ? item.covers[0]
                : "",
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
  }, [authorId, data]);

  // safeguard, preventing data.name running when data is still null - fetching
  if (loading || !data) {
    return <div className="p-10 text-center">Loading Author...</div>;
  }

  const name = data.name;
  const bio = data.bio.value || "Bio not available";
  const birthdate = data.birthdate || "Unknown";
  const cover =
    `https://covers.openlibrary.org/a/olid/${authorId}-L.jpg` ||
    "no_avatar.jpeg";

  return (
    <div>
      <BookList books={books} />
    </div>
  );
}
