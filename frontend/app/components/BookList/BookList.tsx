import { Book } from "@/app/types/database";
import BookCard from "../BookCard/BookCard";
export default function BookList({ books }: { books: Book[] }) {
  //  filter out undefined or null objs
  const bookItems = books
    .filter(Boolean)
    .map((book) => <BookCard key={book.id} book={book} />);
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7.5  w-full">
      {bookItems}
    </div>
  );
}
