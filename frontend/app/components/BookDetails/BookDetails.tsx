"use client";
import { useAuthors } from "@/app/hooks/useAuthors";
import { useBook } from "@/app/hooks/useBook";
import { usePathname } from "next/navigation";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import BackButton from "../BackButton/BackButton";

import styles from "./BookDetails.module.css";
export default function BookDetails() {
  const pathname = usePathname();
  const bookId = pathname ? pathname.split("/")[2] : "";

  const { title, description, cover, authorIds, loading } = useBook(bookId);
  const { authors, loading_a } = useAuthors(authorIds);

  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <BackButton />
      </div>

      <div className={styles.col}>
        {loading ? (
          <Skeleton height={500} />
        ) : (
          cover && <img src={cover} alt="Book cover" loading="lazy"></img>
        )}
      </div>
      <div className={styles.col}>
        {loading ? <Skeleton height={70} /> : <h1>{title}</h1>}
        {loading_a ? (
          <Skeleton />
        ) : (
          <h2>
            {authors.map((a: string) => (
              <span key={a}>{a}</span>
            ))}
          </h2>
        )}
        {loading ? <Skeleton count={8} height={50} /> : <p>{description}</p>}
      </div>
    </div>
  );
}
