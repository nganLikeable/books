"use client";
import { Book } from "@/app/types/book";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function BookDetails() {
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const pathname = usePathname();
  const bookId = pathname ? pathname.split("/")[2] : "";
  const [book, setBook] = useState<Book | null>(null);
  const [authors, setAuthors] = useState("");

  const getBookDetails = async (bookId: string) => {
    if (!bookId) return;

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

        // // get author
        const authors = data.authors;
        console.log(data);
      }
    } catch (e) {
      console.error("Error fetching book details", e);
      return;
    }
  };

  // fetch automatically when id changes/component loads
  useEffect(() => {
    getBookDetails(bookId);
  }, [bookId]);

  return (
    <div>
      {cover && <img src={cover} alt="Book cover"></img>}
      <p>{description}</p>
    </div>
  );
}
