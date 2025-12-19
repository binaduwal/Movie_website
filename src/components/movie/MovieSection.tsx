import type { MovieSectionProps } from '../../types/movie'
import SectionTitle from '../common/SectionTitle'
import MovieCard from './MovieCard';

const MovieSection = ({title,movies,movieType}:MovieSectionProps) => {
  return (
    <div className='max-w-7xl mx-auto px-4 mb-12'>
      <SectionTitle>{title}</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} movieType={movieType}/>
          ))}
        </div>
    </div>
  )
}

export default MovieSection
