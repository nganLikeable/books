export type Book = {
  key: string;
  title: string;
  // to be changed into authors: Author[]
  author_key?: string;
  author_name: string;
  description: string;
  cover_i: string;
  cover_edition_key: string;
};

export type BookListProps = {
  books: Book[];
};
