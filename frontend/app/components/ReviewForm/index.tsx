"use client";

import useGetUser from "@/app/hooks/useGetUser";
import { useEffect, useState } from "react";
import StarRating from "../StarRating";

interface ReviewFormProps {
  bookId: string;
  userId: string;
  title: string;
  cover: string;
}

export default function ReviewForm({
  bookId,
  userId,
  title,
  cover,
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
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-background rounded-2xl shadow-lg border border-line-bg">
      <h1 className="text-3xl font-bold mb-6">Review</h1>

      <div className="flex gap-6 items-start mb-8">
        {cover && (
          <img
            src={cover}
            alt="Book cover"
            className="w-28 h-40 object-cover rounded-lg shadow-md"
          />
        )}

        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Your Rating</label>
        <StarRating
          currentRating={rating}
          onRatingChange={(val) => setRating(val)}
        />{" "}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Your Review</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full rounded-lg border px-3 py-2 resize-none"
          placeholder="Write your thoughts about this book..."
        />
      </div>

      <button
        onClick={handleSave}
        disabled={isSaving || rating === null}
        className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 disabled:opacity-50 transition"
      >
        {isSaving ? "Saving..." : "Save Review"}
      </button>
    </div>
  );
}
