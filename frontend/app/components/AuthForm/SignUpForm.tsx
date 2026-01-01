"use client";

import { useState } from "react";
import styles from "./Form.module.css";

import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const APIURL = "http://localhost:3000";
export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log("Signed up successfully");

      console.log({ res });

      setEmail("");
      setPassword("");

      // if created successfully, added user to db
      if (res?.user) {
        await fetch(`${APIURL}/api/user`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uid: res.user.uid,
            email: res.user.email,
          }),
        });
      }
      router.push("/sign-in");
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
          handleSignUp();
        }}
      >
        <h2 className={styles.title}>Create An Account</h2>

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
        {error && <p className={styles.errorText}>{error.message}</p>}

        <button
          className={styles.submitButton}
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
