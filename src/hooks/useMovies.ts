import { useEffect, useState } from "react"
import type { Movie } from "../types/movie";
import { api } from "../api/axiosClient";

export function useMovies(endpoint:string, limit:number) {
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
        const loadMovies = async () => {
            try {
                const response=await api.get(endpoint);
                setMovies(response.data.results.slice(0, limit));
            } catch (error) {
                console.error("Failed to fetch movies", error);
            }
        }
        loadMovies();
    }, [endpoint, limit]);
return{
    movies
}
}