"use client";
import { useState } from "react";

import { Author } from "@/app/types/database";
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { ReadingStatus } from "@/app/generated/prisma";
import useGetUser from "@/app/hooks/useGetUser";

type ShelfModalProps = {
  bookId: string;
  userId: string;
  onClose: () => void;
  onStatusChange?: (status: ReadingStatus | null) => void;
} & (
  | { mode: "add"; title: string; authors: Author[]; cover: string }
  | { mode: "update" }
);

export default function ShelfModal(props: ShelfModalProps) {
  const { bookId, userId, onClose, mode } = props;

  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState("");
  const { user } = useGetUser();

  const getToken = async () => {
    if (!user) return null;
    return await user.getIdToken();
  };

  const handleRemove = async () => {
    setError("");
    setLoading("removing");
    try {
      const token = await getToken();
      if (!token) return;
      const response = await fetch(`/api/user/${userId}/books`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ bookId }),
      });
      if (!response.ok) throw new Error("Failed to remove book");
      props.onStatusChange?.(null);
    } catch (e) {
      setError("Failed to remove book. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  const handleAddToShelf = async (status: ReadingStatus) => {
    if (mode !== "add") return;
    setError("");
    setLoading(status);
    try {
      const token = await getToken();
      if (!token) return;

      const response = await fetch(`/api/user/${userId}/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          bookId,
          title: props.title,
          cover: props.cover,
          authors: props.authors,
          status,
        }),
      });
      if (!response.ok) throw new Error("Failed to add book to shelf");
      props.onStatusChange?.(status);
      onClose();
    } catch (e) {
      setError("Failed to save to shelf. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  const handleEdit = async (newStatus: ReadingStatus) => {
    if (mode !== "update") return;
    setError("");
    setLoading(newStatus);
    try {
      const token = await getToken();
      if (!token) return;

      const response = await fetch(`/api/user/${userId}/books`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ bookId, status: newStatus }),
      });
      if (!response.ok) throw new Error("Failed to update shelf");
      props.onStatusChange?.(newStatus);
      onClose();
    } catch (e) {
      setError("Failed to update shelf. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  if (!user) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-background shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-line-bg px-6 py-4">
          <h3 className="text-2xl font-bold text-foreground">CHOOSE A SHELF</h3>
          <button
            className="rounded-full p-1 text-foreground hover:bg-form-bg hover:cursor-pointer transition-colors"
            onClick={onClose}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-2">
          {[
            { id: ReadingStatus.WANT_TO_READ, label: "Want to read" },
            { id: ReadingStatus.CURRENTLY_READING, label: "Currently reading" },
            { id: ReadingStatus.READ, label: "Read" },
          ].map((shelf) => (
            <button
              key={shelf.id}
              disabled={!!loading}
              onClick={() => {
                if (mode === "add") {
                  handleAddToShelf(shelf.id);
                } else {
                  handleEdit(shelf.id);
                }
              }}
              className="group flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-foreground hover:bg-form-bg hover:cursor-pointer disabled:opacity-50"
            >
              {shelf.label}
              {loading === shelf.id && (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-orange-700 border-t-transparent" />
              )}
            </button>
          ))}
          <div className="my-2 h-px bg-line-bg" />

          <button
            disabled={!!loading}
            onClick={handleRemove}
            className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 transition-all hover:bg-form-bg hover:cursor-pointer disabled:opacity-50"
          >
            <TrashIcon className="h-5 w-5 text-red-400 group-hover:text-red-600" />
            {loading === "removing" ? "Removing..." : "Remove from my shelf"}
          </button>

          {error && (
            <p className="px-4 pb-2 text-xs text-red-500">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
