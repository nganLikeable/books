import { FaStar } from "react-icons/fa";

export default function Rating({ no }: { no: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <FaStar
            key={index}
            color={ratingValue <= no ? "#f7e35c" : "#e4e5e9"}
            className="transition-colors duration-150"
          />
        );
      })}
    </div>
  );
}
