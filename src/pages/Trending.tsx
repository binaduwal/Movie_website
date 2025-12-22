import { useEffect, useRef } from "react";
import MovieSection from "../components/movie/MovieSection";
import { useMovies } from "../hooks/useMovies";

const Trending = () => {
  const {
    movies,
    setPage,
    totalPages,
    isLoading,
  } = useMovies("/movie/popular", {
    infinite: true,
  });

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!totalPages) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !isLoading
        ) {
          setPage((prev) =>
            prev < totalPages ? prev + 1 : prev
          );
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [isLoading, totalPages, setPage]);

  return (
    <div>
      <MovieSection title="Trending Now" movies={movies} />
      {isLoading && <p>Loading...</p>}
      <div ref={loaderRef} />
    </div>
  );
};

export default Trending;
