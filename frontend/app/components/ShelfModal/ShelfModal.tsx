import styles from "./ShelfModal.module.css";
export default function ShelfModal() {
  return (
    <div className={styles.modal}>
      <div className={styles.title}>
        <h1>Choose a shelf for this book</h1>
      </div>
      <div className={styles.btns}>
        <button className={styles.btn}>Want to read</button>
        <button className={styles.btn}>Currently reading</button>
        <button className={styles.btn}>Read</button>
        <button className={`${styles.btn} ${styles.removeBtn}`}>
          Remove from my shelf
        </button>
      </div>
    </div>
  );
}
