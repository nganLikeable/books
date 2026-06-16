"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const debounceRef = useRef(null);
  const containerRef = useRef(null);
  const router = useRouter();

  // fetch suggestions debounced
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (query.trim().length < 2) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search/suggestions?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setSuggestions(data);
        setOpen(data.length > 0);
        setActiveIndex(-1);
      } catch {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setOpen(false);
    router.push(`/search/?q=${encodeURIComponent(query)}`);
  };

  const handleSelect = (suggestion) => {
    setOpen(false);
    setQuery("");
    router.push(`/book/${suggestion.id}`);
  };

  const handleKeyDown = (e) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative flex flex-row text-sm w-full">
      <form
        className="w-full flex items-center gap-2 rounded-2xl border border-gray-200 shadow-sm transition focus-within:border-amber-400 focus-within:shadow-md bg-white/10"
        onSubmit={handleSubmit}
        suppressHydrationWarning
      >
        <input
          className="w-full px-4 py-[0.6rem] border-0 focus:outline-none focus:ring-0 bg-transparent text-foreground placeholder:text-white/50"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => suggestions.length > 0 && setOpen(true)}
          placeholder="Search books..."
          suppressHydrationWarning
        />
        <button
          className="cursor-pointer px-4 py-[0.6rem] transition ease-in-out text-foreground"
          type="submit"
          suppressHydrationWarning
        >
          <CiSearch size={20} />
        </button>
      </form>

      {/* dropdown */}
      {open && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-line-bg bg-background shadow-xl z-50 overflow-hidden">
          {suggestions.map((s, i) => (
            <button
              key={s.id}
              onMouseDown={() => handleSelect(s)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`group w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-150 cursor-pointer ${
                i === activeIndex ? "bg-form-bg" : "hover:bg-form-bg"
              }`}
            >
              <div className="w-8 h-12 shrink-0 rounded overflow-hidden bg-line-bg transition-transform duration-200 group-hover:scale-105 group-hover:shadow-md">
                {s.cover ? (
                  <img src={s.cover} alt={s.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-foreground truncate transition-colors duration-150 group-hover:text-orange-500">{s.title}</span>
                {s.author && (
                  <span className="text-xs text-gray-400 truncate">{s.author}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
