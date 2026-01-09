"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSearch(query); // pass from parent component
    router.push(`/search/?q=${query}`); // add query parameter to url
  };

  return (
    <div className="flex flex-row text-sm ">
      <form
        className="w-full max-w-xl flex items-center gap-2 rounded-2xl border border-gray-200 shadow-sm transition focus-within:border-amber-400 focus-within:shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          className="w-150 px-4 py-[0.6rem] border-0 focus:outline-none focus:ring-0"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
        />
        <button
          className=" cursor-pointer px-4 py-[0.6rem] transition  ease-in-out "
          type="submit"
        >
          <CiSearch size={20} />
        </button>
      </form>
    </div>
  );
}
