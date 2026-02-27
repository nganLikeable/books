"use client";

import useGetUser from "@/app/hooks/useGetUser";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import StarRating from "../StarRating";

interface ReviewFormProps {
  bookId: string;
  userId: string;
  title: string;
  cover: string;
  onClose: () => void;
}

export default function ReviewForm({
  bookId,
  userId,
  title,
  cover,
  onClose,
}: ReviewFormProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSaving, setSaving] = useState(false);

  const { user } = useGetUser();

  const getToken = async () => {
    if (!user) return null;
    return await user.getIdToken();
  };

  useEffect(() => {
    async function fetchExistingReview() {
      try {
        const res = await fetch(
          `/api/user/${userId}/books/book/${bookId}/review`,
        );
        if (res.ok) {
          const data = await res.json();
          if (data) {
            setRating(data.rating);
            setContent(data.content || "");
          }
        }
      } catch (e) {
        console.error("Error loading review:", e);
      } finally {
        setLoading(false);
      }
    }

    fetchExistingReview();
  }, [userId, bookId]);

  const handleSave = async () => {
    if (rating === null) return;

    setSaving(true);
    try {
      const token = await getToken();
      if (!token) return;

      await fetch(`/api/user/${userId}/books/book/${bookId}/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, content }),
      });

      console.log("Review saved");
    } catch (e) {
      console.error("Save failed", e);
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <div className="p-6 text-center animate-pulse text-sm">
        Loading review...
      </div>
    );

  return (
    <div className="fixed inset-0 z-100 flex items-end md:items-center p-4 justify-center md:p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[10px] animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-sm  rounded-2xl bg-background shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden p-2">
        <div className="flex items-center justify-between px-6 py-1 border-b border-line-bg">
          <h1 className="text-lg font-bold uppercase">Review</h1>
          <button
            className="rounded-full p-1 text-foreground hover:bg-gray-100 hover:text-gray-600 hover:cursor-pointer transition-colors"
            onClick={onClose}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[80vh]">
          <div className="flex flex-col gap-1 items-center mb-8 bg-linear-to-r from-purple-900/40 via-indigo-900/40 to-purple-800/40 backdrop-blur-md p-2 rounded-2xl transition duration-100 ease-in-out hover:scale-105">
            {cover && (
              <img
                src={cover}
                alt="Book cover"
                className="w-12 h-18 object-fill rounded-lg shadow-md"
              />
            )}
            <h2 className="text-sm font-semibold">{title}</h2>
          </div>
          <div className="mb-6 flex gap-4">
            <label className="block text-sm font-semibold mb-2">
              Your Rating
            </label>
            <StarRating
              currentRating={rating}
              onRatingChange={(val) => setRating(val)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Your Review
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="w-full rounded-lg border px-3 py-2 resize-none"
              placeholder="Write your thoughts about this book..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={handleSave}
              disabled={isSaving || rating === null}
              className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 disabled:opacity-50 transition hover:cursor-pointer"
            >
              {isSaving ? "Saving..." : "Save Review"}
            </button>
            <button
              onClick={onClose}
              className="w-full text-gray-400 py-2 text-xs font-semibold hover:text-gray-600 transition-colors hover:cursor-pointer"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
