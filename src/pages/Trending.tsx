import MovieSection from "../components/movie/MovieSection"
import { useMovies } from "../hooks/useMovies"

const Trending = () => {
  const {movies:trending}=useMovies('/trending/all/day',21)
  return (
    <div>
        <MovieSection title="Trending Now" movies={trending} />
    </div>
  )
}

export default Trending
