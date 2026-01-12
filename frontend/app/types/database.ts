import {
  Author as PrismaAuthor,
  Book as PrismaBook,
  UserBook as PrismaUserBook,
} from "../generated/prisma";
// using aliased names to prevent name conflicts btw ts types and Prisma models

export type UserBookWithDetails = PrismaUserBook & {
  book: Book & {
    authors: Author[];
  };
};

export type Book = PrismaBook;

export type Author = PrismaAuthor;

export type BookWithDetails = PrismaBook & {
  authorIds?: string[];
  description?: string;
};
