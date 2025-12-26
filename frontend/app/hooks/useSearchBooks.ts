import { Book } from "@/app/types/book";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useSearchBooks() {
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  const [results, setResults] = useState<Book[]>([]);
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0); // n.o results

  const searchParams = useSearchParams(); // get current url
  const q = searchParams.get("q");

  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) return;

    setQuery(searchTerm);
    setLoading(true);

    try {
      const res = await fetch(
        `/api/search/?q=${encodeURIComponent(searchTerm)}`
      ); // encode term, handling characters like spaces, &, ?, =
      if (res.ok) {
        const data = await res.json();
        setResults(data.docs as Book[]);
        setCount(data.numFound);
      }
    } catch (e) {
      console.error("Error fetching books:", e);
      return;
    } finally {
      setLoading(false);
    }
  };

  // auto search when query q changes
  useEffect(() => {
    if (q) {
      handleSearch(q);
    }
  }, [q]);

  return { loading, results, query, count };
}
