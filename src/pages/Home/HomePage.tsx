import { useState } from "react";
import MovieBanner from "../../components/movie/movieBanner"
import type { Movie } from "../../types/movie";
import { api } from "../../api/axiosClient";

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useState(() => {
    const loadMovies = async () => {
      const response =await api.get(`/3/movie/now_playing`);
      setMovies(response.data.results);
    }
    loadMovies();
  },[])
  console.log(movies,"results")
return (
    <>
      <MovieBanner movie={movies[2]}/>
    </>
  )
}

export default HomePage