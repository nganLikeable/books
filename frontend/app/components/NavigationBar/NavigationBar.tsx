import Link from "next/link";
import styles from "./NavigationBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* <div className={styles.logo}>
          <Link href="/">NganBooks</Link>
        </div> */}

        <Link href="/" className={styles.logo}>
          <img
            src="/logo_yel.png"
            alt="NganBooks logo"
            width={150}
            height={40}
          />
        </Link>

        <div className={styles.links}>
          <Link className={styles.link} href="/about">
            About
          </Link>
          <Link className={styles.link} href="/browse">
            Browse
          </Link>
          <Link className={styles.link} href="/sign-up">
            Sign Up
          </Link>
          <Link className={`${styles.link} ${styles.primary}`} href="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
