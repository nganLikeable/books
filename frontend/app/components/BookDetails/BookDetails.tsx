"use client";
import { useBook } from "@/app/hooks/useBook";
import { usePathname } from "next/navigation";
export default function BookDetails() {
  const pathname = usePathname();
  const bookId = pathname ? pathname.split("/")[2] : "";

  const { description, cover, authorIds } = useBook(bookId);

  return (
    <div>
      {cover && <img src={cover} alt="Book cover"></img>}
      <p>{description}</p>
      <p>
        {authorIds.map((a: string) => (
          <span key={a}>{a}</span>
        ))}
      </p>
    </div>
  );
}
