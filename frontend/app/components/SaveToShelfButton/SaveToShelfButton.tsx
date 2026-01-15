"use client";
import { BookmarkIcon } from "@heroicons/react/24/outline";

interface SaveToShelfButtonProps {
  onClick: () => void;
}

export default function SaveToShelfButton({ onClick }: SaveToShelfButtonProps) {
  return (
    <button
      className="group flex items-center gap-2 rounded-full bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-orange-500 hover:shadow-lg active:scale-95 active:shadow-inner hover:cursor-pointer"
      onClick={onClick}
    >
      <BookmarkIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
      <span>Save to shelf</span>
    </button>
  );
}
