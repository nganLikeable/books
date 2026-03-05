import {
  Author as PrismaAuthor,
  Book as PrismaBook,
  Review as PrismaReview,
  UserBook as PrismaUserBook,
} from "../generated/prisma";
// using aliased names to prevent name conflicts btw ts types and Prisma models

export type UserBookWithDetails = PrismaUserBook & {
  book: Book & {
    authors: Author[];
  };
};

export type UserBook = PrismaUserBook;

export type Book = PrismaBook;

export type Author = PrismaAuthor;

export type BookWithDetails = PrismaBook & {
  authorIds?: string[];
  description?: string;
  authors?: Author[];
};

export type AuthorWithDetails = PrismaAuthor & {
  bio?: string;
  birthdate?: string;
  deathdate?: string;
};

export type LibraryUserBook = PrismaUserBook & {
  book: Book;
};

export type Review = PrismaReview & {
  book: Book;
};
