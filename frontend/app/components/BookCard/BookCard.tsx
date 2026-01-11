import { Author, Book } from "@/app/types/database";
import Link from "next/link";
import styles from "./BookCard.module.css";
export default function BookCard({ book }: { book: Book }) {
  const authors = book.authors || [];

  return (
    <div className={styles.card}>
      <div className={styles.item}>
        <div className={styles.cover}>
          <Link href={`/book/${book.id}`}>
            {book.cover && <img src={book.cover} loading="lazy"></img>}
          </Link>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.info}>
          {" "}
          <Link className="hover:underline" href={`/book/${book.id}`}>
            {book.title}{" "}
          </Link>
          <p>
            {authors.length > 0 && (
              <>
                by <br></br>{" "}
                {authors.map((author: Author) => (
                  <span key={author.id}>
                    <Link
                      className="hover:underline"
                      href={`/author/${author.id}`}
                    >
                      {author.name}
                    </Link>
                    <br></br>
                  </span>
                ))}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
