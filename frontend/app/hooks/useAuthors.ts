// return an array of Author objects

import { useEffect, useState } from "react";

export function useAuthors(authorIds: string[]) {
  const [authors, setAuthors] = useState<
    { id: string; name: string; cover?: string }[]
  >([]);
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
              return { id, name: "Unknow", cover: "/no_avatar.jpeg" };
            const data = await res.json();
            return {
              id: id,
              name: data.name,
              cover:
                data.photos && data.photos[0] > 0
                  ? `https://covers.openlibrary.org/a/id/${data.photos[0]}-L.jpg`
                  : "/no_avatar.jpeg",
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
