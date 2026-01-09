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
    <nav className="w-full sticky top-4 z-50 px-4">
      <div className="max-w-6xl mx-auto bg-linear-to-r from-purple-900/40 via-indigo-900/40 to-purple-800/40 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 flex items-center justify-between shadow-2xl">
        <div className="w-32 shrink-0">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter cursor-pointer bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-orange-500 group-hover:to-amber-600 "
          >
            Bookie
            {/* <img src="/logo_yel.png" alt="NganBooks logo" className="w-40 " /> */}
          </Link>
        </div>
        <div className="flex-1 flex justify-center px-4">
          <div className="">
            <SearchBar />
          </div>{" "}
        </div>

        <div className="flex items-center justify-end gap-6 text-sm flex-shrink-0 min-w-75">
          <Link className=" hover:font-bold whitespace-nowrap" href="/about">
            About
          </Link>
          <Link className=" hover:font-bold whitespace-nowrap" href="/browse">
            Browse
          </Link>
          <Link className="  hover:font-bold whitespace-nowrap" href="/library">
            Your Library
          </Link>
          {user ? (
            <LogOutButton />
          ) : (
            <>
              <Link
                className=" hover:font-bold whitespace-nowrap"
                href="/sign-in"
              >
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
