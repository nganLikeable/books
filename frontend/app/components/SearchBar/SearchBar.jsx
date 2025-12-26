"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSearch(query); // pass from parent component
    router.push(`?q=${query}`); // add query parameter to url
  };

  return (
    <div className={styles.container}>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
