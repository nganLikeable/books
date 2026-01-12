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
            const authorPhotos = data.photos;

            //  check for covers exist on open lib or not
            const cover =
              authorPhotos && authorPhotos[0] > 0
                ? `https://covers.openlibrary.org/a/id/${data.photos[0]}-L.jpg`
                : "/no_avatar.jpeg";

            const bio =
              typeof data.bio === "string"
                ? data?.bio
                : data.bio?.value || "Bio not available";
            const birthdate = data?.birth_date || "Unknown";
            const deathdate = data?.death_date || "";

            return {
              id: id,
              name: name,
              cover: cover,
              bio: bio,
              birthdate: birthdate,
              deathdate: deathdate,
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
