"use client";
import { useAuthors } from "@/app/hooks/useAuthors";
import { useBook } from "@/app/hooks/useBook";
import useGetUser from "@/app/hooks/useGetUser";
import { Author } from "@/app/types/author";
import { usePathname } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ShelfModal from "../ShelfModal/ShelfModal";

import Link from "next/link";
import { useState } from "react";
import SaveToShelfButton from "../SaveToShelfButton/SaveToShelfButton";
import styles from "./BookDetails.module.css";
export default function BookDetails() {
  const pathname = usePathname();
  const bookId = pathname ? pathname.split("/")[2] : "";

  const { title, description, cover, authorIds, loading } = useBook(bookId);
  const { authors, loading_a } = useAuthors(authorIds);
  const { user, userId, userLoading } = useGetUser();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <div className={styles.item}>
          {loading ? (
            <Skeleton height={500} />
          ) : (
            cover && <img src={cover} alt="Book cover" loading="lazy"></img>
          )}
        </div>
        <div className={styles.item}>
          <SaveToShelfButton onClick={() => setIsModalOpen(true)} />
        </div>
        {isModalOpen && userId && (
          <ShelfModal
            bookId={bookId}
            userId={userId}
            title={title}
            authors={authors}
            cover={cover}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
      <div className={styles.col}>
        {loading ? <Skeleton height={70} /> : <h1>{title}</h1>}
        {loading_a ? (
          <Skeleton />
        ) : (
          <h2>
            {authors.map((a: Author, index: number) => (
              <div key={`${a}-${index}`}>
                <span>
                  <Link
                    className="font-semibold hover:underline"
                    href={`/author/${authorIds[index]}`}
                  >
                    {a.name}
                  </Link>
                </span>
                <br></br>
              </div>
            ))}
          </h2>
        )}
        {loading ? <Skeleton count={8} height={50} /> : <p>{description}</p>}
      </div>
    </div>
  );
}
