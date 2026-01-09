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
    <nav className="w-full sticky top-0 bg-background text-foreground border-b border-gray-200 dark:border-gray-800 shadow-sm z-50 p-1">
      <div className="flex flex-row justify-around items-center  ">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter cursor-pointer bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-orange-500 group-hover:to-amber-600"
        >
          Bookie
          {/* <img src="/logo_yel.png" alt="NganBooks logo" className="w-40 " /> */}
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
