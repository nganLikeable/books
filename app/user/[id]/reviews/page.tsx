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
  const filtered = reviews.filter((r) => r.content && r.rating);

  return (
    <div className="max-w-6xl mx-auto px-4 md:p-10">
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-3 text-center">
          <p className="text-lg font-semibold text-foreground">
            No reviews yet
          </p>
          <p className="text-sm text-gray-400">
            Books you've marked as Read can be reviewed from the book page
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filtered.map((r: Review) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      )}
    </div>
  );
}
