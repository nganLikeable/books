"use client";
import { auth } from "@/app/firebase/firebase-config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
export default function LogOutButton() {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      const res = await signOut(auth);
      console.log("Signed out successfully");
      router.push("/");
    } catch (e) {
      console.error("Error logging out", e);
    }
  };

  return (
    <button
      className="py-1 px-2 rounded-xl cursor-pointer border border-[#ccc]  "
      onClick={handleSignOut}
    >
      Log Out
    </button>
  );
}
