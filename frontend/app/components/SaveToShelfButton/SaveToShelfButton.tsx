"use client";
import styles from "./SaveToShelfButton.module.css";

interface SaveToShelfButtonProps {
  onClick: () => void;
}

export default function SaveToShelfButton({ onClick }: SaveToShelfButtonProps) {
  return (
    <div className={styles.btn}>
      <button className={styles.button} onClick={onClick}>
        Save to shelf
      </button>
    </div>
  );
}
