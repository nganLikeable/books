"use client";
import { useState } from "react";
import styles from "./ShelfModal.module.css";

interface ShelfModalProps {
  bookId: string;
  userId: string;
  onClose: () => void;
}

export default function ShelfModal({
  bookId,
  userId,
  onClose,
}: ShelfModalProps) {
  const [loading, setLoading] = useState(false);
  const handleAddToShelf = async (status: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/user/${userId}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId, status }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to add book to shelf");
      }
      const data = await response.json();
      console.log("Book added:", data);
      onClose();
    } catch (e) {
      console.error("Error adding book:", e);
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
