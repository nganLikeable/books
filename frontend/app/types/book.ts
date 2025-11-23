export type Book = {
  key: string;
  title: string;
  author_name?: string[];
  description: string;
};

export type BookListProps = {
  books: Book[];
};
