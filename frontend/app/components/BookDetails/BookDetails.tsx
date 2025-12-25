"use client";
import { useAuthors } from "@/app/hooks/useAuthors";
import { useBook } from "@/app/hooks/useBook";
import { usePathname } from "next/navigation";
export default function BookDetails() {
  const pathname = usePathname();
  const bookId = pathname ? pathname.split("/")[2] : "";

  const { description, cover, authorIds } = useBook(bookId);
  const authors = useAuthors(authorIds);

  return (
    <div>
      {cover && <img src={cover} alt="Book cover"></img>}
      <p>{description}</p>
      <p>
        {authors.map((a: string) => (
          <span key={a}>{a}</span>
        ))}
      </p>
    </div>
  );
}
