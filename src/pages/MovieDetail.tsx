import { useParams } from "react-router-dom"
import { useMovieDetail } from "../hooks/useMovieDetail"
import { Card, CardContent } from "../components/ui/card"

const MovieDetail = () => {
  const {id}=useParams()
  const movieId=Number(id)
  console.log(id)
  const type=location.pathname.startsWith("/tv")?"tv":"movie"

  const {data:movie,isError}=useMovieDetail(movieId,type)
  console.log(movie,"movie detail")
        const posterpath = movie?.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";


  if (isError) {
    return (
      <div className="text-red-500 font-semibold">
        Failed to load movie details.<br />
      </div>
    );
  }

  return (
    <div>
      <Card>
        <CardContent>
          <img src={posterpath} alt={movie?.title} className="rounded-xl w-full h-auto object-cover" />
        </CardContent>
      </Card>
    </div>
  )
}

export default MovieDetail