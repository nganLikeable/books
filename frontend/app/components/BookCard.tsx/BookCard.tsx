import { Book } from "@/app/types/book";
import styles from "./BookCard.module.css";
export default function BookCard({ book }: { book: Book }) {
  // destructuring book obj
  return (
    <div className={styles.bookCard}>
      <h3>{book.title}</h3>
    </div>
  );
}
