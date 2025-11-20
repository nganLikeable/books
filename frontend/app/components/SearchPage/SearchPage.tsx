"use client";
import { Book } from "@/app/types/book";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
export default function SearchPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState<Book[]>([]);
  const [query, setQuery] = useState("");

  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    setQuery(searchTerm);
    try {
      const res = await fetch(
        `/api/search/?q=${encodeURIComponent(searchTerm)}`
      ); // encode term, handling characters like spaces, &, ?, =
      if (res.ok) {
        const data = await res.json();
        setResults(data.docs as Book[]);
      }
    } catch (e) {
      console.error("Error fetching books:", e);
      return;
    }
  };

  useEffect(() => {
    handleSearch(query);
  }, []);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {results.map((book) => (
        <div key={book.key}>
          <h3>{book.title}</h3>
        </div>
      ))}
    </div>
  );
}
