import { useState } from "react";
import { UserBook } from "../types/userBook";

export default function useFetchStatus(status: string) {
  const [books, setBooks] = useState<UserBook[]>([]);
}
