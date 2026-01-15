import { Book } from "./book";

export type UserBook = {
  userId: string;
  bookId: string;
  status: "WANT_TO_READ" | "CURRENTLY_READING" | "READ";
  createdAt: Date;
  updatedAt: Date;

  book: Book;
};
