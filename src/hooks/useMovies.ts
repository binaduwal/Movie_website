import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import { api } from "../api/axiosClient";

export function useMovies(
  endpoint: string,
  options?: {
    limit?: number;
    infinite?: boolean;
  }
) {
  const { limit, infinite = false } = options || {};

  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await api.get(endpoint, {
          params: {
            page,
          },
        });
        const results: Movie[] = response.data.results || [];

        setTotalPages(response.data.total_pages);

        setMovies((prev) => {
          if (infinite && page > 1) {
            return [...prev, ...results];
          }
          if (!infinite && limit) {
            return results.slice(0, limit);
          }

          return results;
        });
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, [endpoint, page, limit, infinite]);

  return {
    movies,
    isLoading,
    isError,
    setPage,
    totalPages,
  };
}
