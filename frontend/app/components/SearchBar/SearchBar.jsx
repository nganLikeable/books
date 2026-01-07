"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSearch(query); // pass from parent component
    router.push(`?q=${query}`); // add query parameter to url
  };

  return (
    <div className="flex flex-row ">
      <form className="w-full max-w-2xl flex gap-2" onSubmit={handleSubmit}>
        <input
          className="w-150 px-4 py-[0.6rem] "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
        />
        <button
          className=" cursor-pointer bg-amber-100 rounded-2xl px-4 py-[0.6rem] transition  ease-in-out hover:bg-amber-200 hover:font-semibold"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
