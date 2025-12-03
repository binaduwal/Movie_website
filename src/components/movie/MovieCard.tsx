import { Link } from 'react-router-dom'
import type { movieProps } from '../../types/movie'
import { Card, CardContent } from '../ui/card'

const MovieCard = ({movie,movieType}:movieProps) => {
      const poster = movie?.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

    

  return (
    <div>
      <Link to={`/${movieType}/${movie?.id}`}>
      <Card className='p-0 border-none'>
        <CardContent className='p-0'>
          <img src={poster} alt={movie?.title} className="w-full  object-cover rounded-lg" />

        </CardContent>
      </Card>
      </Link>
    </div>
  )
}

export default MovieCard
