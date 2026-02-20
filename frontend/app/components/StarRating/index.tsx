"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  currentRating: number | null;
  onRatingChange: (val: number) => void;
}

export default function StarRating({
  currentRating,
  onRatingChange,
}: StarRatingProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <label
            key={index}
            className="cursor-pointer"
            onMouseOver={() => setHover(ratingValue)}
            onMouseOut={() => setHover(null)}
          >
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="hidden"
              onClick={() => onRatingChange(ratingValue)}
            ></input>
            <FaStar
              color={
                ratingValue <= (hover || currentRating || 0)
                  ? "#f7e35c"
                  : "#e4e5e9"
              } // comparing numbers, not nulls
              className="transition-colors duration-150"
            />
          </label>
        );
      })}
    </div>
  );
}
