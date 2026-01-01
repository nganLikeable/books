import styles from "./ShelfModal.module.css";
export default function ShelfModal() {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h3 className={styles.title}>Choose a shelf</h3>
        <button className={styles.closeBtn}>✕</button>
      </div>
      <div className={styles.btns}>
        <button className={styles.btn}>Want to read</button>
        <button className={styles.btn}>Currently reading</button>
        <button className={styles.btn}>Read</button>
        <button className={`${styles.btn} ${styles.removeBtn}`}>
          🗑️ Remove from my shelf
        </button>
      </div>
    </div>
  );
}
