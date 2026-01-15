"use client";
import { useState } from "react";
import styles from "./ShelfModal.module.css";

import { Author } from "@/app/types/database";

interface ShelfModalProps {
  bookId: string;
  userId: string;
  title: string;
  authors: Author[];
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
  const handleRemove = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/user/${userId}/books`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookId,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete book");
      }
      console.log(response);
      console.log("Successfully deleted book ");
    } catch (e) {
      console.error(e);
      throw new Error("Error deleting book");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToShelf = async (status: string) => {
    setLoading(true);

    // add book info to the db
    try {
      // save book, author and user-book relationship
      const response = await fetch(`/api/user/${userId}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId, title, cover, authors, status }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to add book to user's shelf");
      }
      const data = await response.json();
      console.log("Book added to/modified in user's library:", data);
      onClose();
    } catch (e) {
      console.error("Error adding book-user", e);
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
        <button
          className={`${styles.btn} ${styles.removeBtn}`}
          onClick={handleRemove}
        >
          🗑️ Remove from my shelf
        </button>
      </div>
    </div>
  );
}
