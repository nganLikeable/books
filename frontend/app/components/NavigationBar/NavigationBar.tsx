"use client";
import { auth } from "@/app/firebase/firebase-config";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOutButton from "../LogOutButton/LogOutButton";

export default function NavBar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav className="w-full sticky top-0 shadow-2xs bg-white text-black m-2">
      <div className="flex flex-row justify-around items-center  ">
        <Link href="/" className="cursor-pointer">
          <img src="/logo_yel.png" alt="NganBooks logo" className="w-40 " />
        </Link>

        <div className="flex flex-row justify-around gap-10 items-center ">
          <Link className="hover:text-blue-950  hover:font-bold" href="/about">
            About
          </Link>
          <Link className="hover:text-blue-950  hover:font-bold" href="/browse">
            Browse
          </Link>
          {user ? (
            <LogOutButton />
          ) : (
            <>
              <Link
                className="hover:text-blue-950  hover:font-bold"
                href="/sign-up"
              >
                Sign Up
              </Link>
              <Link
                className="hover:text-blue-950  hover:font-bold"
                href="/sign-in"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
