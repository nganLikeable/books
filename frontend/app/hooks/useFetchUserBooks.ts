import { useEffect, useState } from "react";
import { LibraryUserBook } from "../types/database";
import useGetUser from "./useGetUser";
export default function useFetchUserBooks() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<LibraryUserBook[]>([]);
  const { userId } = useGetUser();

  useEffect(() => {
    if (!userId || userId === null) {
      return;
    }
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/user/${userId}/books`);
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
