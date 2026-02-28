import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BookCardSkeleton = () => {
  return (
    <div className="group flex gap-2 rounded-xl border border-line-bg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="w-24 md:w-32 shrink-0">
        <div className="relative aspect-2/3 overflow-hidden rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300">
          <Skeleton
            height="100%"
            containerClassName="block h-full line-height-1"
            borderRadius="0.5rem"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 py-1">
        <div className="flex flex-col gap-1">
          <Skeleton height={25} />
          <Skeleton count={2} height={50} />
        </div>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
