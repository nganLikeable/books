"use client";
import ReviewCard from "@/app/components/Reviews/ReviewCard";
import Spinner from "@/app/components/Spinner/Spinner";
import useFetchReviews from "@/app/hooks/useFetchReviews";
import { Review } from "@/app/types/database";

export default function Reviews() {
  const { reviews, loading } = useFetchReviews();
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto p- md:p-10">
      {reviews
        .filter((r) => r.content && r.rating)
        .map((r: Review) => (
          <div key={r.id} className="grid grid-cols-1">
            <ReviewCard review={r} />
          </div>
        ))}
    </div>
  );
}
