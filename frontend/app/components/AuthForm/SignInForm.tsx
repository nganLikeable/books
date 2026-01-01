"use client";

import { useState } from "react";
import styles from "./Form.module.css";

import { auth } from "@/app/firebase/firebase-config";
import { setCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log("Signed in successfully");
      console.log({ res });

      setEmail("");
      setPassword("");

      if (res?.user) {
        // get secure JWT token
        const token = await res.user.getIdToken();

        setCookie("auth-token", token, {
          maxAge: 60 * 60 * 24,
          path: "/",
          secure: true, // only send over HTTPs
          sameSite: "strict",
        });
        router.push("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault(); // prevent page reload
          handleSignIn();
        }}
      >
        <h2 className={styles.title}>Sign In</h2>

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
          className={styles.submitButton}
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in...." : "Sign In"}
        </button>

        {error && <p className={styles.errorText}>{error}</p>}
      </form>
    </div>
  );
}
