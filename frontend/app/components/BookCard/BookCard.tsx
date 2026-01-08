import { Book } from "@/app/types/book";
import Link from "next/link";
import styles from "./BookCard.module.css";
export default function BookCard({ book }: { book: Book }) {
  // destructuring book obj

  const coverURL = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "/no_cover.jpg";
  console.log(coverURL);

  // get author names and keys to map and display accordingly
  const authorKeys = Array.isArray(book.author_key) ? book.author_key : [];
  const authorNames = Array.isArray(book.author_name) ? book.author_name : [];

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
          <Link
            className="hover:underline"
            href={`/book/${book.key.split("/")[2]}`}
          >
            {book.title}{" "}
          </Link>
          <p>
            {authorNames.length > 0 && (
              <>
                by <br></br>{" "}
                {authorNames.map((name: string, index: number) => (
                  <span key={authorKeys[index]}>
                    <Link
                      className="hover:underline"
                      href={`/author/${authorKeys[index]}`}
                    >
                      {name.trim()}
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
