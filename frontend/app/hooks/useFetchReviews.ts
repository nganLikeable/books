import { useEffect, useState } from "react";
import { Review } from "../types/database";
import useGetUser from "./useGetUser";

export default function useFetchReviews() {
  const [loading, setLoading] = useState(false);
  const { userId } = useGetUser();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (!userId || userId === null) return;

    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/user/${userId}/books/reviews`);
        if (!res.ok) return;

        const data = await res.json();
        setReviews(data);
        console.log(data);
      } catch (e) {
        console.log("Error fetching user's reviews");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [userId]);
  return { reviews, loading };
}
