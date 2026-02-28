"use client";

import { createContext, useContext, useState } from "react";

interface BookContextType {
  bookId: string;
  title: string;
  cover: string;
  readingStatus: string | null;
  setReadingStatus: (v: string) => void;
}

const BookContext = createContext<BookContextType | null>(null);

export default function BookProvider({
  children,
  bookId,
  title,
  cover,
}: {
  children: React.ReactNode;
  bookId: string;
  title: string;
  cover: string;
}) {
  const [readingStatus, setReadingStatus] = useState<string | null>(null);

  return (
    <BookContext.Provider
      value={{ bookId, title, cover, readingStatus, setReadingStatus }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("useBook must be used inside BookProvider");
  }
  return context;
}
