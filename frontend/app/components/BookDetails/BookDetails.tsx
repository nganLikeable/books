"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookDetails() {
  const [details, setDetails] = useState("Description unavailable");
  const pathname = usePathname();
  const bookId = pathname ? pathname.split("/")[2] : "";

  const getBookDetails = async (bookId: string) => {
    if (!bookId) return;

    try {
      const res = await fetch(`/api/book/${bookId}`);

      if (res.ok) {
        const data = await res.json();

        if (typeof data.description === "string") {
          setDetails(data.description);

          // description in json could be an obj
        } else if (
          data.description &&
          typeof data.description === "object" &&
          "value" in data.description
        ) {
          setDetails(data.description.value);
        }
        console.log(details);
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
      <p>{details}</p>
    </div>
  );
}
