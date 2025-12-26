import { useEffect, useState } from "react";
export function useBook(bookId: string) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [authorIds, setAuthorIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  // fetch automatically when id changes/component loads

  useEffect(() => {
    const fetchBook = async () => {
      if (!bookId) return;
      setLoading(true);
      try {
        const res = await fetch(`/api/book/${bookId}`);

        if (res.ok) {
          const data = await res.json();
          // get description
          let desc = "Description unavailable";
          if (typeof data.description === "string") {
            desc = data.description;
            // description in json could be an obj
          } else if (
            data.description &&
            typeof data.description === "object" &&
            "value" in data.description
          ) {
            desc = data.description.value;
          }
          setDescription(desc);

          // get cover url
          const coverId = data?.covers?.[0];
          const coverURL = coverId
            ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`
            : "no_cover.jpg";
          setCover(coverURL);

          // get author
          const authorIds = (data.authors || []).map((a: any) =>
            a.author.key.split("/").pop()
          );
          setAuthorIds(authorIds);

          // get title
          const book_title = data.title || "Error loading title";
          setTitle(book_title);
        }
      } catch (e) {
        console.error("Error fetching book details", e);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [bookId]);

  return { title, description, cover, authorIds, loading };
}
