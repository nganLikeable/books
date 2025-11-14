"use client";
import { useState } from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const { query, setQuery } = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); // pass from parent component
  };

  return (
    <div className={styles.container}>
      <form className={styles.search - bar} onSubmit={handleSubmit}>
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
