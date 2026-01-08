"use client";

import useFetchUserBooks from "@/app/hooks/useFetchUserBooks";

export default function Library() {
  const books = useFetchUserBooks();
  console.log(books);
}
