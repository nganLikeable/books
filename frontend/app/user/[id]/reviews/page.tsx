"use client";
import ReviewCard from "@/app/components/Reviews/ReviewCard";
import useFetchReviews from "@/app/hooks/useFetchReviews";
import { Review } from "@/app/types/database";

export default function Reviews() {
  const { reviews } = useFetchReviews();

  return (
    <div>
      {reviews
        .filter((r) => r.content && r.rating)
        .map((r: Review) => (
          <div key={r.id}>
            <ReviewCard review={r} />
          </div>
        ))}
    </div>
  );
}
