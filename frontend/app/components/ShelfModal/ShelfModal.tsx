"use client";
import { NextResponse } from "next/server";
import { useState } from "react";
import styles from "./ShelfModal.module.css";

interface ShelfModalProps {
  bookId: string;
  userId: string;
  title: string;
  authors: string[];
  cover: string;
  onClose: () => void;
}

export default function ShelfModal({
  bookId,
  userId,
  title,
  authors,
  cover,
  onClose,
}: ShelfModalProps) {
  const [loading, setLoading] = useState(false);
  const handleAddToShelf = async (status: string) => {
    setLoading(true);

    // add book info to the db
    try {
      const responseBook = await fetch(`/api/book/${bookId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: bookId,
          title: title,
          authors: authors,
          cover: cover,
        }),
      });
      console.log(responseBook);
      if (!responseBook.ok) {
        return new NextResponse("Failed to add book to database");
      }
      console.log("Successfully added book to database");

      // save user-book relationship
      const response = await fetch(`/api/user/${userId}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId, status }),
      });
      console.log(response);
      if (!response.ok) {
        return new NextResponse("Failed to add book to user's shelf");
      }
      const data = await response.json();
      console.log("Book added to/modified in user's library:", data);
      onClose();
    } catch (e) {
      console.error("Book-user adding failed", e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h3 className={styles.title}>Choose a shelf</h3>
        <button className={styles.closeBtn}>✕</button>
      </div>
      <div className={styles.btns}>
        <button
          className={styles.btn}
          onClick={() => handleAddToShelf("WANT_TO_READ")}
        >
          Want to read
        </button>
        <button
          className={styles.btn}
          onClick={() => handleAddToShelf("CURRENTLY_READING")}
        >
          Currently reading
        </button>
        <button className={styles.btn} onClick={() => handleAddToShelf("READ")}>
          Read
        </button>
        <button className={`${styles.btn} ${styles.removeBtn}`}>
          🗑️ Remove from my shelf
        </button>
      </div>
    </div>
  );
}
