"use client";
import { auth } from "@/app/firebase/firebase-config";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOutButton from "../LogOutButton/LogOutButton";
import styles from "./NavigationBar.module.css";

export default function NavBar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
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
          {user ? (
            <LogOutButton />
          ) : (
            <div className={styles.authLinks}>
              <Link className={styles.link} href="/sign-up">
                Sign Up
              </Link>
              <Link className={styles.link} href="/sign-in">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
