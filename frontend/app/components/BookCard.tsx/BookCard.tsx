import { Book } from "@/app/types/book";
import styles from "./BookCard.module.css";
export default function BookCard({ book }: { book: Book }) {
  // destructuring book obj

  const coverURL = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "no_cover.jpg";
  return (
    <div className={styles.card}>
      <h3>{book.title}</h3>
      <img src={coverURL}></img>
    </div>
  );
}
