"use client";
import { auth } from "@/app/firebase/firebase-config";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOutButton from "../LogOutButton/LogOutButton";
import SearchBar from "../SearchBar/SearchBar";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
export default function NavBar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav className="w-full sticky top-0 shadow-2xs  text-sm">
      <div className="flex flex-row justify-around items-center  ">
        <Link href="/" className="cursor-pointer">
          <img src="/logo_yel.png" alt="NganBooks logo" className="w-40 " />
        </Link>

        <div className="flex flex-row justify-around gap-6 items-center ">
          <SearchBar />
          <Link className=" hover:font-bold" href="/about">
            About
          </Link>
          <Link className=" hover:font-bold" href="/browse">
            Browse
          </Link>
          <Link className="  hover:font-bold" href="/library">
            Your Library
          </Link>
          {user ? (
            <LogOutButton />
          ) : (
            <>
              <Link className="  hover:font-bold" href="/sign-up">
                Sign Up
              </Link>
              <Link className=" hover:font-bold" href="/sign-in">
                Sign In
              </Link>
            </>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
