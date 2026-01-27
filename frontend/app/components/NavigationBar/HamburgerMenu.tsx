"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import LogOutButton from "../LogOutButton/LogOutButton";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  links: { href: string; label: string }[];
}

export default function HamburgerMenu({
  isOpen,
  onClose,
  user,
  links,
}: MenuProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0  backdrop-blur-sm z-50 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-70 bg-form-bg border-l border-white/10 z-60 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <button
            onClick={onClose}
            className="self-end p-2 text-foreground hover:cursor-pointer"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>

          <nav className="flex flex-col gap-6 mt-10">
            {links.map((link) => (
              <Link
                key={link.href}
                onClick={onClose}
                href={link.href}
                className="text-xl font-medium hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Theme</span>
              <ThemeToggle />
            </div>

            {user ? (
              <div onClick={onClose}>
                <LogOutButton />
              </div>
            ) : (
              <Link
                onClick={onClose}
                href="/sign-in"
                className="w-full text-center py-3 bg-orange-600 rounded-xl font-bold text-white shadow-lg active:scale-95 transition-transform"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
