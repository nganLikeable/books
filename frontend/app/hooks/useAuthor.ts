import { useEffect, useState } from "react";
import { Author } from "../types/database";

export function useAuthor(id: string) {
  const [loading, setLoading] = useState(false);

  const [author, setAuthor] = useState(<Author | null>null);
  useEffect(() => {
    if (!id || id === "undefined") {
      return;
    }
    const getAuthor = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/author/${id}`);
        if (!res.ok) {
          return;
        }
        const data = await res.json();

        const name = data?.name || null;
        const cover = data?.cover || null;

        setAuthor({ id: id, name: name, cover: cover });
      } catch (e) {
        console.log("error fetching author details");
      } finally {
        setLoading(false);
      }
    };
    getAuthor();
  }, [id]);
  return { author, loading };
}
