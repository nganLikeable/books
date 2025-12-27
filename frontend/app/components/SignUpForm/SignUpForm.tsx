"use client";

import { useState } from "react";
import styles from "./SignUpForm.module.css";

import { auth } from "@/app/firebase/config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log(res);

      setEmail("");
      setPassword("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.signupContainer}>
      <form
        className={styles.signupForm}
        onSubmit={(e) => {
          e.preventDefault(); // prevent page reload
          handleSignUp();
        }}
      >
        <h2 className={styles.signupTitle}>Create An Account</h2>

        <div className={styles.formGroup}>
          <input
            id="email"
            className={styles.formInput}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <input
            id="password"
            className={styles.formInput}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          className={styles.signupButton}
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        {error && <p className={styles.errorText}>{error}</p>}
      </form>
    </div>
  );
}
