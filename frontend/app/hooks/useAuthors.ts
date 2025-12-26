import { useEffect, useState } from "react";

export function useAuthors(authorIds: string[]) {
  const [authors, setAuthors] = useState<string[]>([]);
  const [loading_a, setLoading_a] = useState(false);

  useEffect(() => {
    if (!authorIds || authorIds.length === 0) {
      return;
    }
    const getAuthors = async () => {
      try {
        setLoading_a(true);
        const names = await Promise.all(
          authorIds.map(async (id) => {
            const res = await fetch(`/api/author/${id}`);
            if (!res.ok) return "Unknown";
            const data = await res.json();
            return data.name;
          })
        );
        setAuthors(names);
      } catch (e) {
        console.log("error fetching authors");
      } finally {
        setLoading_a(false);
      }
    };
    getAuthors();
  }, [authorIds]);
  return { authors, loading_a };
}
