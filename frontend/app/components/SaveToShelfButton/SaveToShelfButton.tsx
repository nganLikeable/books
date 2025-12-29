"use client";
import { useState } from "react";
import ShelfModal from "../ShelfModal/ShelfModal";
import styles from "./SaveToShelfButton.module.css";

export default function SaveToShelfButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSave = () => {
    console.log("Clicked");
    setIsModalOpen(true);
  };
  return (
    <div className={styles.btn}>
      <button className={styles.button} onClick={handleSave}>
        Save to shelf
      </button>
      {isModalOpen && <ShelfModal />}
    </div>
  );
}
