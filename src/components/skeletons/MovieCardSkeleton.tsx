import { Skeleton } from "../ui/skeleton";

const MovieCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <Skeleton className="w-full h-64 rounded-lg" />
    </div>
  );
};

export default MovieCardSkeleton;
