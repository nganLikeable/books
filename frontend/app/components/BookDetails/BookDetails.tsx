"use client";
import { useAuthors } from "@/app/hooks/useAuthors";
import { useBook } from "@/app/hooks/useBook";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import styles from "./BookDetails.module.css";
export default function BookDetails() {
  const pathname = usePathname();
  const bookId = pathname ? pathname.split("/")[2] : "";

  const { title, description, cover, authorIds } = useBook(bookId);
  const stableAuthorIds = useMemo(() => authorIds, [authorIds.join(",")]);

  const authors = useAuthors(stableAuthorIds);

  return (
    <div className={styles.container}>
      <div className={styles.left_col}>
        {cover && <img src={cover} alt="Book cover"></img>}
      </div>
      <div className={styles.right_col}>
        <h1>{title}</h1>{" "}
        <h2>
          {authors.map((a: string) => (
            <span key={a}>{a}</span>
          ))}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
