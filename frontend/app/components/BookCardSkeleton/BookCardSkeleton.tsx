import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "../BookCard/BookCard.module.css";
const BookCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.item}>
        <div className={styles.cover}>
          <Skeleton height={100} width={80} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.info}>
          <Skeleton width={120} height={18} />
          <Skeleton width={120} height={14} />
        </div>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
