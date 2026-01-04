"use client";
import { auth } from "@/app/firebase/firebase-config";
import { signOut } from "firebase/auth";
import styles from "./LogOutButton.module.css";
export default function LogOutButton() {
  const handleSignOut = async () => {
    try {
      const res = await signOut(auth);
      console.log("Signed out successfully");
    } catch (e) {
      console.error("Error logging out", e);
    }
  };

  return (
    <div className={styles.logOutBtn}>
      <button onClick={handleSignOut}>Log Out</button>
    </div>
  );
}
