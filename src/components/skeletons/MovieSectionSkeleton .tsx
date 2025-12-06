import { Skeleton } from "../ui/skeleton";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieSectionSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-12">
      <Skeleton className="mb-6 h-8 w-40 mt-8 animate-pulse" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default MovieSectionSkeleton;
