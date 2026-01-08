import { useEffect, useState } from "react";
import { Book } from "../types/book";
export default function useGetUserBooks(userId: string) {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (!userId || userId === "undefined") {
      return;
    }
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/users/${userId}/books`);
        if (!res.ok) {
          return;
        }
        const data = await res.json();
        setBooks(data);
      } catch (e) {
        console.log("Error fetching user's library");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [userId]);
  return { books, loading };
}
