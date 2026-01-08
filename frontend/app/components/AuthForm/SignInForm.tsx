"use client";

import { useState } from "react";

import { auth } from "@/app/firebase/firebase-config";
import { setCookie } from "cookies-next/client";
import Link from "next/link";
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
      }
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full max-w-100 ">
      <form
        className=" bg-white border border-0.5 border-gray-100 rounded-2xl p-3"
        onSubmit={(e) => {
          e.preventDefault(); // prevent page reload
          handleSignIn();
        }}
      >
        <h2 className="text-center text-2xl font-semibold mb-4 p-4">
          Welcome back
        </h2>
        <div className="m-0.5">
          <input
            id="email"
            className="w-full p-3.5 mt-1 bg-[#f7f7f7] focus:bg-[#f7f7f7f5]"
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
            className="w-full p-3.5 mt-1 bg-[#f7f7f7] focus:bg-[#f7f7f7f5]"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="mt-1 text-red-800 text-xl">{error}</p>}{" "}
        <button
          className="w-full p-1 cursor-pointer bg-[#ffde39] rounded-sm hover:bg-[#ffe666]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in...." : "Sign In"}
        </button>
        <p className="text-center text-xs m-4">
          Don't have an account?{" "}
          <Link
            className="font-semibold underline hover:text-gray-600"
            href="/sign-up"
          >
            Sign up
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
