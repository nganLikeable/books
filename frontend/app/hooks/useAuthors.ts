// return an array of Author objects

import { useEffect, useState } from "react";
import { Author } from "../types/database";

export function useAuthors(authorIds: string[]) {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading_a, setLoading_a] = useState(false);

  useEffect(() => {
    if (!authorIds || authorIds.length === 0) {
      return;
    }
    const getAuthors = async () => {
      try {
        setLoading_a(true);
        const authorObjects = await Promise.all(
          authorIds.map(async (id) => {
            const res = await fetch(`/api/author/${id}`);
            if (!res.ok)
              return { id, name: "Unknown", cover: "/no_avatar.jpeg" };
            const data = await res.json();

            const name = data?.name || null;
            const cover = data?.cover || null;
            return {
              id: id,
              name: name,
              cover: cover,
            };
          })
        );
        setAuthors(authorObjects);
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
