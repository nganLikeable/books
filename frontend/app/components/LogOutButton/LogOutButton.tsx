"use client";
import { auth } from "@/app/firebase/firebase-config";
import { signOut } from "firebase/auth";
export default function LogOutButton() {
  const handleSignOut = async () => {
    try {
      const res = await signOut(auth);
      console.log("Signed out successfully");
    } catch (e) {
      console.error("Error logging out", e);
    }
  };

  return (
    <button
      className="py-1 px-2 rounded-xl cursor-pointer border border-[#ccc] bg-white  hover:bg-[#f5f5f5] "
      onClick={handleSignOut}
    >
      Log Out
    </button>
  );
}
