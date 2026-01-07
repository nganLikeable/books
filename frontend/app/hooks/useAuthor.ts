import { useEffect, useState } from "react";

export function useAuthor(id: string) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
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
        const dataRes = await res.json();
        setData(dataRes);
      } catch (e) {
        console.log("error fetching author details");
      } finally {
        setLoading(false);
      }
    };
    getAuthor();
  }, [id]);
  return { data, loading };
}
