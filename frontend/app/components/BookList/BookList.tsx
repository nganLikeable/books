import { BookListProps } from "@/app/types/book";
import BookCard from "../BookCard/BookCard";
export default function BookList(prop: BookListProps) {
  const bookItems = prop.books.map((book) => (
    <BookCard key={book.key} book={book} />
  ));
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7.5 my-16 mx-auto px-20 w-full">
      {bookItems}
    </div>
  );
}
