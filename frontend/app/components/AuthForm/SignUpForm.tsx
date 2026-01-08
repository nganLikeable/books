"use client";

import { useState } from "react";
import styles from "./Form.module.css";

import { auth } from "@/app/firebase/firebase-config";
import Link from "next/link";
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
    <div className="w-full max-w-100 ">
      <form
        className="  bg-form-bg rounded-2xl p-3"
        onSubmit={(e) => {
          e.preventDefault(); // prevent page reload
          handleSignUp();
        }}
      >
        <h2 className="text-center text-2xl font-semibold mb-4 p-4">Welcome</h2>
        <div className="m-0.5">
          <input
            id="email"
            className="w-full p-3.5 mt-1  "
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-[1.4rem]">
          <input
            id="password"
            className="w-full p-3.5 mt-1  "
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.errorText}>{error.message}</p>}
        <button
          className="w-full p-1 cursor-pointer bg-[#ffde39] rounded-sm hover:bg-[#ffe666] text-black"
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>{" "}
        <p className="text-center text-xs m-4">
          Already have an account?{" "}
          <Link
            className="font-semibold underline hover:text-gray-600"
            href="/sign-in"
          >
            Sign in
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
