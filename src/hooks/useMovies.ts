import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import { api } from "../api/axiosClient";

export function useMovies(endpoint: string, limit?: number) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page,setPage]=useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`${endpoint}?page=${page}`);
        setMovies(response.data.results?.slice(0, limit));
      } catch (error) {
        console.error("Failed to fetch movies", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadMovies();
  }, [endpoint, page, limit]);
  return {
    movies,
    isLoading,
    isError,
    setPage
  };
}
