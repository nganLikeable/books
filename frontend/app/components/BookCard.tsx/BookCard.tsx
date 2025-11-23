import { Book } from "@/app/types/book";
import styles from "./BookCard.module.css";
export default function BookCard({ book }: { book: Book }) {
  // destructuring book obj

  const coverURL = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "no_cover.jpg";
  return (
    // <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.item}>
        <div className={styles.cover}>
          {" "}
          <img src={coverURL}></img>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.info}>
          {" "}
          <h3>{book.title} </h3>
          <p>{book.author_name && `by ${book.author_name}`}</p>
        </div>
      </div>
    </div>
    //   <hr />
    // </div>
  );
}
