import { Author, Book, UserBook } from "../generated/prisma";

export type UserBookWithDetails = UserBook & {
  book: Book & {
    authors: Author[];
  };
};
