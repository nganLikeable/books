import { Book } from "@/app/types/book";
import Link from "next/link";
import styles from "./BookCard.module.css";
export default function BookCard({ book }: { book: Book }) {
  // destructuring book obj

  const coverURL = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "/no_cover.jpg";
  // console.log(coverURL);
  return (
    <div className={styles.card}>
      <div className={styles.item}>
        <div className={styles.cover}>
          <Link href={`/book/${book.key.split("/")[2]}`}>
            <img src={coverURL} loading="lazy"></img>
          </Link>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.info}>
          {" "}
          <Link href={`/book/${book.key.split("/")[2]}`}>{book.title} </Link>
          <p>{book.author_name && `by ${book.author_name}`}</p>
        </div>
      </div>
    </div>
  );
}
