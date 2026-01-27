"use client";
import { navLinks } from "@/app/config/navLinks";
import { auth } from "@/app/firebase/firebase-config";
import useGetUser from "@/app/hooks/useGetUser";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOutButton from "../LogOutButton/LogOutButton";
import HamburgerMenu from "../Menu/HamburgerMenu";
import SearchBar from "../SearchBar/SearchBar";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function NavBar() {
  const [user, loading, error] = useAuthState(auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { userId } = useGetUser();

  const links = navLinks(userId);

  return (
    <>
      <nav className="w-full fixed top-4 z-50 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto bg-linear-to-r from-purple-900/40 via-indigo-900/40 to-purple-800/40 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 flex items-center justify-between shadow-2xl">
          {/* Left col */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-black tracking-tighter cursor-pointer bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-orange-500 group-hover:to-amber-600 "
            >
              Bookie
            </Link>
          </div>

          {/* center col */}
          <div className=" flex-1 flex items-center justify-center px-2 sm:px-4 min-w-0">
            <div className="w-full max-w-sm min-w-0">
              <SearchBar />
            </div>{" "}
          </div>

          <div className="hidden lg:flex items-center justify-end gap-6 text-sm shrink-0">
            {links.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:font-bold whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l border-white/10 pl-4 min-w-30 justify-end">
              {loading ? (
                <div className="w-16 h-4 bg-white/10 animate-pulse rounded-full" />
              ) : user ? (
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
              <ThemeToggle />{" "}
            </div>
          </div>

          <div className="lg:hidden flex items-center shrink-0">
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              size={20}
              color="white"
              rounded
            />
          </div>
        </div>
      </nav>
      <HamburgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        user={user}
        links={links}
      />
    </>
  );
}
