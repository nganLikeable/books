import { Author, Book } from "@/app/types/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// take raw docs and map to book and authors
const mapToBook = (b: any): Book => {
  const id = b.key.split("/")[2];
  const cover_i = b.cover_i;
  const authorKeys = b.author_key || [];
  const authors: Author[] = (b.author_name || []).map(
    (name: string, index: number) => ({
      id: b.author_key?.[index],
      name: name || "unknown",
      cover: null,
      createdAT: new Date(),
      updatedAt: new Date(),
    })
  );

  return {
    id: id ? id : null,
    title: b.title,
    cover: cover_i
      ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
      : "/no_cover.jpg",
    authors: authors,
  };
};

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
        setResults(parsed.docs.map(mapToBook));
        setCount(parsed.numFound);
        setLoading(false);
        return;
      }

      // fetch if not cached
      try {
        const res = await fetch(`/api/search/?q=${encodeURIComponent(q)}`); // encode term, handling characters like spaces, &, ?, =
        if (res.ok) {
          const data = await res.json();
          setResults(data.docs.map(mapToBook));
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
