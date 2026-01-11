import { Book } from "@/app/types/database";
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

  // auto search when query q changes
  useEffect(() => {
    if (!q) return;
    const handleSearch = async () => {
      setQuery(q);
      setLoading(true);

      const cachedData = sessionStorage.getItem(q);

      // if cached
      if (cachedData) {
        const parsed = JSON.parse(cachedData); // parse to obj
        // setResults(parsed.docs as Book[]);
        setResults(
          parsed.docs.map((b: any): Book => {
            return {
              id: b.key.split("/")[2],
              title: b.title,
              cover: b.key.split("/"[2]),
            };
          })
        );
        setCount(parsed.numFound);
        setLoading(false);
        return;
      }

      // fetch if not cached
      try {
        const res = await fetch(`/api/search/?q=${encodeURIComponent(q)}`); // encode term, handling characters like spaces, &, ?, =
        if (res.ok) {
          const data = await res.json();
          setResults(
            data.docs.map((b: any): Book => {
              return {
                id: b.key.split("/")[2],
                title: b.title,
                cover: b.key.split("/")[2],
              };
            })
          );
          // setResults(data.docs as Book[]);
          setCount(data.numFound);
          setLoading(false);

          // save item to storage for next time
          sessionStorage.setItem(q, JSON.stringify(data));
        }
      } catch (e) {
        console.error("Error fetching books:", e);
        return;
      } finally {
        setLoading(false);
      }
    };
    handleSearch();
  }, [q]);

  return { loading, results, query, count };
}
