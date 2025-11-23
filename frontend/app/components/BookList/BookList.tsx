import { BookListProps } from "@/app/types/book";
import BookCard from "../BookCard.tsx/BookCard";
export default function BookList(prop: BookListProps) {
  const bookItems = prop.books.map((book) => (
    <BookCard key={book.key} book={book} />
  ));
  return <div>{bookItems}</div>;
}
