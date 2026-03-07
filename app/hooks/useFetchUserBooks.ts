import { useEffect, useState } from "react";
import { LibraryUserBook } from "../types/database";
import useGetUser from "./useGetUser";
export default function useFetchUserBooks() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<LibraryUserBook[]>([]);
  const { userId } = useGetUser();

  const fetchBooks = async () => {
    if (!userId) return;
    try {
      setLoading(true);
      const res = await fetch(`/api/user/${userId}/books`, {
        cache: "no-store",
      });
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
  useEffect(() => {
    fetchBooks();
  }, [userId]);
  return { books, loading, refetch: fetchBooks };
}
