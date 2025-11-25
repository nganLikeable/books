import { BookListProps } from "@/app/types/book";
import BookCard from "../BookCard.tsx/BookCard";
import styles from "./BookList.module.css";
export default function BookList(prop: BookListProps) {
  const bookItems = prop.books.map((book) => (
    <BookCard key={book.key} book={book} />
  ));
  return <div className={styles.grid}>{bookItems}</div>;
}
