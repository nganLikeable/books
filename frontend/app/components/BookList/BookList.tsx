import { BookListProps } from "@/app/types/book";
import BookCard from "../BookCard/BookCard";
export default function BookList(prop: BookListProps) {
  //  filter out undefined or null objs
  const bookItems = prop.books
    .filter(Boolean)
    .map((book) => <BookCard key={book.key} book={book} />);
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7.5  w-full">
      {bookItems}
    </div>
  );
}
