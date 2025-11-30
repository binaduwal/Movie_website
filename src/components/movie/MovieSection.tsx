import type { MovieSectionProps } from '../../types/movie'
import SectionTitle from '../common/SectionTitle'
import { useMovies } from '../../hooks/useMovies';
import MovieCard from './MovieCard';

const MovieSection = ({title,endpoint,limit=10}:MovieSectionProps) => {
    const {movies}=useMovies(endpoint,limit);
  return (
    <div className='max-w-7xl mx-auto px-4 mb-12'>
      <SectionTitle>{title}</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
    </div>
  )
}

export default MovieSection
