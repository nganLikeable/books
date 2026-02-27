import { Review } from "@/app/types/database";

export default function ReviewCard({ review }: { review: Review }) {
  const book = review?.book;

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book?.cover || ""}></img>
      <p>{review.content}</p>
    </div>
  );
}
