import { Review } from "@/app/types/database";
import Link from "next/link";
import Rating from "../StarRating/Rating";

export default function ReviewCard({ review }: { review: Review }) {
  const book = review?.book;

  return (
    <div className="flex gap-4 p-4 bg-background rounded-2xl border border-line-bg shadow-sm hover:shadow-md transition-all">
      <div className="w-16 h-24 flex-shrink:0 bg-gray-50 rounded-lg overflow-hidden border border-line-bg shadow-inner">
        <img src={book?.cover || "no_cover.jpg"}></img>
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <h1 className="font-bold text-sm text-foreground truncate mb-1 leading-tight">
          <Link href={`/book/${review.bookId}`}> {book.title}</Link>
        </h1>
        <div className="mb-2">
          <Rating no={review.rating} />
        </div>
        <span className="text-[10px] text-gray-400 font-medium mb-3">
          Last Updated: {new Date(review.updatedAt).toLocaleDateString()}
        </span>
        {review.content && (
          <p className="text-xs text-foreground line-clamp-2 italic leading-relaxed">
            {review.content}
          </p>
        )}{" "}
      </div>
    </div>
  );
}
