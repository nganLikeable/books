"use client";
import { useAuthors } from "@/app/hooks/useAuthors";
import { useBook } from "@/app/hooks/useBook";
import { usePathname } from "next/navigation";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./BookDetails.module.css";
export default function BookDetails() {
  const pathname = usePathname();
  const bookId = pathname ? pathname.split("/")[2] : "";

  const { title, description, cover, authorIds, loading } = useBook(bookId);
  const { authors, loading_a } = useAuthors(authorIds);

  return (
    <div className={styles.container}>
      <div className={styles.left_col}>
        {loading ? (
          <Skeleton />
        ) : (
          cover && <img src={cover} alt="Book cover" loading="lazy"></img>
        )}
      </div>
      <div className={styles.right_col}>
        {loading ? <Skeleton /> : <h1>{title}</h1>}
        {loading_a ? (
          <Skeleton />
        ) : (
          <h2>
            {authors.map((a: string) => (
              <span key={a}>{a}</span>
            ))}
          </h2>
        )}
        {loading ? <Skeleton /> : <p>{description}</p>}
      </div>
    </div>
  );
}
